import { TextStyle, TextProps } from "react-native";
import { Fonts } from "../../theme/font";
import { Palette } from "../../theme/palette";
import { ReactNode } from "react";

export interface AppTextStyle extends TextProps {
    fontSize?: TextStyle['fontSize'];
    fontFamily: Fonts,
    color: Palette;
    children: ReactNode;
}