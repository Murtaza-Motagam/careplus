export const authenticationRoutes = {
    register: '/register',
    login: '/login'
}

const basicRoutes = {
    home: '/',
    profile: '/patient/profile',
    aboutUs: '/about',
    consultation: '/consultation',
    services: '/services',
    explore: '/explore',
}

export const patientRoutes = {
    home: '/patient/home',
    profile: '/patient/profile',
    appointments: '/patient/appointments',
    bookAppointment: '/patient/appointments/book',
}

export const physician = {
    home: '/physician/home',
    profile: '/physician/profile'
}

export default basicRoutes