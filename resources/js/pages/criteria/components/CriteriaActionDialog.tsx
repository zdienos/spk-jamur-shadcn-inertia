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
import { ScrollArea } from '@/components/ui/scroll-area'
import { toast } from '@/hooks/use-toast'

import { Criteria } from '../data/schema'

const formSchema = z
    .object({
        nama: z.string().min(1, { message: 'Nama kriteria wajib.' }),
        isEdit: z.boolean(),
    })
type CriteriaForm = z.infer<typeof formSchema>

interface Props {
    currentRow?: Criteria
    open: boolean
    onOpenChange: (open: boolean) => void
}

export function CriteriasActionDialog({ currentRow, open, onOpenChange }: Props) {
    const isEdit = !!currentRow
    const form = useForm<CriteriaForm>({
        resolver: zodResolver(formSchema),
        defaultValues: isEdit
            ? {
                ...currentRow,
                isEdit,
            }
            : {
                nama: '',
                isEdit,
            },
    })

    // const onSubmit = (values: CriteriaForm) => {
    //     alert('heree');
    //     form.reset()
    //     toast({
    //         title: 'You submitted the following values:',
    //         description: (
    //             <pre className='mt-2 w-[340px] rounded-md bg-slate-950 p-4'>
    //                 <code className='text-white'>{JSON.stringify(values, null, 2)}</code>
    //             </pre>
    //         ),
    //     })
    //     onOpenChange(false)
    // }

    const [isProcessing, setIsProcessing] = useState(false)


    const onSubmit = (values: CriteriaForm) => {
        if (isEdit) {
            router.put(route('criteria.update', currentRow.id), values, {
                onStart: () => setIsProcessing(true),
                onSuccess: () => {
                    setIsProcessing(false);
                    onOpenChange(false);
                    toast({ title: 'Sukses!', description: 'Kriteria berhasil diperbarui.' });
                },
                onFinish: () => form.reset(),
                // onError: (errors) => { /* Handle error jika perlu */ }
            });
        } else {
            router.post(route('criteria.store'), values, {
                onStart: () => setIsProcessing(true),
                onSuccess: () => {
                    setIsProcessing(false);
                    onOpenChange(false); // Tutup dialog setelah berhasil
                    toast({ title: 'Sukses!', description: 'Kriteria baru berhasil ditambahkan.' });
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
                    <DialogTitle>{isEdit ? 'Edit Kriteria' : 'Tambah Kriteria'}</DialogTitle>
                    <DialogDescription>
                        {isEdit ? 'Mengupdate Kriteria. ' : 'Menambah Kriteria. '}
                        Click save when you&apos;re done.
                    </DialogDescription>
                </DialogHeader>
                <ScrollArea className='h-[4rem] w-full pr-4 -mr-4 py-1 mt-2'>
                    <Form {...form}>
                        <form
                            id='criteria-form'
                            onSubmit={form.handleSubmit(onSubmit)}
                            className='space-y-4 p-0.5'
                        >
                            <FormField
                                control={form.control}
                                name='nama'
                                render={({ field }) => (
                                    <FormItem className='grid grid-cols-6 items-center gap-x-4 gap-y-1 space-y-0'>
                                        <FormLabel className='col-span-2 text-left'>
                                            Nama Kriteria
                                        </FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder='Nama Kriteria...'
                                                className='col-span-4'
                                                autoComplete='off'
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage className='col-span-4 col-start-3' />
                                    </FormItem>
                                )}
                            />
                        </form>
                    </Form>
                </ScrollArea>
                <DialogFooter className='text-left pt-6'>
                    <Button type='submit' form='criteria-form' disabled={isProcessing}>
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
