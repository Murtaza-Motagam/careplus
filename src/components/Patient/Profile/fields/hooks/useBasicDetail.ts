import apiRequest from '@/lib/api';
import { showToast } from '@/lib/common';
import { baseUrl } from '@/lib/constant';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

interface BasicValues {
    genderId: string,
    genderNm: string,
    dateOfBirth: Date,
    cityId: string,
    cityNm: string,
    stateId: string,
    stateNm: string,
    occupation: string,
    maritalStatusId: string,
    maritalStatusNm: string,
}

const useBasicDetail = ({ reloadFunc, closeModal, detail }: { reloadFunc: () => void, closeModal: () => void, detail?: any }) => {

    const defaultValues: BasicValues = {
        genderId: '',
        genderNm: '',
        dateOfBirth: new Date(),
        cityId: '',
        cityNm: '',
        stateId: '',
        stateNm: '',
        occupation: '',
        maritalStatusId: '',
        maritalStatusNm: '',
    }

    const { register, control, reset, handleSubmit, setValue } = useForm<BasicValues>({
        defaultValues,
    });

    const onSubmitBasicDetails = async (data: BasicValues) => {
        console.log('data: ', data);
        const payload = {
            personalInfo: {
                gender: data.genderNm,
                dateOfBirth: data.dateOfBirth,
                city: data.cityNm,
                state: data.stateNm,
                occupation: data.occupation,
                maritalStatus: data.maritalStatusNm,
            }
        }
        try {
            const url = `${baseUrl}/patient/personal-detail`

            // Specify the expected response type
            const patientBasicDetail = await apiRequest<any>({
                url,
                data: payload,
                method: 'post',
            });

            if (patientBasicDetail?.success) {
                showToast('Basic details updated successfully');
                reset(defaultValues);
                reloadFunc();
                closeModal();

            }

        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        if (detail) {
            const { personalInfo } = detail;
            setValue('genderNm', personalInfo?.gender)
            setValue('dateOfBirth', personalInfo?.dateOfBirth)
            setValue('stateNm', personalInfo?.state)
            setValue('cityNm', personalInfo?.city)
            setValue('occupation', personalInfo?.occupation)
            setValue('maritalStatusNm', personalInfo?.maritalStatus)
        }
    }, [])


    const hookform = { register, control, reset, handleSubmit, setValue };

    return {
        hookform,
        onSubmitBasicDetails
    }
}

export default useBasicDetail
