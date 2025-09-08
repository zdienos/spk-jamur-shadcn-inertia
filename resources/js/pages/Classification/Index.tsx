import { Main } from "@/components/layout";
import { SimpleTanStackTable } from "@/components/SimpleTanStackTable";
import { AuthenticatedLayout } from "@/layouts"
import { PageProps } from '@/types';

import BreadcrumbClassifcation from "./components/Breadcrumb";
import { ClassificationDialog } from "./components/Dialog";
import { ClassificationPrimaryButton } from "./components/PrimaryButton";
import { useClassificationColumns } from "./components/useColumns";
import ClassificationProvider from "./context/Context";
import { classificationListSchema, classificationType } from "./data/schema";

interface IndexPageProps extends PageProps {
    classifications: classificationType[];
}

function ClassificationPageContent({ classification }: { classification: classificationType[] }) {

    const columns = useClassificationColumns();
    const classificationList = classificationListSchema.parse(classification);

    return (
        <Main>
            <BreadcrumbClassifcation />
            <div className='mb-6 flex items-center justify-between space-y-2 flex-wrap'>
                <div>
                    <h2 className='text-2xl font-bold tracking-tight'>Klasifikasi</h2>
                    <p className='text-muted-foreground'>
                        Daftar klasifikasi yang tersedia di sistem.
                    </p>
                </div>
                <ClassificationPrimaryButton />
            </div>
            <div className='-mx-4 flex-1 overflow-auto px-4 py-1 lg:flex-row lg:space-x-12 lg:space-y-0'>
                <SimpleTanStackTable data={classificationList} columns={columns} />
            </div>
            <ClassificationDialog />
        </Main>
    )
}


export default function Index({ auth, classifications }: IndexPageProps) {
    return (
        <ClassificationProvider>
            <AuthenticatedLayout user={auth.user}>
                <ClassificationPageContent classification={classifications} />
            </AuthenticatedLayout>
        </ClassificationProvider>
    );
}
