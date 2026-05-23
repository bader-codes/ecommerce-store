"use client";
import { RegisterFormData, RegisterSchema } from "./RegisterSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerFields } from "./registerFields";
import CreateUser from "@/app/actions/register";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import FormActions from "./FormActions";
import { toast } from "react-toastify";
import FormInput from "./FormInput";

export default function SignupForm() {

    const router = useRouter();

    const form = useForm<RegisterFormData>({
        defaultValues: {
            name: "",
            email: "",
            password: "",
            rePassword: "",
            phone: ""
        },

        // Form validation handled by Zod schema via resolver
        resolver: zodResolver(RegisterSchema)
    });

    const { handleSubmit, control, formState: { isSubmitting } } = form;

    // Handle form submit
    async function Submit(data: RegisterFormData) {
        const registerResponse = await CreateUser(data);

        if (registerResponse.success) {

            toast.success(registerResponse.message, {
                position: "top-center",
            });

            // Redirect user immediately after successful registration
            setTimeout(() => router.push('/login'), 500);

        } else {
            toast.error(registerResponse.message, {

                position: "top-center",
            })
        }
    }

    return (
        <form className="space-y-7" onSubmit={handleSubmit(Submit)}>
            <div className="flex flex-col gap-2">
                {
                    registerFields.map((field) => {
                        return <FormInput
                            key={field.id}
                            control={control}
                            {...field}
                        />
                    })
                }
            </div>

            <FormActions isSubmitting={isSubmitting} />
        </form>
    )
}