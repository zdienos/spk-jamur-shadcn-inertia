import { ColumnDef } from '@tanstack/react-table'
import { cn } from '@/lib/utils'
import { Badge } from '@/components/ui/badge'
import { Checkbox } from '@/components/ui/checkbox'
import LongText from '@/components/long-text'
// import { callTypes, userTypes } from '../data/data'
import { Criteria } from '../data/schema'
import { DataTableColumnHeader } from './data-table-column-header'
import { DataTableRowActions } from './data-table-row-actions'

export const columns: ColumnDef<Criteria>[] = [
    // {
    //     id: 'select',
    //     header: ({ table }) => (
    //         <Checkbox
    //             checked={
    //                 table.getIsAllPageRowsSelected() ||
    //                 (table.getIsSomePageRowsSelected() && 'indeterminate')
    //             }
    //             onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
    //             aria-label='Select all'
    //             className='translate-y-[2px]'
    //         />
    //     ),
    //     meta: {
    //         className: cn(
    //             'sticky md:table-cell left-0 z-10 rounded-tl',
    //             'bg-background transition-colors duration-200 group-hover/row:bg-muted group-data-[state=selected]/row:bg-muted'
    //         ),
    //     },
    //     cell: ({ row }) => (
    //         <Checkbox
    //             checked={row.getIsSelected()}
    //             onCheckedChange={(value) => row.toggleSelected(!!value)}
    //             aria-label='Select row'
    //             className='translate-y-[2px]'
    //         />
    //     ),
    //     enableSorting: false,
    //     enableHiding: false,
    // },
    {
        accessorKey: 'nama',
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title='Nama Kriteria' />
        ),
        cell: ({ row }) => (
            <LongText className='max-w-36'>{row.getValue('nama')}</LongText>
        ),
        meta: {
            className: cn(
                'drop-shadow-[0_1px_2px_rgb(0_0_0_/_0.1)] dark:drop-shadow-[0_1px_2px_rgb(255_255_255_/_0.1)] lg:drop-shadow-none',
                'bg-background transition-colors duration-200 group-hover/row:bg-muted group-data-[state=selected]/row:bg-muted',
                'sticky left-6 md:table-cell'
            ),
        },
        enableHiding: false,
    },
    {
        id: 'actions',
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title='Aksi' />
        ),
        cell: DataTableRowActions,
    },
]
