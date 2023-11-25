import { StatusBar } from 'expo-status-bar';
import { Text } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './styles';

export const Cart = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.textStyle}>Cart</Text>
            <StatusBar style="auto" />
        </SafeAreaView>
    );
}
