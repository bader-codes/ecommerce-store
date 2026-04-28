"use client";

import { MobileMenu } from "./MobileMenu"; 
import NavActions from "../desktop/NavActions"; 
import SearchBar from "../desktop/SearchBar";
import NavLinks from "../desktop/NavLinks"; 
import Logo from "../shared/Logo"; 

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 bg-white shadow-sm p-3">
      <div className="bg-white">
        <div className="container mx-auto px-4 flex items-center justify-between">

          {/* Logo */}
          <Logo />

          {/* Search Input */}
          <SearchBar />

          {/* Nav Menu */}
          <NavLinks />

          {/* Contact Us */}
          <div className="flex gap-3 items-center">

          <NavActions />

            {/* Mobile Menu */}
            <div className="flex lg:hidden">
              <MobileMenu />
            </div>
          </div>

        </div>
      </div>
    </header>
  )
}