import Image from "next/image"
import Link from "next/link"
import { Menu } from "lucide-react"
import LogoImg from "@/assets/logo.png"

export default function Navbar() {
  return (
    <nav className="py-4 relative">
      {/* Mobile menu button - positioned absolutely on the right */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 lg:hidden">
        <button>
          <Menu className="h-6 w-6" />
        </button>
      </div>

      {/* Centered logo */}
      <div className="flex justify-center lg:justify-start">
        <Link href="/" className="flex items-center">
          <Image
            src={LogoImg}
            width={174}
            height={74}
            alt="Fametonic Logo"
            className="h-[46px] lg:h-[74px] w-auto"
          />
        </Link>
      </div>

      {/* Desktop navigation - positioned absolutely on the right */}
      <div className="hidden lg:flex items-center space-x-8 absolute right-0 top-1/2 -translate-y-1/2">
        <Link href="/about" className="hover:text-gray-300 transition-colors">
          About us
        </Link>
        <Link href="/contact" className="hover:text-gray-300 transition-colors">
          Contact
        </Link>
      </div>
    </nav>
  )
}
