import { useState, useEffect } from 'react';
import { IProductsProps, ProductsService } from '../services/products/products.service';

const useFetch = () => {
    const [data, setData] = useState<IProductsProps[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchData = async () => {
        setIsLoading(true);

        try {
            const response = await ProductsService.getAll();

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