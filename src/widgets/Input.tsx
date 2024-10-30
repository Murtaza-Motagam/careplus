import { Label } from '@/components/ui/label';
import { Input as Inputs } from '@/components/ui/input';
import React from 'react'
import { InputType } from '@/types/Index';

const Input = ({ label, placeholder, type, parentClassName, errors, rest }: InputType) => {
    return (
        <div className={`grid w-full max-w-sm items-center gap-1.5 ${parentClassName}`}>
            <Label htmlFor={label}>{label}</Label>
            <Inputs className={`${errors && 'border-2 border-red-500'} focus:!outline-none focus:ring-0 foucs:outline-0`} placeholder={placeholder} type={type} {...rest} />
            {errors && <p className='!ml-1 text-red-600 text-xs' >{errors}</p>}
        </div>
    )
}

export default Input
