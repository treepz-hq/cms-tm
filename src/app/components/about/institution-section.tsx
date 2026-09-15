"use client"

import { Card, CardContent } from "@/components/ui/card"

type Affiliation = {
  name: string
  full: string
  desc: string
}

type Pillar = {
  n: string | number
  t: string
  d: string
}

type InstitutionSectionProps = {
  affiliations: Affiliation[]
  aboutMission: string
  aboutVision: string
  aboutValues: string[]
  pillars: Pillar[]
}

export function InstitutionSection({
  affiliations,
  aboutMission,
  aboutVision,
  aboutValues,
  pillars,
}: InstitutionSectionProps) {
  return (
    <section
      id="institution"
      className="bg-[radial-gradient(120%_100%_at_30%_0%,#15573F,#0F4C3A_55%,#0A2A1F)] px-5 py-24 sm:px-8 lg:py-30"
    >
      <div className="mx-auto max-w-[1180px]">

        {/* Header */}
        <div className="mx-auto mb-14 max-w-[740px] text-center animate-reveal">
          <span className="font-urbanist text-[13px] font-bold uppercase tracking-[1.5px] text-[#7FE0AC]">
            We are CMS T&amp;M
          </span>

          <h2 className="mt-4 font-museo text-4xl font-bold leading-[1.05] tracking-[-1.5px] text-white sm:text-[44px]">
            Regulated, affiliated, and accountable.
          </h2>

          <p className="mt-[18px] font-urbanist text-[17px] leading-[1.7] text-white/70">
            Operator of the Lekki–Ajah Transport Corridor, headquartered at
            the Marina in Lagos — built on a cooperative model and governed
            by the bodies that keep Lagos moving.
          </p>
        </div>

        {/* Affiliations */}
        <div className="mb-20 grid gap-[18px] md:grid-cols-2 lg:grid-cols-3">
          {affiliations.map((affiliation, index) => (
            <Card
              key={affiliation.name}
              className="group rounded-[18px] border-[rgba(60,179,113,0.22)] bg-white/[0.04] py-0 shadow-none transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(60,179,113,0.5)] hover:bg-white/[0.06] animate-reveal"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <CardContent className="p-7">
                <h3 className="font-museo text-[26px] font-extrabold tracking-[-0.5px] text-white">
                  {affiliation.name}
                </h3>

                <span className="mb-3.5 block font-urbanist text-[12.5px] font-semibold text-[#7FE0AC]">
                  {affiliation.full}
                </span>

                <p className="font-urbanist text-[14.5px] leading-[1.6] text-white/70">
                  {affiliation.desc}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Mission / Vision */}
        <div className="mb-5 grid gap-5 md:grid-cols-2">
          <Card className="rounded-2xl border-0 border-l-4 border-l-[#3CB371] bg-white/[0.05] py-0 shadow-none animate-reveal">
            <CardContent className="p-8">
              <span className="font-urbanist text-[12.5px] font-bold uppercase tracking-[1.5px] text-[#7FE0AC]">
                Mission
              </span>

              <p className="mt-3.5 font-museo text-[21px] font-medium leading-[1.4] text-white">
                {aboutMission}
              </p>
            </CardContent>
          </Card>

          <Card className="rounded-2xl border-0 border-l-4 border-l-[#FBC02D] bg-white/[0.05] py-0 shadow-none animate-reveal">
            <CardContent className="p-8">
              <span className="font-urbanist text-[12.5px] font-bold uppercase tracking-[1.5px] text-[#FBC02D]">
                Vision
              </span>

              <p className="mt-3.5 font-museo text-[21px] font-medium leading-[1.4] text-white">
                {aboutVision}
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Values */}
        <div className="mb-[84px] flex flex-wrap justify-center gap-2.5 animate-reveal">
          {aboutValues.map((value) => (
            <span
              key={value}
              className="rounded-full border border-[rgba(60,179,113,0.3)] px-[18px] py-[9px] font-urbanist text-sm font-semibold text-white/85 transition-colors hover:border-[#3CB371] hover:bg-[#3CB371]/10"
            >
              {value}
            </span>
          ))}
        </div>

        {/* Success */}
        <div className="mx-auto mb-9 max-w-[680px] text-center animate-reveal">
          <span className="font-urbanist text-[13px] font-bold uppercase tracking-[1.5px] text-[#7FE0AC]">
            Our success in public transportation
          </span>

          <h3 className="mt-3.5 font-museo text-[30px] font-bold leading-[1.12] tracking-[-1px] text-white sm:text-[32px]">
            Why we&apos;ve endured for nearly six decades.
          </h3>
        </div>

        {/* Pillars */}
        <div className="mb-16 grid gap-[18px] md:grid-cols-2 lg:grid-cols-3">
          {pillars.map((pillar, index) => (
            <Card
              key={`${pillar.n}-${pillar.t}`}
              className="rounded-[18px] border-white/10 bg-white/[0.04] py-0 shadow-none transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.07] animate-reveal"
              style={{ animationDelay: `${index * 70}ms` }}
            >
              <CardContent className="p-7">
                <span className="mb-2.5 block font-museo text-2xl font-extrabold text-[#FBC02D]">
                  {pillar.n}
                </span>

                <h4 className="mb-2 font-museo text-xl font-bold text-white">
                  {pillar.t}
                </h4>

                <p className="font-urbanist text-[14.5px] leading-[1.6] text-white/[0.68]">
                  {pillar.d}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Closing statement */}
        <p className="mx-auto max-w-[760px] text-center font-museo text-[24px] font-semibold leading-[1.3] tracking-[-0.5px] text-white sm:text-[26px] animate-reveal">
          Driving Lagos forward through{" "}
          <span className="text-[#3CB371]">
            disciplined and regulated
          </span>{" "}
          public transportation.
        </p>
      </div>
    </section>
  )
}