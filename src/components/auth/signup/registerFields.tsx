import { RegisterFormData } from "./RegisterSchema";

type Field = {
    id: string;
    name: keyof RegisterFormData;
    type: React.HTMLInputTypeAttribute;
    label: string;
    placeholder: string;
};

export const registerFields: Field[] = [
    {
        id: "name",
        name: "name",
        type: "text",
        label: "Name*",
        placeholder: "Bader",
    },

    {
        id: "email",
        name: "email",
        type: "text",
        label: "Email*",
        placeholder: "bader@example.com",
    },

    {
        id: "password",
        name: "password",
        type: "password",
        label: "Password*",
        placeholder: "create a strong password",
    },

    {
        id: "rePassword",
        name: "rePassword",
        type: "password",
        label: "Confirm Password*",
        placeholder: "confirm your password",
    },

    {
        id: "phone",
        name: "phone",
        type: "tel",
        label: "Phone Number*",
        placeholder: "+20 102 645 0424",
    },
];