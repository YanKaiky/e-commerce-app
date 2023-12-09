import { StyleSheet } from 'react-native';
import { COLORS, SIZES } from '../../constants';

const styles = StyleSheet.create({
    safeArea: {
        flex: 1
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
    },
    constainerImage: {
        flex: 1,
        alignItems: 'center'
    },
    searchImage: {
        resizeMode: 'contain',
        width: SIZES.width - 100,
        height: SIZES.height - 300,
    }
});

export default styles;
