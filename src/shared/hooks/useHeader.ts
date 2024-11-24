import { baseUrl, LOGIN_TYPE } from '@/lib/constant';
import axios from 'axios';
import Cookies from 'js-cookie';
import { LocalStorage } from '@/lib/localStorage';
import React, { useEffect, useState } from 'react'
import { isAuthenticated, showToast } from '@/lib/common';
import { useRouter } from 'next/navigation';
import { authenticationRoutes } from '@/lib/routes';

const useHeader = () => {
    const [loading, setLoading] = useState<boolean>(true);
    const [user, setUser] = useState<any>({});
    const [isUser, setIsUser] = useState<any>();
    const router = useRouter();

    const patientUrl = `${baseUrl}/${LOGIN_TYPE.patient}/get-patient`;
    const physicianUrl = `${baseUrl}/${LOGIN_TYPE.physician}/auth/get-physician`;

    const checkForModule = LocalStorage.get('authDetails');

    const logout = () => {
        Cookies.remove('Authorization-token');
        LocalStorage.remove('authDetails');
        router.push(authenticationRoutes.login);
        showToast('You have successfully logged out. See you again soon!');
    };

    useEffect(() => {
        const getUser = async () => {
            const authenticated = isAuthenticated();
            if (authenticated) {
                setIsUser(authenticated)
                const response = await axios({
                    url: checkForModule?.module === LOGIN_TYPE.patient ? patientUrl : physicianUrl,
                    method: 'get',
                    headers: {
                        Authorization: checkForModule?.authorization
                    }
                });
                const resData = response.data;
                setUser(resData?.details || '');
            } else {
                setIsUser(false);
            }
            setLoading(false);
        }

        getUser();
    }, [])

    return {
        loading,
        user,
        logout,
        isUser
    }
}

export default useHeader
