import { AuthenticatedLayout } from "@/layouts"
import { Main } from "@/components/layout";
import { columns } from "./components/criteria-columns";
// import { UsersDialogs } from './components/criterias-dialogs'
// import { CriteriasPrimaryButtons } from "../criteria/components/criterias-primary-buttons";
import { CriteriasTable } from "./components/criterias-table";
import CriteriasProvider from "./context/criteria-context";
import { criteriaListSchema } from "./data/schema";
import { PageProps, Criteria } from '@/types';

import { Head, Link, router } from '@inertiajs/react';

// Definisikan tipe untuk props halaman ini secara spesifik
interface IndexPageProps extends PageProps {
    criteria: Criteria[];
}

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
            // header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Daftar Kriteria</h2>}
            >
                {/* <Head title="Daftar Kriteria" /> */}

                <Main>
                    <div className='mb-2 flex items-center justify-between space-y-2 flex-wrap'>
                        <div>
                            <h2 className='text-2xl font-bold tracking-tight'>Kriteria</h2>
                            <p className='text-muted-foreground'>
                                Daftar kriteria yang tersedia di sistem.
                            </p>
                        </div>
                        {/* <UsersPrimaryButtons /> */}
                    </div>
                    <div className='-mx-4 flex-1 overflow-auto px-4 py-1 lg:flex-row lg:space-x-12 lg:space-y-0'>
                        <CriteriasTable data={criteriaList} columns={columns} />
                    </div>
                </Main>
                {/* <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6">
                            <Link href={route('criteria.create')} className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4">
                                Tambah Kriteria
                            </Link>

                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nama Kriteria</th>
                                        <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Aksi</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {criteria.map((item) => {
                                        console.log('Memproses item:', item);
                                        console.log('ID Kriteria:', item.id);

                                        return (
                                            <tr key={item.id}>
                                                <td className="px-6 py-4 whitespace-nowrap">{item.nama}</td>
                                                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                    <Link href={route('criteria.edit', item.id)} className="text-indigo-600 hover:text-indigo-900 mr-4">Edit</Link>
                                                    <button onClick={() => destroy(item.id)} className="text-red-600 hover:text-red-900">Hapus</button>
                                                </td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div> */}
                {/* <UsersDialogs /> */}

            </AuthenticatedLayout>
        </CriteriasProvider>
    );
}
