import { StyleSheet } from 'react-native';
import { COLORS, SIZES } from '../../constants';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    upperRow: {
        marginHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'center',
        position: 'absolute',
        top: SIZES.xxLarge,
        width: SIZES.width - 44,
        zIndex: 999,
    },
    image: {
        aspectRatio: 1,
        resizeMode: 'cover',
    },
    details: {
        marginTop: -SIZES.large,
        backgroundColor: COLORS.ligthWhite,
        width: SIZES.width,
        borderTopLeftRadius: SIZES.medium,
        borderTopRightRadius: SIZES.medium,
    },
    titleRow: {
        marginHorizontal: 20,
        paddingBottom: SIZES.small,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItem: 'center',
        width: SIZES.width - 44,
        top: 20,
    },
    title: {
        fontFamily: 'bold',
        fontSize: SIZES.large,
    },
    price: {
        paddingHorizontal: 10,
        fontFamily: 'semibold',
        fontSize: SIZES.large,
    },
    priceWrapper: {
        backgroundColor: COLORS.secondary,
        borderRadius: SIZES.large,
    },
    ratingRow: {
        paddingBottom: SIZES.small,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItem: 'center',
        width: SIZES.width - 10,
        top: 5,
    },
    rating: {
        top: SIZES.large,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginHorizontal: SIZES.large,
    },
    ratingText: {
        color: COLORS.gray,
        fontFamily: 'medium',
        fontSize: SIZES.small,
        marginHorizontal: SIZES.xSmall,
    },
    countText: {
        color: COLORS.gray,
        fontFamily: 'semibold',
        paddingHorizontal: SIZES.xSmall,
    },
    descriptionWrapper: {
        marginTop: SIZES.large * 2,
        marginHorizontal: SIZES.large
    },
    descriptionTitle: {
        fontFamily: 'medium',
        fontSize: SIZES.large - 2,
    },
    description: {
        fontFamily: 'regular',
        fontSize: SIZES.small,
        textAlign: 'justify',
        marginBottom: SIZES.large,
    },
    locationWrapper: {
        marginBottom: SIZES.small,
    },
    location: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: COLORS.secondary,
        marginHorizontal: 12,
        borderRadius: SIZES.large,
        padding: 5,
        paddingRight: SIZES.xSmall,
    },
    locationContent: {
        flexDirection: 'row',
        gap: SIZES.xSmall
    },
    cartRow: {
        paddingBottom: SIZES.small,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: SIZES.width - 15,
    },
    cartBtn: {
        width: SIZES.width * 0.8,
        backgroundColor: COLORS.black,
        padding: SIZES.xSmall,
        borderRadius: SIZES.large,
        marginLeft: 12,
    },
    cartTitle: {
        fontFamily: 'semibold',
        fontSize: SIZES.small,
        color: COLORS.ligthWhite,
        textAlign: 'center',
    },
    addCart: {
        width: 37,
        height: 37,
        borderRadius: 50,
        margin: SIZES.small,
        backgroundColor: COLORS.black,
        alignItems: 'center',
        justifyContent: 'center',
    }
});

export default styles;
