import { Main } from "@/components/layout";
import { SimpleTanStackTable } from "@/components/SimpleTanStackTable";
import { AuthenticatedLayout } from "@/layouts"
import { PageProps } from '@/types';

import { Criteria } from '../Criteria/data/schema';
import BreadcrumbSubCriteria from "./components/Breadcrumb";
import { SubCriteriaDialog } from "./components/SubCriteriaDialog";
import { SubCriteriaPrimaryButtons } from "./components/SubCriteriaPrimaryButton";
import { useSubCriteriaColumns } from "./components/useSubCriteriaColumns";
import SubCriteriasProvider from "./context/SubCriteriaContext";
import { SubCriteria } from './data/schema';

// Tipe data yang diterima dari controller (sudah benar)
interface IndexPageProps extends PageProps {
    subCriterias: (SubCriteria & { criteria: Criteria })[];
    criterias: Criteria[];
}

// Komponen Halaman Utama
export default function SubCriteriaIndexPage({ auth, subCriterias, criterias }: IndexPageProps) {

    // Komponen internal untuk memastikan hook dipanggil di dalam Provider
    const PageContent = () => {
        // PANGGIL HOOK DI SINI, BUKAN DI PROPS
        const columns = useSubCriteriaColumns();

        return (
            <Main>
                <BreadcrumbSubCriteria />

                <div className='mb-6 flex items-center justify-between'>
                    <div>
                        <h2 className='text-2xl font-bold tracking-tight'>Sub Kriteria</h2>
                        <p className='text-muted-foreground'>
                            Kelola semua sub kriteria yang tersedia di sistem.
                        </p>
                    </div>
                    <SubCriteriaPrimaryButtons />
                </div>
                {/* TERUSKAN VARIABEL 'columns' KE DALAM PROPS */}
                <SimpleTanStackTable data={subCriterias} columns={columns} />
                <SubCriteriaDialog criterias={criterias} />
            </Main>
        )
    }

    return (
        <SubCriteriasProvider>
            <AuthenticatedLayout user={auth.user}>
                <PageContent />
            </AuthenticatedLayout>
        </SubCriteriasProvider>
    );
}
