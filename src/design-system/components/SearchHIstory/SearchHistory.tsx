import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { fontPixel, normalise, pixelSizeHorizontal, pixelSizeVertical } from '../../theme/responsive';
import { styles } from './styles';
import { AppText } from '../AppText/AppText';

interface SearchHistoryProps {
    items: string[];
    onItemPress: (item: string) => void;
}

export const SearchHistory = ({ items, onItemPress }: SearchHistoryProps) => {
    return (
        <>
            <View style={styles.chipContainer}>
                {items.map((item, index) => (
                    <TouchableOpacity
                        key={index}
                        style={styles.chip}
                        onPress={() => onItemPress(item)}
                    >
                        <AppText fontFamily='medium' fontSize={10} color="grey--2">{item}</AppText>
                    </TouchableOpacity>
                ))}
            </View>
        </>
    );
};

