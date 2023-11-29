import { FlatList, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Feather, Ionicons } from '@expo/vector-icons';
import styles from './styles';
import React, { useEffect, useState } from 'react';
import { COLORS, SIZES } from '../../constants';
import { IProductsProps, ProductsService } from '../../services/products/products.service';

export const Search = () => {
    const [products, setProducts] = useState<IProductsProps[]>([]);
    const [search, setSearch] = useState<string>("");

    const fetchData = async () => {
        const response = await ProductsService.getAll(search);

        setProducts(response.data);
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <SafeAreaView>
            <View style={styles.searchContainer}>
                <TouchableOpacity>
                    <Ionicons name='camera-outline' size={24} style={styles.searchIcon} />
                </TouchableOpacity>
                <View style={styles.searchWrapper}>
                    <TextInput
                        style={styles.searchInput}
                        value={search}
                        onChangeText={setSearch}
                        placeholder='Whats are you looking for'
                    />
                </View>

                <View>
                    <TouchableOpacity style={styles.searchBtn} onPress={async () => await fetchData()}>
                        <Feather
                            name='search'
                            size={SIZES.xLarge}
                            color={COLORS.offwhite}
                        />
                    </TouchableOpacity>
                </View>
            </View>

            {
                !products.length ? (
                    <View style={{ flex: 1 }}>
                        <Text>Empty list</Text>
                    </View>
                ) : (
                    <FlatList
                        data={products}
                        keyExtractor={(item) => item._id}
                        renderItem={({ item }) => <Text>{item.name}</Text>}
                    />
                )
            }
        </SafeAreaView>
    );
}
