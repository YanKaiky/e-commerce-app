import { StyleSheet } from 'react-native';
import { COLORS, SIZES } from '../../constants';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.ligthWhite,
    },
    wrapper: {
        flex: 1,
        backgroundColor: COLORS.ligthWhite,
    },
    upperRow: {
        width: SIZES.width - 50,
        marginHorizontal: SIZES.large,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        position: 'absolute',
        backgroundColor: COLORS.primary,
        borderRadius: SIZES.large,
        top: SIZES.xxLarge,
        zIndex: 999,
    },
    heading: {
        fontFamily: 'semibold',
        fontSize: SIZES.medium,
        color: COLORS.ligthWhite,
        marginLeft: 5,
    }
});

export default styles;
