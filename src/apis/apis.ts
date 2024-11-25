import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { BASE_URL } from '../config/constants';
import { Category, Product, SearchResult } from './types';


const SEARCH_HISTORY_KEY = '@search_history';

// **API Call Functions**
export const fetchProducts = async (category?: string): Promise<Product[]> => {
    if (category) {
        //  **Fetch product by Category**
        const { data } = await axios.get<Product[]>(`${BASE_URL}/products/category/${category}`);
        return data;
    } else {
        const { data } = await axios.get<Product[]>(`${BASE_URL}/products`);
        return data;
    }
};

export const fetchCategories = async (): Promise<Category[]> => {
    const { data } = await axios.get<Category[]>(`${BASE_URL}/products/categories`);
    return data;
};


// **Local Storage Helpers**
export const getSearchHistory = async (): Promise<string[]> => {
    try {
        const history = await AsyncStorage.getItem(SEARCH_HISTORY_KEY);
        return history ? JSON.parse(history) : [];
    } catch (error) {
        console.error('Error reading search history:', error);
        return [];
    }
};

export const saveSearchHistory = async (newTerm: string): Promise<string[]> => {
    try {
        const history = await getSearchHistory();
        const updatedHistory = [newTerm, ...history.filter(term => term !== newTerm)].slice(0, 10);
        await AsyncStorage.setItem(SEARCH_HISTORY_KEY, JSON.stringify(updatedHistory));
        return updatedHistory;
    } catch (error) {
        console.error('Error saving search history:', error);
        return [];
    }
};

export const clearSearchHistory = async (): Promise<void> => {
    try {
        await AsyncStorage.removeItem(SEARCH_HISTORY_KEY);
    } catch (error) {
        console.error('Error clearing search history:', error);
    }
};

// **Custom Hooks**

/**
 * Fetch all products
 */
export const useProducts = (category?: string) => {
    return useQuery<Product[]>({
        queryKey: ['products'],
        queryFn: () => fetchProducts(category),
    });
};

/**
 * Fetch all categories
 */
export const useCategories = () => {
    return useQuery<Category[]>({
        queryKey: ['categories'],
        queryFn: fetchCategories,
        staleTime: 1000 * 60 * 10, // Cache for 10 minutes
    });
};

/**
 * Search for products and categories
 */
export const useSearch = (searchTerm: string) => {
    return useQuery<SearchResult>({
        queryKey: ['search', searchTerm],
        queryFn: async () => {
            const products = await fetchProducts(searchTerm);
            const categories = await fetchCategories();

            const filteredProducts = products.filter((product) =>
                product.title.toLowerCase().includes(searchTerm.toLowerCase())
            );

            const filteredCategories = categories.filter((category) =>
                category.toLowerCase().includes(searchTerm.toLowerCase())
            );

            return { filteredProducts, filteredCategories };
        },
        enabled: !!searchTerm, // Only run query if searchTerm is not empty
        staleTime: 0,
    });
};

/**
 * Fetch search history
 */
export const useSearchHistory = () => {
    return useQuery<string[]>({
        queryKey: ['searchHistory'],
        queryFn: getSearchHistory,
        staleTime: Infinity, // Local data doesn't need frequent updates
    });
};

/**
 * Add to search history
 */
export const useAddSearchHistory = () => {
    const queryClient = useQueryClient();

    return useMutation<string[], unknown, string>({
        mutationFn: saveSearchHistory,
        onSuccess: () => {
            queryClient.invalidateQueries(['searchHistory'] as any);
            queryClient.invalidateQueries(['products'] as any);
        },
    });
};

/**
 * Clear search history
 */
export const useClearSearchHistory = () => {
    const queryClient = useQueryClient();

    return useMutation<void, unknown>({
        mutationFn: clearSearchHistory,
        onSuccess: () => {
            queryClient.invalidateQueries(['searchHistory'] as any); // Refresh the search history cache
        },
    });
};
