'use client';

import LoginInputField from "@/components/ui/LoginInputField";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "../schemas/LoginSchema";
import { useRouter } from "next/navigation";
import LoginUser from "@/app/actions/login";
import { useForm } from "react-hook-form";
import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import { toast } from "react-toastify";
import { Input } from "@base-ui/react";
import { z } from "zod";

export type LoginFormData = z.infer<typeof loginSchema>;

export default function LoginForm() {
    const router = useRouter();

    const form = useForm<LoginFormData>({
        resolver: zodResolver(loginSchema),

        defaultValues: {
            email: "",
            password: "",
        },
    });

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = form;

    // Handle form submit
    async function Submit(data: LoginFormData) {
        const loginResponse = await LoginUser(data);

        if (loginResponse.success) {

            toast.success(loginResponse.message, {
                position: "top-center",
            });

            // Redirect user immediately after successful registration
            setTimeout(() => router.push('/'), 500);

        } else {
            toast.error(loginResponse.message, {
                position: "top-center",
            })
        }
    }

    return (
        <>
            <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-200"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                    <span className="px-4 bg-white text-gray-500 font-medium">OR CONTINUE WITH EMAIL</span>
                </div>
            </div>

            <form className="space-y-6" onSubmit={handleSubmit(Submit)}>
                <LoginInputField
                    register={register('email')}
                    icon={<MdEmail />}
                    id="email"
                    label="Email Address"
                    placeholder="Enter your email"
                    type="email"
                    error={errors.email?.message}
                />

                <LoginInputField
                    register={register('password')}
                    icon={<FaLock />}
                    id="password"
                    label="password"
                    placeholder="Enter your password"
                    type="password"
                    error={errors.password?.message}
                />

                <div className="flex items-center justify-between">
                    <label htmlFor="keep-login" className="flex items-center">
                        <input id="keep-login" type="checkbox" className="h-4 w-4 text-green-600 accent-green-600 border-2 border-gray-300 rounded focus:ring-primary-500" />
                        <span className="ml-3 text-sm text-gray-700">Keep me signed in</span>
                    </label>
                </div>

                <Input type="submit" disabled={isSubmitting} className="w-full bg-green-600 hover:cursor-pointer text-white py-3 px-4 rounded-xl hover:bg-green-700 transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed" />
            </form>
        </>
    )
}