import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, View } from 'react-native';
import styles from './styles';
import { COLORS, SIZES } from '../../../constants';
import { ProductsCard } from '../products.card';
import { IProductsProps, ProductsService } from '../../../services/products/products.service';

export const ProductsList = () => {
    const [products, setProducts] = useState<IProductsProps[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    const fetchData = async () => {
        setIsLoading(true);

        try {
            const response = await ProductsService.getAll();

            setProducts(response.data);

            setIsLoading(false);
        } catch (error: any) {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        isLoading ? (
            <View style={styles.loading}>
                <ActivityIndicator color={COLORS.primary} size={SIZES.xxLarge} />
            </View>
        ) : (
            <View style={styles.container}>
                <FlatList
                    data={products}
                    numColumns={2}
                    renderItem={({ item }) => (<ProductsCard item={item} />)}
                    contentContainerStyle={styles.flatList}
                    ItemSeparatorComponent={() => <View style={styles.separator} />}
                />
            </View>
        )
    );
}
