import { Product } from "@/types/product.types";

export default function ProductPrice({ data }: { data: Product }) {
    return (
        <div className="flex items-center flex-wrap gap-3 mb-6">
            <span className="text-3xl font-bold text-gray-900">
                {(data.priceAfterDiscount ?? data.price)} EGP
            </span>

            {data.priceAfterDiscount && data.priceAfterDiscount < data.price && (
                <span className="text-lg text-gray-400 line-through">
                    {data.price} EGP
                </span>
            )}

            {
                data.priceAfterDiscount &&
                <span className="bg-red-500 text-white text-sm px-3 py-1 rounded-full font-medium">
                    Save{" "}
                    {Math.round(
                        ((data.price - data.priceAfterDiscount) / data.price) * 100
                    )}
                    %
                </span>
            }
        </div>
    )
}
