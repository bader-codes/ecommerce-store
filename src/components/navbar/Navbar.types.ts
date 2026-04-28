export type NavLinkType = {
    label: string;
    href: string;
    type?: "link" | "dropdown";
    children?: NavLinkType[];
};