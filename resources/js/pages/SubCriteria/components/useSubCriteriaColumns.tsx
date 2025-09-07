"use client"

import { ColumnDef } from '@tanstack/react-table'
import { Pencil, Trash2 } from 'lucide-react'

import { Button } from '@/components/ui/button'

import { Criteria } from '../../Criteria/data/schema'
import { useSubCriterias } from '../context/SubCriteriaContext'
import { SubCriteria } from '../data/schema'

// Tipe data gabungan yang dikirim dari controller
type SubCriteriaWithParent = SubCriteria & { criteria: Criteria };

export function useSubCriteriaColumns(): ColumnDef<SubCriteriaWithParent>[] {
    // export function useSubCriteriaColumns(): ColumnDef<SubCriteria>[] {
    const { setOpen, setCurrentRow } = useSubCriterias();

    const columns: ColumnDef<SubCriteriaWithParent>[] = [
        {
            accessorKey: 'id',
            header: 'ID',
            size: 60,
            meta: { align: 'text-center' }
        },
        // TAMBAHKAN KOLOM INI UNTUK MENAMPILKAN INDUK
        {
            accessorKey: 'criteria.name',
            header: 'NAMA KRITERIA',
        },
        {
            accessorKey: 'name',
            header: 'NAMA SUB KRITERIA'
        },
        {
            accessorKey: 'value',
            header: 'NILAI',
            size: 80,
            meta: { align: 'text-center' }
        },
        {
            id: 'aksi',
            header: 'AKSI',
            size: 120,
            meta: { align: 'text-center' },
            cell: ({ row }) => {
                const subKriteria = row.original;
                return (
                    <div className="flex items-center justify-center space-x-2">
                        <Button variant="outline" size="sm" onClick={() => { setCurrentRow(subKriteria); setOpen('edit'); }}>
                            <Pencil className="h-4 w-4" />
                        </Button>
                        <Button variant="destructive" size="sm" onClick={() => { setCurrentRow(subKriteria); setOpen('delete'); }}>
                            <Trash2 className="h-4 w-4" />
                        </Button>
                    </div>
                );
            },
        },
    ];

    return columns;
}
