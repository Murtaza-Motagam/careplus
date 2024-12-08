import { loginSchema } from '@/schema/authentication';
import { loginValues} from '@/types/Index';
import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useState } from 'react';
import { baseUrl } from '@/lib/constant';
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
        email: '',
        password: '',
    }

    const { register, reset, handleSubmit, formState: { errors } } = useForm<loginValues>({
        defaultValues,
        resolver: yupResolver(loginSchema)
    });

    const onSubmit: SubmitHandler<loginValues> = async (data) => {
        setLoading(true);
        const { email, password } = data;
        const loginPayload = {
            emailId: email,
            password: password
        }
        try {
            const url = `${baseUrl}/auth/login`;
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
            console.error('error: ', err);
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
