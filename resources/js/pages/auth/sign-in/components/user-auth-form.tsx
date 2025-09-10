import React, { HTMLAttributes } from 'react'
import { Loader2, LogIn } from 'lucide-react'

import { Link, useForm } from '@inertiajs/react'

import InputError from "@/components/InputError"
import { PasswordInput } from '@/components/password-input'
import { Button } from '@/components/ui/button'
// import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import { Label } from "@/components/ui/label"
import { cn } from '@/lib/utils'

type UserAuthFormProps = HTMLAttributes<HTMLDivElement> & {
    status?: string;
    canResetPassword?: boolean;
}

export function UserAuthForm({ className, status, canResetPassword = true, ...props }: UserAuthFormProps) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: 'shadcn@gmail.com',
        password: 'password',
        remember: false,
    });

    function onSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        post(route('login'), {
            onFinish: () => {
                reset('password');
            },
            preserveScroll: true,
        });
    }

    return (
        <div className={cn('grid gap-6', className)} {...props}>
            {status && (
                <div className="text-sm font-medium text-green-600">
                    {status}
                </div>
            )}

            <form onSubmit={onSubmit} noValidate>
                <div className='grid gap-2'>
                    <div className='space-y-1'>
                        <Label htmlFor="email">Email</Label>
                        <Input
                            id="email"
                            type="email"
                            placeholder='name@example.com'
                            autoComplete="username"
                            value={data.email}
                            onChange={(e) => setData('email', e.target.value)}
                        />
                        <InputError message={errors.email} className="mt-2" />
                    </div>

                    <div className='space-y-1'>
                        <div className='flex items-center justify-between'>
                            <Label htmlFor="password">Password</Label>
                            {canResetPassword && (
                                <Link
                                    href={route('password.request')}
                                    className='text-sm font-medium text-muted-foreground hover:opacity-75'
                                    tabIndex={1}
                                >
                                    Lupa password?
                                </Link>
                            )}
                        </div>
                        <PasswordInput
                            id="password"
                            placeholder='********'
                            autoComplete="current-password"
                            value={data.password}
                            onChange={(e) => setData('password', e.target.value)}
                        />
                        <InputError message={errors.password} className="mt-2" />
                    </div>

                    {/* <div className="flex flex-row items-center space-x-2 space-y-0 mt-2">
                        <Checkbox
                            id="remember"
                            checked={data.remember}
                            onCheckedChange={(checked) => {
                                if (typeof checked === 'boolean') {
                                    setData('remember', checked as typeof data.remember);
                                }
                            }}
                        />
                        <label htmlFor="remember" className="text-sm font-normal text-muted-foreground">
                            Remember me
                        </label>
                    </div> */}

                    <Button className='mt-4' disabled={processing}>
                        {/* {processing ? 'Login' : 'Login'} */}
                        {processing ? (
                            <>
                                <Loader2 className="h-4 w-4 animate-spin" />
                                Login
                            </>
                        ) : (
                            <>
                                <LogIn className="h-4 w-4" />
                                Login
                            </>
                        )}
                    </Button>
                </div>
            </form>
        </div>
    )
}
