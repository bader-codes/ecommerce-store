import { FaArrowsRotate, FaRegEye } from "react-icons/fa6";
import { Product } from "@/types/product.types";
import { FaRegHeart } from "react-icons/fa";
import Image from "next/image";
import Rating from "./Rating";
import Link from "next/link";
import { PlusIcon } from "lucide-react";


interface Props {
    data: Product[] | undefined;
}

export default function ProductsList({ data }: Props) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {data?.map((product) => (
                <div key={product._id} className="bg-white border border-gray-200 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                    <div className="relative">
                        
                        <Image
                            className="w-full h-60 object-contain bg-white"
                            src={product.imageCover}
                            alt={product.title}
                            width={200}
                            height={200}
                        />

                        <div className="absolute top-3 right-3 flex flex-col space-y-2">
                            <button className="bg-white h-8 w-8 rounded-full flex items-center justify-center transition shadow-sm text-gray-600 hover:text-red-500" title="Add to wishlist">
                                <FaRegHeart />
                            </button>

                            <button className="bg-white h-8 w-8 rounded-full flex items-center justify-center text-gray-600 hover:text-primary-600 shadow-sm">
                                <FaArrowsRotate />
                            </button>

                            <Link className="bg-white h-8 w-8 rounded-full flex items-center justify-center text-gray-600 hover:text-primary-600 shadow-sm"
                                href={'/'}
                            >
                                <FaRegEye />
                            </Link>
                        </div>

                    </div>

                    <div className="p-4">
                        <span className="text-xs text-gray-500 mb-1">{product.category.name}</span>
                        <Link className="line-clamp-2" href={'/'}>
                            <h3 className="font-medium mb-1 cursor-pointer ">{product.title}</h3>
                        </Link>
                        <Rating rating={product.ratingsAverage} count={product.ratingsQuantity} />

                        <div className="flex items-center justify-between">
                            <div>
                                <span className="text-lg font-bold text-primary-600">{product.priceAfterDiscount} EGP</span>
                                <span className="text-sm text-gray-500 line-through ml-2">{product.price}</span>
                            </div>

                            <button className="h-10 w-10 rounded-full flex items-center justify-center transition bg-green-600 text-white hover:bg-primary-700 disabled:opacity-70">
                                <PlusIcon />
                            </button>
                        </div>
                    </div>

                </div>
            ))}
        </div>
    );
}