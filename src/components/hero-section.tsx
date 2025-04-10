import Image from "next/image"
import FeatureList from "./feature-list"
import CTAButton from "./cta-button"
import HeroImg from "@/assets/hero-image.png"
import TermsLinksSection from "@/components/terms-links-section"

export default function HeroSection() {
  return (
    <div className="flex flex-col space-y-[20px] lg:space-y-[16px]">
      {/* Mobile only image */}
      <div className="lg:hidden relative mx-auto mb-4 p-6">
        {/* <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-400 opacity-70 blur-3xl rounded-full"></div> */}
        <Image
          src={HeroImg}
          width={666}
          height={679}
          alt="Fametonic app interface"
          className="relative -mt-10 -mb-14"
        />
      </div>

      <div className="text-[25px] lg:text-[35px] font-bold font-urbanist leading-none text-center lg:text-left z-10">
        <h1 className="leading-tight lg:leading-[42px]">
          Want to Turn Social Media Into a Profitable Career?
        </h1>

        <h2 className="inline-flex flex-col text-secondary drop-shadow-[0px_4px_4px_#FC004E] leading-tight lg:leading-[42px]">
          <span className="">Discover your way to success</span>
          <span className="">with Fametonic:</span>
        </h2>
      </div>

      <FeatureList />

      <div className="flex flex-col-reverse lg:flex-col font-figtree">
        <div className="w-full lg:max-w-[313px] ">
          <CTAButton />
          <p className="text-xs text-center mt-4 text-gray-400">1-minute quiz for personalized insights</p>
        </div>
        
        <TermsLinksSection />
      </div>
    </div>
  )
}
