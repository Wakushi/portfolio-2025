import { ReactNode } from "react"

export default function SocialIcon({
  text,
  icon,
  url,
}: {
  text: string
  url: string
  icon: ReactNode
}) {
  return (
    <a
      href={url}
      target="_blank"
      className="social-link group flex items-center gap-2.5 cursor-pointer"
    >
      <div className="border-2 border-zinc-800/80 group-hover:border-zinc-500/80 transition-all duration-300 overflow-hidden p-2 rounded-lg bg-gradient-to-bl from-zinc-700/100">
        {icon}
      </div>
      <span className="text-sm font-normal group-hover:text-zinc-100/80 transition-all duration-300">
        {text}
      </span>
    </a>
  )
}
