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
        marginHorizontal: 15,
    },
    welcomeTxt2: {
        color: COLORS.primary,
        fontFamily: 'bold',
        fontSize: SIZES.xxLarge -7,
        marginHorizontal: 15,
    },
});

export default styles;
