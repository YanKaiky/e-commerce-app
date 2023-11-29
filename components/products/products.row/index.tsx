import { ActivityIndicator, FlatList, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { ProductsCard } from '../products.card';
import { COLORS, SIZES } from '../../../constants';
import { IProductsProps, ProductsService } from '../../../services/products/products.service';
import styles from './styles';

export const ProductsRow = () => {
    const [products, setProducts] = useState<IProductsProps[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchData = async () => {
        setIsLoading(true);

        try {
            const response = await ProductsService.getAll();

            setProducts(response.data);

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

    return (
        <View style={styles.container}>
            {
                isLoading ? (
                    <ActivityIndicator size={SIZES.xxLarge} color={COLORS.primary} />
                ) : error ? (
                    <Text>Something went wrong</Text>
                ) : (
                    <FlatList
                        data={products}
                        keyExtractor={(item: IProductsProps) => item._id}
                        renderItem={({ item }) => <ProductsCard item={item} />}
                        horizontal
                        contentContainerStyle={styles.contentContainer}
                    />
                )
            }
        </View>
    );
}
