import { FlatList, Text, View } from 'react-native';
import React from 'react';
import styles from './styles';
import { SIZES } from '../../../constants';
import { ProductsCard } from '../products.card';

export const ProductsRow = () => {
    const products = [1, 2, 3, , 5];

    return (
        <View style={{ marginTop: SIZES.medium }}>
            <FlatList
                data={products}
                renderItem={({ item }) => <ProductsCard />}
                horizontal
                contentContainerStyle={{ columnGap: SIZES.xSmall / 2 }}
            />
        </View>
    );
}
