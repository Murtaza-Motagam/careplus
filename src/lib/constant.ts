// import getConfig from "next/config";
// const { publicRuntimeConfig } = getConfig();

import {  CalendarCheck,  DoorOpen, Earth, Star } from "lucide-react";

// export const baseUrl = publicRuntimeConfig.NEXT_PUBLIC_FETCH_URL;
export const baseUrl = process.env.NEXT_PUBLIC_FETCH_URL;
export const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

export const PROTECTED_ROUTES = [
    '/profile',
];

export const theme_type = {
    dark: 'dark',
    light: 'light',
    system: 'system',
};

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


export const maritalOption = [
    { value: 'single', label: 'Single' },
    { value: 'married', label: 'Married' }
];

export const statesOption = [
    { value: "andhra_pradesh", label: "Andhra Pradesh" },
    { value: "arunachal_pradesh", label: "Arunachal Pradesh" },
    { value: "assam", label: "Assam" },
    { value: "bihar", label: "Bihar" },
    { value: "chhattisgarh", label: "Chhattisgarh" },
    { value: "goa", label: "Goa" },
    { value: "gujarat", label: "Gujarat" },
    { value: "haryana", label: "Haryana" },
    { value: "himachal_pradesh", label: "Himachal Pradesh" },
    { value: "jharkhand", label: "Jharkhand" },
    { value: "karnataka", label: "Karnataka" },
    { value: "kerala", label: "Kerala" },
    { value: "madhya_pradesh", label: "Madhya Pradesh" },
    { value: "maharashtra", label: "Maharashtra" },
    { value: "manipur", label: "Manipur" },
    { value: "meghalaya", label: "Meghalaya" },
    { value: "mizoram", label: "Mizoram" },
    { value: "nagaland", label: "Nagaland" },
    { value: "odisha", label: "Odisha" },
    { value: "punjab", label: "Punjab" },
    { value: "rajasthan", label: "Rajasthan" },
    { value: "sikkim", label: "Sikkim" },
    { value: "tamil_nadu", label: "Tamil Nadu" },
    { value: "telangana", label: "Telangana" },
    { value: "tripura", label: "Tripura" },
    { value: "uttar_pradesh", label: "Uttar Pradesh" },
    { value: "uttarakhand", label: "Uttarakhand" },
    { value: "west_bengal", label: "West Bengal" },
    { value: "andaman_nicobar_islands", label: "Andaman and Nicobar Islands" },
    { value: "chandigarh", label: "Chandigarh" },
    { value: "dadra_nagar_haveli", label: "Dadra and Nagar Haveli" },
    { value: "daman_and_diu", label: "Daman and Diu" },
    { value: "delhi", label: "Delhi" },
    { value: "lakshadweep", label: "Lakshadweep" },
    { value: "puducherry", label: "Puducherry" }
];

export const citiesOption = [
    { value: "mumbai", label: "Mumbai", state: "Maharashtra" },
    { value: "pune", label: "Pune", state: "Maharashtra" },
    { value: "delhi", label: "Delhi", state: "Delhi" },
    { value: "bangalore", label: "Bangalore", state: "Karnataka" },
    { value: "hyderabad", label: "Hyderabad", state: "Telangana" },
    { value: "chennai", label: "Chennai", state: "Tamil Nadu" },
    { value: "kolkata", label: "Kolkata", state: "West Bengal" },
    { value: "ahmedabad", label: "Ahmedabad", state: "Gujarat" },
    { value: "surat", label: "Surat", state: "Gujarat" },
    { value: "jaipur", label: "Jaipur", state: "Rajasthan" },
    { value: "lucknow", label: "Lucknow", state: "Uttar Pradesh" },
    { value: "indore", label: "Indore", state: "Madhya Pradesh" },
    { value: "chandigarh", label: "Chandigarh", state: "Chandigarh" },
    { value: "patna", label: "Patna", state: "Bihar" },
    { value: "bhopal", label: "Bhopal", state: "Madhya Pradesh" },
    { value: "nagpur", label: "Nagpur", state: "Maharashtra" },
    { value: "visakhapatnam", label: "Visakhapatnam", state: "Andhra Pradesh" },
    { value: "ludhiana", label: "Ludhiana", state: "Punjab" },
    { value: "kanpur", label: "Kanpur", state: "Uttar Pradesh" },
    { value: "vijayawada", label: "Vijayawada", state: "Andhra Pradesh" },
    { value: "mohali", label: "Mohali", state: "Punjab" },
    { value: "coimbatore", label: "Coimbatore", state: "Tamil Nadu" },
    { value: "navi_mumbai", label: "Navi Mumbai", state: "Maharashtra" },
    { value: "kalyan", label: "Kalyan", state: "Maharashtra" },
    { value: "gwalior", label: "Gwalior", state: "Madhya Pradesh" },
    { value: "howrah", label: "Howrah", state: "West Bengal" },
    { value: "aurangabad", label: "Aurangabad", state: "Maharashtra" },
    { value: "patiala", label: "Patiala", state: "Punjab" },
    { value: "raipur", label: "Raipur", state: "Chhattisgarh" },
    { value: "ranchi", label: "Ranchi", state: "Jharkhand" },
    { value: "guwahati", label: "Guwahati", state: "Assam" },
    { value: "dhanbad", label: "Dhanbad", state: "Jharkhand" },
    { value: "bhubaneswar", label: "Bhubaneswar", state: "Odisha" },
    { value: "jamshedpur", label: "Jamshedpur", state: "Jharkhand" },
    { value: "belgaum", label: "Belgaum", state: "Karnataka" },
    { value: "tirunelveli", label: "Tirunelveli", state: "Tamil Nadu" },
    { value: "puducherry", label: "Puducherry", state: "Puducherry" },
    { value: "goa", label: "Goa", state: "Goa" },
    { value: "shimla", label: "Shimla", state: "Himachal Pradesh" },
    { value: "kottayam", label: "Kottayam", state: "Kerala" },
    { value: "dehradun", label: "Dehradun", state: "Uttarakhand" },
    { value: "port_blair", label: "Port Blair", state: "Andaman and Nicobar Islands" },
    { value: "durgapur", label: "Durgapur", state: "West Bengal" },
    { value: "tirupur", label: "Tirupur", state: "Tamil Nadu" }
];

export const statistics = [
    {
        title: 'Total Bookings',
        value: 32000,
        icon: CalendarCheck,
    },
    {
        title: 'Total Rating',
        value: 42000,
        icon: Star,
    },
    {
        title: 'Total Rooms',
        value: 30000,
        icon: DoorOpen,
    },
    {
        title: 'Covered Cities',
        value: 5000,
        icon: Earth
    },
];