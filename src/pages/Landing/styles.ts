import { StyleSheet } from 'react-native';
import { Colors } from '../../assets/styles/colors';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.primary,
        justifyContent: 'center',
        padding: 40,
    },

    banner: {
        width: '100%',
        resizeMode: 'contain'
    },

    title: {
        fontFamily: 'Poppins_400Regular',
        color: Colors.title_in_primary,
        fontSize: 20,
        lineHeight: 30,
        marginTop: 80,
    },

    titleBold: {
        fontFamily: 'Poppins_600SemiBold',
    },

    buttonsContainer: {
        flexDirection: 'row',
        marginTop: 40,
        justifyContent: 'space-between',
    },

    button: {
        height: 150,
        width: '48%',
        backgroundColor: Colors.button, 
        borderRadius: 8,
        padding: 24,
        justifyContent: 'space-between',
    },

    buttonPrimary: {
        backgroundColor: Colors.button_primary,
    },

    buttonSecondary: {
        backgroundColor: Colors.button_secondary,
    },

    buttonText: {
        fontFamily: 'Archivo_700Bold',
        color: Colors.text,
        fontSize: 20,
    },

    totalConnections: {
        fontFamily: 'Poppins_400Regular',
        color: Colors.text_in_primary,
        fontSize: 12,
        lineHeight: 20,
        maxWidth: 140,
        marginTop: 40,
    }
});

export default styles;