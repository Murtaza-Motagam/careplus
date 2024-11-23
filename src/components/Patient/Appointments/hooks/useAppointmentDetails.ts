import React, { useEffect, useState } from 'react'
import { appointmentDetailSchema } from '@/schema/appointmentSchema';
import { AppointmentProps } from '@/types/Index';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { baseUrl } from '@/lib/constant';
import { useRouter } from 'next/navigation';
import { patientRoutes } from '@/lib/routes';
import { showToast } from '@/lib/common';
import { LocalStorage } from '@/lib/localStorage';


const defaultValues: AppointmentProps = {
    appointmentDateTime: new Date(),
    reasonForVisit: '',
    appointmentStatus: '',
    location: '',
    appointmentType: '',
    notes: '',
}


const useAppointmentDetails = ({ appointmentId }: { appointmentId: Number}) => {
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    const checkForModule = LocalStorage.get('authDetails');

    const { register, handleSubmit, setValue, trigger, clearErrors, watch, reset, control, formState: { errors } } = useForm<AppointmentProps>({
        resolver: yupResolver(appointmentDetailSchema),
        defaultValues,
    });

    const onsubmit = async (data: AppointmentProps) => {
        console.log('data: ', data); 
    }
    

    const hookform = { register, handleSubmit, setValue, clearErrors, trigger, watch, control, errors };

    return {
        hookform,
        loading,
        onsubmit
    }
}

export default useAppointmentDetails;
