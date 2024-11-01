import { registerSchema } from '@/schema/authentication';
import { RegisterValues } from '@/types/Index';
import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm } from 'react-hook-form';

const useRegister = () => {

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
        console.log(data)
        reset(defaultValues)
    }

    const hookform = { handleSubmit, register, errors};

    return {
        onSubmit,
        hookform,
    }
}

export default useRegister;
