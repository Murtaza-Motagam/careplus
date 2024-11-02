import { baseUrl, LOGIN_TYPE } from '@/lib/constant';
import axios from 'axios';
import Cookies from 'js-cookie';
import { LocalStorage } from '@/lib/localStorage';
import React, { useEffect, useState } from 'react'
import { isAuthenticated } from '@/lib/common';
import { useRouter } from 'next/navigation';
import { authenticationRoutes } from '@/lib/routes';

interface User {
    emailId?: string | undefined;
    firstName?: string;
    profilePic?: string;
}

const useHeader = () => {
    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState<User>({});
    const authenticated = isAuthenticated();
    const router = useRouter();

    const patientUrl = `${baseUrl}/${LOGIN_TYPE.patient}/auth/get-patient`;
    const physicianUrl = `${baseUrl}/${LOGIN_TYPE.physician}/auth/get-physician`;

    const checkForModule = LocalStorage.get('authDetails');

    const getUser = async () => {
        try {
            const response = await axios({
                url: checkForModule?.module === LOGIN_TYPE.patient ? patientUrl : physicianUrl,
                method: 'get',
                headers: {
                    Authorization: checkForModule?.authorization
                }
            });
            const resData = response.data;
            setUser(resData?.details || '');

        } finally {
            setLoading(false);
        }
    }

    const logout = () => {
        Cookies.remove('Authorization-token');
        LocalStorage.remove('authDetails');
        router.push(authenticationRoutes.login);
    };

    useEffect(() => {
        if (authenticated) {
            getUser();
        }
    }, [])

    return {
        loading,
        user,
        logout,
    }
}

export default useHeader
