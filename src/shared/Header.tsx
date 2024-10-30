'use client'
import { getActiveClass, navLinks } from '@/lib/common'
import basicRoutes, { authenticationRoutes } from '@/lib/routes'
import Button from '@/widgets/Button'
import NextLink from '@/widgets/NextLink'
import HamburgerIcon from '@/Icons/HamburgerIcon'
import React from 'react'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import MobileHeader from './MobileHeader'
import { ModeToggle } from '@/components/ui/ModeToggle'
import { useRouter, usePathname } from 'next/navigation'
import { useTheme } from 'next-themes'
import Image from 'next/image'
import LoginIcon from '@/Icons/LoginIcon'
import Logo from '@/assets/logo.png'

const Header = () => {

    const router = useRouter();
    const pathname = usePathname();
    const { theme } = useTheme();

    return (
        <header className="w-full flex items-center justify-between p-4 shadow-md sticky top-0 backdrop-blur-md z-20">
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
                <div className="md:hidden w-10 h-10 rounded-full overflow-hidden cursor-pointer border-2 border-primary  relative group">
                    <Image
                        src="https://images.unsplash.com/photo-1685903772095-f07172808761?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Replace with your image path
                        alt="User Profile"
                        layout="responsive"
                        width={40}
                        height={40}
                    />
                    <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-full"></div>
                </div>
                <div className="sideNavigation hidden md:flex items-center gap-x-2">
                    <ModeToggle />
                    <Button icon={
                        <LoginIcon className='' />
                    } onClick={() => router.push(authenticationRoutes.login)} title='Login' className='rounded-2xl px-5 font-semibold text-sm dark:text-white' />
                    {/* <div className="w-10 h-10 rounded-full overflow-hidden cursor-pointer border-2 border-primary  relative group">
                        <Image
                            src="https://images.unsplash.com/photo-1685903772095-f07172808761?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Replace with your image path
                            alt="User Profile"
                            layout="responsive"
                            width={40}
                            height={40}
                        />
                        <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-full"></div>
                    </div> */}
                </div>
            </div>
        </header>
    )
}

export default Header
