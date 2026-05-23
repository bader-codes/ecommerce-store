import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { RegisterFormData } from "./RegisterSchema";
import { Control, Controller } from "react-hook-form";
import { Input } from "@/components/ui/input";

export interface InputValues {
  control: Control<RegisterFormData>;
  name: keyof RegisterFormData;
  placeholder: string;
  label: string;
  id: string;
  type: React.HTMLInputTypeAttribute;
};

export default function FormInput({
  control,
  name,
  id,
  label,
  placeholder,
  type,
}: InputValues) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) =>
        <Field data-invalid={fieldState.invalid}>
          <FieldLabel htmlFor={id} className="text-lg">{label}</FieldLabel>
          <Input
            {...field}
            id={id}
            placeholder={placeholder}
            type={type}
            className="w-full px-4 py-3 border rounded-md focus-visible:ring-green-500 transition-all placeholder:text-lg placeholder:text-gray-400"
          />

          {fieldState.error && (
            <FieldError errors={[fieldState.error]} />
          )}

        </Field>
      }
    />
  )
}