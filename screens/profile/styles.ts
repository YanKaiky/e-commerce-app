import { StyleSheet, ViewStyle, TextStyle, ImageStyle } from 'react-native';
import { COLORS, SIZES } from '../../constants';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.ligthWhite,
    },
    cover: {
        height: 260,
        width: '100%',
        resizeMode: 'cover'
    },
    profileContainer: {
        flex: 1,
        alignItems: 'center',
    },
    profile: {
        height: 140,
        width: 140,
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
    registerBtn: {
        backgroundColor: COLORS.secondary,
        padding: 2,
        marginTop: 4,
        borderWidth: 0.4,
        borderColor: COLORS.primary,
        borderRadius: SIZES.xxLarge,
    },
    menuText: {
        fontFamily: 'regular',
        textAlign: 'center',
        color: COLORS.gray,
        marginHorizontal: 20,
        fontWeight: '600',
        fontSize: 14,
        lineHeight: 26,
    },
    menuWrapper: {
        marginTop: SIZES.xLarge,
        width: SIZES.width - SIZES.large,
        backgroundColor: COLORS.ligthWhite,
        borderRadius: 12,
    },
    menuItem: {
        borderTopWidth: 0.2,
        flexDirection: 'row',
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderColor: COLORS.gray,
    }
});

export default styles;
