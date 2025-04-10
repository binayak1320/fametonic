import Image from "next/image"
import Navbar from "@/components/navbar"
import PromoBanner from "@/components/promo-banner"
import HeroSection from "@/components/hero-section"
import HeroImg from "@/assets/hero-image.png"

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <PromoBanner />
      <div className="container mx-auto px-5">
        <Navbar />
        {/* <div className="grid lg:grid-cols-2 gap-8 py-8 lg:py-16 items-center"> */}
        <div className="flex items-center pb-4 lg:pb-2">
          <div className="lg:flex-shrink-0 lg:max-w-[516px] lg:mr-8">
            <HeroSection />
          </div>
          <div className="hidden lg:flex justify-center lg:flex-grow">
            <div className="relative">
              <Image
                src={HeroImg}
                width={666}
                height={679}
                alt="Fametonic app interface"
                className="relative z-10"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
