import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants';

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
        borderColor: COLORS.primary,
        borderWidth: 2,
        resizeMode: 'cover',
        marginTop: -90,
    },
    name: {
        fontFamily: 'bold',
        color: COLORS.primary,
        marginVertical: 5,
    }
});

export default styles;
