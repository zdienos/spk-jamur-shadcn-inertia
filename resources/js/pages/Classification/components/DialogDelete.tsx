'use client'

import { useState } from 'react'
import { IconAlertTriangle } from '@tabler/icons-react'
import { Loader2, Trash2 } from 'lucide-react'

import { router } from '@inertiajs/react'

import { ConfirmDialog } from '@/components/confirm-dialog'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { toast } from '@/hooks/use-toast'

import { classificationType } from '../data/schema'

interface Props {
    open: boolean
    onOpenChange: (open: boolean) => void
    currentRow: classificationType
}

export function ClassificationDialogDelete({ open, onOpenChange, currentRow }: Props) {
    // const [value, setValue] = useState('')
    const [isProcessing, setIsProcessing] = useState(false)


    const handleDelete = () => {
        router.delete(route('classification.destroy', currentRow.id), {
            onStart: () => setIsProcessing(true),
            onFinish: () => setIsProcessing(false),
            // ambil dari message
            onSuccess: (page) => {
                onOpenChange(false)
                toast({
                    title: 'Sukses!',
                    description: page.props.flash.message,
                })
            },
            // error statis
            // onError: () => { toast({ variant: 'destructive', title: 'Error!', description: 'Gagal menghapus kriteria.' }) }
            onError: (errors) => {
                const firstError = Object.values(errors)[0];
                toast({
                    variant: 'destructive',
                    title: 'Error!',
                    description: firstError || 'Gagal menghapus kriteria.'
                })
            }
        })
    }

    return (
        <ConfirmDialog
            open={open}
            onOpenChange={onOpenChange}
            handleConfirm={handleDelete}
            disabled={isProcessing}
            // disabled={value.trim() !== currentRow.nama}
            title={
                <span className='text-destructive'>
                    <IconAlertTriangle
                        className='mr-1 inline-block stroke-destructive'
                        size={18}
                    />{' '}
                    Menghapus Klasifikasi
                </span>
            }
            desc={
                <div className='space-y-4'>
                    <p className='mb-2'>
                        Anda yakin mau mengapus klasifikasi{' '}
                        <span className='font-bold'>{currentRow.name}</span>?
                        <br />
                    </p>

                    <Alert variant='destructive'>
                        <AlertTitle>Peringatan!</AlertTitle>
                        <AlertDescription>
                            Data yang sudah dihapus tidak dapat dikembalikan.
                        </AlertDescription>
                    </Alert>
                </div>
            }
            // confirmText='Delete'
            confirmText={
                isProcessing ? (
                    <>
                        <Loader2 className=' h-4 w-4 animate-spin' />
                        Hapus
                    </>
                ) : (
                    <>
                        <Trash2 className=' h-4 w-4' />
                        Hapus
                    </>
                )
            }
            cancelBtnText='Tutup'
            destructive
        />
    )
}
