import { AuthenticatedLayout } from "@/layouts"

import { Head, useForm } from '@inertiajs/react';
import { PageProps, Criteria } from '@/types';
import React from 'react';

interface EditPageProps extends PageProps {
    criterion: Criteria;
}

export default function Edit({ auth, criterion }: EditPageProps) {
    // Hapus <EditCriteriaForm> atau tipe sejenis dari sini
    const { data, setData, put, processing, errors } = useForm({
        nama: criterion.nama || '',
    });

    const submit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        put(route('criteria.update', criterion.id));
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Edit Kriteria</h2>}
        >
            <Head title="Edit Kriteria" />

            <div className="py-12">
                <div className="max-w-2xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                            <form onSubmit={submit}>
                                <div>
                                    <label htmlFor="nama" className="block font-medium text-sm text-gray-700">Nama Kriteria</label>
                                    <input
                                        id="nama"
                                        type="text"
                                        value={data.nama}
                                        className="block mt-1 w-full rounded-md shadow-sm border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setData('nama', e.target.value)}
                                        required
                                    />
                                    {errors.nama && <div className="text-sm text-red-600 mt-1">{errors.nama}</div>}
                                </div>

                                <div className="flex items-center justify-end mt-4">
                                    <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" disabled={processing}>
                                        Update
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
