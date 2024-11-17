import React, { useState } from 'react'
import { patientDetailSchema } from '@/schema/appointmentSchema';
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
    fullName: '',
    dob: new Date(),
    genderId: '',
    genderNm: '',
    mobNo: '',
    email: '',
    cityId: '',
    cityNm: '',
    stateId: '',
    stateNm: '',
    address: '',
}

const usePatientDetail = () => {

    const [loading, setLoading] = useState(false);
    const router = useRouter();
    const checkForModule = LocalStorage.get('authDetails');

    const { register, handleSubmit, setValue, trigger, clearErrors, watch, reset, control, formState: { errors } } = useForm<AppointmentProps>({
        resolver: yupResolver(patientDetailSchema),
        defaultValues,
    });

    const onsubmit = async (data: AppointmentProps) => {
        setLoading(true)
        const { fullName, email, address, dob, cityNm, stateNm, mobNo, genderNm } = data;
        try {
            const url = `${baseUrl}/patient/appointment/patient-details`;
            const response = await axios({
                url,
                data: {
                    fullName, emailId: email, address, dateOfBirth: dob, city: cityNm, state: stateNm, mobNo, gender: genderNm
                },
                method: 'post',
                headers: {
                    Authorization: checkForModule?.authorization
                }
            });
            const resData = response.data;
            showToast(resData?.message, resData?.success === true ? 'success' : 'error');
            LocalStorage.setJSON('patient-details', resData?.data?.patientDetails)
            router.push(`${patientRoutes.bookAppointment}?tab=2`);
            reset(defaultValues)
        } catch (err) {
            console.error(err)
        } finally {
            setLoading(false);
        }
    }

    const hookform = { register, handleSubmit, setValue, clearErrors, trigger, watch, control, errors };

    return {
        hookform,
        onsubmit,
        loading,
    }
}

export default usePatientDetail
