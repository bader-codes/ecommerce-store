import LoginShowcase from "@/components/auth/login/LoginShowcase";
import LoginPage from "@/components/auth/login";

export default function page() {
    return (
        <div className="container py-16 px-4 mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mx-auto max-w-7xl">
                <LoginShowcase />
                <LoginPage />
            </div>
        </div>
    )
}