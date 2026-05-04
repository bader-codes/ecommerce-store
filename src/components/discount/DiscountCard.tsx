import { FaArrowRightLong } from "react-icons/fa6";
import Link from "next/link";

interface DiscountCardProps {
  badgeText?: string;
  badgeIcon?: string;

  title: string;
  description: string;

  discount: string;
  code?: string;

  buttonText?: string;
  buttonTextColor: string;
  href: string;

  reverse?: boolean;
  cardBackground: string;
}

export default function DiscountCard({
  badgeText,
  badgeIcon,
  title,
  description,
  discount,
  code,
  buttonText,
  href,
  buttonTextColor,
}: DiscountCardProps) {
  return (
    <div>
      <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>

      {/* Card Data */}
      <div className="relative z-10">
        <div className="inline-flex items-center gap-2 bg-white/20 px-3 py-1 rounded-full text-sm mb-4">
          <span>{badgeIcon}</span>
          <span>{badgeText}</span>
        </div>
        <h3 className="text-2xl md:text-3xl font-bold mb-2">{title}</h3>
        <p className="text-white/80 mb-4">{description}</p>
        <div className="flex items-center gap-4 mb-6"><div className="text-3xl font-bold">{discount}</div>
          <div className="text-sm text-white/70">Use code: <span className="font-bold text-white">{code}</span></div>
        </div>
        <Link
          className={`inline-flex items-center gap-2 bg-white ${buttonTextColor} px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors`}
          href={href}
        >
          {buttonText}
          <FaArrowRightLong />
        </Link>
      </div>

    </div>
  );
}