import {
    IconHelp,
    IconLayoutDashboard,
    IconUsers,
} from '@tabler/icons-react'
import {
    AudioWaveform,
    ClipboardCheckIcon,
    Command,
    DatabaseIcon,
    GalleryVerticalEnd,
    HistoryIcon,
    LayersIcon,
    ListChecksIcon,
    ListOrderedIcon,
    MessageCircleIcon
} from 'lucide-react'

import { type SidebarData } from '../types'

export const sidebarData: SidebarData = {
    user: {
        name: 'binjuhor',
        email: 'hi@binjuhor.com',
        avatar: '/avatars/shadcn.jpg',
    },
    teams: [
        {
            name: 'Shadcn Admin',
            logo: Command,
            plan: 'Vite + ShadcnUI',
        },
        {
            name: 'Acme Inc',
            logo: GalleryVerticalEnd,
            plan: 'Enterprise',
        },
        {
            name: 'Acme Corp.',
            logo: AudioWaveform,
            plan: 'Startup',
        },
    ],
    navGroups: [
        {
            title: 'General',
            items: [
                {
                    title: 'Dashboard',
                    url: '/dashboard',
                    icon: IconLayoutDashboard,
                },
            ],
        },
        {
            title: 'Master',
            items: [
                {
                    title: 'Kriteria',
                    url: '/criteria',
                    icon: ListChecksIcon,
                },
                {
                    title: 'Sub Kriteria',
                    url: '/subcriteria',
                    icon: ListOrderedIcon,
                },
                {
                    title: 'Asesmen',
                    url: '/master/asesmen',
                    icon: ClipboardCheckIcon,
                },
                {
                    title: 'Klasifikasi',
                    url: '/master/klasifikasi',
                    icon: LayersIcon,
                },
            ],
        },
        {
            title: 'Pustaka',
            items: [
                {
                    title: 'Users',
                    url: '/pustaka/user',
                    icon: IconUsers,
                },
                {
                    title: 'Data Training',
                    url: '/pustaka/data-training',
                    icon: DatabaseIcon,
                },
            ],
        },
        {
            title: 'Metode',
            items: [
                {
                    title: 'Konsultasi',
                    url: '/metode/konsultasi',
                    icon: MessageCircleIcon,
                },
            ],
        },
        {
            title: 'Laporan',
            items: [
                {
                    title: 'Riwayat Konsultasi',
                    url: '/laporan/riwayat-konsultasi',
                    icon: HistoryIcon,
                },
            ],
        },
        {
            title: 'Lainnya',
            items: [
                {
                    title: 'Panduan',
                    url: '/panduan',
                    icon: IconHelp,
                },
            ],
        },
    ],
}
