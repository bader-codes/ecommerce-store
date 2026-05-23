import { Button, Input } from '@base-ui/react';
import { RiLoader4Fill } from "react-icons/ri";
import { FaUserPlus } from 'react-icons/fa';
import Link from 'next/link';

type Props = {
    isSubmitting: boolean;
}

export default function FormActions({ isSubmitting }: Props) {

    const buttonContent = isSubmitting ? (
        <RiLoader4Fill className='animate-spin' size={22} />
    ) : (
        <>
            <FaUserPlus size={20} />
            <span>Create My Account</span>
        </>
    );

    return (
        <div>
            <div className="flex items-center gap-2">
                <Input
                    className="size-4 accent-green-600"
                    type="checkbox"
                    name="terms"
                    id="terms"
                />
                <label htmlFor="terms" className="ms-2">I agree to the{" "}
                    <Link
                        href="/terms"
                        className="text-green-600 mx-1 hover:underline"

                    >
                        Terms of Service
                    </Link>
                    <Link
                        href="/privacy-policy"
                        className="text-green-600 mx-1 hover:underline"

                    >
                        Privacy Policy
                    </Link>
                </label>
            </div>

            <Button
                className='flex items-center mb-7 justify-center w-full cursor-pointer rounded-md my-5 py-2 gap-2 text-white bg-green-600 disabled:bg-gray-400 disabled:text-blue-500 disabled:cursor-not-allowed'
                type="submit"
                disabled={isSubmitting}
            >
                {buttonContent}
            </Button>
        </div>
    )
}