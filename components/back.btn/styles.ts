import { StyleSheet } from 'react-native';
import { SIZES } from '../../constants';

const styles = StyleSheet.create({
    backBtn: {
        alignItems: 'center',
        position: 'absolute',
        zIndex: 999,
        top: SIZES.large - 10,
    }
});

export default styles;
