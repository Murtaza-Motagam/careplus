'use client'
import { Label } from '@/components/ui/label';
import { Input as Inputs } from '@/components/ui/input';
import React, { useState } from 'react';
import { PasswordType } from '@/types/Index';
import EyeOpen from '@/Icons/EyeOpen'
import EyeClose from '@/Icons/EyeClose'
import InfoIcon from '@/Icons/InfoIcon';

const PasswordInput = ({ label, placeholder, errors, parentClassName, rest }: PasswordType) => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        setIsVisible((prev) => !prev);
    };

    return (
        <div className={`grid w-full max-w-sm items-center gap-1.5 ${parentClassName}`}>
            <Label htmlFor={label}>{label}</Label>
            <div className="relative">
                <Inputs
                    className={`${errors ? 'border-2 border-red-500' : ''
                        } focus:!outline-none focus:ring-0 focus:border-none`}
                    placeholder={placeholder}
                    type={isVisible ? 'text' : 'password'}
                    {...rest}
                />
                <button
                    type="button"
                    onClick={toggleVisibility}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2"
                >
                    {isVisible ? <EyeClose size={17} className='text-gray-500 hover:text-gray-800' /> : <EyeOpen size={17} className='text-gray-500 hover:text-gray-800' />}
                </button>
            </div>
            {errors && (
                <div className="flex items-center justify-start">
                    <InfoIcon size={14} className='text-red-600' />
                    <p className='!ml-1 text-red-600 text-xs' >{errors}</p>
                </div>
            )}
        </div>
    );
};

export default PasswordInput;
