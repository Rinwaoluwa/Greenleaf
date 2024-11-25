import { StyleSheet } from "react-native";
import { fontPixel, heightPixel, pixelSizeHorizontal, widthPixel } from "../../theme/responsive";
import { palette } from "../../theme/palette";

export const styles = StyleSheet.create({
    textInputContainer: {
        backgroundColor: palette['off-white'],
        height: heightPixel(51),
        width: widthPixel(276),
    },
    textInput: {
        fontFamily: 'regular',
        fontSize: fontPixel(14),
        paddingVertical: 0, // Ensure no extra padding
    },
    iconContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: pixelSizeHorizontal(5), // Adjust padding
    },
});