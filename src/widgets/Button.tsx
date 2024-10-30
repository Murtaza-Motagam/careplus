import React from 'react'
import { Button as ButtonWidget } from '@/components/ui/button'
import { ButtonProps } from '@/types/Index'

const Button = ({ title, type, variant, ...props }: ButtonProps) => {
    return (
        <ButtonWidget className={`${props.icon && 'flex items-center justify-start gap-x-2'}`} type={type} variant={variant} {...props}>
            {props.icon && (
                props.icon
            )}
            {title}
        </ButtonWidget>
    )
}

export default Button
