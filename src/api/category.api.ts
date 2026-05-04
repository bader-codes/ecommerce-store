import { apiClient } from "./client";

export const categoryApi = {
    getAll: async () => {
        try {
            const response = await apiClient.get('/categories');
            return response.data;
        }

        catch (err) {
            console.log(err);
            return [];
        }
    }
}

export const productsApi = {
    getAll: async () => {
        try {
            const response = await apiClient.get('/products');
            return response.data;
        }

        catch (err) {
            console.log(err);
            return [];
        }
    }
}