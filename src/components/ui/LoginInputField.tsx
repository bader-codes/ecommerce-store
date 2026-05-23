'use client';

import { UseFormRegisterReturn } from "react-hook-form";
import { Input } from "@base-ui/react";
import Link from "next/link";

type InputFieldProps = {
    register: UseFormRegisterReturn;
    icon: React.ReactNode;
    placeholder: string;
    error?: string;
    label: string;
    type: string;
    id: string;
};

export default function LoginInputField({
    label,
    type,
    id,
    placeholder,
    icon,
    register,
    error,
}: InputFieldProps) {

    return (
        <>
            <div className="mb-3">

                <div className="flex items-center justify-between mb-2">
                    <label
                        htmlFor={id}
                        className="inline-block text-sm font-semibold text-gray-700"
                    >
                        {label}
                    </label>

                    {
                        type === 'email' && <Link
                            className="text-sm text-green-600 hover:text-green-700 cursor-pointer font-medium"
                            href={'/forget-password'}
                        >
                            Forget Password ?
                        </Link>
                    }

                </div>


                <div className="relative">

                    <Input
                        className="w-full px-4 py-3 pl-12 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100 transition-all"
                        type={type}
                        id={id}
                        {...register}
                        placeholder={placeholder}
                    />

                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                        {icon}
                    </span>
                </div>
                {
                    error && (
                        <p className="text-red-500 text-sm mt-2">
                            {error}
                        </p>
                    )
                }
            </div>
        </>
    );
}