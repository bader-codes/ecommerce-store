import { FaCheck } from "react-icons/fa6";
import { IconType } from "react-icons";

interface InfoCardProps {
    title: string
    icon: IconType
    items: string[]
}

export default function CardInfo({
    title,
    icon: Icon,
    items,
}: InfoCardProps) {
    return (
        <div className="rounded-lg bg-linear-to-br from-green-50 to-green-100 p-6">
            <div className="mb-4 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-600 text-white">
                    <Icon className="text-xl" />
                </div>

                <h4 className="font-semibold text-gray-900">
                    {title}
                </h4>
            </div>

            <ul className="space-y-3">
                {items.map((item, index) => (
                    <li
                        key={index}
                        className="flex items-start gap-2 text-sm text-gray-700"
                    >
                        <FaCheck className="mt-0.5 text-green-600" />

                        <span>{item}</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}