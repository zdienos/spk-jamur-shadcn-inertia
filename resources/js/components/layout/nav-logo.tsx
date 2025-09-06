import * as React from 'react'
import { ChevronsUpDown, Plus, Command } from 'lucide-react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    useSidebar,
} from '@/components/ui/sidebar'

import { Link } from "@inertiajs/react";


export function NavLogo({
    teams,
}: {
    teams: {
        name: string
        logo: React.ElementType
        plan: string
    }[]
}) {
    const { isMobile } = useSidebar()
    const [activeTeam, setActiveTeam] = React.useState(teams[0])

    return (
        <SidebarMenu>
            <SidebarMenuItem>
                <SidebarMenuButton size="lg" asChild>
                    <Link href={route("dashboard")}>
                        <div className="flex justify-center items-center rounded-lg aspect-square size-8 bg-sidebar-primary text-sidebar-primary-foreground">
                            <Command className="size-4" />
                        </div>
                        <div className="grid flex-1 text-sm leading-tight text-left">
                            <span className="font-semibold truncate"> Pengambilan Keputusan</span>
                            <span className="text-xs truncate">
                                K-Nearest Neighbors (KNN){" "}
                            </span>
                        </div>
                    </Link>
                </SidebarMenuButton>
            </SidebarMenuItem >
        </SidebarMenu >
    )
}
