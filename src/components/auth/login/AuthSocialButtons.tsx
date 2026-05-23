import { FaFacebook, FaGoogle } from "react-icons/fa";
import { Button } from "@base-ui/react";

export default function AuthSocialButtons() {
    return (
        <>
            <div className="text-center mb-8">
                <div className="flex items-center justify-center mb-4">
                    <span className="text-3xl font-bold text-green-600">
                        {`${'Fresh'} `}
                        <span className="text-gray-800">Card</span>
                    </span>
                </div>
                <h1 className="text-2xl font-bold text-gray-800 mb-2">Welocme Back!</h1>
                <p className="text-gray-600">Sign in to continue your fresh shopping experience</p>
            </div>

            <div className="space-y-3 mb-6">
                <Button
                    className='w-full cursor-pointer flex items-center justify-center gap-3 py-3 px-4 border-2 border-gray-200 rounded-xl hover:border-green-300 hover:bg-green-50 transition-all duration-200'
                >
                    <FaGoogle className="text-red-400" />
                    <span className="font-medium text-gray-700">Continue with Google</span>
                </Button>
                <Button
                    className='w-full cursor-pointer flex items-center justify-center gap-3 py-3 px-4 border-2 border-gray-200 rounded-xl hover:border-green-300 hover:bg-green-50 transition-all duration-200'
                >
                    <FaFacebook className="text-blue-500" />
                    <span className="font-medium text-gray-700">Continue with Facebook</span>
                </Button>
            </div>
        </>
    )
}