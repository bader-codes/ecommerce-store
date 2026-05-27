'use server';

import { login } from "@/api/services/auth.service";
import { LoginFormData } from "@/components/auth/login/LoginForm";

export default async function LoginUser(data: LoginFormData) {
    try {
        const response = await login(data);

        if (response.statusMsg === 'fail') {
            return {
                success: false,
                message: response.message,
            };
        }

        return {
            success: true,
            message: 'Login successfully',
        };

    } catch (error) {
        console.error(error);

        return {
            success: false,
            message: 'Something went wrong',
        };
    }
}