// import getConfig from "next/config";
// const { publicRuntimeConfig } = getConfig();

// export const baseUrl = publicRuntimeConfig.NEXT_PUBLIC_FETCH_URL;
export const baseUrl = process.env.NEXT_PUBLIC_FETCH_URL;

export const PROTECTED_ROUTES = [
    '/about',
    '/explore',
    '/patient/home',
    '/patient/profile',
    '/physician/home',
    '/physician/profile',
]

export const patient = 'patient';
export const physician = 'physician';

export const LOGIN_TYPE = {
    patient: 'patient',
    physician: 'physician'
}