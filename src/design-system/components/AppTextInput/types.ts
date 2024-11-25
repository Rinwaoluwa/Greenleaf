import { TextInputProps, TextStyle, ViewStyle } from 'react-native';
import { Control } from 'react-hook-form';
import { Palette } from '../../theme/palette';

export interface AppTextInputProps extends Omit<TextInputProps, 'onBlur' | 'onFocus'> {
    label: string;
    name: string;
    error?: string;
    placeholder?: string;
    leftIcon?: any;
    rightIcon?: any;
    leftIconFill?: Palette;
    rightIconFill?: Palette;
    control: Control<any, any>;
    editable?: boolean;
    onPress?: () => void;
    onPressLeftIcon?: () => void;
    onPressRigthtIcon?: () => void;
    onFocus?: () => void;
    onBlur?: () => void;
    multiline?: boolean;
    numberOfLines?: number;
    secureTextEntry?: boolean;
    style?: TextStyle;
    containerStyle?: ViewStyle;
}