import { StyleSheet } from 'react-native';
import { SIZES } from '../../../constants';

const styles = StyleSheet.create({
    container: {
        marginTop: SIZES.medium,
        marginBottom: SIZES.width / 3,
        marginLeft: 12,
    },
    contentContainer: {
        columnGap: SIZES.xSmall / 5,
    }
});

export default styles;
