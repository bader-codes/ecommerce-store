'use client';
import DiscountCard from "./DiscountCard";
import { motion } from "framer-motion";

export default function DiscountSection() {
    const discounts = [
        {
            description: "Get up to 40% off on selected organic fruits",
            cardBackground: 'bg-linear-to-br from-emerald-500 to-emerald-700',
            title: "Fresh Organic Fruits",
            badgeText: "Deal of the Day",
            buttonTextColor: 'text-green-500',
            buttonText: "Shop Now",
            discount: "40% OFF",
            href: "/products",
            code: "ORGANIC40",
            badgeIcon: "🔥",
        },
        {
            description: "Discover our latest collection of premium vegetables",
            cardBackground: 'bg-linear-to-br from-orange-400 to-rose-500 p-8 text-white',
            buttonTextColor: 'text-orange-500',
            title: "Exotic Vegetables",
            badgeText: "New Arrivals",
            code: "Use code: FRESH25",
            buttonText: "Explore Now",
            discount: "25% OFF",
            href: "/products",
            badgeIcon: "🔥",
        },
    ];

    return (
        <section className="py-10 overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-6">
                    {discounts.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index === 0 ? -20 : 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.8 }}
                            className={`${item.cardBackground} relative overflow-hidden rounded-2xl p-8 text-white`}
                        >
                            <DiscountCard {...item}/>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}