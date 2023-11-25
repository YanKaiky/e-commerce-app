import { Animated, FlatList, Image, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import styles from './styles';
import { COLORS, SIZES } from '../../../constants';

export const HomeCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const scrollX = useRef(new Animated.Value(0)).current;

    let flatList = useRef<FlatList<string> | null>(null);

    const slides = [
        'https://e-commerce-forniture.s3.sa-east-1.amazonaws.com/closet.png',
        'https://e-commerce-forniture.s3.sa-east-1.amazonaws.com/sofa.png',
        'https://e-commerce-forniture.s3.sa-east-1.amazonaws.com/tv-panel.png',
        'https://e-commerce-forniture.s3.sa-east-1.amazonaws.com/kitchen.jpg',
    ];

    const onViewRef = useRef(({ changed }: { changed: any }) => {
        if (changed[0].isViewable) {
            setCurrentIndex(changed[0].index);
        }
    });

    const handleScroll = (event: any) => {
        const offset = event.nativeEvent.contentOffset.x;
        const index = Math.round(offset / SIZES.width);
        setCurrentIndex(index);
    };

    const scrollToNext = () => {
        const nextIndex = (currentIndex + 1) % slides.length;
        flatList.current?.scrollToIndex({ index: nextIndex, animated: true });
    };

    const scrollToIndex = (index: number) => {
        flatList.current?.scrollToIndex({ animated: true, index });
    };

    useEffect(() => {
        const timer = setInterval(scrollToNext, 3000);
        return () => clearInterval(timer);
    }, [currentIndex]);

    return (
        <View style={styles.container}>
            <FlatList
                data={slides}
                horizontal
                pagingEnabled
                bounces={false}
                keyExtractor={(item) => item}
                showsHorizontalScrollIndicator={false}
                ref={(ref) => flatList.current = ref}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity onPress={() => console.log(item)} activeOpacity={1}>
                            <Image source={{ uri: item }} style={styles.image} />
                        </TouchableOpacity>
                    )
                }}
                onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], {
                    useNativeDriver: false,
                })}
                style={styles.carousel}
                onViewableItemsChanged={onViewRef.current}
                onMomentumScrollEnd={handleScroll}
            />

            <View style={styles.dots}>
                {
                    slides.map((_: any, i: number) => (
                        <TouchableOpacity
                            key={i}
                            style={[
                                styles.circle,
                                {
                                    backgroundColor: i === currentIndex ? COLORS.primary : COLORS.gray
                                }
                            ]}
                            onPress={() => scrollToIndex(i)}
                        />
                    ))
                }
            </View>
        </View>
    );
}
