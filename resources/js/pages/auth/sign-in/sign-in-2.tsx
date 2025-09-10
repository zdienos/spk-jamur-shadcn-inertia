import { Head, Link } from '@inertiajs/react'

// import ViteLogo from '@/assets/vite.svg'
import KNNLogo from '@/assets/KNN-logo-2.png'

// import { SocialButtons, TermPrivacyLink } from "@/pages/auth/components";
import { UserAuthForm } from './components/user-auth-form'

export default function SignIn2({
    status,
    canResetPassword,
}: {
    status?: string;
    canResetPassword: boolean;
}) {
    return (
        <>
            <Head title='Login' />
            <div
                className='container relative grid h-svh flex-col items-center justify-center lg:max-w-none lg:grid-cols-2 lg:px-0'>
                <div className='relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex'>
                    <div className='absolute inset-0 bg-zinc-900' />
                    <div className='relative z-20 flex items-center text-lg font-medium'>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 24 24'
                            fill='none'
                            stroke='currentColor'
                            strokeWidth='2'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            className='mr-2 h-6 w-6'
                        >
                            <path d='M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3' />
                        </svg>
                        Decision Support System (K-Nearest Neighbor)
                    </div>

                    <img
                        src={KNNLogo}
                        className='relative m-auto'
                        // width={301}
                        // height={60}
                        alt='Vite'
                    />

                    <div className='relative z-20'>
                        <blockquote className='space-y-2'>
                            {/* <p className='text-lg'>
                                K-Nearest Neighbor (KNN) adalah metode klasifikasi sederhana namun efektif yang bekerja dengan mencari kedekatan data baru terhadap data yang sudah ada, lalu menentukan hasil berdasarkan tetangga terdekatnya.
                            </p> */}
                            <p className='text-xl'>
                                K-Nearest Neighbor (KNN) <span className='text-base'>adalah metode dalam sistem pengambilan keputusan yang bekerja dengan cara mencari data yang paling mirip atau paling dekat. Semakin dekat datanya, semakin besar kemungkinan dijadikan sebagai hasil keputusan.
                                </span>
                            </p>

                            <footer className='text-sm'>John Doe</footer>
                        </blockquote>
                    </div>
                </div>
                <div className='lg:p-8'>
                    <div className='mx-auto flex w-full flex-col justify-center space-y-2 sm:w-[350px]'>
                        <div className='flex flex-col space-y-2 text-left'>
                            <h1 className='text-2xl font-semibold tracking-tight'>Login</h1>
                            <p className='text-sm text-muted-foreground'>
                                Masukkan email dan password untuk <br />
                                login, belum punya akun?
                                {/* <Link
                                    className='underline underline-offset-4 hover:text-primary'
                                    href={route('register')}>Klik Daftar</Link> */}
                                <Link
                                    href={route('register')}
                                    className='ml-1 text-sm font-medium text-muted-foreground hover:opacity-75'
                                    tabIndex={1}
                                >
                                    Klik untuk daftar
                                </Link>
                            </p>
                            {/* <p className='text-sm text-muted-foreground'>
                                Enter your email and password below <br />
                                to log into your account, do not have an account?
                                <Link
                                    className='underline underline-offset-4 hover:text-primary'
                                    href={route('register')}>Register</Link>
                            </p> */}
                        </div>
                        <UserAuthForm canResetPassword={canResetPassword} status={status} />
                        {/* <TermPrivacyLink privacyLink={'#'} termLink={'#'} /> */}
                        {/* <SocialButtons isLoading={false} /> */}
                    </div>
                </div>
            </div>
        </>
    )
}
