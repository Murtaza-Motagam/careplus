import React from 'react'
import { baseUrl, LOGIN_TYPE } from '@/lib/constant';
import { registerSchema } from '@/schema/authentication';
import { RegisterValues } from '@/types/Index';
import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import {  useForm } from 'react-hook-form';
import Cookies from 'js-cookie';
import { LocalStorage } from '@/lib/localStorage';
import { showToast } from '@/lib/common';
import basicRoutes from '@/lib/routes';

const useRegister = () => {

    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const defaultValues: RegisterValues = {
        registerType: 'patient',
        email: '',
        password: '',
        confirmPassword: ''
    }

    const { register, reset, handleSubmit, formState: { errors } } = useForm({
        defaultValues,
        resolver: yupResolver(registerSchema)
    });

    console.log(errors)

    const onSubmit = async (data: RegisterValues) => {
        setLoading(true);
        const { registerType, email, password, confirmPassword } = data;
        const loginPayload = {
            emailId: email,
            password: password
        }
        try {
            if(password === confirmPassword){
                const url = `${baseUrl}/${registerType === LOGIN_TYPE.patient ? LOGIN_TYPE.patient : LOGIN_TYPE.physician}/auth/register`;
                const response = await axios({
                url,
                data: loginPayload,
                method: 'post'
            });
            const resData = response.data;
            if (resData?.success) {
                Cookies.set('Authorization-token', resData.authtoken, { expires: 7, secure: true });
                const savePayload = {
                    authorization: resData?.authtoken,
                    module: resData?.module
                }
                LocalStorage.setJSON('authDetails', savePayload);
                showToast(resData?.message, 'success');
                router.push(basicRoutes.home)
            }
            else {
                showToast(resData?.message, 'error')
            }
            reset(defaultValues)
        }else{
            showToast("Both password doesn't match", 'error')
        }
        } catch (err) {
            showToast('Some error has occurred. Please wait for some time', 'error')
        } finally {
            setLoading(false);
        }
    }
    
    const hookform = { handleSubmit, register, errors };

    return {
        onSubmit,
        hookform,
        loading,
    }
}

export default useRegister;
