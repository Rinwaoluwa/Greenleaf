import { Controller } from 'react-hook-form';
import React from 'react';
import {
    View,
    TextInput,
    Pressable,
} from 'react-native';
import { styles } from './styles';
import { normalise, pixelSizeHorizontal } from '../../theme/responsive';
import { AppTextInputProps } from './types';
import { palette } from '../../theme/palette';
import { AppText } from '../AppText/AppText';
import { Ionicons } from '@expo/vector-icons';





export const AppTextInput = ({
    error,
    onBlur: pureOnBlur,
    onFocus,
    ...props
}: AppTextInputProps) => {

    return (
        <>
            <Controller
                control={props.control}
                render={({ field: { onChange, onBlur, value } }) => (
                    <View
                        style={[
                            styles.textInputContainer,
                            {
                                flexDirection: 'row', // Ensure row layout
                                alignItems: 'center', // Align items vertically
                                borderColor: error ? palette['red'] : palette['grey'],
                                borderWidth: normalise(1),
                                borderRadius: normalise(10),
                                paddingHorizontal: pixelSizeHorizontal(15), // Adjust padding
                            },
                        ]}
                    >
                        {props.leftIcon && (
                            <Pressable onPress={props?.onPressLeftIcon} style={styles.iconContainer}>
                                <Ionicons
                                    name={props.leftIcon}
                                    color={props.leftIconFill}
                                    size={normalise(20)}
                                />
                            </Pressable>
                        )}
                        <TextInput
                            value={value}
                            onChangeText={onChange}
                            onBlur={() => onBlur()}
                            onFocus={() => onFocus?.()}
                            autoCapitalize="none"
                            editable={props?.editable}
                            style={[
                                styles.textInput,
                                props.containerStyle,
                                {
                                    flex: 1, // Let the TextInput take remaining space
                                    color: palette['orange'],
                                },
                            ]}
                            onPressIn={() => props.onPress?.()}
                            selectionColor={palette['orange']}
                            placeholderTextColor={palette['orange']}
                            {...props}
                        />
                        {props.rightIcon && (
                            <Pressable onPress={props?.onPressRigthtIcon} style={styles.iconContainer}>
                                <Ionicons
                                    name={props.leftIcon}
                                    color={props.leftIconFill}
                                    size={normalise(20)}
                                />
                            </Pressable>
                        )}
                    </View>
                )}
                name={props.name}
            />
            {error ? (
                <AppText fontSize={12} color={'red'} fontFamily="medium">
                    {error}
                </AppText>
            ) : null}
        </>
    );
};
