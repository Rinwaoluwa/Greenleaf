import { Platform, View } from "react-native";
import React, { ReactNode } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { BoxProps } from "./type";
import { palette } from "../../theme/palette";
import { pixelSizeVertical } from "../../theme/responsive";

export const Box = ({
  children,
  applySafeArea = true,
  paddingRight,
  paddingLeft,
  backgroundColor,
  flex,
  ...style
}: BoxProps) => {
  const { bottom, top } = useSafeAreaInsets();
  const bg = backgroundColor ? palette[backgroundColor] : palette["background"];
  const isAndroid = Platform.OS === "android";

  return (
    <View
      style={{
        backgroundColor: bg,
        paddingTop: applySafeArea ? (isAndroid ? top + 50 : top) : 0,
        paddingBottom: applySafeArea ? bottom : 0,
        paddingLeft: paddingLeft ?? pixelSizeVertical(20),
        paddingRight: paddingRight ?? pixelSizeVertical(20),
        flex:1,
      }}
    >
      <View style={{ ...style }}>
        {children}
      </View>
    </View>
  );
};

