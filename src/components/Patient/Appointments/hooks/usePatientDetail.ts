import React, { useEffect } from 'react'
import { patientDetailSchema } from '@/schema/appointmentSchema';
import { AppointmentProps } from '@/types/Index';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import axios from 'axios';


const defaultValues: AppointmentProps = {
    fullName: '',
    dob: new Date(),
    genderId: '',
    genderNm: '',
    mobNo: '',
    email: '',
    city: '',
    state: '',
    country: '',
    address: '',
}

const usePatientDetail = () => {

    const { register, handleSubmit, setValue, trigger, clearErrors, watch, control, formState: { errors } } = useForm<AppointmentProps>({
        resolver: yupResolver(patientDetailSchema),
        defaultValues,
    });

    const onsubmit = async (data: AppointmentProps) => {
        console.log(data)
    }

    // useEffect(() => {
    //     fetchCountries();
    // }, [])

    const hookform = { register, handleSubmit, setValue, clearErrors, trigger, watch, control, errors };

    return {
        hookform,
        onsubmit,
    }
}

export default usePatientDetail
