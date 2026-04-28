import { SheetClose } from "@/components/ui/sheet";
import { NAV_LINKS } from "../Navbar.constants";
import Link from "next/link";

export default function MenuLinks() {
  return (
    <div className="w-full p-4 flex flex-col items-start justify-start">
      {NAV_LINKS.map((link) => {
        return (
          <SheetClose className="w-full" key={link.label}>
            <Link
              href={link.href}
              className="block text-lg text-start w-full px-4 py-2 rounded-lg hover:bg-green-100/60 hover:text-green-600"
            >
              {link.label}
            </Link>
          </SheetClose>
        );
      })}
    </div>
  );
}