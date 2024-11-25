import { Text } from "react-native";
import { fontPixel } from "../../theme/responsive";
import { palette } from "../../theme/palette";
import { AppTextStyle } from "./types";

export const AppText = ({ fontSize = 14, fontFamily, color, style, children }: AppTextStyle) => {
      return (
        <Text
          style={[
            {
              fontSize: fontPixel(fontSize as number),
              fontFamily: fontFamily,
              color: color ? palette[color] : palette['black'],
            }, 
            style,
          ]}
        >
          {children}
        </Text>
      );
};