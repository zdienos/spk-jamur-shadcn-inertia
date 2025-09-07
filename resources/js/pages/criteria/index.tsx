import { Main } from "@/components/layout";
import { AuthenticatedLayout } from "@/layouts"
import { Criteria, PageProps } from '@/types';

import BreadcrumbCriteria from "./components/Breadcrumb";
import { CriteriasDialogs } from "./components/CriteriaDialog";
import { CriteriaPrimaryButtons } from "./components/CriteriaPrimaryButtons";
import { CriteriaTable } from "./components/CriteriaTable";
import { useCriteriaColumns } from "./components/useCriteriaColumns";
import CriteriasProvider from "./context/CriteriaContext";
import { criteriaListSchema } from "./data/schema";

interface IndexPageProps extends PageProps {
    criteria: Criteria[];
}

// Buat komponen konten sebagai fungsi terpisah DI LUAR komponen utama
function CriteriaPageContent({ criteria }: { criteria: Criteria[] }) {
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
                <CriteriaPrimaryButtons />
            </div>
            <div className='-mx-4 flex-1 overflow-auto px-4 py-1 lg:flex-row lg:space-x-12 lg:space-y-0'>
                {/* 3. Gunakan variabel 'columns' di sini */}
                <CriteriaTable data={criteriaList} columns={columns} />
            </div>
            <CriteriasDialogs />
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
