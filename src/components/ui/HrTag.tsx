import React from 'react'

const HrTag = () => {
    return (
        <>
            <hr className="border-t border-transparent" />
            <div className="relative">
                <span className="absolute left-0 top-0 -translate-x-1/2 -translate-y-1/2 bg-white px-3 text-sm text-gray-600"></span>
                <div className="h-1 bg-gradient-to-r from-blue-500 to-green-500"></div>
            </div>
        </>
    )
}

export default HrTag
