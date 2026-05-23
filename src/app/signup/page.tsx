import SignupPage from "@/components/auth/signup";
import SignupShowCase from "@/components/auth/signup/SignupShowCase";

export default function page() {
  return (
    <main className="py-10">
        <div className="container max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 p-4">
            <SignupShowCase />
            <SignupPage />
        </div>
    </main>
  )
}