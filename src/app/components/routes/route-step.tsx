type RouteStepProps = {
  number: string
  text: string
}

export function RouteStep({
  number,
  text,
}: RouteStepProps) {
  return (
    <div className="flex items-start gap-3">
      <span className="flex size-[26px] shrink-0 items-center justify-center rounded-lg bg-[#0F4C3A] font-museo text-[13px] font-extrabold text-white">
        {number}
      </span>

      <span className="font-urbanist text-[15.5px] leading-[1.5] text-[#2C3A34]">
        {text}
      </span>
    </div>
  )
}