"use client";

import { FaMinus, FaPlus } from "react-icons/fa";
import { Product } from "@/types/product.types";
import { Button } from "@base-ui/react";
import { useState } from "react";

export default function QuantityBox({ data }: { data: Product }) {
    const [quantity, setQuantity] = useState(1);

    // Handle Input
    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        const value = Number(e.target.value);

        if (value >= 1 && value <= data.quantity) {
            setQuantity(value);
        }
    };

    const finalPrice = data.priceAfterDiscount ?? data.price;

    return (
        <>
            <div className="mb-6">
                <span className="block text-sm font-medium text-gray-700 mb-2">Quantity</span>

                <div className="flex items-center gap-4">
                    <div className="flex items-center border-2 border-gray-200 rounded-lg overflow-hidden">
                        <Button
                            className='px-5 py-4 cursor-pointer text-gray-600 hover:bg-gray-100 hover:text-primary-600 transition disabled:opacity-50'
                            onClick={() => setQuantity(quantity - 1)}
                            disabled={quantity === 1}
                        >
                            <FaMinus />
                        </Button>

                        <input
                            min={1}
                            max={data.quantity}
                            className="w-16 text-center border-0 focus:ring-0 focus:outline-none text-lg font-medium"
                            id="quantity"
                            type="number"
                            value={quantity}
                            onChange={handleChange}
                            readOnly
                        >
                        </input>

                        <Button
                            className='px-5 py-4 cursor-pointer text-gray-600 hover:bg-gray-100 hover:text-primary-600 transition disabled:opacity-50'
                            onClick={() => setQuantity(quantity + 1)}
                            disabled={quantity === data.quantity}
                        >
                            <FaPlus />
                        </Button>
                    </div>

                    <span className="text-sm text-gray-500">{data.quantity} available</span>
                </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-4 mb-6">
                <div className="flex justify-between items-center">
                    <span className="text-gray-600">Total Price:</span>
                    <span className="text-2xl font-bold text-green-600">
                        {
                            `${finalPrice * quantity} EGP`
                        }
                    </span>
                </div>
            </div>
        </>
    );
}