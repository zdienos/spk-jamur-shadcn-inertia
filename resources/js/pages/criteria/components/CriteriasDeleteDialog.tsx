'use client'

import { useState } from 'react'
import { IconAlertTriangle } from '@tabler/icons-react'
import { Loader2, Trash2 } from 'lucide-react'

import { router } from '@inertiajs/react'

import { ConfirmDialog } from '@/components/confirm-dialog'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { toast } from '@/hooks/use-toast'

import { Criteria } from '../data/schema'

interface Props {
    open: boolean
    onOpenChange: (open: boolean) => void
    currentRow: Criteria
}

export function CriteriasDeleteDialog({ open, onOpenChange, currentRow }: Props) {
    // const [value, setValue] = useState('')
    const [isProcessing, setIsProcessing] = useState(false)


    const handleDelete = () => {
        router.delete(route('criteria.destroy', currentRow.id), {
            onStart: () => setIsProcessing(true),
            onFinish: () => setIsProcessing(false),
            onSuccess: () => {
                onOpenChange(false)
                toast({
                    title: 'Sukses!',
                    description: `Kriteria "${currentRow.nama}" telah dihapus.`,
                })
            },
            onError: () => { toast({ variant: 'destructive', title: 'Error!', description: 'Gagal menghapus kriteria.' }) }
        })
    }

    // const handleDelete = () => {
    //     // if (value.trim() !== currentRow.nama) return

    //     onOpenChange(false)
    //     toast({
    //         title: 'Kriteria telah dihapus:',
    //         description: (
    //             <pre className='mt-2 w-[340px] rounded-md bg-slate-950 p-4'>
    //                 <code className='text-white'>
    //                     {JSON.stringify(currentRow, null, 2)}
    //                 </code>
    //             </pre>
    //         ),
    //     })
    // }

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
                    Menghapus Kriteria
                </span>
            }
            desc={
                <div className='space-y-4'>
                    <p className='mb-2'>
                        Anda yakin mau mengapus kriteria{' '}
                        <span className='font-bold'>{currentRow.nama}</span>?
                        <br />
                        {/* This action will permanently remove the user with the role of{' '} */}
                        {/* <span className='font-bold'>
                            {currentRow.role.toUpperCase()}
                        </span>{' '} */}
                        {/* from the system. This cannot be undone. */}
                    </p>

                    {/* <Label className='my-2'>
                        Username:
                        <Input
                            value={value}
                            onChange={(e) => setValue(e.target.value)}
                            placeholder='Enter username to confirm deletion.'
                        />
                    </Label> */}

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
            // showCancelButton={false}
            destructive
        />
    )
}
