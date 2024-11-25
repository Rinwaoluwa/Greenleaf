export interface Category {
    id: string;
    title: string;
    image: string;
    backgroundColor: string;
    borderColor: string;
}

export interface CategoryCardProps {
    category: Category;
    onPress: (category: Category) => void;
}
