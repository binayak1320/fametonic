import { ChevronRight } from "lucide-react"

export default function CTAButton() {
  return (
    <button className="w-full bg-gradient-to-r from-pink-600 to-pink-500 text-white text-xl py-2 px-10 rounded-[10px] font-bold flex items-center justify-center drop-shadow-[2px_2px_10px_#10cbe0]">
      GET STARTED
      <ChevronRight className="ml-2 h-5 w-5 font-bold stroke-3" />
    </button>
  )
}
