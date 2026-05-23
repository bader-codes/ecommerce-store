"use client";
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { IoSearch } from 'react-icons/io5';
import clsx from 'clsx';

// styles
export const inputBase =
    "w-full px-5 py-3 pr-12 rounded-full ring-1 ring-gray-200 text-sm transition-all";

export const inputFocus =
    "focus-visible:ring-green-500/20 focus-visible:border-green-500 focus-visible:ring-2 focus-visible:outline-none";

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

                <Button className="absolute cursor-pointer right-1 top-1/2 h-10 w-10 -translate-y-1/2 bg-green-600 rounded-full">
                    <IoSearch className="text-white w-5! h-5!" />
                </Button>
            </div>
        </div>
    )
}