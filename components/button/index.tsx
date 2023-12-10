import { Text, TouchableOpacity } from 'react-native';
import React, { FC } from 'react';
import styles from './styles';

interface IBackBtnProps {
    title: string;
    isValid: boolean;
    onPress: () => void;
}

export const Button: FC<IBackBtnProps> = ({ title, onPress, isValid }) => {
    return (
        <TouchableOpacity onPress={onPress} style={isValid ? styles.buttonValid : styles.button}>
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    );
}
