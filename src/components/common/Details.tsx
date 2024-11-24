import React from 'react'

const Details = ({ heading, detail, icon, className }: { heading?: string, detail?: string, icon?: React.ReactNode, className?:string }) => {
    return (
        <div className={className}>
            <p className="text-sm font-semibold dark:text-gray-400 flex items-center justify-start gap-x-1">
                <span>{icon}</span>
                <span className='mt-0.5'>{heading && `${heading}:`}</span>
            </p>
            <p className="font-medium">{detail}</p>
        </div>
    )
}

export default Details
