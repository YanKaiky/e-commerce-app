import axios from 'axios';
import { PRODUCTS_API } from './';

export interface IProductsProps {
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

const getAll = async (search: string = ""): Promise<IProductsProps | any> => {
    try {
        const response = await axios.get(`${PRODUCTS_API}?search=${search}`);

        return response;
    } catch (error) {
        console.error(error);

        throw error;
    }
};

export const ProductsService = {
    getAll
};
