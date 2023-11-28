import { Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import styles from './styles';
import { COLORS } from '../../../constants';
import { NavigationProp, useNavigation } from '@react-navigation/native';

export const HomeHeadings = () => {
    const navigation: NavigationProp<any> = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>New Rivals</Text>
                <TouchableOpacity onPress={() => navigation.navigate('NewRivals')}>
                    <Ionicons name='ios-grid' size={24} color={COLORS.primary} />
                </TouchableOpacity>
            </View>
        </View>
    );
}
