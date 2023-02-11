import { SCREEN_HEIGHT } from './../../Constants/constants';
import { StyleSheet, TextStyle, ViewStyle } from "react-native";

export default StyleSheet.create({
    textMoney: {
        fontSize: 26,
        color: '#fff',
        fontWeight: 'bold'
    } as TextStyle,
    textValue: {
        fontSize: 14,
        color: '#000'
    } as TextStyle,
    textNote: {
        fontSize: 18,
        color: '#000',
        fontWeight: '500'
    } as TextStyle,
    itemSeleted: {
        fontSize: 14,
        color: '#000',
        textAlign: 'center'
    } as TextStyle,
    shadown: {
        backgroundColor: '#fff',
        marginHorizontal: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        borderRadius: 10,
        elevation: 5,
    } as ViewStyle,
    dropDown: {
        backgroundColor: '#fff',
        borderRadius: 20,
        flex: 1,
        height: 40
    } as ViewStyle,
    modalContent: {
        height: SCREEN_HEIGHT * 0.4,
    } as ViewStyle,
    viewPage: {
        backgroundColor: '#0ea5e9',
        justifyContent: 'space-between',
        padding: 16,
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
    } as ViewStyle,
    icon: {
        marginRight: 5,
    },
})