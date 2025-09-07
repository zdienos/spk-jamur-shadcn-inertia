import { Link } from "@inertiajs/react"

import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb"

// import { Criteria } from "../../Criteria/data/schema"

// export default function BreadcrumbSubCriteria({ criterion }: { criterion: Criteria }) {
export default function BreadcrumbSubCriteria() {
    return (
        <Breadcrumb className="mb-6">
            <BreadcrumbList>
                <BreadcrumbItem>
                    <BreadcrumbLink asChild><Link href="/dashboard">Dashboard</Link></BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                    <BreadcrumbLink asChild><Link href="/criteria">Sub Kriteria</Link></BreadcrumbLink>
                </BreadcrumbItem>
                {/* <BreadcrumbSeparator />
                <BreadcrumbItem>
                    <BreadcrumbLink href="#">{criterion.name}</BreadcrumbLink>
                </BreadcrumbItem> */}
            </BreadcrumbList>
        </Breadcrumb>
    )
}
