import { StyleSheet } from 'react-native';
import { COLORS, SIZES } from '../../../constants';

const styles = StyleSheet.create({
    container: {
        width: '100%',
    },
    welcomeTxt: {
        fontFamily: 'bold',
        fontSize: SIZES.xxLarge -5,
        marginTop: SIZES.xSmall,
        marginHorizontal: SIZES.small,
    },
    welcomeTxt2: {
        color: COLORS.primary,
        fontFamily: 'bold',
        fontSize: SIZES.xxLarge -7,
        marginHorizontal: SIZES.small,
    },
    searchContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center',
        marginHorizontal: SIZES.small,
        backgroundColor: COLORS.secondary,
        borderRadius: SIZES.medium,
        marginVertical: SIZES.medium,
        height: 50,
    },
    searchIcon: {
        marginHorizontal: 10,
        color: COLORS.gray,
        marginTop: SIZES.small
    },
    searchBtn: {
        width: 50,
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.primary,
        borderRadius: SIZES.medium,
    },
    searchWrapper: {
        flex: 1,
        backgroundColor: COLORS.secondary,
        marginRight: SIZES.small,
        borderRadius: SIZES.small,
    },
    searchInput: {
        fontFamily: 'regular',
        width: '100%',
        height: '100%',
        paddingHorizontal: SIZES.small
    }
});

export default styles;
