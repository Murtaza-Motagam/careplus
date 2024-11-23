import { Textarea } from '@/components/ui/textarea'
import { TextareaProps } from '@/types/Index'
import { Label } from '@/components/ui/label';
import React from 'react'
import InfoIcon from '@/Icons/InfoIcon';

const TextArea = ({ label, placeholder, className, showInline, parentClassName, errors, rest }: TextareaProps) => {
    return (
        <div className={`w-full ${parentClassName}`}>
            <Label className="text-gray-900 dark:text-gray-300" htmlFor={label}>
                {label}
            </Label>
            <Textarea placeholder={placeholder} className={className} />
            {showInline ? (
                errors && (
                    <div className="flex items-center justify-start">
                        <InfoIcon size={14} className="text-red-600" />
                        <p className="!ml-1 text-red-600 text-xs">{errors}</p>
                    </div>
                )
            ) : (
                <div className="flex items-center justify-start min-h-[1rem]">
                    {errors ? (
                        <>
                            <InfoIcon size={14} className="text-red-600" />
                            <p className="!ml-1 text-red-600 text-xs">{errors}</p>
                        </>
                    ) : (
                        <span className="text-transparent text-xs">No error</span>
                    )}
                </div>
            )}
        </div>
    )
}

export default TextArea
