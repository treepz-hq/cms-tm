"use client"

import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

type CoopGroup = {
  n: string | number
  name: string
  desc: string
}

type CoopAdvantage = {
  n: string | number
  t: string
}

type IloBenefit = {
  t: string
  d: string
}

type CooperativeModelProps = {
  coopGroups: CoopGroup[]
  coopAdvantages: CoopAdvantage[]
  iloBenefits: IloBenefit[]
  onLeadershipClick?: () => void
  showAbout?: boolean
}

export function CooperativeModel({
  coopGroups,
  coopAdvantages,
  iloBenefits,
  onLeadershipClick,
  showAbout = true,
}: CooperativeModelProps) {
  if (!showAbout) return null

  return (
    <section className="bg-[#F5E6C8] px-5 py-24 sm:px-8 lg:py-30">
      <div className="mx-auto max-w-[1100px]">

        {/* Intro */}
        <div className="mx-auto max-w-[780px] text-center animate-reveal">
          <span className="font-urbanist text-[13px] font-bold uppercase tracking-[1.5px] text-[#C99A1E]">
            The Cooperative Model
          </span>

          <h2 className="mt-4 font-museo text-4xl font-bold leading-[1.06] tracking-[-1.5px] text-[#0F4C3A] sm:text-[44px]">
            Strength in structure. Resilience in numbers.
          </h2>
        </div>

        {/* Description */}
        <div className="mx-auto mb-15 max-w-[800px] text-center animate-reveal">
          <p className="mb-4 font-urbanist text-[17px] leading-[1.7] text-[#41514A]">
            One enduring benefit of running public transport on a cooperative
            model is that it reduces the risk of failure. CMS T&amp;M organises
            itself around independent transport groups — each with its own
            leaders, members, and governance — all submitting to the limited
            liability company known today as CMS T&amp;M.
          </p>

          <p className="font-urbanist text-[17px] font-semibold leading-[1.7] text-[#0F4C3A]">
            There are seven Directors in CMS T&amp;M — each the head of their
            respective cooperative group.
          </p>
        </div>

        {/* Seven Cooperatives */}
        <div className="mb-7 text-center">
          <h3 className="font-urbanist text-[13px] font-bold uppercase tracking-[1.5px] text-[#3CB371]">
            The Seven Cooperatives
          </h3>
        </div>

        <div className="mb-18 grid gap-[18px] md:grid-cols-2 lg:grid-cols-3">
          {coopGroups.map((group, index) => (
            <Card
              key={`${group.n}-${group.name}`}
              className="group rounded-[18px] border-[#ECE3CE] bg-white py-0 shadow-none transition-all duration-300 hover:-translate-y-1 hover:border-[#3CB371] hover:shadow-lg animate-reveal"
              style={{
                animationDelay: `${index * 70}ms`,
              }}
            >
              <CardContent className="p-[26px_24px]">
                <span className="mb-4 inline-flex h-[38px] w-[38px] items-center justify-center rounded-[11px] bg-[#F0F7F3] font-museo text-sm font-extrabold text-[#0F4C3A]">
                  {group.n}
                </span>

                <h4 className="mb-2 font-museo text-[19px] font-bold leading-[1.2] text-[#0F4C3A]">
                  {group.name}
                </h4>

                <p className="font-urbanist text-[14.5px] leading-[1.55] text-[#5B6B63]">
                  {group.desc}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Leadership CTA */}
        <div className="mb-16 flex justify-center animate-reveal">
          <Button
            onClick={onLeadershipClick}
            className="h-auto rounded-[13px] bg-[#0F4C3A] px-7 py-[15px] font-urbanist text-[15px] font-bold text-white shadow-none hover:bg-[#14543B]"
          >
            Meet the seven Directors &amp; leadership
            <ArrowRight className="ml-1 h-[17px] w-[17px]" />
          </Button>
        </div>

        {/* Why it works */}
        <div className="mb-18 grid gap-10 rounded-[24px] bg-[#0A1F18] p-8 sm:p-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-12 animate-reveal">
          <div>
            <span className="font-urbanist text-[13px] font-bold uppercase tracking-[1.5px] text-[#7FE0AC]">
              Why it works
            </span>

            <h3 className="mt-3.5 font-museo text-[30px] font-bold leading-[1.1] tracking-[-1px] text-white sm:text-[32px]">
              Advantages that outweigh the trade-offs.
            </h3>
          </div>

          <div className="grid gap-7 sm:grid-cols-2">
            {coopAdvantages.map((advantage, index) => (
              <div
                key={`${advantage.n}-${index}`}
                className="animate-reveal"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                <span className="mb-2 block font-museo text-2xl font-extrabold text-[#FBC02D]">
                  {advantage.n}
                </span>

                <p className="font-urbanist text-[15px] leading-[1.55] text-white/80">
                  {advantage.t}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ILO Introduction */}
        <div className="mx-auto mb-7 max-w-[680px] text-center animate-reveal">
          <span className="font-urbanist text-[13px] font-bold uppercase tracking-[1.5px] text-[#3CB371]">
            Recognised by the ILO
          </span>

          <h3 className="mt-3.5 font-museo text-[28px] font-bold leading-[1.12] tracking-[-1px] text-[#0F4C3A] sm:text-[30px]">
            In tandem with the principles of cooperative societies.
          </h3>
        </div>

        {/* ILO Benefits */}
        <div className="mb-7 grid gap-[18px] md:grid-cols-2 lg:grid-cols-3">
          {iloBenefits.map((benefit, index) => (
            <Card
              key={`${benefit.t}-${index}`}
              className="rounded-[18px] border-[#ECE3CE] bg-white py-0 shadow-none animate-reveal"
              style={{
                animationDelay: `${index * 70}ms`,
              }}
            >
              <CardContent className="p-[26px_24px]">
                <div className="mb-[18px] h-1 w-[34px] rounded-full bg-[#FBC02D]" />

                <h4 className="mb-2 font-museo text-[18px] font-bold leading-[1.2] text-[#0F4C3A]">
                  {benefit.t}
                </h4>

                <p className="font-urbanist text-[14.5px] leading-[1.55] text-[#5B6B63]">
                  {benefit.d}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* ILO Callout */}
        <div className="flex items-start gap-3.5 rounded-[14px] border border-[#D9EBE1] border-l-4 border-l-[#3CB371] bg-[#F0F7F3] px-5 py-5 sm:px-6 animate-reveal">
          <p className="font-urbanist text-[15.5px] leading-[1.6] text-[#2C3A34]">
            Under{" "}
            <strong className="text-[#0F4C3A]">
              ILO Recommendation No. 193
            </strong>
            , a transport cooperative like CMS T&amp;M is recognized for its
            resilience and its ability to address poverty.
          </p>
        </div>
      </div>
    </section>
  )
}