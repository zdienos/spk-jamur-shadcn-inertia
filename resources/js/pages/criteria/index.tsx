import { AuthenticatedLayout } from "@/layouts"
import { Main } from "@/components/layout";
import CriteriasProvider, { useCriterias } from "./context/criteria-context";
import { criteriaListSchema } from "./data/schema";
import { PageProps, Criteria } from '@/types';

import { Head, router } from '@inertiajs/react';
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

export default function Index({ auth, criteria }: IndexPageProps) {
    // 1. Bungkus semua logika di dalam komponen 'Index'
    //    Ini adalah tempat yang tepat untuk menjalankan logika halaman.
    const PageLogic = () => {
        // 2. PANGGIL HOOK DI DALAM KOMPONEN. Ini sekarang valid.
        const { setOpen, setCurrentRow } = useCriterias();

        const destroy = (id: number) => {
            if (confirm('Apakah Anda yakin ingin menghapus data ini?')) {
                router.delete(route('criteria.destroy', id));
            }
        };

        // 3. PINDAHKAN DEFINISI KOLOM KE SINI.
        //    Sekarang ia bisa "melihat" fungsi setOpen, setCurrentRow, dan destroy.
        const kolomKriteria: ColumnDef<Criteria>[] = [
            {
                accessorKey: 'id',
                header: 'ID',
                size: 60,
                meta: { align: 'text-center' },
            },
            {
                accessorKey: 'nama',
                header: 'Nama Kriteria',
            },
            {
                id: 'aksi',
                header: 'Aksi',
                size: 120,
                meta: { align: 'text-center' },
                cell: ({ row }) => {
                    const kriteria = row.original;
                    return (
                        <div className="flex items-center justify-center space-x-2">
                            {/* Tombol Edit sekarang berfungsi dengan benar */}
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
                                    setCurrentRow(kriteria)
                                    setOpen('delete')
                                }}
                            >
                                <Trash2 className="h-4 w-4" />
                            </Button>
                        </div>
                    );
                },
            },
        ];

        const criteriaList = criteriaListSchema.parse(criteria);

        return (
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
                    <TabelKriteria data={criteriaList} columns={kolomKriteria} />
                </div>
                <CriteriasDialogs />
            </Main>
        )
    }

    return (
        <CriteriasProvider>
            <AuthenticatedLayout user={auth.user}>
                <PageLogic />
            </AuthenticatedLayout>
        </CriteriasProvider>
    );
}
