import apiRequest from '@/lib/api';
import { showToast } from '@/lib/common';
import { baseUrl } from '@/lib/constant';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

interface PersonalValues {
    profileImg?: File | null | string;
    firstName?: string;
    lastName?: string;
    mobNo?: string;
    address?: string;
}

const usePersonalDetail = ({ reloadFunc, closeModal, detail }: { reloadFunc: () => void, closeModal: () => void, detail?: any  }) => {

    const defaultValues: PersonalValues = {
        profileImg: '',
        firstName: '',
        lastName: '',
        mobNo: '',
        address: '',
    }

    const { register, control, reset, handleSubmit, setValue } = useForm<PersonalValues>({
        defaultValues,
    });

    const onSubmitPersonalDetail = async (data: PersonalValues) => {

        const payload = {
            personalInfo: {
                firstName: data.firstName,
                lastName: data.lastName,
                mobNo: data.mobNo,
                address: data.address,
            }
        }

        try {
            const url = `${baseUrl}/patient/personal-detail`

            // Specify the expected response type
            const patientPersonalDetail = await apiRequest<any>({
                url,
                data: payload,
                method: 'post',
            });

            if (patientPersonalDetail?.success) {
                showToast(patientPersonalDetail?.message);
                reset(defaultValues);
                reloadFunc();
                closeModal();

            }

        } catch (error) {
            console.error(error)
        }

    }

    useEffect(()=>{
        if(detail){
            const { personalInfo } = detail;
            setValue('firstName', personalInfo?.firstName)
            setValue('lastName', personalInfo?.lastName)
            setValue('mobNo', personalInfo?.mobNo)
            setValue('address', personalInfo?.address)
        }
    },[])

    const hookform = { register, control, reset, handleSubmit, setValue };

    return {
        hookform,
        onSubmitPersonalDetail,
    }
}

export default usePersonalDetail
