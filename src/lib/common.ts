import { toast, Slide, ToastOptions } from 'react-toastify';
import Cookies from 'js-cookie';
import dayjs from 'dayjs';

export const navLinks = [
    {
        name: 'Appointments',
        href: '/patient/appointments',
    },
    {
        name: 'Explore',
        href: '/explore',
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

export const doctors = [
    {
        name: 'Leslie Alexander',
        position: 'Neurologist',
        imageUrl:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
        name: 'Michael Foster',
        position: 'Cardiologist',
        imageUrl:
            'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
        name: 'Dries Vincent',
        position: 'Orthopedic Surgeon',
        imageUrl:
            'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
        name: 'Lindsay Walton',
        position: 'Pediatrician',
        imageUrl:
            'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
        name: 'Courtney Henry',
        position: 'Psychiatrist',
        imageUrl:
            'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
        name: 'Tom Cook',
        position: 'General Practitioner',
        imageUrl:
            'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
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
  
