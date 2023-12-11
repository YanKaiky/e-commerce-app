import { Text, TouchableOpacity, View, ScrollView } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons, Fontisto } from '@expo/vector-icons';
import styles from './styles';
import { HomeCarousel, HomeHeadings, HomeWelcome, ProductsRow } from '../../components';
import { useAuth } from '../../hooks/useAuth';

export const Home = () => {
    const { user } = useAuth();

    return (
        <SafeAreaView>
            <View style={styles.appBarWrapper}>
                <View style={styles.appBar}>
                    <Ionicons name='location-outline' size={24} />

                    <Text style={styles.location}>{user?.location ?? ''}</Text>

                    <View style={{ alignItems: 'flex-end' }}>
                        <View style={styles.cartCount}>
                            <Text style={styles.cartNumber}>6</Text>
                        </View>
                        <TouchableOpacity>
                            <Fontisto name='shopping-bag' size={24} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

            <ScrollView>
                <HomeWelcome />
                <HomeCarousel />
                <HomeHeadings />
                <ProductsRow />
            </ScrollView>
        </SafeAreaView>
    );
}
