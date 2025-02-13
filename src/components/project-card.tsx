import { MdArrowOutward } from "react-icons/md"

type ColorVariant = "rose" | "blue" | "teal" | "violet" | "slate" | "yellow"

const colorMap = {
  rose: {
    border: "border-rose-600/20",
    bg: "bg-rose-600/10",
  },
  blue: {
    border: "border-blue-600/20",
    bg: "bg-blue-600/10",
  },
  teal: {
    border: "border-teal-600/20",
    bg: "bg-teal-600/10",
  },
  violet: {
    border: "border-violet-600/20",
    bg: "bg-violet-600/10",
  },
  slate: {
    border: "border-slate-600/20",
    bg: "bg-slate-600/10",
  },
  yellow: {
    border: "border-yellow-600/20",
    bg: "bg-yellow-600/10",
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
      className={`relative max-h-fit h-full flex-grow basis-[250px] flex flex-col p-4 border ${colors.border} rounded-xl gap-2 overflow-hidden transition-all duration-300 hover:scale-[1.02] group/card`}
    >
      <div className="flex items-center justify-between gap-2">
        <p className="text-[0.8rem]">{description}</p>

        <a
          href={url}
          target="_blank"
          className="border border-zinc-50/30 p-1 rounded-md self-baseline relative z-[2] group hover:border-zinc-50/70 transition-all duration-300"
        >
          <MdArrowOutward className="text-md text-zinc-50/30 group-hover:text-zinc-50/70 transition-all duration-300" />
        </a>
      </div>
      <h3 className="text-zinc-50/70 text-sm font-normal">{name}</h3>
      <p className="text-zinc-50/70 text-[0.8rem] mt-auto">{stack}</p>
      <div
        className={`${colors.bg} w-full h-full absolute inset-0 z-[1] pointer-events-none opacity-100 transition-opacity duration-300 group-hover/card:opacity-75`}
      ></div>
    </div>
  )
}
