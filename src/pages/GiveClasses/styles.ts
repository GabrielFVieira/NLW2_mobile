import { StyleSheet } from 'react-native';
import { Colors } from '../../assets/styles/colors';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.secundary,
        justifyContent: 'center',
        padding: 40,
    },

    content: {
        flex: 1,
        justifyContent: 'center',
    },

    title: {
        fontFamily: 'Archivo_700Bold',
        color: Colors.title_in_primary,
        fontSize: 32,
        lineHeight: 37,
        maxWidth: 180,
    },

    description: {
        marginTop: 24,
        color: Colors.text_in_primary_dark,
        fontSize: 16,
        lineHeight: 26,
        fontFamily: 'Poppins_400Regular',
        maxWidth: 240,
    },

    okButton: {
        marginVertical: 40,
        backgroundColor: Colors.primary,
        height: 58,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8
    },

    okButtonText: {
        color: Colors.button_text,
        fontSize: 16,
        fontFamily: 'Archivo_700Bold',
    },
});

export default styles;