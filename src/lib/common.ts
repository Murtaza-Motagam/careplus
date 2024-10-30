export const navLinks = [
    {
        name: 'Services',
        href: '/services',
    },
    {
        name: 'Consultations',
        href: '/consultations',
    },
    {
        name: 'About Us',
        href: '/about',
    },
    {
        name: 'Resources',
        href: '/resources',
    },
    {
        name: 'Contact Us',
        href: '/contact',
    },
];

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