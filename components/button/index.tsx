import { Text, TouchableOpacity } from 'react-native';
import React, { FC } from 'react';
import styles from './styles';

interface IBackBtnProps {
    title: string;
    onPress: () => void;
}

export const Button: FC<IBackBtnProps> = ({ title, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.button}>
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    );
}
