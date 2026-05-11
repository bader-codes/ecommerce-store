import FeatureCard from "../shared/components/FeatureCard";
import { FaLock, FaTruck, FaUndo } from "react-icons/fa";
import { MdHeadsetMic } from "react-icons/md";


const features = [
    {
        icon: <FaTruck className="text-xl" />,
        title: "Free Shipping",
        description: "On orders over 500 EGP",
        className: "",
        iconClassName: "bg-green-200 text-green-600",
    },
    {
        icon: <FaLock className="text-xl" />,
        title: "Secure Payment",
        description: "100% secure transactions",
        iconClassName: "bg-green-200 text-green-600",
    },
    {
        icon: <FaUndo className="text-xl" />,
        title: "Easy Returns",
        description: "14-day return policy",
        iconClassName: "bg-green-200 text-green-600",
    },
    {
        icon: <MdHeadsetMic className="text-xl font-bold" />,
        title: "24/7 Support",
        description: "Dedicated support team",
        iconClassName: "bg-green-200 text-green-600",
    },
];


export default function HomeFeatureCard() {
    return (
        <div className="bg-green-50 border-y border-primary-100">
            <div className="container mx-auto px-4 py-6">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {features.map((feature, index) => (
                        <FeatureCard
                            key={index}
                            icon={feature.icon}
                            title={feature.title}
                            description={feature.description}
                            iconClassName={feature.iconClassName}
                            className={feature.className}
                            duration={index * 0.5}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}
