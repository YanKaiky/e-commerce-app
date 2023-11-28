import { Image, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import React, { FC } from 'react';
import styles from './styles';
import { COLORS } from '../../../constants';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { IProductsProps } from '../../../services/products/products.service';

export interface IProductsCard {
    item: IProductsProps,
}

export const ProductsCard: FC<IProductsCard> = ({ item }) => {
    const navigation: NavigationProp<any> = useNavigation();

    return (
        <TouchableOpacity onPress={() => navigation.navigate('ProductsDetails', { item })}>
            <View style={styles.container}>
                <View style={styles.imageContainer}>
                    <Image
                        style={styles.image}
                        source={{
                            uri: item.image_url
                        }}
                    />
                </View>
                <View style={styles.details}>
                    <Text style={styles.title} numberOfLines={1}>{item.name}</Text>
                    <Text style={styles.supplier} numberOfLines={1}>{item.supplier}</Text>
                    <Text style={styles.price}>${(item.price).toFixed(2)}</Text>
                </View>

                <TouchableOpacity style={styles.addBtn} onPress={() => console.log('clicked')}>
                    <Ionicons name='add-circle' size={35} color={COLORS.primary} />
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    );
}
