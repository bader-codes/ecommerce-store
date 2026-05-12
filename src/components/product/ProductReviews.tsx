"use client"

import { Product } from '@/types/product.types';
import { FaStar } from 'react-icons/fa';
import { Card } from '../ui/card'
import ProductRate from './ProductRate';

export default function ProductReviews({ data }: { data: Product }) {

    return (
        <Card className="rounded-none p-6 rounded-b-md ring-0 shadow-none border-none outline-none">
            <div className="space-y-3">
                <div className="flex flex-col md:flex-row gap-8 items-start md:items-center">
                    <div className="text-center">
                        <div className="text-5xl font-bold text-gray-900 mb-2">{data.ratingsAverage}</div>

                        <div className='text-yellow-400'>
                            <div className="flex justify-center text-yellow-400 gap-1">
                                {Array.from({ length: 5 }).map((_, i) => {
                                    const fill = Math.max(0, Math.min(1, data.ratingsAverage - i))

                                    return (
                                        <div key={i} className="relative">
                                            {/* Background */}
                                            <FaStar className="text-gray-200" size={22} />

                                            <div
                                                className="absolute top-0 left-0 overflow-hidden text-yellow-400"
                                                style={{ width: `${fill * 100}%` }}
                                            >
                                                <FaStar size={22} />
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>

                            <p className='text-sm text-gray-500 mt-2'>Based on {data.reviews.length} reviews</p>
                        </div>
                    </div>

                    <ProductRate data={data}/>
                </div>
            </div>
        </Card>
    )
}