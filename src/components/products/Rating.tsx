import { IoStar } from "react-icons/io5";

interface Props {
    rating: number;
    count?: number;
}


export default function Rating({ rating, count }: Props) {
    const fullStars = Math.floor(rating);

    return (
        <div className="flex items-center mb-2">
            <div className="flex text-yellow-400 mr-2">
                {Array.from({ length: 5 }).map((_, i) => {
                    if (i < fullStars) {
                        return (
                            <div key={i}>
                                <IoStar className="text-yellow-400" size={22}/>
                            </div>
                        );
                    }

                    return (
                        <div key={i}>
                            <IoStar className="text-gray-200" size={22}/>
                        </div>
                    );
                })}
            </div>

            <span className="text-xs text-gray-500">
                {rating} ({count})
            </span>
        </div>
    );
}