export interface ProductCardProps {
    product: {
        image: any;
        title: string;
        category: string;
        price: string | number;
    };
    onPress: () => void;
};

export interface ProductListRef {
    scrollToTop: () => void;
}