import axios from 'axios';
import { CART_API } from '.';

export interface ICartProps {
    _id: string;
    name: string;
    price: number;
    supplier: string;
    image_url: string;
    description: string;
    product_location: string;
    createdAt: Date;
    updatedAt: Date;
}

const getAll = async (user_id: string) => {
    try {
        const response = await axios.get(`${CART_API}?user_id=${user_id}`);

        return response;
    } catch (error) {
        console.error(error);

        throw error;
    }
};

export const CartService = {
    getAll
};
