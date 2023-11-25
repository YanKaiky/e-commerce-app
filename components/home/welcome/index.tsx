import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Feather, Ionicons } from '@expo/vector-icons';
import React from 'react';
import styles from './styles';
import { COLORS, SIZES } from '../../../constants';
import { NavigationProp, useNavigation } from '@react-navigation/native';

export const HomeWelcome = () => {
    const navigation: NavigationProp<any> = useNavigation();

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
                        onPressIn={() => navigation.navigate('Search')}
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
