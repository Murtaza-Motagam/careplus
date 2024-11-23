import apiRequest from '@/lib/api';
import { showToast } from '@/lib/common';
import { backendUrl, baseUrl } from '@/lib/constant';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

interface PersonalValues {
    profileImg?: File | null | string;
    firstName?: string;
    lastName?: string;
    mobNo?: string;
    address?: string;
}

const usePersonalDetail = ({ reloadFunc, closeModal, detail }: { reloadFunc: () => void, closeModal: () => void, detail?: any }) => {

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
        try {

            const payload = {
                personalInfo: {
                    firstName: data.firstName,
                    lastName: data.lastName,
                    mobNo: data.mobNo,
                    address: data.address,
                    profileImg: undefined,
                },
            };

            const formData = new FormData();

            if (data.profileImg) {
                formData.append("profileImg", data.profileImg);

                // Upload the profileImg first (FormData)
                const profileImgResponse = await apiRequest<any>({
                    url: `${baseUrl}/upload`,
                    data: formData,
                    method: "post",
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                });

                if (!profileImgResponse?.success) {
                    throw new Error(profileImgResponse?.message || "Failed to upload profile image");
                }

                if (profileImgResponse?.success) {
                    payload.personalInfo.profileImg = profileImgResponse?.data?.path;
                }
            }

            const personalDetailResponse = await apiRequest<any>({
                url: `${baseUrl}/patient/personal-detail`,
                data: payload,
                method: "post"
            });

            // Handle success response
            if (personalDetailResponse?.success) {
                showToast(personalDetailResponse?.message);
                reset(defaultValues);
                reloadFunc();
                closeModal();
            }
        } catch (error) {
            console.error("Error submitting personal details:", error);
        }
    };


    useEffect(() => {
        if (detail) {
            const { personalInfo } = detail;
            setValue('firstName', personalInfo?.firstName)
            setValue('lastName', personalInfo?.lastName)
            setValue('mobNo', personalInfo?.mobNo)
            setValue('address', personalInfo?.address)
        }
    }, [])

    const hookform = { register, control, reset, handleSubmit, setValue };

    return {
        hookform,
        onSubmitPersonalDetail,
    }
}

export default usePersonalDetail
