import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import React from 'react';
import styles from './styles';

export const ProductsDetails = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.textStyle}>Products Details</Text>
            <StatusBar style="auto" />
        </View>
    );
}
