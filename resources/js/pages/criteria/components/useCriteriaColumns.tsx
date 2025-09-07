"use client"

import { ColumnDef } from '@tanstack/react-table'
import { Pencil, Trash2 } from 'lucide-react'

import { Button } from '@/components/ui/button'

import { useCriterias } from '../context/CriteriaContext'
import { Criteria } from '../data/schema'

// Nama hook harus diawali dengan 'use'
export function useCriteriaColumns(): ColumnDef<Criteria>[] {
    // Panggil hook di dalam custom hook. INI VALID.
    const { setOpen, setCurrentRow } = useCriterias();

    // Definisikan kolom di dalam hook
    const columns: ColumnDef<Criteria>[] = [
        {
            accessorKey: 'id',
            header: 'ID',
            size: 20,
            meta: { align: 'text-center' },
        },
        {
            accessorKey: 'nama',
            header: 'NAMA KRITERIA',
        },
        {
            id: 'aksi',
            header: 'AKSI',
            size: 40,
            meta: { align: 'text-center' },
            cell: ({ row }) => {
                const kriteria = row.original; //data row ini
                return (
                    <div className="flex items-center justify-center space-x-2">
                        <Button variant="outline" size="sm" className="flex items-center gap-2"
                            onClick={() => {
                                setCurrentRow(kriteria);
                                setOpen('edit');
                            }}
                        >
                            <Pencil className="h-4 w-4" />
                        </Button>
                        <Button
                            variant="destructive"
                            size="sm"
                            className="flex items-center gap-2"
                            onClick={() => {
                                setCurrentRow(kriteria);
                                setOpen('delete');
                            }}
                        >
                            <Trash2 className="h-4 w-4" />
                        </Button>
                    </div>
                );
            },
        },
    ];

    // 3. Kembalikan array kolomnya
    return columns;
}
