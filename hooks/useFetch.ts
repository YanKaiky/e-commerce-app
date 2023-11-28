import axios from 'axios';
import { useState, useEffect } from 'react';

export interface IDataProps {
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

const useFetch = () => {
    const [data, setData] = useState<IDataProps[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchData = async () => {
        setIsLoading(true);

        try {
            const response = await axios.get('http://192.168.1.3:3333/products');

            setData(response.data);

            setIsLoading(false);
        } catch (error: any) {
            setError(error);
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    const refetch = () => {
        setIsLoading(false);
        fetchData();
    }

    return { data, isLoading, error, refetch };
}

export default useFetch;