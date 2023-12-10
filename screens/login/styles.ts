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
    },
    wrapper: {
        marginBottom: 20,
    },
    label: {
        fontFamily: 'regular',
        fontSize: SIZES.xSmall,
        marginBottom: 5,
        marginEnd: 5,
        textAlign: 'left'
    },
    inputWrapper: {
        borderColor: COLORS.offwhite,
        backgroundColor: COLORS.ligthWhite,
        borderWidth: 1,
        height: 50,
        borderRadius: 12,
        flexDirection: 'row',
        paddingHorizontal: 15,
        alignItems: 'center',
    },
    inputWrapperTouched: {
        borderColor: COLORS.primary,
        backgroundColor: COLORS.ligthWhite,
        borderWidth: 1,
        height: 50,
        borderRadius: 12,
        flexDirection: 'row',
        paddingHorizontal: 15,
        alignItems: 'center',
    },
    icon: {
        marginRight: 10,
    },
    errorMsg: {
        color: COLORS.red,
        fontFamily: 'regular',
        marginTop: 5,
        marginLeft: 5,
        fontSize: SIZES.xSmall
    }
});

export default styles;
