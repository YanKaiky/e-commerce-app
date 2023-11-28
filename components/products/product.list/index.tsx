import React from 'react';
import { ActivityIndicator, FlatList, View } from 'react-native';
import useFetch from '../../../hooks/useFetch';
import styles from './styles';
import { COLORS, SIZES } from '../../../constants';
import { ProductsCard } from '../products.card';

export const ProductsList = () => {
    const { data, isLoading } = useFetch();

    return (
        isLoading ? (
            <View style={styles.loading}>
                <ActivityIndicator color={COLORS.primary} size={SIZES.xxLarge} />
            </View>
        ) : (
            <View style={styles.container}>
                <FlatList
                    data={data}
                    numColumns={2}
                    renderItem={({ item }) => (<ProductsCard item={item} />)}
                    contentContainerStyle={styles.flatList}
                    ItemSeparatorComponent={() => <View style={styles.separator} />}
                />
            </View>
        )
    );
}
