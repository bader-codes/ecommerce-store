"use client"

import { Product } from "@/types/product.types"
import { motion } from "framer-motion"
import { FaStar } from "react-icons/fa"
type RatingKey = 1 | 2 | 3 | 4 | 5;

export default function ProductRate({ data }: { data: Product }) {
    const distribution: Record<RatingKey, number> = data.reviews.reduce(
        (acc, review) => {
            acc[review.rating as RatingKey] += 1
            return acc
        },
        {
            1: 0,
            2: 0,
            3: 0,
            4: 0,
            5: 0,
        }
    );

    const totalReviews = data.reviews.length || 1;

    const ratingStats = Object.entries(distribution)
        .reverse()
        .map(([star, count]) => ({
            star: Number(star),
            count,
            percentage: (count / totalReviews) * 100,
        }));

    return (
        <div className='flex-1 w-full'>
            <div className="space-y-3">
                {ratingStats.map((item) => (
                    <div
                        key={item.star}
                        className="flex items-center gap-3"
                    >
                        <span className="flex items-center gap-2 w-8 text-sm font-medium">
                            <span className="font-semibold">{item.star}</span>
                            <FaStar className="text-yellow-400/80" />
                        </span>

                        <div className="h-2 flex-1 overflow-hidden rounded-full bg-gray-200">
                            <motion.div
                                className="h-full rounded-full bg-yellow-400"
                                initial={{ width: 0 }}
                                animate={{ width: `${item.percentage}%` }}
                                transition={{
                                    duration: 0.6,
                                    ease: "easeOut",
                                    delay: item.star * 0.05,
                                }}
                            />

                        </div>
                            <span className="text-sm text-gray-700">{`${Math.round(item.percentage)}%`}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}