import { FaTruck, FaLock, FaHeadset, FaUndo } from "react-icons/fa";
import FeatureCard from "./FeatureCard";

const features = [
    {
        icon: <FaTruck className="text-xl" />,
        description: "On orders over 500 EGP",
        iconColor: "text-blue-500",
        title: "Free Shipping",
        iconBg: "bg-blue-50",
    },
    {
        icon: <FaLock className="text-xl" />,
        description: "100% secure payment",
        iconColor: "text-green-500",
        title: "Secure Payment",
        iconBg: "bg-green-50",
    },
    {
        icon: <FaUndo className="text-xl" />,
        description: "30 days return policy",
        iconColor: "text-orange-500",
        iconBg: "bg-orange-50",
        title: "Easy Returns",
    },
    {
        icon: <FaHeadset className="text-xl" />,
        description: "Dedicated support",
        iconColor: "text-purple-500",
        title: "24/7 Support",
        iconBg: "bg-purple-50",

    },
];

export default function HighlightCard() {
    return (
        <section className="py-8 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 p-3">
                    {features.map((feature, index) => (
                        <FeatureCard
                            key={index}
                            icon={feature.icon}
                            title={feature.title}
                            description={feature.description}
                            iconBg={feature.iconBg}
                            iconColor={feature.iconColor}
                            duration={index * 0.5}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}