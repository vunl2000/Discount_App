import { StyleSheet, TextStyle, ViewStyle, ImageStyle } from "react-native";
import colors from "../../../Style/colors";
export const stylesSignIn = StyleSheet.create({
    containner: {
        backgroundColor: colors.white,
        flex: 1
    },
    formStyle: {
        paddingTop: 50,
        paddingHorizontal: 20
    },
    textStyle: {
        color: colors.black,
        fontSize: 40,
        fontWeight: 'bold'
    },
    styleDetail: {
        color: colors.grey,
        fontSize: 18,
        marginVertical: 10
    },
    formDetail: {
        marginVertical: 20
    },
    textRegisters: {
        color: colors.black,
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 16,
    }
})