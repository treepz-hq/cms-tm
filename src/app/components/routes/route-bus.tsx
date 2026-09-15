import { forwardRef } from "react"

export const RouteBus = forwardRef<HTMLDivElement>(
  function RouteBus(_, ref) {
    return (
      <div
        ref={ref}
        className="absolute bottom-[16%] left-[22%] z-10 h-12 w-[150px] rounded-[8px_20px_6px_6px] bg-[#3CB371] shadow-[0_10px_24px_rgba(0,0,0,0.25)] will-change-transform"
      >
        <div className="relative size-full">
          <div className="absolute left-[14px] top-[9px] flex gap-[7px]">
            <span className="h-4 w-5 rounded-[3px] bg-white/45" />
            <span className="h-4 w-5 rounded-[3px] bg-white/45" />
            <span className="h-4 w-5 rounded-[3px] bg-white/45" />
          </div>
        </div>
      </div>
    )
  },
)