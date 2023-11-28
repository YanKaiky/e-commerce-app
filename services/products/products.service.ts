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

const getAll = async (): Promise<IProductsProps | any> => {
    try {
        const response = await axios.get(PRODUCTS_API);

        return response;
    } catch (error) {
        console.error(error);

        throw error;
    }
};

export const ProductsService = {
    getAll
};
