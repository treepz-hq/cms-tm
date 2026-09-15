"use client"

import Image from "next/image"
import { useState } from "react"

import { cn } from "@/lib/utils"

export type Leader = {
  hasPhoto: string | undefined
  name: string
  role: string
  initials?: string
  noPhoto?: boolean
  avatarImg?: string
  popupImg?: string
  c1: string
  c2: string
}

type LeadershipSectionProps = {
  showLeadership: boolean
  leaders: Leader[]
}

export default function LeadershipSection({
  showLeadership,
  leaders,
}: LeadershipSectionProps) {
  const [hoveredLeader, setHoveredLeader] = useState<string | null>(null)

  if (!showLeadership) {
    return null
  }

  return (
    <section className="bg-[#0A1F18] px-6 py-[88px] sm:px-10 sm:py-[100px] lg:px-10 lg:py-[120px]">
      <div className="mx-auto max-w-[1200px]">
        {/* ================= HEADER ================= */}
        <div
          className="mb-12 max-w-[620px] animate-[revealIn_.85s_cubic-bezier(.16,1,.3,1)_both]"
        >
          <span className="font-urbanist text-[13px] font-bold uppercase tracking-[1.5px] text-[#3CB371]">
            Leadership & Team
          </span>

          <h2 className="mb-[18px] mt-4 font-museo text-4xl font-bold leading-[1.04] tracking-[-1.5px] text-white sm:text-[46px]">
            The people behind TMO.
          </h2>

          <p className="m-0 font-urbanist text-base leading-[1.6] text-white/60 sm:text-[17px]">
            CMS T&amp;M is governed by a Board representing seven cooperative
            groups across Lagos.
          </p>
        </div>

        {/* ================= FEATURED LEADER ================= */}
        <div
          className={cn(
            "mb-[52px] grid items-center gap-8 rounded-[26px] border border-[#3CB371]/[0.32]",
            "bg-gradient-to-br from-[#0F4C3A] to-[#08160F]",
            "p-6 sm:gap-11 sm:p-11",
            "lg:grid-cols-[0.8fr_1.2fr]",
            "animate-[revealIn_.85s_cubic-bezier(.16,1,.3,1)_both]",
          )}
        >
          {/* Photo */}
          <div className="relative aspect-[0.9] overflow-hidden rounded-[20px] bg-gradient-to-br from-[#3CB371] to-[#0F4C3A] shadow-[0_30px_60px_-24px_rgba(0,0,0,0.6)]">
            <Image
              src="https://raw.githubusercontent.com/marshalsoft/cms-tm-website/1faaccca49dfa579be2fbfeed918011a53963373/images/ANDY-AKHIGBE.jpeg"
              alt="Andy Akhigbe"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover"
            />
          </div>

          {/* Bio */}
          <div>
            <span className="font-urbanist text-[12.5px] font-bold uppercase tracking-[1.5px] text-[#FBC02D]">
              MD/CEO · CMS T&amp;M
            </span>

            <h3 className="mb-[18px] mt-2.5 font-museo text-3xl font-extrabold tracking-[-1px] text-white sm:text-[36px]">
              Andy Akhigbe
            </h3>

            <p className="mb-3.5 font-urbanist text-[15.5px] leading-[1.7] text-white/80">
              Andy is the MD/CEO of CMS Taxi &amp; Motor Nigeria Limited, a
              public transportation company based in Lagos. He attended Harvard
              University Graduate School of Education (HGSE) Project Zero
              Classroom from 2007–2009, and spent 21 years at First Bank,
              resigning voluntarily on June 6, 2014 as a Business Manager. CMS
              T&amp;M was an account under his management at First Bank — where
              he was first exposed to the company&apos;s operations — and he joined
              the company in 2016.
            </p>

            <p className="mb-[22px] font-urbanist text-[15.5px] leading-[1.7] text-white/[0.72]">
              At First Bank he packaged credit requests and managed A-list
              companies including Dangote&apos;s Obajana Cement Factory and AA Rano
              Petroleum, alongside high-net-worth relationships such as Tom Dim
              Limited — where he packaged the ₦350M purchase of a 100-bed hotel
              facility in Apapa. Post-retirement he founded LearnPower, an
              ed-tech platform for primary, secondary and tertiary learners
              across Nigeria, and served as a Director at TenStrings, Nigeria&apos;s
              largest and most successful music institute.
            </p>

            <div className="flex flex-wrap gap-[9px]">
              <LeaderTag>
                Harvard HGSE · PZC &apos;07–&apos;09
              </LeaderTag>

              <LeaderTag>
                21 Years · First Bank
              </LeaderTag>

              <LeaderTag>
                Founder · LearnPower
              </LeaderTag>

              <LeaderTag>
                Director · TenStrings
              </LeaderTag>
            </div>
          </div>
        </div>

        {/* ================= LEADERS ================= */}
        <div className="grid grid-cols-1 gap-[18px] sm:grid-cols-2 lg:grid-cols-4">
          {leaders.map((leader) => {
            const isHovered = hoveredLeader === leader.name

            return (
              <div
                key={leader.name}
                onMouseEnter={() => setHoveredLeader(leader.name)}
                onMouseLeave={() => setHoveredLeader(null)}
                className={cn(
                  "group relative cursor-pointer rounded-[18px] border bg-[#0F4C3A] p-6",
                  "border-[#3CB371]/[0.22]",
                  "transition-[border-color,transform] duration-200",
                  "hover:-translate-y-1 hover:border-[#3CB371]/60",
                )}
              >
                {/* Hover popup */}
                {isHovered && (
                  <div className="pointer-events-none absolute bottom-[calc(100%-26px)] left-1/2 z-30 w-[210px] -translate-x-1/2 animate-[popIn_.26s_cubic-bezier(.16,1,.3,1)_both]">
                    <div className="overflow-hidden rounded-[18px] border border-[#3CB371]/55 bg-[#08160F] shadow-[0_34px_70px_-22px_rgba(0,0,0,0.8)]">
                      {leader.popupImg && (
                        <div className="relative aspect-[4/3]">
                          <Image
                            src={leader.popupImg}
                            alt={leader.name}
                            fill
                            sizes="210px"
                            className="object-cover"
                          />
                        </div>
                      )}

                      <div className="p-3">
                        <div className="font-museo text-[15px] font-bold text-white">
                          {leader.name}
                        </div>

                        <div className="mt-0.5 font-urbanist text-xs text-[#7FE0AC]">
                          {leader.role}
                        </div>
                      </div>
                    </div>

                    <div className="mx-auto -mt-[7px] size-[14px] rotate-45 border-b border-r border-[#3CB371]/55 bg-[#08160F]" />
                  </div>
                )}

                {/* Avatar */}
                <div
                  className="relative mb-[18px] flex size-16 items-center justify-center overflow-hidden rounded-full font-museo text-[22px] font-bold text-white"
                  style={{
                    background: `linear-gradient(135deg, ${leader.c1}, ${leader.c2})`,
                  }}
                >
                  {leader.noPhoto && leader.initials}

                  {leader.hasPhoto && leader.avatarImg && (
                    <Image
                      src={leader.avatarImg}
                      alt={leader.name}
                      fill
                      sizes="64px"
                      className="object-cover"
                    />
                  )}
                </div>

                <h3 className="mb-[5px] font-museo text-lg font-bold leading-[1.15] text-white">
                  {leader.name}
                </h3>

                <p className="m-0 font-urbanist text-[13.5px] leading-[1.45] text-white/60">
                  {leader.role}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function LeaderTag({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <span className="rounded-full border border-[#3CB371]/35 px-[15px] py-[7px] font-urbanist text-[12.5px] font-semibold text-white/[0.85]">
      {children}
    </span>
  )
}