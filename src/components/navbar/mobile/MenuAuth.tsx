import { Button } from "@base-ui/react";
import Link from "next/link";

export default function MenuAuth() {
  return (
    <div className="flex p-4 items-center justify-between w-full">
      <Link href="/login" className="w-full p-2">
        <Button className="bg-green-600 hover:bg-green-800 cursor-pointer text-white w-full p-2 rounded-sm font-semibold text-lg">
          Sign in
        </Button>
      </Link>

      <Link href="/signup" className="w-full p-2">
        <Button className="w-full p-2 cursor-pointer border border-green-500 hover:bg-green-50 rounded-sm font-semibold text-lg">
          Sign up
        </Button>
      </Link>
    </div>
  );
}