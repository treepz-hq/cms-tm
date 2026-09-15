"use client"

import Link from "next/link"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
} from "@/components/ui/card"

type Stat = {
  num: number
  suffix?: string
  final: string
  label: string
}

type HeroSectionProps = {
  stats?: Stat[]
}

const defaultStats: Stat[] = [
  {
    num: 58,
    suffix: "+",
    final: "58+",
    label: "Years Operating",
  },
  {
    num: 6,
    suffix: "",
    final: "6",
    label: "Active Services",
  },
  {
    num: 1,
    suffix: "",
    final: "1",
    label: "Iconic Corridor",
  },
]

export function HeroSection({
  stats = defaultStats,
}: HeroSectionProps) {
  return (
    <section
      id="about"
      className="bg-white px-5 py-24 sm:px-8 lg:py-[120px]"
    >
      <div className="mx-auto grid max-w-[1200px] items-center gap-12 lg:grid-cols-2 lg:gap-[72px]">
        {/* Content */}
        <div className="animate-reveal-in">
          <span className="font-urbanist text-[13px] font-bold uppercase tracking-[1.5px] text-[#3CB371]">
            The Institution Behind TMO
          </span>

          <h2 className="mt-4 font-museo text-4xl font-bold leading-[1.04] tracking-[-1.5px] text-[#0F4C3A] sm:text-[46px]">
            Built on 58 years of Lagos transport.
          </h2>

          <p className="mt-6 font-urbanist text-[17px] leading-[1.7] text-[#41514A]">
            CMS T&amp;M has operated the Lekki–Ajah Transport Corridor
            for over five decades, making it one of Nigeria&apos;s most
            enduring public transportation institutions. Headquartered
            at the Marina in Lagos, it is registered with LAMATA and
            affiliated with BRTAN and NURTW.
          </p>

          <p className="mt-[18px] font-urbanist text-[17px] leading-[1.7] text-[#41514A]">
            TMO is the digital face of that institution — bringing
            structure, accountability, and reliability to every commuter
            in Lagos.
          </p>

          <div className="mt-8">
            <Button
              asChild
              className="
                h-auto rounded-xl
                bg-[#F5E6C8]
                px-[18px] py-3
                font-urbanist text-sm font-semibold
                text-[#0F4C3A]
                shadow-none
                hover:bg-[#EAD9A8]
                hover:text-[#0F4C3A]
              "
            >
              <Link
                href="https://play.google.com/store/apps/details?id=com.tnm.rider"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="mr-2 text-base">📱</span>
                Download TMO App
              </Link>
            </Button>
          </div>
        </div>

        {/* Illustration */}
        <div className="animate-reveal-in [animation-delay:120ms]">
          <div className="relative aspect-[1.15] overflow-hidden rounded-[24px] bg-gradient-to-br from-[#F5E6C8] to-[#EAD9A8] shadow-[0_30px_60px_-24px_rgba(15,76,58,0.3)]">
            <div className="absolute inset-0 bg-gradient-to-b from-[#BFE3CF] via-[#F5E6C8] to-[#F5E6C8]" />

            <div className="absolute right-8 top-10 h-[88px] w-[88px] animate-tmo-sun rounded-full bg-[radial-gradient(circle,#FBC02D,#F2A93C)] shadow-[0_0_60px_rgba(251,192,45,0.6)]" />

            <div className="absolute bottom-[34%] left-0 right-0 flex items-end gap-2 px-[30px] opacity-55">
              <span className="h-[70px] flex-1 rounded-t bg-[#0F4C3A]" />
              <span className="h-[110px] flex-1 rounded-t bg-[#14543B]" />
              <span className="h-[80px] flex-1 rounded-t bg-[#0F4C3A]" />
              <span className="h-[140px] flex-1 rounded-t bg-[#0A2A1F]" />
              <span className="h-[95px] flex-1 rounded-t bg-[#14543B]" />
              <span className="h-[120px] flex-1 rounded-t bg-[#0F4C3A]" />
            </div>

            <div className="absolute bottom-0 left-0 right-0 h-[34%] bg-gradient-to-b from-[#3CB371] to-[#1A6349]" />

            <div className="absolute bottom-[16%] left-[18%] h-8 w-[120px] rounded-[6px_16px_4px_4px] bg-[#0A1F18]/85" />

            <div className="absolute bottom-[14%] right-[14%] h-[22px] w-[70px] rounded-[4px_12px_4px_4px] bg-[#0A2A1F]/70" />

            <span className="absolute bottom-[18px] left-6 font-mono text-[11px] tracking-[1px] text-white/60">
              CMS MARINA · LAGOS ISLAND
            </span>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="mx-auto mt-[84px] grid max-w-[980px] grid-cols-1 gap-5 sm:grid-cols-3 sm:gap-6">
        {stats.map((stat, index) => (
          <Card
            key={`${stat.label}-${index}`}
            className="animate-reveal-in rounded-[18px] border-[#ECE7DA] bg-[#F8F7F2] py-0 shadow-none"
            style={{
              animationDelay: `${index * 100}ms`,
            }}
          >
            <CardContent className="px-4 py-8 text-center">
              <span className="font-museo text-[54px] font-extrabold leading-none tracking-[-2px] text-[#0F4C3A]">
                {stat.final}
              </span>

              <span className="mt-2.5 block font-urbanist text-sm font-medium text-[#5B6B63]">
                {stat.label}
              </span>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}