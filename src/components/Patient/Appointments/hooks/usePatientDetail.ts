import React, { useEffect, useState } from 'react'
import { patientDetailSchema } from '@/schema/appointmentSchema';
import { PatientProps } from '@/types/Index';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { baseUrl } from '@/lib/constant';
import { useRouter } from 'next/navigation';
import { patientRoutes } from '@/lib/routes';
import { showToast } from '@/lib/common';
import { LocalStorage } from '@/lib/localStorage';


const defaultValues: PatientProps = {
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
}

const usePatientDetail = ({ appointmentId }: { appointmentId: Number | undefined }) => {

    const [loading, setLoading] = useState(false);
    const router = useRouter();
    const checkForModule = LocalStorage.get('authDetails');
    const getLocalData = LocalStorage.get('AppointmentDetails');
    const patientData = getLocalData?.patientDetails;

    const { register, handleSubmit, setValue, trigger, clearErrors, watch, reset, control, formState: { errors } } = useForm<PatientProps>({
        resolver: yupResolver(patientDetailSchema),
        defaultValues,
    });

    const onsubmit = async (data: PatientProps) => {
        setLoading(true)
        const { fullName, email, dob, cityNm, stateNm, mobNo, genderNm } = data;
        try {
            const url = `${baseUrl}/patient/appointment/patient-details${appointmentId && `?appointmentId=${appointmentId}`}`;
            const response = await axios({
                url,
                data: {
                    patientDetails: {
                        fullName, emailId: email, dateOfBirth: dob, city: cityNm, state: stateNm, mobNo, gender: genderNm
                    }
                },
                method: 'post',
                headers: {
                    Authorization: checkForModule?.authorization
                }
            });
            const resData = response.data;
            showToast(resData?.message, resData?.success === true ? 'success' : 'error');
            const saveDetails = {
                patientDetails: resData?.appointment?.patientDetails,
                appointmentId: resData?.appointment?.appointmentId
            }
            LocalStorage.setJSON('AppointmentDetails', saveDetails)
            router.push(`${patientRoutes.bookAppointment}?tab=2`);
            reset(defaultValues)
        } catch (err) {
            console.error(err)
        } finally {
            setLoading(false);
        }
    }

    const hookform = { register, handleSubmit, setValue, clearErrors, trigger, watch, control, errors };

    useEffect(()=>{
        console.log('appointmentId: ', appointmentId);
        if(appointmentId !== 0){
            setValue('fullName', patientData?.fullName);
            setValue('dob', patientData?.dateOfBirth);
            setValue('genderNm', patientData?.gender || '');
            setValue('mobNo', patientData?.mobNo || '');
            setValue('email', patientData?.emailId || '');
            setValue('cityNm', patientData?.city || ''); 
            setValue('stateNm', patientData?.state || '');
            
        }
    }, [])

    return {
        hookform,
        onsubmit,
        loading,
    }
}

export default usePatientDetail
