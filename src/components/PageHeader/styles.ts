import { StyleSheet } from 'react-native';
import { Colors } from '../../assets/styles/colors';

const styles = StyleSheet.create({
    container: {
        padding: 40,
        backgroundColor: Colors.primary,
    },
    topBar: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    title: {
        fontFamily: 'Archivo_700Bold',
        color: Colors.title_in_primary,
        fontSize: 24,
        lineHeight: 32,
        maxWidth: 160,
        marginVertical: 40,
    },
});

export default styles;