import { FaArrowRotateLeft, FaBolt, FaShieldHalved, FaTruckFast } from "react-icons/fa6";
import Button from "../shared/components/Button";
import { FaCartShopping } from "react-icons/fa6";
import { Product } from "@/types/product.types";
import FeatureItem from "../shared/FeatureItem";
import { FaShareAlt } from "react-icons/fa";
import ProductPrice from "./ProductPrice";
import { CiHeart } from "react-icons/ci";
import Rating from "../products/Rating";
import QuantityBox from "./QuantityBox";
import Link from "next/link";

export default function ProductInfo({ data }: { data: Product }) {
    return (
        <div className="bg-white rounded-xl shadow-sm p-6">

            <div className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3 flex gap-5">
                <Link href={''} className="inline-block py-1.5 px-4 bg-green-50 rounded-full text-green-800 text-sm">
                    {data.category.name}
                </Link>

                <span className="inline-block py-1.5 px-4 bg-gray-100 rounded-full text-gray-800 text-sm">{data.brand.name}</span>
            </div>

            <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">{data.title}</h1>

            <div className="flex items-center gap-3 mb-4">
                <Rating
                    className="text-sm font-semibold"
                    rating={data.ratingsAverage}
                    count={data.ratingsQuantity}
                    elementText="reviews"
                />
            </div>

            <ProductPrice data={data} />

            <div className="flex items-center gap-2 mb-6">
                <span className="flex items-center gap-1.5 text-sm px-3 py-1.5 rounded-full bg-green-50 text-green-700">
                    <span className="w-2 h-2 rounded-full bg-green-500"></span>
                    In Stock
                </span>
            </div>

            <div className="border-t border-gray-100 pt-5 mb-6">
                <p className="text-gray-600 leading-relaxed">
                    {data.description}
                </p>
            </div>

            <QuantityBox data={data} />

            <div className="flex flex-col sm:flex-row gap-3 mb-6">
                <Button
                    icon={<FaCartShopping className="mt-1" />}
                    text="Add to Card"
                    className="flex-1 text-white py-3.5 px-6 rounded-xl font-medium hover:bg-green-700 active:scale-[0.98] transition-all flex items-center justify-center gap-2 shadow-lg shadow-green-600/25 bg-green-600"
                />
                <Button
                    icon={<FaBolt className="mt-1" />}
                    text="Buy Now"
                    className="flex-1 bg-gray-900 text-white py-3.5 px-6 rounded-xl font-medium hover:bg-gray-800 active:scale-[0.98] transition-all flex items-center justify-center gap-2"
                />
            </div>

            <div className="flex gap-3 mb-6">
                <Button
                    icon={<CiHeart size={20} className="mt-1" />}
                    text="Add to Wishlist"
                    className="flex-1 border-2 py-3 px-4 rounded-xl font-medium transition flex items-center justify-center gap-2 border-gray-200 text-gray-700 hover:border-green-300 hover:text-green-600"
                />

                <Button
                    icon={<FaShareAlt />}
                    className="border-2 border-gray-200 text-gray-700 py-3 px-4 rounded-xl hover:border-green-300 hover:text-green-600 transition"
                />
            </div>

            <div className="border-t border-gray-100 pt-6">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <FeatureItem
                        icon={<FaTruckFast />}
                        title="Free Delivery"
                        description="Orders over $50"
                    />

                    <FeatureItem
                        icon={<FaArrowRotateLeft />}
                        title="30 Days Return"
                        description="Money back"
                    />

                    <FeatureItem
                        icon={<FaShieldHalved />}
                        title="Secure Payment"
                        description="100% Protected"
                    />
                </div>
            </div>

        </div>
    )
}