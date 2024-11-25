import React from 'react';
import { Text, Image, Pressable } from 'react-native';
import type { Category, CategoryCardProps } from './types';
import { styles } from './styles';
import { normalise } from '../../theme/responsive';



export const CategoryCard = ({ category, onPress }: CategoryCardProps) => {
  return (
    <Pressable
      style={[styles.container, { backgroundColor: category.backgroundColor, borderColor: category.borderColor, borderWidth: normalise(1) }]}
      onPress={() => onPress(category)}
    >
      <Image source={category.image as any} style={styles.image} />
      <Text style={styles.title}>{category.title}</Text>
    </Pressable>
  );
};

