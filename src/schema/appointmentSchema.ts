import { mobNoValidate } from '@/lib/regex';
import * as yup from 'yup';


export const patientDetailSchema = yup.object().shape({
    fullName: yup.string().trim().required('Name is required'),
    dob: yup
        .date()
        .required('Date of birth is required')
        .typeError('Invalid date format'),
    genderNm: yup.string().required('Gender is required'),
    genderId: yup.string().optional(),
    mobNo: yup
        .string()
        .matches(mobNoValidate, 'Must be 10 digits')
        .required('Contact number is required'),
    email: yup.string().email('Invalid email format').required('Email is required'),
    cityNm: yup.string().trim().required('City is required'),
    cityId: yup.string().optional(),
    stateNm: yup.string().trim().required('State is required'),
    stateId: yup.string().optional(),
    address: yup.string().trim().required('Address is required'),
});
