import { Product } from "@/types/product.types";
import { apiClient } from "../client";

export const productsApi = {
    getAll: async (limit?: number): Promise<Product[]> => {
        try {
            const response = await apiClient.get('/products', limit);
            return response.data;
        } catch (err) {
            console.log(err);
            return [];
        }
    },

    getById: async (id: string): Promise<Product | null> => {
        try {
            const response = await apiClient.get(`/products/${id}`);
            return response.data;
        } catch (err) {
            console.log(err);
            return null;
        }
    }
};