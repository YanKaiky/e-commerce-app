import { StyleSheet } from 'react-native';
import { COLORS, SIZES } from '../../constants';

const styles = StyleSheet.create({
    safeArea: {
        marginHorizontal: 20,
    },
    cover: {
        height: SIZES.height / 2.4,
        width: SIZES.width - 50,
        resizeMode: 'contain',
        marginBottom: SIZES.xLarge
    },
    title: {
        fontFamily: 'bold',
        fontSize: SIZES.large,
        color: COLORS.primary,
        alignItems: 'center',
        marginBottom: SIZES.xLarge
    }
});

export default styles;
