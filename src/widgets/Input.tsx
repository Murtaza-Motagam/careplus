import { Label } from '@/components/ui/label';
import { Input as Inputs } from '@/components/ui/input';
import React from 'react'
import { InputType } from '@/types/Index';
import InfoIcon from '@/Icons/InfoIcon'

const Input = ({ label, placeholder, type, className, parentClassName, errors, rest }: InputType) => {
    return (
        <div className={`grid w-full max-w-sm items-center gap-1.5 ${parentClassName}`}>
            <Label className='text-gray-900 dark:text-gray-300' htmlFor={label}>{label}</Label>
            <Inputs className={`${errors && 'border-2 border-red-500'} focus:!outline-none focus:ring-0 foucs:outline-0 ${className}`} placeholder={placeholder} type={type} {...rest} />
            {errors && (
                <div className="flex items-center justify-start">
                    <InfoIcon size={14} className='text-red-600' />
                    <p className='!ml-1 text-red-600 text-xs' >{errors}</p> 
                </div>
            )}
        </div>
    )
}

export default Input
