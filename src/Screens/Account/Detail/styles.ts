
import { StyleSheet, TextStyle, ViewStyle, ImageStyle } from "react-native";

export default StyleSheet.create({
    shadown: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    } as ViewStyle,
    columView: {
        backgroundColor: '#fff',
        padding: 18,
        marginHorizontal: 10,
        borderRadius: 10,
        justifyContent: 'space-between',
        alignItems: 'center'
    } as ViewStyle,
    textValue: {
        color: '#000',
        fontSize: 14,
    }
});