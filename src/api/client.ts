import { BASE_URL } from "./config";

export const apiClient = {
  get: async (url: string, limit?: number) => {
    const response = await fetch(`${BASE_URL}${url}${limit ? `?limit=${limit}` : ""}`);
    const data = await response.json();
    
    return data;
  },
};