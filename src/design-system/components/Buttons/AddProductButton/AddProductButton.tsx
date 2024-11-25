import React from 'react';
import { Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { styles } from './styles';

export const AddProductButton = ({ onPress }: { onPress: () => void }) => {
    return (
        <Pressable style={styles.fab} onPress={onPress}>
            <Ionicons name="add" size={24} color="white" />
        </Pressable>
    );
};

