"use client"

import {
    ColumnDef,
    flexRender,
    getCoreRowModel,
    useReactTable,
} from '@tanstack/react-table'

interface CriteriaTableProps<TData, TValue> {
    columns: ColumnDef<TData, TValue>[]
    data: TData[]
}

export function CriteriaTable<TData, TValue>({
    columns,
    data,
}: CriteriaTableProps<TData, TValue>) {
    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
    })

    return (
        <div className="rounded-md border">
            <table className="w-full text-sm table-responsive">
                <thead className="[&_tr]:border-b">
                    {table.getHeaderGroups().map(headerGroup => (
                        <tr key={headerGroup.id} className="border-b transition-colors hover:bg-muted/50">
                            {headerGroup.headers.map(header => (
                                <th key={header.id} className="h-12 p-4 text-center align-middle font-medium text-muted-foreground border-r border-slate-200 last:border-r-0" style={{
                                    width: header.getSize(),
                                }}>
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
                                <td
                                    key={cell.id}
                                    className={`p-2 align-middle border-r border-slate-200 last:border-r-0 ${cell.column.columnDef.meta?.align || 'text-left'
                                        }`}
                                >
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
