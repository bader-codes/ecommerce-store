import Link from 'next/link';
import { FaPhoneAlt } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { FaTruck } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaGift } from "react-icons/fa";

export default function TopNav() {
    return (
        <div className='hidden lg:block text-sm border-b border-gray-100'>
            <div className='container mx-auto px-4'>
                <div className='flex justify-between items-center h-10'>

                    <div className='flex items-center gap-6 text-gray-600'>
                        <span className='flex items-center gap-2'>
                            <FaTruck className='text-green-600' />
                            <span>Free Shipping on Orders 500 EGP</span>
                        </span>
                        <span className='flex items-center gap-2'>
                            <FaGift className='text-green-600' />
                            <span>New Arrivals Daily</span>
                        </span>
                    </div>

                    <div className='flex items-center gap-6'>
                        <div className="flex items-center gap-4 text-gray-600">
                            <Link href="tel:+18001234567"
                                className="flex items-center gap-1.5 hover:text-green-600 transition-colors">
                                <FaPhoneAlt />
                                <span className='text-sm'>+1 (800) 123-4567</span>
                            </Link>
                            <Link href="mailto:support@freshcart.com"
                                className="flex items-center gap-1.5 hover:text-green-600 transition-colors">
                                <MdEmail />
                                <span className='text-sm mb-1'>support@freshcart.com</span>
                            </Link>
                        </div>

                        <span className="w-px h-4 bg-gray-200"></span>

                        <div className='flex items-center gap-4'>
                            <Link className='flex items-center gap-1.5 text-gray-600 hover:text-green-600 transition-colors' href='/login'>
                                <FaRegUser />
                                <span>Sign in</span>
                            </Link>
                            <Link className='flex items-center gap-1.5 text-gray-600 hover:text-green-600 transition-colors' href='/signup'>
                                <FaRegUser />
                                <span>Sign up</span>
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}