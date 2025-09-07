'use client'

import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Loader2, Save } from 'lucide-react'
import { z } from 'zod'

import { router } from '@inertiajs/react'

import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { toast } from '@/hooks/use-toast'

import { Criteria } from '../../Criteria/data/schema'
import { SubCriteria } from '../data/schema'

// Skema Zod yang sudah benar untuk validasi
const formSchema = z.object({
    name: z.string().min(1, { message: 'Nama sub kriteria wajib diisi.' }),
    value: z.coerce.number().min(0, { message: 'Nilai harus angka.' }),
    criteria_id: z.string().min(1, { message: 'Kriteria induk wajib dipilih.' }),
});

type SubCriteriaForm = z.infer<typeof formSchema>

interface Props {
    criterias: Criteria[];
    currentRow?: SubCriteria;
    open: boolean;
    onOpenChange: (open: boolean) => void;
}

export function SubCriteriaDialogAction({ criterias, currentRow, open, onOpenChange }: Props) {
    const isEdit = !!currentRow
    const form = useForm<SubCriteriaForm>({
        resolver: zodResolver(formSchema),
        // Sediakan nilai default yang lengkap
        defaultValues: {
            name: '',
            value: 0,
            criteria_id: '',
        },
    })

    const [isProcessing, setIsProcessing] = useState(false)

    // Gunakan useEffect untuk mengisi form saat mode Edit
    useEffect(() => {
        if (isEdit && currentRow) {
            form.reset({
                name: currentRow.name,
                value: currentRow.value,
                criteria_id: String(currentRow.criteria_id),
            })
        } else {
            form.reset({
                name: '',
                value: 0,
                criteria_id: '',
            })
        }
    }, [currentRow, isEdit, form])

    // const onSubmit = (values: SubCriteriaForm) => {
    //     if (isEdit) {
    //         const { criteria_id, ...editValues } = values;
    //         router.put(route('subcriteria.update', currentRow!.id), editValues, {
    //             onStart: () => setIsProcessing(true),
    //             onFinish: () => setIsProcessing(false),
    //             onSuccess: () => {
    //                 onOpenChange(false);
    //                 toast({ title: 'Sukses!', description: 'Sub Kriteria berhasil diperbarui.' });
    //             },
    //         });
    //     } else {
    //         router.post(route('subcriteria.store'), values, {
    //             onStart: () => setIsProcessing(true),
    //             onFinish: () => setIsProcessing(false),
    //             onSuccess: () => {
    //                 onOpenChange(false);
    //                 toast({ title: 'Sukses!', description: 'Sub Kriteria baru berhasil ditambahkan.' });
    //             },
    //         });
    //     }
    // };
    const onSubmit = (values: SubCriteriaForm) => {
        if (isEdit) {
            router.put(route('subcriteria.update', currentRow!.id), values, {
                onStart: () => setIsProcessing(true),
                onFinish: () => setIsProcessing(false),
                onSuccess: () => { onOpenChange(false); toast({ title: 'Sukses!', description: 'Sub Kriteria berhasil diperbarui.' }); },
            });
        } else {
            router.post(route('subcriteria.store'), values, {
                onStart: () => setIsProcessing(true),
                onFinish: () => setIsProcessing(false),
                onSuccess: () => { onOpenChange(false); toast({ title: 'Sukses!', description: 'Sub Kriteria baru berhasil ditambahkan.' }); },
            });
        }
    };

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className='sm:max-w-lg'>
                <DialogHeader className='text-left border-b border-slate-300 pb-2'>
                    <DialogTitle>{isEdit ? 'Edit Sub Kriteria' : 'Tambah Sub Kriteria'}</DialogTitle>
                    <DialogDescription>Lengkapi data di bawah ini. Klik simpan jika sudah selesai.</DialogDescription>
                </DialogHeader>

                <Form {...form}>
                    <form id='subcriteria-form' onSubmit={form.handleSubmit(onSubmit)} className='space-y-4 py-2'>
                        {/* Dropdown Kriteria Induk (hanya tampil saat mode Tambah) */}

                        <FormField
                            control={form.control}
                            name="criteria_id"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Kriteria Induk *</FormLabel>
                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                        <FormControl>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Pilih kriteria..." />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            {criterias.map(c => (
                                                <SelectItem key={c.id} value={String(c.id)}>
                                                    {c.name}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        {/* Field Nama */}
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Nama Sub Kriteria *</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Masukkan nama..." autoComplete="off" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* Field Nilai */}
                        <FormField
                            control={form.control}
                            name="value"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Nilai *</FormLabel>
                                    <FormControl>
                                        <Input type="number" placeholder="Masukkan nilai..." {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </form>
                </Form>

                <DialogFooter className='text-left pt-6'>
                    <Button type='submit' form='subcriteria-form' disabled={isProcessing}>
                        {isProcessing ? (
                            <><Loader2 className="h-4 w-4 animate-spin" /> Simpan</>
                        ) : (
                            <><Save className="h-4 w-4" /> Simpan</>
                        )}
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
