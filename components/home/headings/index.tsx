import { Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import styles from './styles';
import { COLORS, SIZES } from '../../../constants';

export const HomeHeadings = () => {

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>New Rivals</Text>
                <TouchableOpacity>
                    <Ionicons name='ios-grid' size={24} color={COLORS.primary} />
                </TouchableOpacity>
            </View>
        </View>
    );
}
