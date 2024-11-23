'use client'
import { getActiveClass, isAuthenticated, navLinks } from '@/lib/common'
import basicRoutes, { authenticationRoutes, patientRoutes } from '@/lib/routes'
import Button from '@/widgets/Button'
import NextLink from '@/widgets/NextLink'
import HamburgerIcon from '@/Icons/HamburgerIcon'
import React, { useEffect, useState } from 'react'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import MobileHeader from './MobileHeader'
import { ModeToggle } from '@/components/ui/ModeToggle'
import { useRouter, usePathname } from 'next/navigation'
import { useTheme } from 'next-themes'
import Image from 'next/image'
import LoginIcon from '@/Icons/LoginIcon'
import Logo from '@/assets/logo.png'
import useHeader from './hooks/useHeader'
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import Loader from '@/widgets/Loader'
import TextToImage from '@/widgets/TextToImage'
import { backendUrl } from '@/lib/constant'

const Header = () => {

    const [isUser, setIsUser] = useState<boolean>(false);

    const router = useRouter();
    const pathname = usePathname();
    const { theme } = useTheme();

    const { user, logout, loading } = useHeader();
    const { emailId, personalInfo } = user;

    useEffect(() => {
        const authenticated = isAuthenticated();
        setIsUser(authenticated);
    }, [])

    return (
        <header className="w-full flex items-center justify-between p-4 shadow-md sticky top-0 backdrop-blur-lg z-20">
            <div className="logo cursor-pointer flex items-center gap-x-1" onClick={() => router.push(basicRoutes.home)}>
                <Image
                    src={Logo}
                    alt='logo'
                    className='w-10 h-10'
                />
                <div className="flex flex-col">
                    <h1 className='text-xl md:text-2xl font-extrabold text-primary'>Careplus</h1>
                    <p className='hidden sm:block ml-4 text-[12px] font-medium text-foreground'>No.1 Telehealth Services</p>
                </div>
            </div>

            <div className="hidden md:flex links items-center gap-x-7">
                {navLinks.map((li) => {
                    return (
                        <NextLink key={li.href} title={li.name} href={li.href} className={getActiveClass(li.href, pathname, theme)} />
                    )
                })}
            </div>
            {/* Toggle Button for mobile Nav */}
            <div className='flex items-center gap-x-4'>
                <div className="md:hidden flex items-center gap-x-1">
                    <ModeToggle />
                    <Sheet>
                        <SheetTrigger>
                            <HamburgerIcon className='' size={20} />
                        </SheetTrigger>
                        <SheetContent>
                            <MobileHeader />
                        </SheetContent>
                    </Sheet>
                </div>
                {loading ? (
                    <Loader />
                ) : (
                    !isUser ? (
                        <Button
                            icon={
                                <LoginIcon className='' />
                            }
                            onClick={() => router.push(authenticationRoutes.login)}
                            title='Login'
                            className='rounded-[6px] md:hidden px-5 font-semibold text-sm dark:text-white'
                        />
                    ) : (
                        <DropdownMenu>
                            <DropdownMenuTrigger>
                                <div className="rounded-full md:hidden overflow-hidden cursor-pointer border-2 border-primary  relative group shadow-md shadow-gray-900">
                                    {personalInfo?.profileImg ? (
                                        <img
                                            src={`${backendUrl}/${personalInfo?.profileImg}`}
                                            alt="User Profile"
                                            className='w-10 h-10'
                                        />
                                    ) : (
                                        <TextToImage nameText={emailId} />
                                    )}
                                    <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-full"></div>
                                </div>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="w-56 mr-10">
                                <DropdownMenuLabel className='dark:text-gray-200'>My Account</DropdownMenuLabel>
                                <p className='text-xs ml-2 dark:text-gray-400'>{emailId}</p>
                                <DropdownMenuSeparator className='bg-gray-200 mb-3 dark:bg-gray-800 mt-2' />
                                <DropdownMenuGroup>
                                    <DropdownMenuItem
                                        className='cursor-pointer dark:text-gray-200 dark:hover:text-white'
                                        onClick={() => router.push(patientRoutes.profile)}
                                    >
                                        My Profile
                                    </DropdownMenuItem>
                                </DropdownMenuGroup>
                                <DropdownMenuItem
                                    className='text-red-500 hover:!text-red-500 cursor-pointer'
                                    onClick={() => logout()}
                                >
                                    Logout
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    )
                )}
                <div className="sideNavigation hidden md:flex items-center gap-x-2" suppressHydrationWarning>
                    <ModeToggle />
                    {loading ? (
                        <Loader />
                    ) : (
                        !isUser ? (
                            <Button
                                icon={
                                    <LoginIcon className='' />
                                }
                                onClick={() => router.push(authenticationRoutes.login)}
                                title='Login'
                                className='rounded-[6px] px-5 font-semibold text-sm dark:text-white'
                            />
                        ) : (
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <div className=" rounded-full overflow-hidden cursor-pointer  relative group shadow-md shadow-gray-900">
                                        {personalInfo?.profileImg ? (
                                            <img
                                                src={`${backendUrl}/${personalInfo?.profileImg}`}
                                                alt="User Profile"
                                                className='w-10 h-10'
                                            />
                                        ) : (
                                            <TextToImage nameText={emailId} />
                                        )}
                                        <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-full"></div>
                                    </div>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent className="w-56 mr-10">
                                    <DropdownMenuLabel className='dark:text-gray-200'>My Account</DropdownMenuLabel>
                                    <p className='text-xs ml-2 dark:text-gray-400'>{emailId}</p>
                                    <DropdownMenuSeparator className='bg-gray-200 mb-3 dark:bg-gray-800 mt-2' />
                                    <DropdownMenuGroup>
                                        <DropdownMenuItem
                                            className='cursor-pointer dark:text-gray-200 dark:hover:text-white'
                                            onClick={() => router.push(patientRoutes.profile)}
                                        >
                                            My Profile
                                        </DropdownMenuItem>
                                    </DropdownMenuGroup>
                                    <DropdownMenuItem
                                        className='text-red-500 hover:!text-red-500 cursor-pointer'
                                        onClick={() => logout()}
                                    >
                                        Logout
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        ))}
                </div>
            </div >
        </header >
    )
}

export default Header
