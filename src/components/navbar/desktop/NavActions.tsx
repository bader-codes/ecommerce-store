import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuList
} from "@/components/ui/navigation-menu";

import { FaRegHeart, FaRegUser } from "react-icons/fa6";
import { BiSupport } from "react-icons/bi";
import { IoCart } from "react-icons/io5";
import Link from "next/link";

export default function NavActions() {
    return (
        <div className="flex gap-3 items-center">
            {/* Support */}
            <NavigationMenu className='hidden lg:flex'>
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <Link href='/contact' className="hidden lg:flex items-center gap-2 pr-3 mr-2 border-r border-gray-200 hover:opacity-80 transition-opacity">
                            <div className="bg-green-100 h-9 w-9 rounded-full me-2 flex items-center justify-center">
                                <BiSupport size={20} className="text-green-600" />
                            </div>
                            <div>
                                <span className="text-gray-500 text-sm">Support</span>
                                <span className="block text-sm font-semibold text-gray-700">24/7 Help</span>
                            </div>
                        </Link>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>

            {/* Cart & Wishlist */}
            <div className="flex items-center gap-2">

                {/* Wishlist */}
                <Link
                    href="/whish"
                    className="p-2 rounded-full hover:bg-gray-100 transition-colors flex items-center justify-center"
                >
                    <FaRegHeart className="text-gray-500 hover:text-green-600 transition-colors" size={20} />
                </Link>

                {/* Cart */}
                <Link
                    href="/cart"
                    className="p-2 rounded-full hover:bg-gray-100 transition-colors flex items-center justify-center"
                >
                    <IoCart className="text-gray-500 hover:text-green-600 transition-colors" size={22} />
                </Link>

                {/* Sign In */}
                <Link
                    href="/login"
                    className="hidden lg:flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-full transition-colors ms-3"
                >
                    <FaRegUser />
                    <span className="text-sm font-medium">Sign in</span>
                </Link>

            </div>
        </div>
    );
}