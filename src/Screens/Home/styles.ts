import { ImageStyle } from 'react-native';
import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { SCREEN_WIDTH } from '../../constants/constants';

export default StyleSheet.create({
    iconSearch: {
        fontSize: 24,
        color: '#000'
    } as TextStyle,
    viewSearch: {
        backgroundColor: '#fff',
        alignItems: 'center',
        padding: 16,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    } as ViewStyle,
    textLabel: {
        fontSize: 18,
        fontWeight: '600',
        color: '#555555',
    } as TextStyle,
    textValue: {
        flex: 1,
        color: '#555555',
    } as TextStyle,
    viewTabs: {
        backgroundColor: '#fff',
        marginHorizontal: 10,
        marginBottom: 10,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    } as ViewStyle,
    viewItem: {
        backgroundColor: '#fff',
        marginHorizontal: 10,
        marginBottom: 10,
        borderRadius: 10,
        padding: 8,
        width: SCREEN_WIDTH - 20,
        bshadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    } as ViewStyle,
    imageTab: {
        width: 50,
        height: 50
    } as ImageStyle,
    imageItem: {
        width: SCREEN_WIDTH / 2.8,
        height: SCREEN_WIDTH / 2.8,
        borderRadius: 10
    } as ImageStyle,
    btnLink: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10,
        borderColor: '#06b6d4',
        borderWidth: 1,
        borderRadius: 5
    } as ViewStyle,
    btnShare: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10,
        paddingHorizontal: 16,
        borderColor: '#06b6d4',
        borderWidth: 1,
        borderRadius: 5
    } as ViewStyle,
    slide: {
        alignItems: 'center',
        justifyContent: 'center',
    } as ViewStyle,
    image: {
        width: SCREEN_WIDTH - 20,
        height: SCREEN_WIDTH / 2.6,
        marginHorizontal: 10,
        borderRadius: 5,
        alignSelf: 'center'
    } as ImageStyle,
})