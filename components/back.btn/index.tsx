import { Image, TouchableOpacity } from 'react-native';
import React, { FC } from 'react';
import { Ionicons } from '@expo/vector-icons'
import styles from './styles';
import { COLORS } from '../../constants';

interface IBackBtnProps {
    onPress: () => void;
}

export const BackBtn: FC<IBackBtnProps> = ({ onPress }) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.backBtn}>
            <Ionicons
                name='chevron-back-circle'
                size={30}
                color={COLORS.primary}
            />
        </TouchableOpacity>
    );
}
