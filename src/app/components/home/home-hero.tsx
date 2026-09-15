"use client"

import Link from "next/link"

import { Button } from "@/components/ui/button"

type HomeHeroProps = {
  trustItems?: string[]
}

const defaultTrustItems = [
  "LAMATA Registered",
  "BRTAN Affiliated",
  "NURTW Affiliated",
  "58+ Years of Transport Experience",
  "Lekki–Ajah Transport Corridor",
  "Cooperative Transport Model",
]

export function HomeHero({
  trustItems = defaultTrustItems,
}: HomeHeroProps) {
  return (
    <>
      {/* =========================================================
          HERO
          ========================================================= */}
      <section
        id="home"
        className="
          relative isolate overflow-hidden
          bg-[radial-gradient(120%_90%_at_70%_10%,#15573F_0%,#0F4C3A_45%,#0A2A1F_100%)]
          px-5 pb-24 pt-32
          sm:px-8 sm:pt-36
          lg:min-h-[760px] lg:px-10 lg:pb-28 lg:pt-40
        "
      >
        {/* Decorative glow — top right */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none absolute -right-20 -top-32
            h-[420px] w-[420px]
            rounded-full
            bg-[radial-gradient(circle,rgba(60,179,113,0.28),transparent_65%)]
            blur-[20px]
            sm:h-[520px] sm:w-[520px]
          "
        />

        {/* Decorative glow — bottom left */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none absolute -bottom-40 -left-32
            h-[400px] w-[400px]
            rounded-full
            bg-[radial-gradient(circle,rgba(251,192,45,0.12),transparent_65%)]
            blur-[20px]
            sm:h-[480px] sm:w-[480px]
          "
        />

        {/* Subtle grid */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none absolute inset-0
            opacity-[0.025]
            [background-image:linear-gradient(rgba(255,255,255,.7)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.7)_1px,transparent_1px)]
            [background-size:64px_64px]
          "
        />

        <div
          className="
            relative mx-auto grid max-w-[1200px]
            items-center gap-14
            lg:grid-cols-[1.05fr_0.95fr]
            lg:gap-12
          "
        >
          {/* =====================================================
              CONTENT
              ===================================================== */}
          <div className="animate-reveal-in">
            {/* Eyebrow */}
            <div
              className="
                mb-7 inline-flex items-center gap-2.5
                rounded-full
                border border-[#3CB371]/40
                px-4 py-2
              "
            >
              <span
                className="
                  h-2 w-2 rounded-full
                  bg-[#3CB371]
                  shadow-[0_0_12px_rgba(60,179,113,.7)]
                "
              />

              <span
                className="
                  font-urbanist text-[11px] font-semibold
                  uppercase tracking-[0.4px]
                  text-[#7FE0AC]
                  sm:text-[13px]
                "
              >
                Operator of the Lekki–Ajah Corridor
              </span>
            </div>

            {/* Heading */}
            <h1
              className="
                max-w-[720px]
                font-museo
                text-[48px]
                font-extrabold
                leading-[0.98]
                tracking-[-2px]
                text-white
                sm:text-[60px]
                lg:text-[66px]
              "
            >
              Lagos moves on
              <br />
              <span className="text-[#FBC02D]">structure.</span>
            </h1>

            {/* Description */}
            <p
              className="
                mt-6 max-w-[510px]
                font-urbanist text-[17px]
                leading-[1.7]
                text-white/75
                sm:text-[19px]
              "
            >
              For{" "}
              <strong className="font-bold text-white">
                58 years
              </strong>
              , CMS T&amp;M has operated one of Nigeria&apos;s most
              established transport routes on the Lekki–Ajah corridor.
              Today, we power CMS T&amp;M with{" "}
              <strong className="font-bold text-white">
                TMO
              </strong>{" "}
              — our digital mobility platform.
            </p>

            {/* Actions */}
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button
                asChild
                size="lg"
                className="
                  h-auto rounded-[14px]
                  bg-[#FBC02D]
                  px-7 py-4
                  font-urbanist text-[15px]
                  font-bold text-[#0A1F18]
                  shadow-[0_14px_34px_-10px_rgba(251,192,45,.6)]
                  transition-all duration-300
                  hover:-translate-y-0.5
                  hover:bg-[#FFD54F]
                  hover:shadow-[0_18px_38px_-10px_rgba(251,192,45,.7)]
                "
              >
                <Link href="/products">
                  Explore the TMO Platform
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="
                  h-auto rounded-[14px]
                  border-white/30
                  bg-transparent
                  px-7 py-4
                  font-urbanist text-[15px]
                  font-semibold text-white
                  transition-all duration-300
                  hover:border-white
                  hover:bg-white/[0.06]
                  hover:text-white
                "
              >
                <Link href="/about">
                  About CMS T&amp;M
                </Link>
              </Button>
            </div>

            {/* =================================================
                APP DOWNLOAD
                ================================================= */}
            <div className="mt-10">
              <p
                className="
                  mb-3
                  font-urbanist text-sm
                  font-medium text-white/80
                "
              >
                Install the TMO app
              </p>

              <Button
                asChild
                variant="ghost"
                className="
                  h-auto w-fit
                  rounded-[16px]
                  border-2 border-white/70
                  bg-[#050505]
                  px-4 py-2.5
                  text-white
                  shadow-[0_18px_38px_-24px_rgba(0,0,0,.75)]
                  transition-all duration-300
                  hover:-translate-y-0.5
                  hover:bg-[#050505]
                  hover:text-white
                  hover:shadow-[0_20px_42px_-20px_rgba(0,0,0,.9)]
                "
              >
                <a
                  href="https://play.google.com/store/apps/details?id=com.tnm.rider"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Download TMO on Google Play"
                >
                  <GooglePlayIcon />

                  <span className="ml-3 flex flex-col items-start gap-0.5">
                    <span
                      className="
                        font-urbanist text-[10px]
                        font-bold uppercase
                        leading-none tracking-[0.12em]
                      "
                    >
                      Get TMO on
                    </span>

                    <span
                      className="
                        font-urbanist text-[24px]
                        font-extrabold leading-none
                        tracking-[-0.03em]
                      "
                    >
                      Google Play
                    </span>
                  </span>
                </a>
              </Button>
            </div>
          </div>

          {/* =====================================================
              HERO VISUAL
              ===================================================== */}
          <div
            className="
              relative flex min-h-[360px]
              items-center justify-center
              lg:min-h-[420px]
            "
          >
            {/* Ground glow */}
            <div
              aria-hidden="true"
              className="
                absolute bottom-8
                h-16 w-[280px]
                rounded-full
                bg-[radial-gradient(ellipse,rgba(60,179,113,.45),transparent_70%)]
                blur-[24px]
                animate-tmo-pulse
                sm:w-[340px]
              "
            />

            {/* TMO illustration */}
            <TmoHeroVisual />
          </div>
        </div>

        {/* Scroll indicator */}
        <Link
          href="/about"
          aria-label="Scroll to learn more about CMS T&M"
          className="
            absolute bottom-7 left-1/2
            flex -translate-x-1/2
            flex-col items-center gap-2
            transition-opacity duration-300
            hover:opacity-80
          "
        >
          <span
            className="
              font-urbanist text-[10px]
              uppercase tracking-[1.5px]
              text-white/40
            "
          >
            Scroll
          </span>
        </Link>
      </section>

      {/* =========================================================
          TRUST MARQUEE
          ========================================================= */}
      <TrustMarquee items={trustItems} />
    </>
  )
}

/* ===============================================================
   TMO HERO VISUAL
   =============================================================== */

function TmoHeroVisual() {
  return (
    <div
      className="
        relative
        h-[330px] w-full
        max-w-[560px]
        overflow-hidden
        rounded-[28px]
        border border-white/[0.08]
        bg-[#0A2A1F]/40
        shadow-[0_30px_80px_-30px_rgba(0,0,0,.5)]
        backdrop-blur-sm
        sm:h-[390px]
      "
    >
      {/* Sky */}
      <div
        className="
          absolute inset-0
          bg-[linear-gradient(180deg,#15573F_0%,#0F4C3A_48%,#0A2A1F_100%)]
        "
      />

      {/* Sun */}
      <div
        className="
          absolute right-[13%] top-[12%]
          h-20 w-20
          rounded-full
          bg-[radial-gradient(circle,#FBC02D,#F2A93C)]
          shadow-[0_0_70px_rgba(251,192,45,.55)]
          animate-tmo-sun
          sm:h-24 sm:w-24
        "
      />

      {/* City skyline */}
      <div className="absolute bottom-[30%] left-0 right-0 flex items-end gap-1 px-6">
        <Building className="h-14" />
        <Building className="h-20" />
        <Building className="h-12" />
        <Building className="h-28 dark" />
        <Building className="h-16" />
        <Building className="h-24" />
        <Building className="h-14" />
        <Building className="h-20" />
      </div>

      {/* Road */}
      <div
        className="
          absolute bottom-0 left-0 right-0
          h-[31%]
          bg-[linear-gradient(180deg,#3CB371,#1A6349)]
        "
      />

      {/* Road center */}
      <div
        className="
          absolute bottom-[10%] left-1/2
          h-1 w-[75%]
          -translate-x-1/2
          rounded-full
          bg-[#FBC02D]/70
        "
      />

      {/* Road lines */}
      <div className="absolute bottom-[16%] left-0 right-0 flex justify-around px-10">
        <span className="h-1 w-16 rounded-full bg-white/50" />
        <span className="h-1 w-16 rounded-full bg-white/50" />
        <span className="h-1 w-16 rounded-full bg-white/50" />
      </div>

      {/* Main bus */}
      <div
        className="
          absolute bottom-[19%] left-[20%]
          h-14 w-44
          rounded-[8px_20px_6px_6px]
          bg-[#FBC02D]
          shadow-[0_18px_35px_rgba(0,0,0,.3)]
          animate-tmo-bus
          sm:h-16 sm:w-52
        "
      >
        {/* Bus body */}
        <div className="absolute inset-x-3 top-2 flex gap-1.5">
          <span className="h-6 flex-1 rounded-sm bg-[#0F4C3A]/80" />
          <span className="h-6 flex-1 rounded-sm bg-[#0F4C3A]/80" />
          <span className="h-6 flex-1 rounded-sm bg-[#0F4C3A]/80" />
          <span className="h-6 w-6 rounded-sm bg-[#0F4C3A]/60" />
        </div>

        <span className="absolute bottom-2 left-3 font-mono text-[7px] font-bold text-[#0F4C3A]">
          TMO
        </span>

        {/* Wheels */}
        <span className="absolute -bottom-2 left-7 h-5 w-5 rounded-full border-2 border-white/70 bg-[#0A1F18]" />
        <span className="absolute -bottom-2 right-7 h-5 w-5 rounded-full border-2 border-white/70 bg-[#0A1F18]" />
      </div>

      {/* Secondary vehicle */}
      <div
        className="
          absolute bottom-[13%] right-[15%]
          h-8 w-20
          rounded-[4px_12px_4px_4px]
          bg-[#0A2A1F]/80
          animate-tmo-car
        "
      />

      {/* Label */}
      <div
        className="
          absolute bottom-5 left-6
          rounded-full
          border border-white/10
          bg-[#0A1F18]/60
          px-3 py-1.5
          backdrop-blur-sm
        "
      >
        <span
          className="
            font-mono text-[9px]
            tracking-[1px]
            text-white/60
          "
        >
          CMS MARINA · LAGOS ISLAND
        </span>
      </div>
    </div>
  )
}

function Building({
  className = "",
  dark = false,
}: {
  className?: string
  dark?: boolean
}) {
  return (
    <div
      className={`
        relative flex-1
        rounded-t-sm
        ${dark ? "bg-[#061C15]" : "bg-[#0A2A1F]"}
        opacity-80
        ${className}
      `}
    >
      <div className="absolute inset-x-1 top-2 grid grid-cols-2 gap-1 opacity-40">
        {Array.from({ length: 8 }).map((_, index) => (
          <span
            key={index}
            className="h-1.5 rounded-[1px] bg-[#FBC02D]"
          />
        ))}
      </div>
    </div>
  )
}

/* ===============================================================
   TRUST MARQUEE
   =============================================================== */

function TrustMarquee({
  items,
}: {
  items: string[]
}) {
  return (
    <section
      aria-label="CMS T&M affiliations and credentials"
      className="
        overflow-hidden
        border-t border-[#3CB371]/10
        bg-[#0A1F18]
        py-6
      "
    >
      <div className="flex w-max animate-tmo-marquee">
        {/* First set */}
        <div className="flex shrink-0 gap-3.5 pr-3.5">
          {items.map((item, index) => (
            <TrustItem
              key={`first-${item}-${index}`}
              item={item}
            />
          ))}
        </div>

        {/* Duplicate set for seamless loop */}
        <div
          aria-hidden="true"
          className="flex shrink-0 gap-3.5 pr-3.5"
        >
          {items.map((item, index) => (
            <TrustItem
              key={`second-${item}-${index}`}
              item={item}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function TrustItem({
  item,
}: {
  item: string
}) {
  return (
    <span
      className="
        inline-flex shrink-0
        items-center gap-2.5
        whitespace-nowrap
        rounded-full
        border border-[#3CB371]/30
        px-5 py-2.5
        font-urbanist text-sm
        font-semibold
        text-white/80
      "
    >
      <span
        className="
          h-1.5 w-1.5 shrink-0
          rounded-full
          bg-[#3CB371]
          shadow-[0_0_8px_rgba(60,179,113,.5)]
        "
      />

      {item}
    </span>
  )
}

/* ===============================================================
   GOOGLE PLAY ICON
   =============================================================== */

function GooglePlayIcon() {
  return (
    <svg
      width="34"
      height="38"
      viewBox="0 0 34 38"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="shrink-0"
    >
      <path
        d="M2.8 2.35c-.49.52-.8 1.33-.8 2.39v28.52c0 1.03.29 1.82.75 2.34l.12.11L19.3 19.31v-.62L2.91 2.24l-.11.11Z"
        fill="#00D26A"
      />

      <path
        d="M24.76 24.79 19.3 19.31v-.62l5.52-5.52.12.07 6.47 3.7c1.85 1.05 1.85 2.77 0 3.84l-6.53 3.73-.12.28Z"
        fill="#FFD84D"
      />

      <path
        d="M24.88 24.51 19.3 18.93 2.8 35.43c.77.82 2.05.93 3.5.12l18.58-10.59Z"
        fill="#FF5252"
      />

      <path
        d="M24.88 13.49 6.3 2.9C4.84 2.08 3.56 2.2 2.8 3.02l16.5 16.51 5.58-5.58Z"
        fill="#3B82F6"
      />
    </svg>
  )
}