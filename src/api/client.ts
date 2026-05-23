import { BASE_URL } from "./config";

export const apiClient = {
  get: async (url: string, limit?: number) => {
    const response = await fetch(
      `${BASE_URL}${url}${limit ? `?limit=${limit}` : ""}`
    );

    const data = await response.json();

    return data;
  },

  post: async (url: string, body: unknown) => {
    const response = await fetch(`${BASE_URL}${url}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    const data = await response.json();

    return data;
  },
};