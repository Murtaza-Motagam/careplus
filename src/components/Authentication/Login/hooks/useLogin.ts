import React from 'react'
import { loginSchema } from '@/schema/authentication';
import { loginValues, RegisterValues } from '@/types/Index';
import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useState } from 'react';
import { baseUrl, LOGIN_TYPE } from '@/lib/constant';
import axios from 'axios'
import { showToast } from '@/lib/common';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import basicRoutes from '@/lib/routes';
import { LocalStorage } from '@/lib/localStorage';

const useLogin = () => {
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const defaultValues: loginValues = {
        registerType: 'patient',
        email: '',
        password: '',
    }

    const { register, reset, handleSubmit, formState: { errors } } = useForm<loginValues>({
        defaultValues,
        resolver: yupResolver(loginSchema)
    });

    const onSubmit: SubmitHandler<loginValues> = async (data) => {
        setLoading(true);
        const { registerType, email, password } = data;
        const loginPayload = {
            emailId: email,
            password: password
        }
        try {
            const url = `${baseUrl}/${registerType === LOGIN_TYPE.patient ? LOGIN_TYPE.patient : LOGIN_TYPE.physician}/auth/login`;
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
            else{
                showToast(resData?.message, 'error')
            }
            reset(defaultValues)
        } catch (err) {
            showToast('Some error has occurred. Please wait for some time', 'error')
        } finally {
            setLoading(false);
        }
    }

    return {
        onSubmit,
        handleSubmit,
        register,
        errors,
        loading,
    }
}

export default useLogin;
