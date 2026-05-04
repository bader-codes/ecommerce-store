import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";

export default function SectionHeader() {
    return (
        <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-8">

            <div className="flex items-center gap-3 my-8">
                <div className="h-8 w-1.5 bg-linear-to-b from-emerald-500 to-emerald-700 rounded-full"></div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                    {'Shop By '}
                    <span className="text-emerald-600">Category</span>
                </h2>
            </div>

            <Link
                href={'/'}
                className="text-green-600 self-end sm:self-auto hover:text-green-700 font-medium flex items-center"
            >
                View All Categories
                <FaArrowRight className="ml-2" />
            </Link>
        </div>
    );
}