import React, { useEffect, useState } from "react";
import { FlatList, View } from "react-native";
import { CategoryCard } from "./CategoryCard";
import { styles } from "./styles";
import { useCategories, useProducts } from "../../../apis/apis";
import { categories, LOADER } from "../../../config/constants";
import { useQueryClient } from "@tanstack/react-query";
import LottieView from "lottie-react-native";

export const CategoryList = () => {
    const queryClient = useQueryClient();

    const [selectedCategory, setSelectedCategory] = useState("");
    const { data: categories_, isLoading } = useCategories();
    useProducts(selectedCategory);

    useEffect(() => {
        queryClient.invalidateQueries(
            { queryKey: ['products'] }
        )
    }, [selectedCategory])

    const handleCategoryPress = (category: any) => {
        setSelectedCategory(category);
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
            data={categories}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
                <CategoryCard
                    category={{ ...item, title: categories_?.[Number(item.id) - 1] ?? "" }} // zero based indexing
                    onPress={() => handleCategoryPress(categories_?.[Number(item.id) - 1])}
                />
            )}
            numColumns={2}

            contentContainerStyle={styles.gridContainer}
            columnWrapperStyle={styles.columnWrapper}
            showsVerticalScrollIndicator={false}
        />
    );
};
