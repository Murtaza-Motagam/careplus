import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import InfoIcon from '@/Icons/InfoIcon'
import { CheckBoxTypeProps } from '@/types/Index'
import React from 'react'

const CheckBox: React.FC<CheckBoxTypeProps> = ({ id, label, errors, parentClassName, className, htmlFor, rest }) => {
    return (
        <div className='flex flex-col gap-y-2'>
            <div className={`flex items-center space-x-2 ${parentClassName}`}>
                <Checkbox id={id} className={className}  {...rest} />
                <Label htmlFor={htmlFor}>{label}</Label>
            </div>
            {errors && (
                <div className="flex items-center justify-start">
                    <InfoIcon size={14} className='text-red-600' />
                    <p className='!ml-1 text-red-600 text-xs' >{errors}</p>
                </div>
            )}
        </div>
    )
}

export default CheckBox
