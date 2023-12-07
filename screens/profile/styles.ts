import { StyleSheet } from 'react-native';
import { COLORS, SIZES } from '../../constants';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.ligthWhite,
    },
    cover: {
        height: 290,
        width: '100%',
        resizeMode: 'cover'
    },
    profileContainer: {
        flex: 1,
        alignItems: 'center',
    },
    profile: {
        height: 155,
        width: 155,
        borderRadius: 999,
        borderColor: COLORS.ligthWhite,
        borderWidth: 3,
        resizeMode: 'cover',
        marginTop: -90,
    },
    name: {
        fontFamily: 'bold',
        color: COLORS.primary,
        marginVertical: 5,
    },
    loginBtn: {
        backgroundColor: COLORS.secondary,
        padding: 2,
        borderWidth: 0.4,
        borderColor: COLORS.primary,
        borderRadius: SIZES.xxLarge,
    },
    menuText: {
        fontFamily: 'regular',
        color: COLORS.gray,
        marginHorizontal: 20,
        fontWeight: '600',
        fontSize: 14,
        lineHeight: 26,
    }
});

export default styles;
