import React from 'react'
import {
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"

const AddDetailModal = ({ children, title, description }: { children: React.ReactNode, title?: string; description?: string; }) => {
    return (
        <DialogContent className="sm:max-w-md">
            <DialogHeader>
                <DialogTitle className='border-b pb-5'>{title}</DialogTitle>
                <DialogDescription>{description}</DialogDescription>
            </DialogHeader>
            {children}
        </DialogContent>
    )
}

export default AddDetailModal
