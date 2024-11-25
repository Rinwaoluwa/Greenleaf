import { ReactNode } from "react";
import { ViewStyle } from "react-native";
import { Palette } from "../../theme/palette";

export interface BoxProps extends ViewStyle {
  applySafeArea?: boolean;
  children: ReactNode;
  backgroundColor?: Palette;
}