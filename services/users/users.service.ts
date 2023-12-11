import axios from 'axios';
import { USERS_API } from './';

export interface ICreateUserProps {
    name: string;
    username: string;
    email: string;
    password: string;
    location: string;
}

const create = async (data: ICreateUserProps) => {
    try {
        const response = await axios.post(USERS_API, data);

        if (!response) new Error('Create user error');

        return response;
    } catch (error) {
        console.error(error);

        throw error;
    }
}

export const UsersService = {
    create,
};
