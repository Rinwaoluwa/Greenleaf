import React from "react";
import { FlatList } from "react-native";
import LottieView from 'lottie-react-native';
import { ProductCard } from "./ProductCard";
import { styles } from "./styles";
import { useProducts } from "../../../apis/apis";
import { LOADER } from "../../../config/constants";
import { View } from "react-native";

export const ProductList = () => {
  const { data: products, isLoading } = useProducts();

  const handleProductPress = (product: any) => {
    console.log("Product pressed:", product.name);
  };

  if (isLoading) {
    return (
      <View style={styles.loaderContainer}>
        <LottieView source={LOADER} autoPlay style={{ flex: 1 }} />
      </View>
    )
  }

  return (
    <FlatList
      data={products}
      keyExtractor={(item: any) => item.id}
      renderItem={({ item }) => (
        <ProductCard product={item} onPress={() => handleProductPress(item)} />
      )}
      numColumns={2}
      contentContainerStyle={styles.listContainer}
      columnWrapperStyle={styles.columnWrapper}
    />
  );
};
