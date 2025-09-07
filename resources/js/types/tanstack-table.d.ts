// tambahan untuk table agar bisa align text row table

import '@tanstack/react-table';

declare module '@tanstack/react-table' {
    interface ColumnMeta<TData extends RowData, TValue> {
        align?: 'text-left' | 'text-center' | 'text-right';
        className?: string;
    }
}
