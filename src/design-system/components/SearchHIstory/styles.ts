import { StyleSheet } from "react-native";
import { fontPixel, normalise, pixelSizeHorizontal, pixelSizeVertical } from "../../theme/responsive";

export const styles = StyleSheet.create({
    scrollContent: {
        flexGrow: 1,
    },
    chipContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: normalise(8),
    },
    chip: {
        paddingHorizontal: pixelSizeHorizontal(16),
        paddingVertical: pixelSizeVertical(8),
        borderRadius: normalise(20),
        marginBottom: pixelSizeVertical(8),
    },
    chipText: {
        color: '#6B7280',
        fontSize: fontPixel(14),
    },
});