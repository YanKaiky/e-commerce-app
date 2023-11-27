import { Image, Text, TouchableOpacity, View } from 'react-native';
import React, { FC, useState } from 'react';
import styles from './styles';
import { NavigationProp } from '@react-navigation/native';
import { Ionicons, SimpleLineIcons, MaterialCommunityIcons, Fontisto, MaterialIcons } from '@expo/vector-icons';
import { COLORS } from '../../constants';

interface IProductsDetails {
    navigation: NavigationProp<any>,
}

export const ProductsDetails: FC<IProductsDetails> = ({ navigation }) => {
    const [count, setCount] = useState<number>(1);

    return (
        <View style={styles.container}>
            <View style={styles.upperRow}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Ionicons name='chevron-back-circle' size={30} />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => { }}>
                    <Ionicons name='heart' size={30} color={COLORS.primary} />
                </TouchableOpacity>
            </View>

            <Image
                source={{
                    uri: 'https://e-commerce-forniture.s3.sa-east-1.amazonaws.com/closet.png'
                }}
                style={styles.image}
            />

            <View style={styles.details}>
                <View style={styles.titleRow}>
                    <Text style={styles.title}>Closet under Measure</Text>
                    <View style={styles.priceWrapper}>
                        <Text style={styles.price}>$563</Text>
                    </View>
                </View>

                <View style={styles.ratingRow}>
                    <View style={styles.rating}>
                        {
                            [1, 2, 3, 4, 5].map((_, i: number) => (
                                <Ionicons
                                    key={i}
                                    name='star'
                                    size={24}
                                    color='gold'
                                />
                            ))
                        }

                        <Text style={styles.ratingText}>(4.9)</Text>
                    </View>

                    <View style={styles.rating}>
                        <TouchableOpacity onPress={() => count > 1 && setCount(count - 1)}>
                            <SimpleLineIcons name='minus' size={20} />
                        </ TouchableOpacity>

                        <Text style={styles.countText}>{count}</Text>

                        <TouchableOpacity onPress={() => setCount(count + 1)}>
                            <SimpleLineIcons name='plus' size={20} />
                        </ TouchableOpacity>
                    </View>
                </View>

                <View style={styles.descriptionWrapper}>
                    <Text style={styles.descriptionTitle}>Description</Text>
                    <Text style={styles.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et nostrum nihil laudantium quibusdam soluta accusantium cupiditate beatae velit qui commodi repudiandae, tempora impedit quasi a voluptate officia quae ex minima.</Text>
                </View>

                <View style={styles.locationWrapper}>
                    <View style={styles.location}>
                        <View style={styles.locationContent}>
                            <Ionicons name='location-outline' size={20} />
                            <Text>Blumenau - BRA</Text>
                        </View>

                        <View style={styles.locationContent}>
                            <MaterialCommunityIcons name='truck-delivery-outline' size={20} />
                            <Text>Free delivery</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.cartRow}>
                    <TouchableOpacity onPress={() => { }} style={styles.cartBtn}>
                        <Text style={styles.cartTitle}>BUY NOW</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => { }} style={styles.addCart}>
                        <MaterialIcons name='add-shopping-cart' size={18} color={COLORS.ligthWhite} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}
