import { SafeAreaView, View, TouchableOpacity, Text } from 'react-native';
import React, { FC } from 'react';
import { NavigationProp } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import styles from './styles';
import { COLORS } from '../../constants';
import { ProductsList } from '../../components';

interface INewRivals {
    navigation: NavigationProp<any>,
}

export const NewRivals: FC<INewRivals> = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.wrapper}>
            <View style={styles.wrapper}>
                <View style={styles.upperRow}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Ionicons name='chevron-back-circle' size={30} color={COLORS.ligthWhite} />
                    </TouchableOpacity>

                    <Text style={styles.heading}>Products</Text>
                </View>
            </View>
            <View style={styles.container}>
                <ProductsList />
            </View>
        </SafeAreaView>
    );
}
