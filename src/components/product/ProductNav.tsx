import { FaChevronRight } from "react-icons/fa";
import { MdHome } from "react-icons/md";
import Link from "next/link";

type ProductNavProps = {
  productName: string;
};

type Links = {
  label: string;
  href?: string;
};

export default function ProductNav({
  productName,
}: ProductNavProps) {

  const productNavLinks: Links[] = [
    { label: "Home", href: "/" },
    { label: "Women's Fashion", href: "/" },
    { label: "Women's Clothing", href: "/" },
    { label: productName },
  ];

  return (
    <nav className="py-4">
      <div className="container mx-auto px-4">
        <ul className="flex items-center flex-wrap text-sm">
          {productNavLinks.map((item, index) => {
            const isLast = index === productNavLinks.length - 1;

            return (
              <li key={`${item.label}-${index}`} className="flex items-center">
                {item.href && !isLast ? (
                  <Link
                    href={item.href}
                    className="text-gray-500 hover:text-green-600 transition flex items-center gap-1.5"
                  >
                    {index === 0 && <MdHome size={20} />}
                    {item.label}
                  </Link>
                ) : (
                  <span className="text-gray-900 font-medium truncate max-w-xs">
                    {item.label}
                  </span>
                )}

                {!isLast && (
                  <FaChevronRight className="text-gray-400 text-xs mx-2" />
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}