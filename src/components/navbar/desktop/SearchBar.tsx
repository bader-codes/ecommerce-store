"use client";
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { IoSearch } from 'react-icons/io5';
import clsx from 'clsx';

// styles
export const inputBase =
    "w-full px-5 py-5 rounded-full ring-1 ring-gray-200 text-sm transition-all";

export const inputFocus =
    "focus-visible:ring-green-500 focus-visible:ring-1 focus-visible:outline-none";

export const inputPlaceholder =
    "placeholder:text-gray-400 placeholder:text-sm";

export default function SearchBar() {
    return (
        <div className="hidden lg:flex flex-1 max-w-2xl mx-5">
            <div className="relative w-full">
                <Input
                    placeholder="Search for products, brands and more..."
                    className={clsx(inputBase, inputFocus, inputPlaceholder)}
                />

                <Button className="absolute cursor-pointer right-2 top-1/2 h-9 w-9 -translate-y-1/2 bg-green-600 rounded-full">
                    <IoSearch className="text-white" size={20} />
                </Button>
            </div>
        </div>
    )
}