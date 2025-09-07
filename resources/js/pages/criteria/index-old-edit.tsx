import { AuthenticatedLayout } from "@/layouts"
import { Main } from "@/components/layout";
import { columns } from "./components/criteria-columns";
import { CriteriasTable } from "./components/criterias-table";
import CriteriasProvider, { useCriterias } from "./context/criteria-context";
import { criteriaListSchema } from "./data/schema";
import { PageProps, Criteria } from '@/types';

import { Head, Link, router } from '@inertiajs/react';
import { TabelKriteria } from "./components/table-kriteria";
import { ColumnDef } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { Pencil, Trash2 } from "lucide-react";
import { CriteriaPrimaryButton } from "./components/criteria-primary-buttons";
import { CriteriasDialogs } from "./components/criteria-dialog";

// Definisikan tipe untuk props halaman ini secara spesifik
interface IndexPageProps extends PageProps {
    criteria: Criteria[];
}

const destroy = (id: number) => {
    if (confirm('Apakah Anda yakin ingin menghapus data ini?')) {
        router.delete(route('criteria.destroy', id));
    }
};


const { setOpen, setCurrentRow } = useCriterias()
const kolomKriteria: ColumnDef<Criteria>[] = [
    {
        accessorKey: 'id',
        header: 'ID',
        size: 10,
        meta: {
            align: 'text-center',
        },
    },
    {
        accessorKey: 'nama',
        header: 'Nama Kriteria',
    },
    {
        id: 'aksi',
        header: 'Aksi',
        size: 10,
        meta: {
            align: 'text-center',
        },
        cell: ({ row }) => {
            // 'row.original' berisi data lengkap untuk baris ini
            const kriteria = row.original;

            return (
                <div className="flex items-center justify-center space-x-2">
                    {/* <Link href={route('criteria.edit', row.id)}> */}
                    <Button variant="outline" size="sm" className="flex items-center gap-2"
                        onClick={() => {
                            setCurrentRow(row.original)
                            setOpen('edit')
                        }}
                    >
                        <Pencil className="h-4 w-4" />
                        {/* Edit */}
                    </Button>
                    {/* </Link> */}
                    <Button
                        variant="destructive"
                        size="sm"
                        className="flex items-center gap-2"
                        onClick={() => destroy(kriteria.id)}
                    >
                        <Trash2 className="h-4 w-4" />
                        {/* Hapus */}
                    </Button>
                </div>
            );
        },
    },
];

export default function Index({ auth, criteria }: IndexPageProps) {
    // export default function Criterias() {

    const criteriaList = criteriaListSchema.parse(criteria)

    // const destroy = (id: number) => {
    //     if (confirm('Apakah Anda yakin ingin menghapus kriteria ini?')) {
    //         router.delete(route('criteria.destroy', id));
    //     }
    // };


    return (
        <CriteriasProvider>
            <AuthenticatedLayout
            // title={"Daftar Kritsseria"}
            // user={auth.user}
            >
                <Main>
                    <div className='mb-2 flex items-center justify-between space-y-2 flex-wrap'>
                        <div>
                            <h2 className='text-2xl font-bold tracking-tight'>Kriteria</h2>
                            <p className='text-muted-foreground'>
                                Daftar kriteria yang tersedia di sistem.
                            </p>
                        </div>
                        <CriteriaPrimaryButton />
                    </div>
                    <div className='-mx-4 flex-1 overflow-auto px-4 py-1 lg:flex-row lg:space-x-12 lg:space-y-0'>
                        {/* <CriteriasTable data={criteriaList} columns={columns} /> */}
                        <TabelKriteria data={criteriaList} columns={kolomKriteria} />
                    </div>
                </Main>
                <CriteriasDialogs />
            </AuthenticatedLayout>
        </CriteriasProvider>
    );
}
