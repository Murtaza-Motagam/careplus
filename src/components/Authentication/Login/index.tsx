'use client'
import React from 'react';
import Image from 'next/image';
import GoogleLogo from '@/Icons/GoogleLogo';
import Input from '@/widgets/Input';
import Button from '@/widgets/Button';
import Link from 'next/link';
import basicRoutes, { authenticationRoutes } from '@/lib/routes';
import LoginIcon from '@/Icons/LoginIcon';
import PasswordInput from '@/widgets/PasswordInput';
import useLogin from './hooks/useLogin';
import NextLink from '@/widgets/NextLink';
import { ReloadIcon } from '@radix-ui/react-icons';

const Login = () => {
    const { onSubmit, handleSubmit, register, errors, loading } = useLogin();
    return (
        <>
            <div className="flex flex-col md:flex-row h-screen w-full">
                <div className="w-full md:w-1/2 flex flex-col justify-center items-center min-h-screen p-6 md:p-10">
                    <div className="max-w-sm w-full">
                        <h2 className="text-2xl md:text-3xl flex items-center gap-x-2 flex-wrap font-semibold">WELCOME TO
                            <span className='text-primary'> TRAVIGO</span>
                        </h2>
                        <p className="text-primary text-sm mb-8">Enter to get unlimited access to data & information.</p>
                        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
                            <Input
                                rest={register('email')}
                                label='Email'
                                placeholder='Enter email address'
                                type='email'
                                showInline
                                errors={errors?.email?.message}
                            />
                            <PasswordInput
                                rest={register('password')}
                                label='Password'
                                placeholder='Create strong password'
                                errors={errors?.password?.message}
                            />
                            <Button
                                type='submit'
                                icon={loading ?
                                    <ReloadIcon className="mr-2 h-4 w-4 animate-spin" /> :
                                    <LoginIcon size={24} className='' />
                                }
                                title={loading ? '' : 'Login'}
                                className='w-full rounded-sm dark:text-white'
                            />
                        </form>
                        <div className="my-6 w-full flex items-center justify-center gap-x-2 text-center dark:text-gray-400">
                            <span>Or Login with </span>
                            <NextLink title='Visit Home' className='text-primary hover:underline !px-0 !py-0' href={basicRoutes.home} />
                        </div>
                        <button className="w-full flex items-center justify-center border border-gray-300 py-2 rounded-md gap-x-2 dark:text-gray-200">
                            <GoogleLogo />
                            Login with Google
                        </button>
                        <p className="text-center mt-6 dark:text-gray-400">
                            Don&apos;t have an account yet? <Link href={authenticationRoutes.register} className="text-md text-primary hover:underline">Register</Link>
                        </p>
                    </div>
                </div>
                <div className="hidden md:block relative w-1/2">
                    <Image
                        src='https://images.unsplash.com/photo-1565031491910-e57fac031c41?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                        alt="Background"
                        fill
                        className="object-contain"
                        style={{ objectFit: 'cover' }}
                    />
                </div>
            </div>
        </>
    );
};

export default Login;
