
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
    dropDown: {
        borderRadius: 10,
        backgroundColor: '#fff',
        paddingHorizontal: 10,
        paddingVertical: 5
    } as ViewStyle,
    viewModal: {
        backgroundColor: '#fff',
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        marginTop: 20,
        flex: 1,
        paddingVertical: 20,
        paddingHorizontal: 16
    } as ViewStyle,
    selectNganHang: {
        borderRadius: 10,
        backgroundColor: '#fff',
        paddingHorizontal: 10,
        paddingVertical: 10,
        alignItems: 'center',
    } as ViewStyle,
    imageItem: {
        width: 120,
        height: 80,
    } as ImageStyle,
    imageView: {
        width: 30,
        height: 20,
    } as ImageStyle,
    textEmpty: {
        color: '#555',
        fontSize: 16,
        fontWeight: 'bold'
    },
    textLabel: {
        color: '#000',
        fontSize: 18,
        fontWeight: 'bold'
    },
    textSubLabel: {
        color: '#555',
        fontSize: 16,
    }
});