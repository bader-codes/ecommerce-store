import { Category } from "@/types/category.types";
import Image from "next/image";
import Link from "next/link";

export default function CategoriesList({ data }: { data: Category[] }) {    
    return (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
        >
            {
                data.map((category) => (
                    <Link
                        key={category._id}
                        href={'/'}
                        className="bg-white rounded-lg p-4 text-center shadow-sm hover:shadow-md transition group cursor-pointer"
                    >
                        <div className="h-20 w-20 overflow-hidden bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-primary-200 transition">
                            <Image
                                src={category.image}
                                alt={category.name}
                                loading="lazy"
                                width={300}
                                height={300}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <h3 className="font-medium">{category.name}</h3>
                    </Link>
                ))
            }
        </div>
    )
}