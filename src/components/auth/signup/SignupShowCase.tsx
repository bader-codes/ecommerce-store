import StoreBenefits from "./StoreBenefits";
import { FaStar } from "react-icons/fa";
import Image from "next/image";

export default function SignupShowCase() {

    return (
        <div>
            <h1 className="text-4xl font-bold">
                Welcome to <span className="text-green-600">FreshCart</span>
            </h1>

            <p className="text-xl mt-2 mb-4">
                Join thousands of happy customers who enjoy fresh groceries delivered right to their doorstep.
            </p>

            <div className="mb-10">
                <StoreBenefits />
            </div>

            <div className="review bg-white shadow-sm p-4 rounded-md">
                <div className="author flex items-center gap-4 mb-4">
                    <Image
                        src='/review-author.webp'
                        width={50}
                        height={50}
                        alt="review-author"
                    />
                    <div>
                        <h3>Sarah Johnson</h3>
                        <div className="flex gap-1">
                            {[...Array(5)].map((_, index) => (
                                <FaStar key={index} className="text-yellow-400" />
                            ))}
                        </div>
                    </div>
                </div>
                <blockquote>
                    <p className="italic text-gray-600">
                        {`"FreshCart has transformed my shopping experience. The quality of the products is outstanding, and the delivery is always on time. Highly recommend!"`}
                    </p>
                </blockquote>
            </div>
        </div>
    )
}