'use client';
import { SheetContent, SheetTitle } from '@/components/ui/sheet';
import { getActiveClassMobile, navLinks } from '@/lib/common';
import basicRoutes from '@/lib/routes';
import NextLink from '@/widgets/NextLink';
import { useTheme } from 'next-themes';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden'
import React from 'react'

const MobileHeader = () => {
    const router = useRouter();
    const pathname = usePathname();
    const { theme } = useTheme();
    return (
        <SheetContent>
            <SheetTitle className="hidden">
                <VisuallyHidden>
                    Menu
                </VisuallyHidden> 
            </SheetTitle>
            <div className="logo cursor-pointer flex items-center w-full justify-between" onClick={() => router.push(basicRoutes.home)}>
                <p>Careplus</p>
            </div>

            <SheetTitle className="w-full mt-4 flex flex-col gap-y-5 text-center">
                {navLinks.map((li) => {
                    return (
                        <NextLink key={li.href} title={li.name} href={li.href} className={getActiveClassMobile(li.href, pathname, theme)} />
                    )
                })}
            </SheetTitle>
        </SheetContent>
    )
}

export default MobileHeader
