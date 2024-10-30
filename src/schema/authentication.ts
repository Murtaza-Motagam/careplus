import { passwordValidate } from '@/lib/regex';
import * as yup from 'yup';

export const registerSchema = yup.object().shape({
    email: yup.string().email("Invalid email address").required("Email is required"),
    password: yup
        .string()
        .min(8, "Password must be at least 8 characters")
        .matches(passwordValidate, "Password must contains at least 8 characters, one uppercase letter, lowercase letter, digit and special character.")
        .required("Password is required"),
    confirmPassword: yup.string().oneOf([yup.ref('password')], "Both Passwords should be same").required("Confirm Password is required"),
    terms: yup.boolean()
});

export const loginSchema = yup.object().shape({
    email: yup.string().email("Invalid email address").required("Email is required"),
    password: yup
        .string()
        .required("Password is required"),
});
