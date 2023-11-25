import { Dimensions, StyleSheet } from 'react-native';

import { COLORS, SIZES } from '../../../constants';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: SIZES.small,
    },
    carousel: {
        maxHeight: width / 2,
    },
    image: {
        width: width - 20,
        height: width / 2,
        justifyContent: 'center',
        resizeMode: 'cover',
        borderRadius: SIZES.small,
        marginHorizontal: 10,
    },
    dots: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: 20,
    },
    circle: {
        width: 10,
        height: 10,
        backgroundColor: COLORS.primary,
        borderRadius: 50,
        marginHorizontal: 5,
    }
});

export default styles;
