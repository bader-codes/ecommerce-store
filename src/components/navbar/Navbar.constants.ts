import { NavLinkType } from "./Navbar.types";

export const NAV_LINKS: NavLinkType[] = [
    {
        label: "Home",
        href: "/",
        type: "link",
    },
    {
        label: "Shop",
        href: "/shop",
        type: "link",
    },
    {
        label: "Brands",
        href: "/brands",
        type: "link",
    },
    {
        label: "Categories",
        type: "dropdown",
        href: "categories",
        children: [
            {
                label: "All Categories",
                href: "/categories",
            },
            {
                label: "Electronics",
                href: "/electronics",
            },
            {
                label: "Women's Fashion",
                href: "/women's",
            },
            {
                label: "men's Fashion",
                href: "/men's",
            },
            {
                label: "Beauty & Health",
                href: "/beauty",
            },
        ],
    },
];