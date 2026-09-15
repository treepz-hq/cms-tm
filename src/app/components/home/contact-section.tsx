"use client"

import Link from "next/link"
import {
  // Facebook,
  // Instagram,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react"

const contactDetails = [
  {
    icon: MapPin,
    content: (
      <>
        <span>
          CMS Taxi & Motor Nigeria Limited
        </span>
        <br />
        Car Park 4
        <br />
        Opposite the Cathedral Church, Marina
        <br />
        Lagos, Nigeria
      </>
    ),
  },
  {
    icon: Phone,
    content: (
      <Link
        href="tel:+2348140467195"
        className="transition-colors hover:text-[#7FE0AC]"
      >
        +234 814 046 7195
      </Link>
    ),
  },
  {
    icon: Mail,
    content: (
      <Link
        href="mailto:info@cmstnm.com"
        className="transition-colors hover:text-[#7FE0AC]"
      >
        info@cmstnm.com
      </Link>
    ),
  },
]

const socialLinks = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/people/CMS-TM/61591233941784",
    icon: Mail,
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@tmorides0",
    icon: MessageCircle,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/tmorides",
    icon: Mail,
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/2348140467195",
    icon: MessageCircle,
  },
]

export function ContactSection() {
  return (
    <section
      id="contact"
      className="
        relative overflow-hidden
        bg-[radial-gradient(120%_100%_at_70%_0%,#15573F_0%,#0F4C3A_60%,#0A2A1F_100%)]
        px-5 py-24
        sm:px-8
        lg:py-[120px]
      "
    >
      {/* Decorative glow */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute
          -right-32 -top-40
          h-[420px] w-[420px]
          rounded-full
          bg-[#3CB371]/10
          blur-[90px]
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute
          -bottom-40 -left-32
          h-[420px] w-[420px]
          rounded-full
          bg-[#FBC02D]/10
          blur-[90px]
        "
      />

      <div className="relative mx-auto max-w-[1200px]">
        {/* Header */}
        <div className="mb-8 max-w-[650px] animate-reveal">
          <span className="font-urbanist text-[13px] font-bold uppercase tracking-[1.5px] text-[#7FE0AC]">
            Let&apos;s Talk
          </span>

          <h2 className="mt-2 font-museo text-4xl font-bold leading-[1.04] tracking-[-1.5px] text-white sm:text-[46px]">
            Contact Us
          </h2>
        </div>

        {/* Contact content */}
        {/* Contact information */}
        <div className="flex flex-col gap-7">
          {contactDetails.map((item, index) => {
            const Icon = item.icon

            return (
              <div
                key={index}
                className="flex items-start gap-4"
              >
                <div
                  className="
                          flex h-11 w-11 shrink-0 items-center justify-center"
                >
                  <Icon className="h-[19px] w-[19px] text-[#7FE0AC]" />
                </div>

                <div className="pt-1 font-urbanist text-[15.5px] leading-[1.65] text-white/75">
                  {item.content}
                </div>
              </div>
            )
          })}
        </div>

        {/* Socials */}
        <div className="flex flex-wrap gap-3 mt-2">
          {socialLinks.map((social) => {
            const Icon = social.icon

            return (
              <Link
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="
                          flex h-11 w-11 items-center justify-center
                          rounded-xl
                          border border-white/15
                          bg-white/[0.04]
                          text-white
                          transition-all duration-300
                          hover:-translate-y-1
                          hover:border-[#3CB371]
                          hover:bg-[#3CB371]/10
                          hover:text-[#7FE0AC]
                        "
              >
                <Icon className="h-[18px] w-[18px]" />
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}