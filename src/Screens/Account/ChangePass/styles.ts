
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
    textBtn: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold'
    }
});