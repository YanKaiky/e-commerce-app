import { ActivityIndicator, FlatList, Text, View } from 'react-native';
import React from 'react';
import styles from './styles';
import { ProductsCard } from '../products.card';
import useFetch from '../../../hooks/useFetch';
import { COLORS, SIZES } from '../../../constants';
import { IProductsProps } from '../../../services/products/products.service';

export const ProductsRow = () => {
    const { data, error, isLoading } = useFetch();

    return (
        <View style={styles.container}>
            {
                isLoading ? (
                    <ActivityIndicator size={SIZES.xxLarge} color={COLORS.primary} />
                ) : error ? (
                    <Text>Something went wrong</Text>
                ) : (
                    <FlatList
                        data={data}
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
