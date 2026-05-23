import AuthSocialButtons from "./AuthSocialButtons";
import LoginForm from "./LoginForm";

export default function LoginPage() {
    return (
        <div className="w-full">
            <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
                <AuthSocialButtons />
                <LoginForm />
            </div>
        </div>
    )
}