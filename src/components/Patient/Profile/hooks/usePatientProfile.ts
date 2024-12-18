import React, { useEffect, useState } from 'react'
import apiRequest from '@/lib/api';
import { baseUrl } from '@/lib/constant';
import { UserResponse } from '@/types/Index';

interface detailProps {
    medicalDetails?: boolean;
    lifeStyleDetails?: boolean;
    insuranceDetails?: boolean;
}

const usePatientProfile = () => {
    const [patientDetail, setPatientDetail] = useState<any>([]);
    const [detailModal, setDetailModal] = useState<detailProps>({
        medicalDetails: false,
        lifeStyleDetails: false,
        insuranceDetails: false,
    });
    const [loading, setLoading] = useState<any>();

    const getPatient = async () => {
        try {
            setLoading(true);
            const url = `${baseUrl}/patient/get-patient`

            // Specify the expected response type
            const userDetails = await apiRequest<UserResponse>({
                url,
                method: 'get',
            });

            setPatientDetail(userDetails?.details);
            setLoading(false);
        } finally {
            setLoading(false);
        }
    };


    useEffect(() => {
        getPatient();
    }, [])

    return {
        patientDetail,
        getPatient,
        loading,
        detailModal, 
        setDetailModal
    }
}

export default usePatientProfile
