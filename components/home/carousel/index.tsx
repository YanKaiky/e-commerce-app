import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Feather, Ionicons } from '@expo/vector-icons';
import React from 'react';
import styles from './styles';
import { COLORS, SIZES } from '../../../constants';

export const HomeCarousel = () => {
    return (
        <View>
            <View style={styles.container}>
                <Text style={styles.welcomeTxt}>Find the most</Text>
                <Text style={styles.welcomeTxt2}>Luxurious furniture</Text>
            </View>

            <View style={styles.searchContainer}>
                <TouchableOpacity>
                    <Feather name='search' size={24} style={styles.searchIcon} />
                </TouchableOpacity>
                <View style={styles.searchWrapper}>
                    <TextInput
                        style={styles.searchInput}
                        value=''
                        onPressIn={() => {}}
                        placeholder='Whats are you looking for'
                    />
                </View>

                <View>
                    <TouchableOpacity style={styles.searchBtn}>
                        <Ionicons
                            name='camera-outline'
                            size={SIZES.xLarge}
                            color={COLORS.offwhite}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}
