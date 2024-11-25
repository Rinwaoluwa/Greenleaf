import { FlatList, ScrollView, View } from "react-native";
import { Box } from "../design-system/components/Box/Box";
import { SearchBox } from "../design-system/components/SearchBox/SearchBox";
import { FilterButton } from "../design-system/components/Buttons/FilterButton/FilterButton";
import { Spacing } from "../design-system/components/Spacing/Spacing";
import { AppText } from "../design-system/components/AppText/AppText";
import { PressableTextButton } from "../design-system/components/Buttons/PressableText/PressableTextButton";
import { SearchHistory } from "../design-system/components/SearchHIstory/SearchHistory";
import { CategoryList } from "../design-system/components/Category/CategoryList";
import { ProductList } from "../design-system/components/Product/ProductList";
import { pixelSizeVertical } from "../design-system/theme/responsive";
import { AddProductButton } from "../design-system/components/Buttons/AddProductButton/AddProductButton";
import { useEffect, useRef, useState } from "react";
import { useClearSearchHistory, useSearch, useSearchHistory } from "../apis/apis";
import { useQueryClient } from "@tanstack/react-query";

export default () => {
    const queryClient = useQueryClient();

    const [searchTerm, setSearchTerm] = useState('');
    const { data: searchHistory } = useSearchHistory();
    const clearSearchHistory = useClearSearchHistory();

    useSearch(searchTerm);

    const handleItemPress = (item: string) => {
        console.log('Selected item:', item);
    };

    const handleSetSearchTerm = (searchTerm: string) => {
        setSearchTerm(searchTerm);
    }

    const handleClearHistory = () => {
        clearSearchHistory.mutate();
    };

    useEffect(() => {
        queryClient.invalidateQueries(
            { queryKey: ['products'] }
        )
    }, [searchTerm]);

    const sections = [
        { type: "SearchHistory" },
        { type: "CategoryList" },
        { type: "ProductList" },
    ];

    const renderSection = ({ item }: { item: { type: string } }) => {
        switch (item.type) {
            case "SearchHistory":
                return (
                    <>
                        <View
                            style={{
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "space-between",
                            }}
                        >
                            <AppText color="black" fontFamily="medium" fontSize={18}>
                                Search History
                            </AppText>
                            <PressableTextButton title="clear" onPress={handleClearHistory} />
                        </View>

                        <Spacing height={10} />

                        <SearchHistory
                            items={searchHistory ?? []}
                            onItemPress={handleItemPress}
                        />

                        <Spacing height={30} />
                    </>
                );
            case "ProductList":
                return (
                    <>
                        <Spacing height={10} />
                        <ProductList />
                        <Spacing height={30} />
                    </>
                );
            case "CategoryList":
                return (
                    <>
                        <Spacing height={10} />
                        <CategoryList />
                    </>
                );
            default:
                return null;
        }
    };

    return (
        <Box>

            <View style={{ flexDirection: "row" }}>
                <SearchBox onSearch={handleSetSearchTerm} />
                <Spacing width={10} />
                <FilterButton onPress={() => { }} />
            </View>

            <Spacing height={20} />

            <FlatList
                data={sections}
                keyExtractor={(item, index) => `${item.type}-${index}`}
                renderItem={renderSection}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    paddingBottom: pixelSizeVertical(50),
                }}
            />
            <AddProductButton onPress={() => console.log("hey there!!")} />
        </Box>
    )
}

