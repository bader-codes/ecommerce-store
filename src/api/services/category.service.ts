import { Category } from "@/types/category.types";
import { apiClient } from "../client";

export const categoryApi = {
    getAll: async () : Promise<Category[]> => {
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