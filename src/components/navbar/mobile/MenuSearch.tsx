import { Input } from "@/components/ui/input";
import { Button } from "@base-ui/react";
import { IoSearch } from "react-icons/io5";

export default function MenuSearch() {
  return (
    <div className="w-full px-4">
      <div className="relative">
        <Input
          placeholder="Search products..."
          className="w-full bg-gray-50 px-3 py-5 rounded-lg focus-visible:ring-green-500 focus-visible:ring-1 placeholder:text-gray-400 placeholder:text-sm text-sm"
        />

        <Button className="absolute inset-y-0 cursor-pointer right-2 my-auto bg-green-600 rounded-md w-8 h-8 p-0 flex items-center justify-center">
          <IoSearch className="text-white" size={18} />
        </Button>
      </div>
    </div>
  );
}