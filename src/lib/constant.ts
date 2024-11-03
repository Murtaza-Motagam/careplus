// import getConfig from "next/config";
// const { publicRuntimeConfig } = getConfig();

// export const baseUrl = publicRuntimeConfig.NEXT_PUBLIC_FETCH_URL;
export const baseUrl = process.env.NEXT_PUBLIC_FETCH_URL;

export const PROTECTED_ROUTES = [
    '/about',
    '/explore',
    '/patient/home',
    '/patient/appointments',
    '/patient/appointments/book',
    '/patient/profile',
    '/physician/home',
    '/physician/profile',
]

export const appointmentStepper = [
    { index: 1, name: "Patient Information", subtext: "Fill details" },
    { index: 2, name: "Choose Doctor", subtext: "Select Physician" },
    { index: 3, name: "Appointment Details", subtext: "Set your time" },
    { index: 4, name: "Confirmation", subtext: "Review your choices" },
    { index: 5, name: "Payment", subtext: "Complete Appointment" }
];

export const genderOption = [
    { value: 'male', label: 'Male' },
    { value: 'female', label: 'Female' },
    { value: 'other', label: 'Other' }
];

export const patient = 'patient';
export const physician = 'physician';

export const LOGIN_TYPE = {
    patient: 'patient',
    physician: 'physician'
}