import {
    Breadcrumb,
    BreadcrumbEllipsis,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Link } from "@inertiajs/react"

export function BreadcrumbCriteria() {
    return (
        <Breadcrumb className="mb-6" aria-label="breadcrumb">
            <BreadcrumbList>
                <BreadcrumbItem>
                    <BreadcrumbLink asChild>
                        <Link href="/dashboard">Dashboard</Link>
                    </BreadcrumbLink>
                </BreadcrumbItem>
                {/* <BreadcrumbSeparator /> */}
                {/* <BreadcrumbItem>
                    <DropdownMenu>
                        <DropdownMenuTrigger className="flex items-center gap-1">
                            <BreadcrumbEllipsis className="size-4" />
                            <span className="sr-only">Toggle menu</span>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="start">
                            <DropdownMenuItem>Documentation</DropdownMenuItem>
                            <DropdownMenuItem>Themes</DropdownMenuItem>
                            <DropdownMenuItem>GitHub</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </BreadcrumbItem> */}
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                    <BreadcrumbLink asChild>
                        <Link href="/criteria">Kriteria</Link>
                    </BreadcrumbLink>
                </BreadcrumbItem>
                {/* <BreadcrumbSeparator />
                <BreadcrumbItem>
                    <BreadcrumbPage>Kriteria</BreadcrumbPage>
                </BreadcrumbItem> */}
            </BreadcrumbList>
        </Breadcrumb>
    )
}
export default BreadcrumbCriteria
