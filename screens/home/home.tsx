import { Text, TouchableOpacity, View, ScrollView } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons, Fontisto } from '@expo/vector-icons';
import styles from './styles';
import { HomeWelcome } from '../../components';
import { HomeCarousel } from '../../components/home/carousel';

export const Home = () => {
    return (
        <SafeAreaView>
            <View style={styles.appBarWrapper}>
                <View style={styles.appBar}>
                    <Ionicons name='location-outline' size={24} />

                    <Text style={styles.location}>Blumenau, Brazil</Text>

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
            </ScrollView>
        </SafeAreaView>
    );
}
