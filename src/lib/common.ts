import { toast, Slide, ToastOptions } from 'react-toastify';
import Cookies from 'js-cookie';
import dayjs from 'dayjs';

export const navLinks = [
    {
        name: 'Bookings',
        href: '/bookings',
    },
    {
        name: 'Services',
        href: '/services',
    },
    {
        name: 'About us',
        href: '/about',
    },
];

export const hotelCards = [
    {
        title: "Benefits of Booking Hotels Online",
        description: "Discover how online hotel booking simplifies your travel planning, offering convenience and exclusive deals from the comfort of your home.",
        image: "https://plus.unsplash.com/premium_photo-1661964402307-02267d1423f5?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        title: "How Luxury Stays Enhance Travel Experiences",
        description: "Explore how staying at luxury hotels transforms your journey into an unforgettable and relaxing experience.",
        image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        title: "The Future of Hospitality",
        description: "Learn how technology and innovation are reshaping the hospitality industry, making hotel stays more personalized and efficient.",
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        title: "Top Tips for Booking the Perfect Hotel",
        description: "Maximize your travel experience with our expert advice on finding the ideal hotel for your needs and budget.",
        image: "https://plus.unsplash.com/premium_photo-1681922761648-d5e2c3972982?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
];

export const isAuthenticated = () => {
    return !!Cookies.get('Authorization-token');
};

export const getActiveClass = (route: string, pathname: string, mode: string | undefined) => {
    const isActive = pathname === route;
    const colorClass = mode === 'light' ? 'text-primary' : 'text-white';

    return `font-medium text-sm ${isActive ? colorClass : 'text-gray-700 hover:text-primary dark:text-gray-400 dark:hover:text-white'}`;
};

export const getActiveClassMobile = (route: string, pathname: string, mode: string | undefined) => {
    const isActive = pathname === route;
    const colorClass = mode === 'light' ? 'text-primary' : 'text-white';

    return `py-3 hover:border-2 hover:border-primary font-medium text-sm ${isActive ? colorClass : 'text-gray-700 hover:text-primary dark:text-gray-400 dark:hover:text-white'}`;
};

type ToastType = 'success' | 'info' | 'error' | 'warn';

const toastTypes: Record<ToastType, (message: string, options?: ToastOptions) => void> = {
    success: toast.success,
    info: toast.info,
    error: toast.error,
    warn: toast.warn,
};

export const capitalizeFirstLetter = (string: string) =>
    `${string?.charAt(0)?.toUpperCase()}${string?.slice(1)}`;


export const showToast = (
    message: string,
    type: ToastType = 'success',
    position: ToastOptions['position'] = 'top-right',
    autoClose: number = 3000
) => {
    const toastType = toastTypes[type];

    toastType(message, {
        position: position,
        autoClose: autoClose,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Slide,
    });
};

export const dateTimeDisplay = (date: Date, locale = 'en', format = 'DD MMM YYYY') => {
    if (date) {
        return dayjs(date).locale(locale).format(format);
    }
};

