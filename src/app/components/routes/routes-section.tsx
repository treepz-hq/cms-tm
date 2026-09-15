"use client"

import { useRef } from "react"
import { ArrowRight, MapPin } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

import { JourneyScene, type JourneyPanel } from "./journey-scene"
import { RouteStep } from "./route-step"

type Props = {
  showRoutes: boolean
  journeyPanels: JourneyPanel[]
}

export default function RoutesSection({
  showRoutes,
  journeyPanels,
}: Props) {
  const routesRef = useRef<HTMLElement>(null)
  const suggestRef = useRef<HTMLElement>(null)

  const goSuggest = () => {
    suggestRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    })
  }

  if (!showRoutes) {
    return null
  }

  return (
    <>
      {/* ================= COMMUTER JOURNEY INTRO ================= */}
      <section
        ref={routesRef}
        className="bg-white px-6 py-20 sm:px-10 lg:py-24"
      >
        <div className="mx-auto max-w-5xl text-center">
          <span className="font-urbanist text-[13px] font-bold uppercase tracking-[1.5px] text-[#3CB371]">
            Active TMO Routes
          </span>

          <h2 className="mx-auto mt-4 max-w-[680px] font-museo text-4xl font-bold leading-[1.04] tracking-[-1.5px] text-[#0F4C3A] sm:text-5xl">
            The Lekki–Ajah Corridor, from dawn to dusk.
          </h2>

          <p className="mx-auto mb-6 mt-4 max-w-[560px] font-urbanist text-base leading-[1.6] text-[#5B6B63] sm:text-[17px]">
            Scroll to ride the corridor — six structured stops, predictable
            times, regulated fares.
          </p>

          <Button
            type="button"
            onClick={goSuggest}
            className="h-auto rounded-[13px] bg-[#0F4C3A] px-6 py-[15px] font-urbanist text-[15px] font-bold text-white hover:bg-[#14543B]"
          >
            Suggest a route
            <ArrowRight className="ml-1.5 size-[17px]" />
          </Button>
        </div>
      </section>

      {/* ================= SCROLL JOURNEY ================= */}
      <JourneyScene journeyPanels={journeyPanels} />

      {/* ================= SUGGEST A ROUTE ================= */}
      <section
        ref={suggestRef}
        className="bg-[#F5E6C8] px-6 py-24 sm:px-10 lg:py-28"
      >
        <div className="mx-auto max-w-[1100px]">
          <div className="grid grid-cols-1 items-start gap-8">
            <div>
              <span className="font-urbanist text-[13px] font-bold uppercase tracking-[1.5px] text-[#C99A1E]">
                Help us expand
              </span>

              <h2 className="mt-4 max-w-[650px] font-museo text-4xl font-bold leading-[1.05] tracking-[-1.5px] text-[#0F4C3A] sm:text-[42px]">
                Where should TMO go next?
              </h2>

              <p className="mb-7 mt-4 max-w-[450px] font-urbanist text-base leading-[1.7] text-[#41514A] sm:text-[17px]">
                TMO grows where commuters need it most. Tell us the route you
                wish we ran — and let us know whether you&apos;d subscribe and pay
                for the service once we expand there. Your demand is what
                guides our next corridor.
              </p>

              <div className="flex max-w-[600px] flex-col gap-3.5">
                <RouteStep
                  number="1"
                  text="Name the start and destination you commute most."
                />

                <RouteStep
                  number="2"
                  text="Tell us if you'd pay to subscribe to that route."
                />

                <RouteStep
                  number="3"
                  text="We prioritise the routes with the most committed demand."
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}