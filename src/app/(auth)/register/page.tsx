'use client'
import React from 'react';
import LoginImg from '@/assets/loginImage.jpg';
import Image from 'next/image';
import GoogleLogo from '@/Icons/GoogleLogo';
import Input from '@/widgets/Input';
import Button from '@/widgets/Button';
import Link from 'next/link';
import basicRoutes, { authenticationRoutes } from '@/lib/routes';
import LoginIcon from '@/Icons/LoginIcon';
import PasswordInput from '@/widgets/PasswordInput';
import useRegister from './useRegister';
import NextLink from '@/widgets/NextLink';
import CheckBox from '@/widgets/CheckBox';

const Register = () => {

    const { onSubmit, handleSubmit, register, errors } = useRegister();

    return (
        <>
            <div className="flex flex-col md:flex-row h-screen w-full">
                <div className="w-full md:w-1/2 flex flex-col justify-center items-center min-h-screen p-6 md:p-10">
                    <div className="max-w-sm w-full">
                        <h2 className="text-2xl md:text-3xl flex items-center gap-x-2 flex-wrap font-semibold">WELCOME TO
                            <span className='text-primary'> CAREPLUS</span>
                        </h2>
                        <p className="text-gray-400 mb-8 text-sm">Register to get unlimited access to data & information.</p>
                        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
                            <Input
                                rest={register('email')}
                                label='Email'
                                placeholder='Enter email address'
                                type='email'
                                errors={errors?.email?.message}
                            />
                            <PasswordInput
                                rest={register('password')}
                                label='Password'
                                placeholder='Create strong password'
                                errors={errors?.password?.message}
                            />
                            <PasswordInput
                                rest={register('confirmPassword')}
                                label='Confirm Password'
                                placeholder='Please confirm password'
                                errors={errors?.confirmPassword?.message}
                            />
                            <CheckBox
                                label='Accept our terms and conditions'
                                htmlFor='terms'
                                id='terms'
                                rest={register('terms')}
                            />
                            <Button
                                type='submit'
                                icon={<LoginIcon size={24} className='' />}
                                title='Register'
                                className='w-full rounded-sm dark:text-white'
                            />
                        </form>
                        <div className="my-6 text-center text-gray-400"><NextLink title='Visit Home' className='text-primary hover:underline' href={basicRoutes.home} /> Or, Signup with</div>
                        <button className="w-full flex items-center justify-center border border-gray-300 py-2 rounded-md  gap-x-2 dark:text-gray-200">
                            <GoogleLogo />
                            Sign up with Google
                        </button>
                        <p className="text-center mt-6 dark:text-gray-400">
                            Already a member? <Link href={authenticationRoutes.login} className="text-md text-primary hover:underline">Login</Link>
                        </p>
                    </div>
                </div>
                <div className="hidden md:block relative w-1/2">
                    <Image
                        src={LoginImg}
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

export default Register;
