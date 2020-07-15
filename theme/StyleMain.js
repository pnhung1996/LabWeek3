import { StyleSheet } from 'react-native';

const StyleMain = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginTop: 30,
        padding : 10
    },
    inputStyle: {
        width: '85%',
        height: 60,
        padding: 10,
        fontSize: 35,
        borderWidth: 1,
        borderColor: 'lightblue',
        margin: 10
    },
    selectButtonStyle: {
        width: '60%',
        height: 35,
        borderRadius: 30,
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'lightblue',
        borderWidth: 1
    },
    textCurrencyStyle: {
        color: "green",
        fontWeight: 'bold',
        fontSize: 35,
        alignItems: 'center',
        justifyContent: 'center',
    }
});

export default StyleMain;