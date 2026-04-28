import Link from "next/link";
import { BiSupport } from "react-icons/bi";

export default function MenuSupport() {
  return (
    <div className="w-full p-4">
      <Link
        href="/contact"
        className="flex items-center p-3 gap-2 rounded-md bg-gray-50 hover:bg-green-50 hover:opacity-80 transition-opacity"
      >
        <div className="bg-green-100 h-9 w-9 rounded-full me-2 flex items-center justify-center">
          <BiSupport size={20} className="text-green-600" />
        </div>

        <div>
          <span className="text-gray-400">Need Help?</span>
          <span className="block text-lg text-green-700">
            Contact Support
          </span>
        </div>
      </Link>
    </div>
  );
}