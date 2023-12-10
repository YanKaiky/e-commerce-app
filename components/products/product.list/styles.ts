import { StyleSheet } from 'react-native';
import { SIZES } from '../../../constants';

const styles = StyleSheet.create({
    loading: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center',
    },
    container: {
        alignItems: 'center',
        paddingTop: SIZES.xxLarge,
        paddingLeft: SIZES.small / 2,
    },
    flatList: {
        alignItems: 'center',
        paddingBottom: SIZES.xxLarge,
    },
    separator: {
        height: 8,
    }
});

export default styles;
