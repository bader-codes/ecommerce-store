import { IoStar } from "react-icons/io5";

interface Props {
    rating: number
    count?: number
    className?: string
    elementText?: string
}

export default function Rating({
    rating,
    count,
    className,
    elementText,
}: Props) {
    return (
        <div className="flex items-center mb-2">
            <div className="flex text-yellow-400 mr-2">
                <div className="mr-2 flex">
                    {Array.from({ length: 5 }, (_, i) => {
                        const diff = rating - i

                        return (
                            <div key={i} className="relative">
                                <IoStar
                                    size={22}
                                    className="text-gray-200"
                                />

                                {diff >= 0.5 && (
                                    <div
                                        className="absolute inset-0 overflow-hidden"
                                        style={{
                                            width: diff >= 1 ? "100%" : "50%",
                                        }}
                                    >
                                        <IoStar
                                            size={22}
                                            className="text-yellow-400"
                                        />
                                    </div>
                                )}
                            </div>
                        )
                    })}
                </div>
            </div>

            <span className={`${className} text-gray-500`}>
                {rating} ({count} {elementText || ""})
            </span>
        </div>
    )
}