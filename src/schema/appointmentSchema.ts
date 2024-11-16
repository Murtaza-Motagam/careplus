import { mobNoValidate } from '@/lib/regex';
import * as yup from 'yup';


export const patientDetailSchema = yup.object().shape({
    fullName: yup.string().trim().required('Name is required'),
    dob: yup
        .date()
        .required('Date of birth is required')
        .typeError('Invalid date format'),
    genderId: yup.string().required('Gender is required'),
    genderNm: yup.string().optional(),
    mobNo: yup
        .string()
        .matches(mobNoValidate, 'Contact number must be exactly 10 digits')
        .required('Contact number is required'),
    email: yup.string().email('Invalid email format').required('Email is required'),
    city: yup.string().trim().required('City is required'),
    state: yup.string().trim().required('State is required'),
    country: yup.string().trim().required('Country is required'),
    address: yup.string().trim().required('Address is required'),
});
