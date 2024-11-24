import React from 'react'
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"
import Details from '@/components/common/Details';
import { User2Icon } from 'lucide-react';
import PageLoader from './PageLoader';

const BoxDrawer = ({
    open,
    onClose,
    type,
}: {
    open?: boolean;
    onClose: () => void;
    type?: string;
}) => {

    return (
        <Drawer open={open} onOpenChange={onClose}>
            <DrawerContent className="w-full min-h-[50vh]">
                {true ? (
                    <>
                        <DrawerHeader>
                            <DrawerTitle></DrawerTitle>
                            <DrawerDescription></DrawerDescription>
                        </DrawerHeader>
                        <PageLoader />
                    </>
                ) : (
                    <>
                        <DrawerHeader>
                            <DrawerTitle>Medical Details</DrawerTitle>
                            <DrawerDescription>
                                Here are the medical details.
                            </DrawerDescription>
                        </DrawerHeader>
                        <div className="w-full">
                            <div className="grid grid-cols-2 md:grid-cols-5 gap-5 px-4">
                                <Details className='border border-gray-400 dark:border-gray-900 p-3 rounded-xl' detail={'Male'} icon={<User2Icon size={15} className='text-primary' />} heading='Gender' />
                                <Details className='border border-gray-400 dark:border-gray-900 p-3 rounded-xl' detail={'Male'} icon={<User2Icon size={15} className='text-primary' />} heading='Gender' />
                                <Details className='border border-gray-400 dark:border-gray-900 p-3 rounded-xl' detail={'Male'} icon={<User2Icon size={15} className='text-primary' />} heading='Gender' />
                                <Details className='border border-gray-400 dark:border-gray-900 p-3 rounded-xl' detail={'Male'} icon={<User2Icon size={15} className='text-primary' />} heading='Gender' />
                                <Details className='border border-gray-400 dark:border-gray-900 p-3 rounded-xl' detail={'Male'} icon={<User2Icon size={15} className='text-primary' />} heading='Gender' />
                                <Details className='border border-gray-400 dark:border-gray-900 p-3 rounded-xl' detail={'Male'} icon={<User2Icon size={15} className='text-primary' />} heading='Gender' />
                            </div>
                        </div>
                    </>
                )
                }
            </DrawerContent >
        </Drawer >
    );
};


export default BoxDrawer
