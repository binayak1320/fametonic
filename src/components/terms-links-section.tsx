import Link from "next/link"

export default function TermsLinksSection() {
  return (
    <div className="text-xs text-gray-400 lg:mt-4 px-4 lg:px-0 pb-6 space-y-4 lg:space-y-2 font-figtree text-center lg:text-left">
      <p>
        {`By clicking "Get Started", you agree with`}
        <Link href="/terms" className="underline hover:text-gray-300">
          Terms and Conditions
        </Link>
        ,{" "}
        <Link href="/privacy" className="underline hover:text-gray-300">
          Privacy Policy
        </Link>
        ,{" "}
        <Link href="/subscription" className="underline hover:text-gray-300">
          Subscription Terms
        </Link>
      </p>
      <p>Fametonic 2023 All Rights Reserved.</p>
    </div>
  )
}
