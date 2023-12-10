import axios from 'axios';
import { AUTH_API } from './';

export interface ILoginProps {
    token: string;
}

const login = async (encode: string) => {
    try {
        const response = await axios.post(AUTH_API, null, {
            headers: {
                Authorization: `Basic ${encode}`,
            },
        });

        if (!response) new Error('Login error');

        return response;
    } catch (error) {
        console.error(error);

        throw error;
    }
};

export const AuthService = {
    login
};
