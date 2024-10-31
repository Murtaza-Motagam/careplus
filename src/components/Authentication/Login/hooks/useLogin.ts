import  { loginSchema } from '@/schema/authentication';
import { loginValues, RegisterValues } from '@/types/Index';
import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm } from 'react-hook-form';

const useLogin = () => {

    const defaultValues: loginValues = {
        email: '',
        password: '',
    }

    const { register, setValue, reset, handleSubmit, formState: { errors } } = useForm<loginValues>({
        defaultValues,
        resolver: yupResolver(loginSchema)
    });

    const onSubmit: SubmitHandler<loginValues>= async (data) => {
      console.log(data)
      reset(defaultValues)
    }
    
    return {
        onSubmit,
        handleSubmit,
        register,
        errors,
    }
}

export default useLogin;
