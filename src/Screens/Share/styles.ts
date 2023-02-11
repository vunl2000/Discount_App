import { StyleSheet, TextStyle, ViewStyle } from "react-native";

export default StyleSheet.create({
    textLable: {
        fontSize: 16,
        color: '#333'
    } as TextStyle,
    textValue: {
        fontSize: 14,
        color: '#000'
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
    } as ViewStyle

})