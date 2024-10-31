import { registerSchema } from '@/schema/authentication';
import { RegisterValues } from '@/types/Index';
import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm } from 'react-hook-form';

const useRegister = () => {

    const defaultValues: RegisterValues = {
        email: '',
        password: '',
        confirmPassword: '',
        terms: '',
    }

    const { register, reset, handleSubmit, formState: { errors } } = useForm({
        defaultValues,
        resolver: yupResolver(registerSchema)
    });
    console.log(errors)

    const onSubmit: SubmitHandler<RegisterValues> = async (data) => {
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

export default useRegister;
