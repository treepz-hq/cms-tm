"use client"

import { useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"

type Milestone = {
  year: string
  desc: string
}

type MilestonesSectionProps = {
  milestones: Milestone[]
}

export function MilestonesSection({
  milestones,
}: MilestonesSectionProps) {
  const roadRef = useRef<HTMLDivElement>(null)
  const busRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const road = roadRef.current
    const bus = busRef.current

    if (!road || !bus) return

    const rows = Array.from(
      road.querySelectorAll<HTMLElement>("[data-ms-row]")
    )

    const updateBus = () => {
      const roadRect = road.getBoundingClientRect()
      const viewportHeight = window.innerHeight

      const start = roadRect.top - viewportHeight * 0.35
      const end = roadRect.bottom - viewportHeight * 0.65

      const progress = Math.min(
        1,
        Math.max(
          0,
          (0 - start) / Math.max(1, end - start)
        )
      )

      const maxY = road.offsetHeight - 34

      bus.style.transform =
        `translate(-50%, ${progress * maxY}px)`

      rows.forEach((row) => {
        const marker =
          row.querySelector<HTMLElement>("[data-ms-marker]")

        const card =
          row.querySelector<HTMLElement>("[data-ms-card]")

        if (!marker || !card) return

        const rect = row.getBoundingClientRect()
        const active = rect.top < viewportHeight * 0.68

        marker.style.boxShadow = active
          ? "0 0 0 7px rgba(60,179,113,.12), 0 4px 10px rgba(0,0,0,.08)"
          : "0 4px 10px rgba(0,0,0,.08)"

        card.style.transform = active
          ? "translateY(-3px)"
          : "translateY(0)"

        card.style.boxShadow = active
          ? "0 14px 34px rgba(0,0,0,.08)"
          : "0 8px 24px rgba(0,0,0,.05)"
      })
    }

    updateBus()

    window.addEventListener("scroll", updateBus, {
      passive: true,
    })

    window.addEventListener("resize", updateBus)

    return () => {
      window.removeEventListener("scroll", updateBus)
      window.removeEventListener("resize", updateBus)
    }
  }, [])

  return (
    <section className="bg-white px-5 py-24 sm:px-8 lg:py-[120px]">
      <div className="mx-auto max-w-[900px]">

        {/* Heading */}
        <div className="mx-auto mb-[72px] max-w-[640px] text-center animate-reveal">
          <span className="font-urbanist text-[13px] font-bold uppercase tracking-[1.5px] text-[#3CB371]">
            The Journey
          </span>

          <h2 className="mt-3.5 font-museo text-[32px] font-bold leading-[1.12] tracking-[-1px] text-[#0F4C3A] sm:text-[34px]">
            Milestones along the road.
          </h2>

          <p className="mt-3.5 font-urbanist text-base leading-[1.6] text-[#0F1F18]/60">
            Hop on — the bus takes you through nearly six decades
            of the road we&apos;ve travelled.
          </p>
        </div>

        {/* Road */}
        <div ref={roadRef} className="relative">

          {/* Road */}
          <div
            className="
              absolute bottom-[11px] left-[35px] top-[11px]
              w-1.5 -translate-x-1/2 rounded-full
              bg-[#2B2B2B]
            "
          />

          {/* Road markings */}
          <div
            className="
              absolute bottom-[11px] left-[35px] top-[11px]
              w-0.5 -translate-x-1/2
              bg-[repeating-linear-gradient(to_bottom,#FBC02D_0,#FBC02D_12px,transparent_12px,transparent_26px)]
            "
          />

          {/* Bus */}
          <div
            ref={busRef}
            className="
              absolute left-[35px] top-0 z-10
              h-[34px] w-14
              -translate-x-1/2
              rounded-[8px_16px_6px_6px]
              bg-[#3CB371]
              shadow-[0_8px_20px_rgba(0,0,0,.25)]
            "
          >
            <div className="absolute left-2 top-1.5 flex gap-[5px]">
              <span className="h-[11px] w-3.5 rounded-[2px] bg-white/55" />
              <span className="h-[11px] w-3.5 rounded-[2px] bg-white/55" />
              <span className="h-[11px] w-2.5 rounded-[2px] bg-white/40" />
            </div>

            <span className="absolute -bottom-1 left-[9px] h-[11px] w-[11px] rounded-full border-2 border-[#ccc] bg-[#1A1A1A]" />
            <span className="absolute -bottom-1 right-[9px] h-[11px] w-[11px] rounded-full border-2 border-[#ccc] bg-[#1A1A1A]" />
          </div>

          {/* Milestones */}
          {milestones.map((milestone, index) => (
            <div
              key={`${milestone.year}-${index}`}
              data-ms-row
              className="relative flex items-start gap-7 pb-14"
            >
              <div className="relative flex w-[70px] shrink-0 justify-center pt-1">
                <div
                  data-ms-marker
                  className="
                    relative z-[2]
                    h-[22px] w-[22px]
                    rounded-full
                    border-4 border-[#0F4C3A]
                    bg-white
                    shadow-[0_4px_10px_rgba(0,0,0,.08)]
                    transition-shadow duration-300
                  "
                />
              </div>

              <Card
                data-ms-card
                className="
                  flex-1 rounded-[18px]
                  border-[#0F4C3A]/10
                  bg-white py-0
                  shadow-[0_8px_24px_rgba(0,0,0,.05)]
                  transition-all duration-300
                "
              >
                <CardContent className="px-[30px] py-[26px]">
                  <span className="font-museo text-[22px] font-extrabold text-[#0F4C3A]">
                    {milestone.year}
                  </span>

                  <p className="mt-2 font-urbanist text-[15px] leading-[1.6] text-[#0F1F18]/70">
                    {milestone.desc}
                  </p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}