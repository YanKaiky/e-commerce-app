import { StyleSheet } from 'react-native';
import { SIZES, SHADOWS, COLORS } from '../../../constants';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: SIZES.small,
        flexDirection: 'row',
        padding: SIZES.medium,
        borderRadius: SIZES.small,
        backgroundColor: '#FFF',
        ...SHADOWS.medium,
        shadowColor: COLORS.ligthWhite
    },
    image: {
        width: 70,
        backgroundColor: COLORS.secondary,
        borderRadius: SIZES.medium,
        justifyContent: 'center',
        alignItems: 'center',
    },
    productImg: {
        width: '100%',
        height: 65,
        borderRadius: SIZES.small,
        resizeMode: 'cover'
    },
    textContainer: {
        flex: 1,
        marginHorizontal: SIZES.medium
    },
    productTitle: {
        fontSize: SIZES.medium,
        fontFamily: 'bold',
        color: COLORS.primary,
    },
    supplier: {
        fontSize: SIZES.small,
        fontFamily: 'regular',
        color: COLORS.gray,
    },
});

export default styles;
