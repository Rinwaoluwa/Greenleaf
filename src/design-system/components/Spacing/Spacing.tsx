import { View } from "react-native";
import { SpacingProps } from "./types";
import { heightPixel, widthPixel } from "../../theme/responsive";

export function Spacing({ flex, height = 0, width = 0 }: SpacingProps) {
    return <View style={{ flex: flex, width: widthPixel(width), height: heightPixel(height) }} />;
}