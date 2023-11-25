import { View } from 'react-native';
import React from 'react';
import { SliderBox } from 'react-native-image-slider-box';
import styles from './styles';
import { COLORS } from '../../../constants';

export const HomeCarousel = () => {
    const slides = [
        'https://e-commerce-forniture.s3.sa-east-1.amazonaws.com/closet.png',
        'https://e-commerce-forniture.s3.sa-east-1.amazonaws.com/sofa.png',
        'https://e-commerce-forniture.s3.sa-east-1.amazonaws.com/tv-panel.png',
    ]

    return (
        <View style={styles.container}>
            <SliderBox
                images={slides}
                dotColor={COLORS.primary}
                inactiveDotColor={COLORS.secondary}
                ImageComponentStyle={styles.imageComponentStyle}
            />
        </View>
    );
}
