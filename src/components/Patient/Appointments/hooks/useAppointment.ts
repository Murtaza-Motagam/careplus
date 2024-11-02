import { patientDetailSchema } from '@/schema/appointmentSchema';
import { AppointmentProps } from '@/types/Index';
import { yupResolver } from '@hookform/resolvers/yup';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const defaultValues: AppointmentProps = {
    fullName: '',
    dob: new Date(),
    gender: 'Male',
    mobNo: '',
    email: '',
    city: '',
    state: '',
    country: '',
}

const useAppointment = () => {
    const [activeStep, setActiveStep] = useState(1);

    const schemaStep = [patientDetailSchema];

    const { register, handleSubmit, setValue, trigger, clearErrors, watch, control, formState: { errors } } = useForm<AppointmentProps>({
        resolver: yupResolver(schemaStep[activeStep]),
        defaultValues,
    });

    const onsubmit = async (data: AppointmentProps) => {
        console.log(data)
    }

    const hookform = { register, handleSubmit, setValue, clearErrors, trigger, watch, control, errors };


    return {
        activeStep,
        setActiveStep,
        hookform,
        onsubmit,
    }
}

export default useAppointment;
