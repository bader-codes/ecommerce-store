import { FaShieldAlt, FaTruck } from "react-icons/fa";
import { IoTime } from "react-icons/io5";
import Image from "next/image";

type FeatureItemProps = {
    icon: React.ReactNode;
    title: string;
};

function FeatureItem({
    icon,
    title,
}: FeatureItemProps) {
    return (
        <div className="flex items-center">
            <span className="mr-2 text-primary-600">
                {icon}
            </span>

            <span>{title}</span>
        </div>
    );
}

export default function LoginShowcase() {
    return (
        <div className="hidden lg:block">
            <div className="text-center space-y-6">
                <Image
                    className="w-full h-96 object-cover rounded-2xl shadow-lg"
                    src={'/LoginImage.png'}
                    alt="LoginImage"
                    width={300}
                    height={300}
                />

                <div className="space-y-4">
                    <h2 className="text-3xl font-bold text-gray-800">FreshCart - Your One-Stop Shop for Fresh Products</h2>
                    <p className="text-lg text-gray-700">Join thousands of happy customers who trust FreshCart for their daily grocery needs</p>
                    <div className="flex items-center justify-center space-x-8 text-sm text-gray-500">
                        <FeatureItem
                            icon={<FaTruck className="text-green-600"/>}
                            title="Free Delivery"
                        />

                        <FeatureItem
                            icon={<FaShieldAlt className="text-green-600" />}
                            title="Secure Payment"
                        />

                        <FeatureItem
                            icon={<IoTime className="text-green-600"/>}
                            title="24/7 Support"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
