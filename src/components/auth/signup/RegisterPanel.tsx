import { FaFacebook, FaGoogle } from "react-icons/fa";
import { Button } from "@base-ui/react";
import SignupForm from "./SignupForm";

export default function RegisterPanel() {
    const socialButtonStyles = 'w-full cursor-pointer flex items-center justify-center gap-3 py-3 px-4 border-2 border-gray-200 rounded-xl hover:border-green-300 hover:bg-green-50 transition-all duration-200';
    return (
        <div className='bg-white rounded-2xl shadow-lg px-6 py-10'>
            <h2 className="text-center text-3xl font-semibold mb-2">Create Your Account</h2>
            <p className="text-center">Start your fresh journey with us today</p>

            <div className="register-options flex gap-2 *:grow my-10">
                <Button className={socialButtonStyles} type="button">
                    <FaGoogle className="text-red-400" />
                    <span className="font-medium text-gray-700">Google</span>
                </Button>

                <Button className={socialButtonStyles} type="button">
                    <FaFacebook className="text-blue-500" />
                    <span className="font-medium text-gray-700">Facebook</span>
                </Button>
            </div>

            <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-200"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                    <span className="px-4 bg-white text-gray-500 font-medium">OR</span>
                </div>
            </div>

            <SignupForm />
        </div>
    )
}