import {
    IconBarrierBlock,
    IconBrowserCheck,
    IconBug,
    IconChecklist,
    IconError404,
    IconHelp,
    IconLayoutDashboard,
    IconLock,
    IconLockAccess,
    IconMessages,
    IconNotification,
    IconPackages,
    IconPalette,
    IconServerOff,
    IconSettings,
    IconTool,
    IconUserCog,
    IconUserOff,
    IconUsers,
    IconChartBar,
    IconShoppingBag,
    IconShoppingBagDiscount,
    IconShoe,
    IconRobot,
    IconMail,
    IconArticle,
    IconCategory,
    IconTags,
    IconEdit,
    IconTableColumn,
} from '@tabler/icons-react'
import {
    AudioWaveform,
    Command,
    GalleryVerticalEnd
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
                    url: '/master/kriteria',
                    icon: IconShoppingBag,
                },
                {
                    title: 'Sub Kriteria',
                    url: '/master/sub-kriteria',
                    icon: IconShoppingBagDiscount,
                },
                {
                    title: 'Asesmen',
                    url: '/master/asesmen',
                    icon: IconShoe,
                },
                {
                    title: 'Klasifikasi',
                    url: '/master/klasifikasi',
                    icon: IconShoe,
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
                    icon: IconTableColumn,
                },
            ],
        },
        {
            title: 'Metode',
            items: [
                {
                    title: 'Konsultasi',
                    url: '/metode/konsultasi',
                    icon: IconUsers,
                },
            ],
        },
        {
            title: 'Laporan',
            items: [
                {
                    title: 'Riwayat Konsultasi',
                    url: '/laporan/riwayat-konsultasi',
                    icon: IconUsers,
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
