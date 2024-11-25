import { View } from "react-native";
import { AppText } from "../design-system/components/AppText/AppText";
import { PressableTextButton } from "../design-system/components/Buttons/PressableText/PressableTextButton";
import { pixelSizeVertical } from "../design-system/theme/responsive";
import { palette } from "../design-system/theme/palette";


export default ({ navigation }: any) => (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", paddingVertical: pixelSizeVertical(20), backgroundColor: palette["background"]}}>
        <AppText fontFamily="medium" color="black">Coming Soon please checkout our {" "}</AppText>
        <PressableTextButton title="Store✨" onPress={() => navigation.navigate("Search")} />
    </View>
);