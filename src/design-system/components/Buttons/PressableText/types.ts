import { ButtonProps,  } from "react-native"

export interface BtnProps extends Omit<ButtonProps, "title"> {
    onPress: () => void;
}