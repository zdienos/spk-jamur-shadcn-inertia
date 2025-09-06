"use client"

import React from 'react'
import {
    useReactTable,
    getCoreRowModel,
    ColumnDef, // Impor ColumnDef
    flexRender,
} from '@tanstack/react-table'

// 1. Definisikan tipe untuk props komponen
// Ini membuat komponen kita generik dan bisa menerima data apa saja
interface TabelKriteriaProps<TData, TValue> {
    columns: ColumnDef<TData, TValue>[]
    data: TData[]
}

// 2. Gunakan Tipe Generik di sini
export function TabelKriteria<TData, TValue>({
    columns,
    data,
}: TabelKriteriaProps<TData, TValue>) {
    // 3. Gunakan 'data' dan 'columns' yang diterima dari props
    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
    })

    // Bagian JSX untuk rendering tidak berubah sama sekali
    return (
        <div className="rounded-md border">
            <table className="w-full text-sm">
                <thead className="[&_tr]:border-b">
                    {table.getHeaderGroups().map(headerGroup => (
                        <tr key={headerGroup.id} className="border-b transition-colors hover:bg-muted/50">
                            {headerGroup.headers.map(header => (
                                <th key={header.id} className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">
                                    {flexRender(
                                        header.column.columnDef.header,
                                        header.getContext()
                                    )}
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody className="[&_tr:last-child]:border-0">
                    {table.getRowModel().rows.map(row => (
                        <tr key={row.id} className="border-b transition-colors hover:bg-muted/50">
                            {row.getVisibleCells().map(cell => (
                                <td key={cell.id} className="p-4 align-middle">
                                    {flexRender(
                                        cell.column.columnDef.cell,
                                        cell.getContext()
                                    )}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
