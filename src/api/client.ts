import { BASE_URL } from "./config";

export const apiClient = {
  get: async (url: string) => {
    const response = await fetch(`${BASE_URL}${url}`);
    const data = await response.json();
    
    return data;
  },
};