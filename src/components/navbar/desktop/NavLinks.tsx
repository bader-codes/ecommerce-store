import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuList,
    NavigationMenuTrigger
} from "@/components/ui/navigation-menu";

import { NAV_LINKS } from "../Navbar.constants";
import Link from "next/link";

export default function NavLinks() {
    return (
        <NavigationMenu className="hidden xl:flex items-center mx-5">
            <NavigationMenuList className="flex gap-4">

                {NAV_LINKS.map((item) => {
                    // Just Links
                    if (item.type === "link") {
                        return (
                            <NavigationMenuItem key={item.label}>
                                <Link href={item.href}>
                                    <span className="text-lg text-gray-900 hover:bg-white hover:text-green-600">
                                        {item.label}
                                    </span>
                                </Link>
                            </NavigationMenuItem>
                        );
                    }
                    // Drop Down
                    if (item.type === "dropdown") {
                        return (
                            <NavigationMenuItem key={item.label}>
                                <NavigationMenuTrigger className="text-lg text-gray-900 cursor-pointer hover:bg-white hover:text-green-500">
                                    {item.label}
                                </NavigationMenuTrigger>

                                <NavigationMenuContent>
                                    <ul className="w-50">
                                        {item.children?.map((child) => (
                                            <li key={child.label}>
                                                <Link
                                                    className="inline-flex hover:text-green-600 hover:bg-green-50 px-3 py-2 rounded-sm cursor-pointer w-full"
                                                    href={child.href}
                                                >
                                                    {child.label}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                        );
                    }

                    return null;
                })}

            </NavigationMenuList>
        </NavigationMenu>
    )
}