import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants';

const styles = StyleSheet.create({
    button: {
        height: 50,
        width: '100%',
        marginVertical: 20,
        backgroundColor: COLORS.primary,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 12,
    },
    title: {
        fontFamily: 'bold',
        color: COLORS.white,
        fontSize: 18
    },
});

export default styles;
