import { FaShieldAlt, FaStar } from "react-icons/fa";
import { FaTruckFast } from "react-icons/fa6";
import React from "react";

type FeatureCardProps = {
    icon: React.ReactNode;
    title: string;
    description: string;
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
    return <li className="flex items-start gap-4">
        <div className="size-12 text-lg bg-green-200 text-green-600 rounded-full flex justify-center items-center">
            {icon}
        </div>

        <div>
            <h2 className="text-lg font-semibold">
                {title}
            </h2>

            <p className="text-gray-600">
                {description}
            </p>
        </div>
    </li>
}

export default function StoreBenefits() {

    const features = [
        {
            icon: <FaStar />,
            title: 'Premium Quality',
            description: 'Premium quality products sourced from trusted suppliers'
        },
        {
            icon: <FaTruckFast />,
            title: 'Fast Delivery',
            description: 'Same-day delivery available in most areas'
        },
        {
            icon: <FaShieldAlt />,
            title: 'Secure Shopping',
            description: 'Your data and payments are completely secure'
        },
    ];

    return (
        <ul className="space-y-6">
            {
                features.map((item) => {
                    return <FeatureCard
                        description={item.description}
                        title={item.title}
                        key={item.title}
                        icon={item.icon}
                    />
                })
            }
        </ul>
    )
}