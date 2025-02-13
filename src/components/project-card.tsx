import { MdArrowOutward } from "react-icons/md"

type ColorVariant = "rose" | "blue" | "teal" | "violet" | "slate" | "yellow"

const colorMap = {
  rose: {
    border: "border-rose-600/20",
    bg: "bg-gradient-to-tr from-rose-950/50 to-transparent/10",
    hoverBorder: "group-hover/card:border-rose-500/40",
    hoverShadow: "group-hover/card:shadow-rose-500/20",
  },
  blue: {
    border: "border-blue-600/20",
    bg: "bg-gradient-to-tr from-blue-950/50 to-transparent/10",
    hoverBorder: "group-hover/card:border-blue-500/40",
    hoverShadow: "group-hover/card:shadow-blue-500/20",
  },
  teal: {
    border: "border-teal-600/20",
    bg: "bg-gradient-to-tr from-teal-950/50 to-transparent/10",
    hoverBorder: "group-hover/card:border-teal-500/40",
    hoverShadow: "group-hover/card:shadow-teal-500/20",
  },
  violet: {
    border: "border-violet-600/20",
    bg: "bg-gradient-to-tr from-violet-950/50 to-transparent/10",
    hoverBorder: "group-hover/card:border-violet-500/40",
    hoverShadow: "group-hover/card:shadow-violet-500/20",
  },
  slate: {
    border: "border-slate-600/20",
    bg: "bg-gradient-to-tr from-slate-950/50 to-transparent/10",
    hoverBorder: "group-hover/card:border-slate-500/40",
    hoverShadow: "group-hover/card:shadow-slate-500/20",
  },
  yellow: {
    border: "border-yellow-600/20",
    bg: "bg-gradient-to-tr from-yellow-700/50 to-transparent/10",
    hoverBorder: "group-hover/card:border-yellow-500/40",
    hoverShadow: "group-hover/card:shadow-yellow-500/20",
  },
} as const

type ProjectCardProps = {
  name: string
  description: string
  stack: string
  url: string
  colorVariant: ColorVariant
}

export default function ProjectCard({
  name,
  description,
  stack,
  url,
  colorVariant,
}: ProjectCardProps) {
  const colors = colorMap[colorVariant]

  return (
    <div
      className={`relative max-h-fit h-full flex-grow basis-[250px] flex flex-col p-4 border ${colors.border} ${colors.hoverBorder} rounded-xl gap-1 overflow-hidden transition-all duration-300 hover:scale-105 group/card shadow-lg hover:shadow-xl ${colors.hoverShadow}`}
    >
      <div className="flex items-center justify-between gap-2">
        <p className="text-[0.8rem] transform transition-transform duration-300 group-hover/card:translate-y-0.5">
          {description}
        </p>

        <a
          href={url}
          target="_blank"
          className="border border-zinc-50/30 p-1 rounded-md self-baseline relative z-[2] group hover:border-zinc-50/70 transition-all duration-300"
        >
          <MdArrowOutward className="text-md text-zinc-50/30 group-hover:text-zinc-50/70 transition-all duration-300" />
        </a>
      </div>
      <h3 className="text-zinc-50/90 text-sm font-normal transform transition-transform duration-300 group-hover/card:translate-y-0.5">
        {name}
      </h3>
      <p className="text-zinc-50/70 text-[0.8rem] transform transition-transform duration-300 group-hover/card:translate-y-0.5">
        {stack}
      </p>
      <div
        className={`${colors.bg} w-full h-full absolute inset-0 z-[1] pointer-events-none opacity-100 transition-all duration-300 group-hover/card:opacity-90`}
      ></div>
    </div>
  )
}
