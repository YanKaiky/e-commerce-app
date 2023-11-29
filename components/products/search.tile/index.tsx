import React, { FC } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import styles from './styles';
import { IProductsProps } from '../../../services/products/products.service';
import { NavigationProp, useNavigation } from '@react-navigation/native';

export interface ISearchTile {
    item: IProductsProps,
}

export const SearchTile: FC<ISearchTile> = ({ item }) => {
    const navigation: NavigationProp<any> = useNavigation();

    return (
        <View>
            <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('ProductsDetails', { item })}>
                <View style={styles.image}>
                    <Image source={{ uri: item.image_url }} style={styles.productImg} />
                </View>

                <View style={styles.textContainer}>
                    <Text style={styles.productTitle}>{item.name}</Text>
                    <Text style={styles.supplier}>{item.supplier}</Text>
                    <Text style={styles.supplier}>${item.price}</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}
