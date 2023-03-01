import { StyleSheet, ViewStyle, TextStyle } from "react-native";

export default StyleSheet.create({
    txtValue: {
        fontSize: 18,
        color: '#000',
    } as TextStyle,
    iconValue: {
        fontSize: 25,
        color: '#000'
    },
    iconUser: {
        fontSize: 40,
        color: '#000'
    },
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
    viewRow: {
        flexDirection: 'row',
        gap: 16,
        padding: 16,
        alignItems: 'center'
    } as ViewStyle,
    viewRowSub: {
        gap: 10,
        flex: 1
    } as ViewStyle,
})