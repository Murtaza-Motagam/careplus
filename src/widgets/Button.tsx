'use client'
import React from 'react'
import { Button as ButtonWidget } from '@/components/ui/button'
import { ButtonProps } from '@/types/Index'

const Button = ({ title, type, variant, onClick, ...props }: ButtonProps) => {
    return (
        <ButtonWidget onClick={onClick} className={`${props.icon && 'flex items-center justify-start gap-x-2'}`} type={type} variant={variant} {...props}>
            {props.icon && (
                props.icon
            )}
            {title}
        </ButtonWidget>
    )
}

export default Button
