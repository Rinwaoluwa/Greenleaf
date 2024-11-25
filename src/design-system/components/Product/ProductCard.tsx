import React from "react";
import { Image, Pressable, View } from "react-native";
import { styles } from "./styles";
import { AppText } from "../AppText/AppText";
import { ProductCardProps } from "./types";


export const ProductCard = ({ product, onPress }: ProductCardProps) => {
    return (
        <Pressable style={styles.container} onPress={onPress}>
            <Image source={{ uri: product.image }} style={styles.image} />
            <AppText fontFamily="bold" color="black">
                {product.title}
            </AppText>
            <AppText fontFamily="regular" color="grey--2">
                {product.category}
            </AppText>
            <AppText fontFamily="regular" color="orange">
                {product.price}
            </AppText>
        </Pressable>
    );
};
