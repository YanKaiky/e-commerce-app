import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './styles';
import React from 'react';
import { Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export const Favorites = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.textStyle}>Favorites</Text>
            <StatusBar style="auto" />
        </SafeAreaView>
    );
}
