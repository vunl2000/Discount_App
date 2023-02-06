import { StyleSheet, ViewStyle, ImageStyle } from "react-native";
import { SCREEN_HEIGHT, SCREEN_WIDTH } from "../../constants/constants";

export default StyleSheet.create({
    indicator: {
        height: 12,
        width: 12,
        marginHorizontal: 8,
        borderRadius: 12 / 2,
    } as ViewStyle,
    image: {
        width: SCREEN_WIDTH * 0.8 - 20,
        height: SCREEN_WIDTH / 2.6,
        marginHorizontal: 10,
        borderRadius: 5
    } as ImageStyle,
})