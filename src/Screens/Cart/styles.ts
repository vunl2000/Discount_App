import { ImageStyle, StatusBar } from 'react-native';
import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { SCREEN_WIDTH } from '../../Constants/constants';

export default StyleSheet.create({
    viewSearch: {
        backgroundColor: '#fff',
        padding: 10,
        margin: 10,
        borderRadius: 10
    } as ViewStyle,
    viewIcon: {
        width: 35,
        height: 35,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    } as ViewStyle,
    viewContainTabs: {
        backgroundColor: '#f1f1f1',
        margin: 10,
        borderRadius: 10,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 4
    } as ViewStyle,
    iconSearch: {
        fontSize: 24,
        color: '#000'
    } as TextStyle,
    textTitle: {
        fontSize: 22,
        color: '#000',
        fontWeight: 'bold',
        marginLeft: 12
    } as TextStyle,
    textEmpty: {
        fontSize: 20,
        color: '#000',
        fontWeight: '500'
    } as TextStyle,
    textTab: {
        fontSize: 18,
        color: '#555',
        fontWeight: '600'
    } as TextStyle,
    tabbar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#fafafa',
        paddingTop: StatusBar.currentHeight,
    },
    tab: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    active: {
        color: '#0084ff',
    },
    inactive: {
        color: '#939393',
    },
    icon: {
        height: 26,
        width: 26,
    },
    label: {
        fontSize: 10,
        marginTop: 3,
        marginBottom: 1.5,
        backgroundColor: 'transparent',
    },
    shadown: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    } as ViewStyle
})