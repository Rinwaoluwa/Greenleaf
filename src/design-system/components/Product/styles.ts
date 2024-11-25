import { StyleSheet } from "react-native";
import { palette } from "../../theme/palette";
import { heightPixel, normalise, pixelSizeHorizontal, pixelSizeVertical } from "../../theme/responsive";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: palette['background'],
        borderColor: palette['grey'],
        borderWidth: normalise(2),
        width: "48%",
        borderRadius: normalise(10),
        paddingHorizontal: pixelSizeHorizontal(20),
        paddingVertical: pixelSizeVertical(10),
    },
    listContainer: {
        padding: normalise(10),
    },
    columnWrapper: {
        justifyContent: "space-between",
        marginBottom: pixelSizeVertical(20),
    },
    image: {
        width: "100%",
        height: heightPixel(100),
        resizeMode: "contain",
        marginBottom: pixelSizeVertical(10),
    },
    loaderContainer: {
        height: heightPixel(300),
    },
})