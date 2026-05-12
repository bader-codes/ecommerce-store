import { FaRegHeart } from "react-icons/fa";
import { IoCart } from "react-icons/io5";
import Link from "next/link";

function ActionItem({
  href,
  icon,
  label,
  bg,
  color,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
  bg: string;
  color: string;
}) {
  return (
    <Link
      href={href}
      className="block w-full p-1 text-start hover:bg-green-100/60 hover:text-green-600 transition-colors rounded-md"
    >
      <div className="flex items-center gap-5">
        <div
          className={`h-10 w-10 flex items-center justify-center rounded-full ${bg}`}
        >
          <div className={color}>{icon}</div>
        </div>

        <span className="text-lg">{label}</span>
      </div>
    </Link>
  );
}

export default function MenuActions() {
  return (
    <div className="flex p-2 flex-col items-center w-full gap-y-2">
      <ActionItem
        href="/whish"
        label="Whish List"
        icon={<FaRegHeart size={20} />}
        bg="bg-red-50"
        color="text-red-500"
      />

      <ActionItem
        href="/cart"
        label="Cart"
        icon={<IoCart size={20} />}
        bg="bg-green-50"
        color="text-green-500"
      />
    </div>
  );
}