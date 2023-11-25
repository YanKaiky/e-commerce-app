import { Text, View } from 'react-native';
import React from 'react';
import styles from './styles';

export const HomeWelcome = () => {
    return (
        <View>
            <View style={styles.container}>
                <Text style={styles.welcomeTxt}>Find the most</Text>
                <Text style={styles.welcomeTxt2}>Luxurious furniture</Text>
            </View>

            <View>
            </View>
        </View>
    );
}
