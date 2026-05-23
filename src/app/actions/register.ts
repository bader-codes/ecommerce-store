'use server';
import { register } from "@/api/services/auth.service";
import { RegisterFormData } from "@/components/auth/signup/RegisterSchema";

export default async function CreateUser(data: RegisterFormData) {
    try {
        const response = await register(data);

        if (response.statusMsg === 'fail') {
            return {
                success: false,
                message: response.message,
            };
        }

        return {
            success: true,
            message: 'Account created successfully',
        };

    } catch (error) {
        console.error(error);

        return {
            success: false,
            message: 'Something went wrong',
        };
    }
}