import clsx from "clsx"

export default function SectionTitle({
  title,
  hides = false,
}: {
  title: string
  hides?: boolean
}) {
  return (
    <h2
      className={clsx(
        "min-w-[65px] xs:text-right font-mono sm:text-end font-normal text-muted-foreground/60 text-xs lowercase tracking-tight mb-4 sm:mb-0 bigger-line",
        {
          "hidden sm:block": hides,
        }
      )}
    >
      /{title}
    </h2>
  )
}
