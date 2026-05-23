import * as zod from "zod";

export const RegisterSchema = zod.object({
    name: zod
        .string()
        .trim()
        .nonempty('Name is required')
        .min(3, 'Minimum Length is 3 chars')
        .max(10, 'Max length is 10 chars'),


    email: zod
        .string()
        .nonempty('Email is required')
        .email('Enter a valid Email'),

    password: zod
        .string()
        .trim()
        .nonempty('Password is required')
        .min(8, 'Password must be at least 8 characters')
        .max(20, 'Max length is 20 characters')
        .regex(/(?:.*\d){4,}/, 'Must contain at least 4 numbers')
        .regex(/[a-z]/, 'Must contain at least 1 lowercase letter')
        .regex(/[A-Z]/, 'Must contain at least 1 uppercase letter')
        .regex(/[\W_]/, 'Must contain at least 1 symbol'),
    rePassword: zod
        .string()
        .nonempty('Re-password is required'),


    phone: zod
        .string()
        .trim()
        .nonempty('Phone is required')
        .regex(
            /^(\+20|0)?1[0125][0-9]{8}$/,
            'Enter a valid Egyptian phone number'
        ),

}).refine((data) => data.password === data.rePassword, {
    message: 'Passwords do not match',
    path: ['rePassword'],
});

export type RegisterFormData = zod.infer<typeof RegisterSchema>;