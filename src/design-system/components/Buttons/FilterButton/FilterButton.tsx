import React from 'react';
import { Pressable } from 'react-native';
import { palette } from '../../../theme/palette';
import { Ionicons } from '@expo/vector-icons';

import { FilterButtonProps } from './types';
import { styles } from './styles';
import { normalise } from '../../../theme/responsive';

export const FilterButton = ({ onPress }: FilterButtonProps) => {
    return (
        <Pressable onPress={onPress} style={styles.buttonStyle}>
            <Ionicons name='filter' color={palette['green']} size={normalise(24)} />
        </Pressable>
    );
};

