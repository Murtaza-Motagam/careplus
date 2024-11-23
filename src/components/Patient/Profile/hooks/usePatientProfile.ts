import React, { useEffect, useState } from 'react'
import apiRequest from '@/lib/api';
import { baseUrl } from '@/lib/constant';
import { UserResponse } from '@/types/Index';

const usePatientProfile = () => {
    const [patientDetail, setPatientDetail] = useState<any>([]);
    const [loading, setLoading] = useState<boolean>();

    const getPatient = async () => {
        try {
            const url = `${baseUrl}/patient/get-patient`

            // Specify the expected response type
            const userDetails = await apiRequest<UserResponse>({
                url,
                method: 'get',
            });

            setPatientDetail(userDetails?.details);
        } finally {
            setLoading(false);
        }
    };


    useEffect(() => {
        getPatient();
    }, [])

    return {
        patientDetail,
        getPatient
    }
}

export default usePatientProfile