import { Pressable } from "react-native"
import { AppText } from "../../AppText/AppText"
import { BtnProps } from "./types";

export const PressableTextButton = ({ title, ...props }: { title: string; props: BtnProps }) => {
    return (
        <Pressable {...props}>
            <AppText fontFamily="medium" color="orange" >{title}</AppText>
        </Pressable>
    )
}