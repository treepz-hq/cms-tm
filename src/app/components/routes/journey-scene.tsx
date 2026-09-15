"use client"

import { useEffect, useRef } from "react"

import { RouteBus } from "./route-bus"

export type JourneyPanel = {
  stop: number
  time: string
  name: string
  note: string
  sky: string
  sunTop: string
  sunLeft: string
  sun: string
  sunGlow: string
  cityOpacity: number
  cityColor: string
  ground: string
  titleColor: string
  subColor: string
  bars: string[]
}

type JourneySceneProps = {
  journeyPanels: JourneyPanel[]
}

export function JourneyScene({
  journeyPanels,
}: JourneySceneProps) {
  const sectionRef = useRef<HTMLElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const busRef = useRef<HTMLDivElement>(null)
  const rafRef = useRef<number | null>(null)

  useEffect(() => {
    const section = sectionRef.current
    const track = trackRef.current
    const bus = busRef.current

    if (!section || !track || !bus) {
      return
    }

    const update = () => {
      rafRef.current = null

      const rect = section.getBoundingClientRect()

      const scrollableDistance = section.offsetHeight - window.innerHeight

      if (scrollableDistance <= 0) {
        return
      }

      // 0 → 1 as the user moves through the 560vh section.
      const progress = Math.min(
        1,
        Math.max(0, -rect.top / scrollableDistance),
      )

      // Total horizontal distance needed to reveal all scenes.
      const maxTranslate =
        track.scrollWidth - window.innerWidth

      const translateX = progress * maxTranslate

      track.style.transform = `translate3d(${-translateX}px, 0, 0)`

      // Move the bus along with the journey.
      const busProgress = progress

      bus.style.transform = `
        translate3d(
          ${busProgress * Math.min(window.innerWidth * 0.35, 420)}px,
          0,
          0
        )
      `

      // Update progress dots.
      const dots = section.querySelectorAll<HTMLElement>(
        "[data-journey-dot]",
      )

      const activeIndex = Math.min(
        journeyPanels.length - 1,
        Math.floor(
          progress * journeyPanels.length,
        ),
      )

      dots.forEach((dot, index) => {
        const isActive = index === activeIndex

        dot.style.backgroundColor = isActive
          ? "#0F4C3A"
          : "rgba(10,31,24,0.3)"

        dot.style.transform = isActive
          ? "scale(1.4)"
          : "scale(1)"
      })
    }

    const onScroll = () => {
      if (rafRef.current !== null) {
        return
      }

      rafRef.current = window.requestAnimationFrame(update)
    }

    const onResize = () => {
      update()
    }

    window.addEventListener("scroll", onScroll, {
      passive: true,
    })

    window.addEventListener("resize", onResize)

    update()

    return () => {
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onResize)

      if (rafRef.current !== null) {
        window.cancelAnimationFrame(rafRef.current)
      }
    }
  }, [journeyPanels.length])

  return (
    <section
      ref={sectionRef}
      className="relative h-[560vh] bg-white"
    >
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* ================= HORIZONTAL TRACK ================= */}
        <div
          ref={trackRef}
          className="flex h-full w-max will-change-transform"
        >
          {journeyPanels.map((journey, index) => (
            <div
              key={`${journey.name}-${index}`}
              className="relative flex h-full w-screen shrink-0 items-end overflow-hidden"
              style={{
                background: journey.sky,
              }}
            >
              {/* Sun */}
              <div
                className="absolute size-[130px] animate-[tmoSun_9s_ease-in-out_infinite] rounded-full"
                style={{
                  top: journey.sunTop,
                  left: journey.sunLeft,
                  background: journey.sun,
                  boxShadow: `0 0 90px ${journey.sunGlow}`,
                }}
              />

              {/* Skyline */}
              <div
                className="absolute bottom-[30%] left-0 right-0 flex items-end gap-2.5 px-[6%]"
                style={{
                  opacity: journey.cityOpacity,
                }}
              >
                {journey.bars.map((barHeight, barIndex) => (
                  <span
                    key={barIndex}
                    className="flex-1 rounded-t-[4px]"
                    style={{
                      height: barHeight,
                      background: journey.cityColor,
                    }}
                  />
                ))}
              </div>

              {/* Ground */}
              <div
                className="absolute bottom-0 left-0 right-0 h-[30%]"
                style={{
                  background: journey.ground,
                }}
              />

              {/* Road marking */}
              <div
                className="absolute bottom-[13%] left-0 right-0 h-[3px]"
                style={{
                  background:
                    "repeating-linear-gradient(90deg, rgba(255,255,255,0.7) 0 40px, transparent 40px 80px)",
                }}
              />

              {/* Stop information */}
              <div className="absolute left-[7%] top-[9%] max-w-[440px]">
                <div className="mb-[18px] inline-flex items-center gap-2 rounded-full bg-[rgba(10,31,24,0.78)] px-4 py-[7px]">
                  <span className="size-[9px] rounded-full bg-[#FBC02D]" />

                  <span className="font-urbanist text-[12.5px] font-bold uppercase tracking-[1px] text-white">
                    Stop {journey.stop} · {journey.time}
                  </span>
                </div>

                <h3
                  className="m-0 mb-3 font-museo text-5xl font-extrabold leading-[0.95] tracking-[-2px] sm:text-6xl"
                  style={{
                    color: journey.titleColor,
                  }}
                >
                  {journey.name}
                </h3>

                <p
                  className="m-0 max-w-[380px] font-urbanist text-lg font-medium"
                  style={{
                    color: journey.subColor,
                  }}
                >
                  {journey.note}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* ================= BUS ================= */}
        <RouteBus ref={busRef} />

        {/* ================= PROGRESS DOTS ================= */}
        <div className="absolute bottom-[34px] left-1/2 z-20 flex -translate-x-1/2 gap-2.5">
          {journeyPanels.map((journey, index) => (
            <span
              key={`${journey.stop}-${index}`}
              data-journey-dot
              className="size-2 rounded-full bg-[rgba(10,31,24,0.3)] transition-all duration-200"
            />
          ))}
        </div>
      </div>
    </section>
  )
}