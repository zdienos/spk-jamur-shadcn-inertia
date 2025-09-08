'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Loader2, Save } from 'lucide-react'
import { z } from 'zod'

import { router } from '@inertiajs/react'

import { Button } from '@/components/ui/button'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from '@/components/ui/dialog'
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { toast } from '@/hooks/use-toast'

import { classificationType } from '../data/schema'

const formSchema = z
    .object({
        name: z.string().min(1, { message: 'Nama kriteria wajib.' }),
        description: z.string().nullable().optional(),
        isEdit: z.boolean(),
    })
type ClassificationForm = z.infer<typeof formSchema>

interface Props {
    currentRow?: classificationType
    open: boolean
    onOpenChange: (open: boolean) => void
}

export function ClassificationDialogAction({ currentRow, open, onOpenChange }: Props) {
    const isEdit = !!currentRow
    const form = useForm<ClassificationForm>({
        resolver: zodResolver(formSchema),
        defaultValues: isEdit
            ? {
                ...currentRow,
                isEdit,
            }
            : {
                name: '',
                description: '',
                isEdit,
            },
    })

    const [isProcessing, setIsProcessing] = useState(false)

    const onSubmit = (values: ClassificationForm) => {
        if (isEdit) {
            router.put(route('classification.update', currentRow.id), values, {
                onStart: () => setIsProcessing(true),
                onSuccess: () => {
                    setIsProcessing(false);
                    onOpenChange(false);
                    toast({ title: 'Sukses!', description: 'Klasifikasi berhasil diperbarui.' });
                },
                onFinish: () => form.reset(),
                // onError: (errors) => { /* Handle error jika perlu */ }
            });
        } else {
            router.post(route('classification.store'), values, {
                onStart: () => setIsProcessing(true),
                onSuccess: () => {
                    setIsProcessing(false);
                    onOpenChange(false); // Tutup dialog setelah berhasil
                    toast({ title: 'Sukses!', description: 'Klasifikasi baru berhasil ditambahkan.' });
                },
                onFinish: () => form.reset(),
                // onError: (errors) => { /* Handle error jika perlu */ }
            });
        }
    };

    return (
        <Dialog
            open={open}
            onOpenChange={(state) => {
                // form.reset()
                if (!state) {
                    form.reset()
                }
                onOpenChange(state)
            }}
        >
            <DialogContent className='sm:max-w-lg'>
                <DialogHeader className='text-left border-b border-slate-300 pb-2'>
                    <DialogTitle>{isEdit ? 'Edit Klasifikasi' : 'Tambah Klasifikasi'}</DialogTitle>
                    <DialogDescription>
                        {isEdit ? 'Mengupdate Klasifikasi. ' : 'Menambah Klasifikasi. '}
                        Klik simpan jika sudah selesai.
                    </DialogDescription>
                </DialogHeader>
                {/* <ScrollArea className='h-[12rem] w-full pr-4 -mr-4 py-1 mt-2'> */}
                <Form {...form}>
                    <form
                        id='classification-form'
                        onSubmit={form.handleSubmit(onSubmit)}
                        className='space-y-4 py-2'
                    >
                        <FormField
                            control={form.control}
                            name='name'
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Nama Klasifikasi</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder='Nama Klasifikasi...'
                                            className='col-span-4'
                                            autoComplete='off'
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage className='col-span-4 col-start-3' />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="description" // Nama field baru untuk deskripsi
                            render={({ field }) => (
                                <FormItem >
                                    <FormLabel className='col-span-2 text-left'>
                                        Deskripsi
                                    </FormLabel>
                                    <FormControl>
                                        <Textarea
                                            placeholder='Deskripsi singkat...'
                                            className='col-span-4 resize-none'
                                            rows={2}
                                            {...field}
                                            value={field.value ?? ''}
                                        />
                                    </FormControl>
                                    <FormMessage className='col-span-4 col-start-3' />
                                </FormItem>
                            )}
                        />
                    </form>
                </Form>
                {/* </ScrollArea> */}
                <DialogFooter className='text-left pt-6'>
                    <Button type='submit' form='classification-form' disabled={isProcessing}>
                        {isProcessing ? (
                            <>
                                <Loader2 className="h-4 w-4 animate-spin" />
                                Simpan
                            </>
                        ) : (
                            <>
                                <Save className="h-4 w-4" />
                                Simpan
                            </>
                        )}
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
