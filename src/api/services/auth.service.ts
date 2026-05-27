// auth.service.ts
import { LoginFormData } from "@/components/auth/login/LoginForm";
import { RegisterFormData } from "@/components/auth/schemas/RegisterSchema";
import { apiClient } from "../client";

export function login(userData: LoginFormData) {
  return apiClient.post("/auth/signin", userData);
}

export function register(userData: RegisterFormData) {
  return apiClient.post("/auth/signup", userData);
}