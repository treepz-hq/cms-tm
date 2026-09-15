"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

type FleetManagementSectionProps = {
  onOnboardFleet?: () => void
  onLogin?: () => void
}

const vehicles = [
  {
    id: "LND-234-KJA",
    type: "Bus",
    route: "Ajah → CMS",
    status: "Active",
    earnings: "₦310k",
  },
  {
    id: "EKY-102-AAA",
    type: "Sedan",
    route: "Sangotedo → VI",
    status: "Active",
    earnings: "₦185k",
  },
  {
    id: "MUS-556-LSD",
    type: "Van",
    route: "Island → Mainland",
    status: "Active",
    earnings: "₦240k",
  },
  {
    id: "KTU-889-EPE",
    type: "Bus",
    route: "Lekki → CMS",
    status: "Idle",
    earnings: "₦0 today · proj. ₦280k",
  },
]

export function FleetManagementSection({
  onOnboardFleet,
  onLogin,
}: FleetManagementSectionProps) {
  return (
    <section
      id="fleet-management"
      data-screen-label="Fleet Management"
      className="bg-[#F5E6C8] px-5 py-24 sm:px-8 lg:py-[120px]"
    >
      <div className="mx-auto grid max-w-[1200px] items-center gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        {/* ============================================================
            CONTENT
        ============================================================ */}
        <div className="animate-reveal">
          <span className="font-urbanist text-[13px] font-bold uppercase tracking-[1.5px] text-[#C99A1E]">
            TMO Fleet Management
          </span>

          <h2 className="mt-4 max-w-[580px] font-museo text-4xl font-bold leading-[1.05] tracking-[-1.5px] text-[#0F4C3A] sm:text-[44px]">
            Your whole fleet. One dashboard.
          </h2>

          <p className="mt-5 max-w-[560px] font-urbanist text-[17px] leading-[1.7] text-[#41514A]">
            Own more than one vehicle? Onboard your entire fleet onto TMO and
            watch every vehicle work. See how many vehicles you have on the
            road, what type they are, which routes they run, and exactly how
            much each one is making — or is projected to make — all from one
            account.
          </p>

          {/* Actions */}
          <div className="mt-8 flex flex-wrap gap-3">
            <Button
              onClick={onOnboardFleet}
              className="
                h-auto rounded-[13px]
                bg-[#0F4C3A]
                px-[26px] py-[15px]
                font-urbanist text-[15px] font-bold text-white
                shadow-none
                transition-all duration-300
                hover:-translate-y-0.5
                hover:bg-[#14543B]
              "
            >
              Onboard your fleet
            </Button>

            <Button
              variant="outline"
              onClick={onLogin}
              className="
                h-auto rounded-[13px]
                border-[1.5px] border-[#0F4C3A]
                bg-transparent
                px-6 py-[14px]
                font-urbanist text-[15px] font-semibold
                text-[#0F4C3A]
                shadow-none
                transition-all duration-300
                hover:bg-[#0F4C3A]/5
                hover:text-[#0F4C3A]
              "
            >
              Login to Fleet Dashboard
            </Button>
          </div>

        </div>

        {/* ============================================================
            FLEET DASHBOARD MOCKUP
        ============================================================ */}
        <Card
          className="
            overflow-hidden
            rounded-[26px]
            border-0
            bg-[#0A1F18]
            p-0
            shadow-[0_40px_80px_-30px_rgba(10,31,24,0.5)]
            animate-reveal
          "
        >
          <CardContent className="p-5 sm:p-[26px]">
            {/* Dashboard header */}
            <div className="mb-5 flex items-center justify-between gap-4">
              <div className="flex min-w-0 items-center gap-3">
                <div className="
                  flex h-10 w-10 shrink-0 items-center justify-center
                  rounded-[11px]
                  bg-[#3CB371]
                  font-museo text-[15px] font-extrabold
                  text-[#0A1F18]
                ">
                  A
                </div>

                <div className="min-w-0">
                  <p className="truncate font-urbanist text-sm font-semibold text-white">
                    Adebayo K. · Fleet Owner
                  </p>

                  <p className="mt-0.5 font-urbanist text-[11px] text-white/50">
                    12 vehicles on platform
                  </p>
                </div>
              </div>

              <Badge
                variant="outline"
                className="
                  shrink-0
                  rounded-full
                  border-[#3CB371]/45
                  bg-transparent
                  px-3 py-1
                  font-urbanist text-[10px] font-bold
                  tracking-[1.2px]
                  text-[#7FE0AC]
                "
              >
                TMO FLEET
              </Badge>
            </div>

            {/* Dashboard grid */}
            <div className="grid gap-3.5 sm:grid-cols-2">
              {/* Vehicle summary */}
              <div className="
                rounded-2xl
                bg-white/[0.05]
                p-[18px]
              ">
                <span className="font-urbanist text-[11.5px] font-medium text-white/55">
                  VEHICLES
                </span>

                <div className="mt-1.5 font-museo text-xl font-bold text-white">
                  12 on platform
                </div>

                <div className="mt-1 font-urbanist text-xs text-[#7FE0AC]">
                  6 Buses · 4 Sedans · 2 Vans
                </div>
              </div>

              {/* Earnings */}
              <div className="
                col-span-full
                rounded-2xl
                bg-gradient-to-br from-[#1A6349] to-[#0F4C3A]
                p-5
              ">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <span className="font-urbanist text-[11px] font-medium tracking-[1px] text-white/60">
                      FLEET EARNINGS · THIS MONTH
                    </span>

                    <div className="mt-1 font-museo text-[30px] font-extrabold text-white">
                      ₦2.4M
                    </div>
                  </div>

                  <div>
                    <span className="font-urbanist text-[11px] font-medium tracking-[1px] text-white/60">
                      PROJECTED · NEXT MONTH
                    </span>

                    <div className="mt-1 font-museo text-[30px] font-extrabold text-[#FBC02D]">
                      ₦2.9M
                    </div>
                  </div>
                </div>
              </div>

              {/* Vehicle list */}
              <div className="
                col-span-full
                rounded-2xl
                bg-white/[0.05]
                p-[18px]
              ">
                <div className="flex items-center justify-between">
                  <span className="font-urbanist text-[11.5px] font-medium text-white/55">
                    VEHICLE LIST
                  </span>
                </div>

                <div className="mt-3 flex flex-col">
                  {vehicles.map((vehicle) => {
                    const active = vehicle.status === "Active"

                    return (
                      <div
                        key={vehicle.id}
                        className="
                          flex items-center justify-between gap-3
                          py-3
                          first:pt-0
                          last:pb-0
                        "
                      >
                        <div className="flex min-w-0 items-center gap-3">
                            <p className="truncate font-urbanist text-[12.5px] font-medium text-white">
                              {vehicle.id} · <span className="truncate font-urbanist text-[11px] text-white">
                              {vehicle.type} · {vehicle.route}</span> <span className={`font-urbanist text-[11px] font-semibold ${
                              active
                                ? "text-[#7FE0AC]"
                                : "text-white/40"
                            }`}
                          >
                          · {vehicle.status}
                          </span>
                            </p>
                        </div>

                        <div className="shrink-0 text-right">
                          <p
                            className={`mt-0.5 font-urbanist text-[12px] font-semibold ${
                              active
                                ? "text-[#7FE0AC]"
                                : "text-white/40"
                            }`}
                          >
                            {vehicle.earnings}
                          </p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}