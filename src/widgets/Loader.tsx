import React from 'react'
import { PulseLoader } from 'react-spinners';

interface LoaderProps {
    size?: number
}

const Loader: React.FC<LoaderProps> = ({ size }) => {
    const primaryColorValue = getComputedStyle(document.documentElement).getPropertyValue('--primary').trim();
    const primaryColor = `hsl(${primaryColorValue})`;
    return (
        <PulseLoader color={primaryColor} size={size} />
    )
}

export default Loader
