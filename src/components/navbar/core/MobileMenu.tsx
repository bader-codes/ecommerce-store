import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

import { IoMdMenu } from "react-icons/io";
import MenuSupport from "../mobile/MenuSupport";
import MenuActions from "../mobile/MenuActions";
import MenuHeader from "../mobile/MenuHeader";
import MenuSearch from "../mobile/MenuSearch";
import MenuLinks from "../mobile/MenuLinks";
import MenuAuth from "../mobile/MenuAuth";
import { useEffect, useState } from "react";

function Divider() {
  return <div className="border-b border-gray-200" />;
}

export function MobileMenu() {

  const [open, setOpen] = useState(false);

  // Close Mobile Menu in Larg Screen
  useEffect(() => {
  const handleResize = () => {
    if (window.innerWidth >= 1024) {
      setOpen(false);
    }
  };

  window.addEventListener("resize", handleResize);

  return () => window.removeEventListener("resize", handleResize);
}, []);

  return (
    <Sheet open={open} onOpenChange={setOpen}>

      {/* Menu Button */}
      <SheetTrigger className='cursor-pointer w-9 h-9 flex justify-center items-center bg-green-500 rounded-full'>
        <IoMdMenu className="text-white" size={22} />
      </SheetTrigger>

      <SheetContent showCloseButton={false} style={{ width: '300px' }}>

        {/* Logo */}
        <MenuHeader />

        {/* Search Input */}
        <MenuSearch />

        <Divider />

        {/* Nav Menu */}
        <MenuLinks />

        <Divider />

        {/* Cart & Whish List */}
        <MenuActions />

        <Divider />

        {/* Login & Signup */}
        <MenuAuth />

        <Divider />

        {/* Support */}
        <MenuSupport />

      </SheetContent>
    </Sheet>
  )
}