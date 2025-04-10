import { Sparkles } from "lucide-react"

export default function FeatureList() {
  const features = [
    {
      id: 1,
      title: "Start growing your influence right away—no waiting required!",
    },
    {
      id: 2,
      title: "Create viral TikToks and Reels step by step with easy-to-follow lessons",
    },
    {
      id: 3,
      title: "Use a Personal AI Worker to boost your content",
    },
    {
      id: 4,
      title: "Learn from expert-led courses designed for aspiring influencers",
    },
  ]

  return (
    <div className="space-y-[10px] lg:space-y-[13px] font-figtree">
      {features.map((feature) => (
        <div key={feature.id} className="flex items-start gap-[10px]">
          <Sparkles className="text-yellow-400 text-xs size-[22px] flex-shrink-0 mt-0.5" />
          <p className="text-base font-medium lg:font-semibold">{feature.title}</p>
        </div>
      ))}
    </div>
  )
}
