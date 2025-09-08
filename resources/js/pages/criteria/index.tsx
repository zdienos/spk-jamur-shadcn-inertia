import { Main } from "@/components/layout";
import { SimpleTanStackTable } from "@/components/SimpleTanStackTable";
import { AuthenticatedLayout } from "@/layouts"
import { PageProps } from '@/types';

import BreadcrumbCriteria from "./components/Breadcrumb";
import { CriteriaDialog } from "./components/CriteriaDialog";
import { CriteriaPrimaryButton } from "./components/CriteriaPrimaryButton";
import { useCriteriaColumns } from "./components/useCriteriaColumns";
import CriteriasProvider from "./context/CriteriaContext";
import { criteriaListSchema, criteriaType } from "./data/schema";

interface IndexPageProps extends PageProps {
    criteria: criteriaType[];
}

// Buat komponen konten sebagai fungsi terpisah DI LUAR komponen utama
function CriteriaPageContent({ criteria }: { criteria: criteriaType[] }) {
    // Panggil hook di level atas komponen ini
    const columns = useCriteriaColumns();
    const criteriaList = criteriaListSchema.parse(criteria);

    return (
        <Main>
            <BreadcrumbCriteria />
            <div className='mb-6 flex items-center justify-between space-y-2 flex-wrap'>
                <div>
                    <h2 className='text-2xl font-bold tracking-tight'>Kriteria</h2>
                    <p className='text-muted-foreground'>
                        Daftar kriteria yang tersedia di sistem.
                    </p>
                </div>
                <CriteriaPrimaryButton />
            </div>
            <div className='-mx-4 flex-1 overflow-auto px-4 py-1 lg:flex-row lg:space-x-12 lg:space-y-0'>
                {/* 3. Gunakan variabel 'columns' di sini */}
                <SimpleTanStackTable data={criteriaList} columns={columns} />
            </div>
            <CriteriaDialog />
        </Main>
    )
}


// Komponen Halaman Utama (Index) sekarang lebih sederhana
export default function Index({ auth, criteria }: IndexPageProps) {
    return (
        // Provider tetap membungkus segalanya
        <CriteriasProvider>
            <AuthenticatedLayout user={auth.user}>
                {/* Render komponen konten yang sudah kita pisahkan */}
                <CriteriaPageContent criteria={criteria} />
            </AuthenticatedLayout>
        </CriteriasProvider>
    );
}
