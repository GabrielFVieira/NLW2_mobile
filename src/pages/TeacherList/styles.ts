import { StyleSheet } from 'react-native';
import { Colors } from '../../assets/styles/colors';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background,
    },
    teacherList: {
        marginTop: -40,
    },
    searchForm: {
        marginBottom: 10,
    },
    label: {
        color: Colors.text_in_primary, 
        fontFamily: 'Poppins_400Regular',
    },
    inputGroup: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    inputBlock: {
        width: '48%',
    },
    input: {
        height: 51,
        backgroundColor: Colors.background_light,
        borderRadius: 8,
        justifyContent: 'center',
        paddingHorizontal: 16,
        marginTop: 4,
        marginBottom: 16,

    },
    filterButtonContainer: {
        borderBottomColor: Colors.button_primary,
        borderBottomWidth: 1,
        marginBottom: 25,
    },
    filterButton: {
        height: 40,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10,
    },
    headerRight: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    headerRightText: {
        marginTop: 3,
        marginLeft: 8,
    },
    submitButton: {
        backgroundColor: Colors.button_secondary,
        height: 56,
        borderRadius: 8,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    submitButtonText: {
        color: Colors.text,
        fontFamily: 'Archivo_700Bold',
        fontSize: 16,
    },
});

export default styles;