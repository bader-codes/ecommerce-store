import { SheetHeader, SheetClose } from "@/components/ui/sheet";
import { IoCloseSharp } from "react-icons/io5";
import Image from "next/image";
import Link from "next/link";

export default function MenuHeader() {
  return (
    <SheetHeader className="bg-gray-50 flex justify-between items-center flex-row">
      <Link href="/">
        <Image
          src="/freshcart-logo.svg"
          alt="logo"
          width={120}
          height={40}
          className="h-8 w-auto"
        />
      </Link>

      <SheetClose className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 cursor-pointer">
        <IoCloseSharp className="text-gray-500" size={22} />
      </SheetClose>
    </SheetHeader>
  );
}