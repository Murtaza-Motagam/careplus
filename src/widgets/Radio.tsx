import { RadioButtonProps } from '@/types/Index'
import React from 'react'

const Radio: React.FC<RadioButtonProps> = ({label, className, parentClassName, value, disabled, checked, id, rest}) => {
    return (
        <label className={`flex items-center cursor-pointer space-x-2 ${parentClassName}`}>
            <input
                type="radio"
                className={`focus:ring-primary ${className}`}
                value={value}
                disabled={disabled}
                id={id}
                checked={checked}
                {...rest}
            />
            <span>{label}</span>
        </label>
    )
}

export default Radio
