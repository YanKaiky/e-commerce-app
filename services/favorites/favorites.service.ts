import axios from 'axios';
import { FAVORITES_API } from '.';

export interface IFavoritesProps {
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

const getAll = async (search: string = "") => {
    try {
        const response = await axios.get(`${FAVORITES_API}?search=${search}`);

        return response;
    } catch (error) {
        console.error(error);

        throw error;
    }
};

export const FavoritesService = {
    getAll
};
