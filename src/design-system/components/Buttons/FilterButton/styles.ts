import { Platform, StyleSheet } from "react-native";
import { palette } from "../../../theme/palette";
import { heightPixel, normalise, widthPixel } from "../../../theme/responsive";

export const styles = StyleSheet.create({
    buttonStyle: {
        backgroundColor: palette['background'],
        ...Platform.select({
            ios: {
                shadowColor: palette['black'],
                shadowOffset: { width: 0, height: heightPixel(2) },
                shadowOpacity: 0.1,
                shadowRadius: normalise(8),
            },
            android: {
                elevation: normalise(8),
            },
        }),
        width: widthPixel(57.12),
        borderRadius: normalise(10),
        height: heightPixel(51),
        justifyContent: "center",
        alignItems: "center",
    }
});

