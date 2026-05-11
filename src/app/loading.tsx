import { TbLoader3 } from "react-icons/tb";

export default function loading() {
  return (
    <div className="flex items-center justify-center min-h-screen">
        <TbLoader3 color="#00CF1B" className="animate-spin" size={40}/>
    </div>
  )
}