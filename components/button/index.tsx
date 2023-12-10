import { ActivityIndicator, Text, TouchableOpacity } from 'react-native';
import React, { FC } from 'react';
import styles from './styles';

interface IBackBtnProps {
    title: string;
    isValid: boolean;
    loading: boolean;
    onPress: () => void;
}

export const Button: FC<IBackBtnProps> = ({ title, onPress, isValid, loading }) => {
    return (
        <TouchableOpacity onPress={onPress} style={isValid ? styles.buttonValid : styles.button}>
            {!loading ? (
                <Text style={styles.title}>{title}</Text>
            ) : (
                <ActivityIndicator />
            )}
        </TouchableOpacity>
    );
}
