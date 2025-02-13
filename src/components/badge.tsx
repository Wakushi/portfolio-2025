import { ReactNode } from "react"

export default function Badge({
  children,
  className,
}: {
  children: ReactNode
  className: string
}) {
  return (
    <span
      className={`${className} rounded-lg border border-white/5 px-1.5 py-[2px] align-baseline text-zinc-50/70 text-[0.8rem]`}
    >
      {children}
    </span>
  )
}
