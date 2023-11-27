import { Image, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import styles from './styles';
import { COLORS } from '../../../constants';
import { NavigationProp, useNavigation } from '@react-navigation/native';

export const ProductsCard = () => {
    const navigation: NavigationProp<any> = useNavigation();

    return (
        <TouchableOpacity onPress={() => navigation.navigate('ProductsDetails')}>
            <View style={styles.container}>
                <View style={styles.imageContainer}>
                    <Image
                        style={styles.image}
                        source={{
                            uri: 'https://e-commerce-forniture.s3.sa-east-1.amazonaws.com/closet.png'
                        }}
                    />
                </View>
                <View style={styles.details}>
                    <Text style={styles.title} numberOfLines={1}>Product</Text>
                    <Text style={styles.supplier} numberOfLines={1}>Testee</Text>
                    <Text style={styles.price}>$237</Text>
                </View>

                <TouchableOpacity style={styles.addBtn} onPress={() => console.log('clicked')}>
                    <Ionicons name='add-circle' size={35} color={COLORS.primary} />
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    );
}
