// "use client"

// import { useState } from "react"
// import Link from "next/link"
// import { ChevronDown, Menu, X } from "lucide-react"

// import { Button } from "@/components/ui/button"
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu"

// const productMenu = [
//   {
//     name: "TMO X Card",
//     tag: "Premium mobility card",
//     mark: "C",
//     bg: "bg-yellow-100",
//     fg: "text-green-950",
//     href: "/products/card",
//   },
//   {
//     name: "TMO X Driver",
//     tag: "Drive with TMO X",
//     mark: "D",
//     bg: "bg-green-100",
//     fg: "text-green-950",
//     href: "/driver",
//   },
//   {
//     name: "TMO X Business",
//     tag: "Mobility for businesses",
//     mark: "B",
//     bg: "bg-emerald-100",
//     fg: "text-green-950",
//     href: "/products/business",
//   },
//   {
//     name: "TMO X Fleet",
//     tag: "Fleet management",
//     mark: "F",
//     bg: "bg-amber-100",
//     fg: "text-green-950",
//     href: "/products/fleet",
//   },
// ]

// const navLinks = [
//   { label: "Home", href: "/" },
//   { label: "About", href: "/about" },
//   { label: "Routes", href: "/routes" },
//   { label: "Leadership", href: "/leadership" },
//   { label: "Blog", href: "/blog" },
// ]

// export default function Navbar() {
//   const [mobileOpen, setMobileOpen] = useState(false)

//   return (
//     <header className="fixed inset-x-0 top-0 z-50">
//       <nav className="border-b border-white/10 bg-[#0A1F18]/85 px-5 py-3 backdrop-blur-xl md:px-10 md:py-4">
//         <div className="mx-auto flex max-w-[1600px] items-center justify-between gap-6">
//           {/* Logo */}
//           <Link
//             href="/"
//             className="flex shrink-0 items-center gap-3"
//             onClick={() => setMobileOpen(false)}
//           >
//             {/* Replace with your actual logo */}
//             <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#FBC02D] font-bold text-[#0A1F18]">
//               T
//             </div>

//             <span className="hidden font-bold tracking-tight text-white sm:block">
//               TMO X
//             </span>
//           </Link>

//           {/* Desktop navigation */}
//           {/* Products */}
//           <div className="group relative">
//             <Link
//               href="/product"
//               className="flex items-center gap-1.5 rounded-lg px-3.5 py-2.5 font-['Urbanist'] text-[15px] font-semibold text-white/90 outline-none transition-colors hover:bg-white/10 hover:text-white"
//             >
//               Products

//               <ChevronDown className="h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
//             </Link>

//             {/* Hover dropdown */}
//             <div
//               className="invisible absolute left-0 top-full w-[300px] pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100"
//             >
//               <div className="rounded-[18px] border-0 bg-white p-2 shadow-[0_24px_60px_-12px_rgba(10,31,24,0.4)]">
//                 {productMenu.map((product) => (
//                   <Link
//                     key={product.name}
//                     href={product.href}
//                     className="flex w-full items-center gap-3.5 rounded-xl px-3 py-3 transition-colors hover:bg-[#F5E6C8]"
//                   >
//                     <span
//                       className={`flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-[11px] font-['MuseoModerno'] text-[15px] font-bold ${product.bg} ${product.fg}`}
//                     >
//                       {product.mark}
//                     </span>

//                     <span className="flex flex-col">
//                       <span className="font-['MuseoModerno'] text-[15px] font-bold text-[#0A1F18]">
//                         {product.name}
//                       </span>

//                       <span className="font-['Urbanist'] text-[12.5px] text-[#5B6B63]">
//                         {product.tag}
//                       </span>
//                     </span>
//                   </Link>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* Desktop CTA */}
//           <div className="hidden shrink-0 items-center gap-2.5 lg:flex">
//             <Button
//               render={<Link href="/request-card" />}
//               className="rounded-[11px] bg-[#FBC02D] px-[18px] py-[22px] font-['Urbanist'] text-sm font-bold text-[#0A1F18] shadow-none hover:bg-[#ffce4d]"
//             >
//               Apply for Card
//             </Button>

//             <Button
//               render={<Link href="/drive" />}
//               variant="outline"
//               className="rounded-[11px] border-white/35 bg-transparent px-4 py-[21px] font-['Urbanist'] text-sm font-semibold text-white hover:border-[#3CB371] hover:bg-transparent hover:text-white"
//             >
//               Drive for TMO&nbsp;X
//             </Button>
//           </div>

//           {/* Mobile menu button */}
//           <button
//             type="button"
//             aria-label={mobileOpen ? "Close menu" : "Open menu"}
//             aria-expanded={mobileOpen}
//             onClick={() => setMobileOpen(!mobileOpen)}
//             className="flex h-10 w-10 items-center justify-center rounded-lg text-white transition-colors hover:bg-white/10 lg:hidden"
//           >
//             {mobileOpen ? (
//               <X className="h-6 w-6" />
//             ) : (
//               <Menu className="h-6 w-6" />
//             )}
//           </button>
//         </div>

//         {/* Mobile navigation */}
//         {mobileOpen && (
//           <div className="border-t border-white/10 pb-5 pt-4 lg:hidden">
//             <div className="flex flex-col gap-1">
//               <Link
//                 href="/"
//                 onClick={() => setMobileOpen(false)}
//                 className="rounded-lg px-4 py-3 font-['Urbanist'] font-semibold text-white/90 hover:bg-white/10"
//               >
//                 Home
//               </Link>

//               <div className="my-1 border-t border-white/10" />

//               <p className="px-4 py-2 text-xs font-bold uppercase tracking-wider text-white/50">
//                 Products
//               </p>

//               {productMenu.map((product) => (
//                 <Link
//                   key={product.name}
//                   href={product.href}
//                   onClick={() => setMobileOpen(false)}
//                   className="flex items-center gap-3 rounded-lg px-4 py-3 hover:bg-white/10"
//                 >
//                   <span
//                     className={`flex h-9 w-9 items-center justify-center rounded-[10px] text-sm font-bold ${product.bg} ${product.fg}`}
//                   >
//                     {product.mark}
//                   </span>

//                   <span>
//                     <span className="block font-['MuseoModerno'] text-sm font-bold text-white">
//                       {product.name}
//                     </span>
//                     <span className="block font-['Urbanist'] text-xs text-white/50">
//                       {product.tag}
//                     </span>
//                   </span>
//                 </Link>
//               ))}

//               <div className="my-1 border-t border-white/10" />

//               {navLinks.slice(1).map((link) => (
//                 <Link
//                   key={link.href}
//                   href={link.href}
//                   onClick={() => setMobileOpen(false)}
//                   className="rounded-lg px-4 py-3 font-['Urbanist'] font-semibold text-white/90 hover:bg-white/10"
//                 >
//                   {link.label}
//                 </Link>
//               ))}

//               {/* Mobile CTAs */}
//               <div className="mt-3 flex flex-col gap-2 border-t border-white/10 pt-4">
//                 <Button
//                   asChild
//                   className="h-11 rounded-[11px] bg-[#FBC02D] font-['Urbanist'] font-bold text-[#0A1F18] hover:bg-[#ffce4d]"
//                 >
//                   <Link
//                     href="/request-card"
//                     onClick={() => setMobileOpen(false)}
//                   >
//                     Apply for Card
//                   </Link>
//                 </Button>

//                 <Button
//                   asChild
//                   variant="outline"
//                   className="h-11 rounded-[11px] border-white/35 bg-transparent font-['Urbanist'] font-semibold text-white hover:border-[#3CB371] hover:bg-transparent hover:text-white"
//                 >
//                   <Link
//                     href="/drive"
//                     onClick={() => setMobileOpen(false)}
//                   >
//                     Drive for TMO X
//                   </Link>
//                 </Button>
//               </div>
//             </div>
//           </div>
//         )}
//       </nav>
//     </header>
//   )
// }


"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ChevronDown, Menu, X } from "lucide-react"

import { Button } from "@/components/ui/button"

const productMenu = [
  {
    name: "TMO X Card",
    tag: "Premium mobility card",
    mark: "C",
    bg: "bg-yellow-100",
    fg: "text-green-950",
    href: "/products/card",
  },
  {
    name: "TMO X Driver",
    tag: "Drive with TMO X",
    mark: "D",
    bg: "bg-green-100",
    fg: "text-green-950",
    href: "/driver",
  },
  {
    name: "TMO X Business",
    tag: "Mobility for businesses",
    mark: "B",
    bg: "bg-emerald-100",
    fg: "text-green-950",
    href: "/products/business",
  },
  {
    name: "TMO X Fleet",
    tag: "Fleet management",
    mark: "F",
    bg: "bg-amber-100",
    fg: "text-green-950",
    href: "/products/fleet",
  },
]

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Routes", href: "/routes" },
  { label: "Leadership", href: "/leadership" },
  { label: "Blog", href: "/blog" },
]

function isActivePath(pathname: string, href: string) {
  if (href === "/") {
    return pathname === "/"
  }

  return pathname === href || pathname.startsWith(`${href}/`)
}

export default function Navbar() {
  const pathname = usePathname()

  const [mobileOpen, setMobileOpen] = useState(false)
  const [productsOpen, setProductsOpen] = useState(false)

  const productsActive =
    pathname === "/product" ||
    pathname.startsWith("/products") ||
    pathname === "/driver"

  // Close menus after navigation.
  useEffect(() => {
    setMobileOpen(false)
    setProductsOpen(false)
  }, [pathname])

  // Close menus with Escape.
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileOpen(false)
        setProductsOpen(false)
      }
    }

    document.addEventListener("keydown", handleEscape)

    return () => {
      document.removeEventListener("keydown", handleEscape)
    }
  }, [])

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav
        aria-label="Main navigation"
        className="border-b border-white/10 bg-[#0A1F18]/85 px-5 py-3 backdrop-blur-xl md:px-10 md:py-4"
      >
        <div className="mx-auto flex max-w-[1600px] items-center justify-between gap-6">
          {/* Logo */}
          <Link
            href="/"
            aria-label="TMO X home"
            onClick={() => {
              setMobileOpen(false)
              setProductsOpen(false)
            }}
            className="flex shrink-0 items-center gap-3"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#FBC02D] font-bold text-[#0A1F18]">
              T
            </div>

            <span className="hidden font-bold tracking-tight text-white sm:block">
              TMO X
            </span>
          </Link>

          {/* Desktop navigation */}
          {/* Desktop navigation */}
<div className="hidden items-center gap-1 lg:flex">
  {/* Home */}
  {navLinks
    .filter((link) => link.href === "/")
    .map((link) => {
      const active = isActivePath(pathname, link.href)

      return (
        <Link
          key={link.href}
          href={link.href}
          aria-current={active ? "page" : undefined}
          className={`relative rounded-lg px-3.5 py-2.5 font-['Urbanist'] text-[15px] font-semibold transition-colors ${
            active
              ? "text-white"
              : "text-white/75 hover:bg-white/10 hover:text-white"
          }`}
        >
          {link.label}

          {active && (
            <span className="absolute inset-x-3 bottom-1 h-0.5 rounded-full bg-[#FBC02D]" />
          )}
        </Link>
      )
    })}

  {/* Products */}
  <div
    className="group relative"
    onMouseEnter={() => setProductsOpen(true)}
    onMouseLeave={() => setProductsOpen(false)}
  >
    <div className="flex items-center">
      {/* Products page link */}
      <Link
        href="/product"
        aria-current={
          pathname === "/product" ? "page" : undefined
        }
        className={`relative flex items-center rounded-l-lg px-3.5 py-2.5 font-['Urbanist'] text-[15px] font-semibold transition-colors ${
          productsActive
            ? "text-white"
            : "text-white/75 hover:bg-white/10 hover:text-white"
        }`}
      >
        Products

        {productsActive && (
          <span className="absolute inset-x-3 bottom-1 h-0.5 rounded-full bg-[#FBC02D]" />
        )}
      </Link>

      {/* Dropdown toggle */}
      <button
        type="button"
        aria-label="Open Products menu"
        aria-haspopup="true"
        aria-expanded={productsOpen}
        onClick={() => setProductsOpen((open) => !open)}
        className={`rounded-r-lg px-2 py-2.5 text-white/75 transition-colors hover:bg-white/10 hover:text-white ${
          productsOpen ? "bg-white/10" : ""
        }`}
      >
        <ChevronDown
          className={`h-4 w-4 transition-transform duration-200 ${
            productsOpen ? "rotate-180" : ""
          }`}
        />
      </button>
    </div>

    {/* Products dropdown */}
    <div
      className={`absolute left-0 top-full w-[300px] pt-3 transition-all duration-200 ${
        productsOpen
          ? "visible translate-y-0 opacity-100"
          : "invisible -translate-y-1 opacity-0"
      }`}
    >
      <div
        role="menu"
        className="rounded-[18px] border-0 bg-white p-2 shadow-[0_24px_60px_-12px_rgba(10,31,24,0.4)]"
      >
        {productMenu.map((product) => {
          const active = isActivePath(
            pathname,
            product.href
          )

          return (
            <Link
              key={product.name}
              href={product.href}
              role="menuitem"
              onClick={() => setProductsOpen(false)}
              className={`flex w-full items-center gap-3.5 rounded-xl px-3 py-3 transition-colors ${
                active
                  ? "bg-[#F5E6C8]"
                  : "hover:bg-[#F5E6C8]"
              }`}
            >
              <span
                className={`flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-[11px] font-['MuseoModerno'] text-[15px] font-bold ${product.bg} ${product.fg}`}
              >
                {product.mark}
              </span>

              <span className="flex flex-col">
                <span className="font-['MuseoModerno'] text-[15px] font-bold text-[#0A1F18]">
                  {product.name}
                </span>

                <span className="font-['Urbanist'] text-[12.5px] text-[#5B6B63]">
                  {product.tag}
                </span>
              </span>
            </Link>
          )
        })}
      </div>
    </div>
  </div>

  {/* Remaining navigation */}
  {navLinks
    .filter((link) => link.href !== "/")
    .map((link) => {
      const active = isActivePath(pathname, link.href)

      return (
        <Link
          key={link.href}
          href={link.href}
          aria-current={active ? "page" : undefined}
          className={`relative rounded-lg px-3.5 py-2.5 font-['Urbanist'] text-[15px] font-semibold transition-colors ${
            active
              ? "text-white"
              : "text-white/75 hover:bg-white/10 hover:text-white"
          }`}
        >
          {link.label}

          {active && (
            <span className="absolute inset-x-3 bottom-1 h-0.5 rounded-full bg-[#FBC02D]" />
          )}
        </Link>
      )
    })}
</div>

          {/* Desktop CTAs */}
          <div className="hidden shrink-0 items-center gap-2.5 lg:flex">
            <Button
              asChild
              className="rounded-[11px] bg-[#FBC02D] px-[18px] py-[22px] font-['Urbanist'] text-sm font-bold text-[#0A1F18] shadow-none hover:bg-[#ffce4d]"
            >
              <Link href="/request-card">Apply for Card</Link>
            </Button>

            <Button
              asChild
              variant="outline"
              className="rounded-[11px] border-white/35 bg-transparent px-4 py-[21px] font-['Urbanist'] text-sm font-semibold text-white hover:border-[#3CB371] hover:bg-transparent hover:text-white"
            >
              <Link href="/drive">Drive for TMO X</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMobileOpen((open) => !open)}
            className="flex h-10 w-10 items-center justify-center rounded-lg text-white transition-colors hover:bg-white/10 lg:hidden"
          >
            {mobileOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile navigation */}
        {mobileOpen && (
          <div
            id="mobile-navigation"
            className="border-t border-white/10 pb-5 pt-4 lg:hidden"
          >
            <div className="flex flex-col gap-1">
              {/* Main navigation */}
              {navLinks.map((link) => {
                const active = isActivePath(pathname, link.href)

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    aria-current={active ? "page" : undefined}
                    onClick={() => setMobileOpen(false)}
                    className={`rounded-lg px-4 py-3 font-['Urbanist'] font-semibold transition-colors ${
                      active
                        ? "bg-white/10 text-white"
                        : "text-white/80 hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    {link.label}
                  </Link>
                )
              })}

              <div className="my-2 border-t border-white/10" />

              {/* Mobile Products header */}
              <div className="flex items-center">
                {/* Products goes to /product */}
                <Link
                  href="/product"
                  onClick={() => setMobileOpen(false)}
                  className={`flex-1 rounded-l-lg px-4 py-3 font-['Urbanist'] font-semibold transition-colors ${
                    productsActive
                      ? "bg-white/10 text-white"
                      : "text-white/80 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  Products
                </Link>

                {/* Chevron expands products */}
                <button
                  type="button"
                  aria-label="Toggle Products submenu"
                  aria-expanded={productsOpen}
                  onClick={() =>
                    setProductsOpen((open) => !open)
                  }
                  className="rounded-r-lg px-4 py-3 text-white/80 hover:bg-white/10 hover:text-white"
                >
                  <ChevronDown
                    className={`h-4 w-4 transition-transform duration-200 ${
                      productsOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
              </div>

              {/* Mobile product submenu */}
              {productsOpen && (
                <div className="flex flex-col gap-1 pl-2">
                  {productMenu.map((product) => {
                    const active = isActivePath(
                      pathname,
                      product.href
                    )

                    return (
                      <Link
                        key={product.name}
                        href={product.href}
                        onClick={() => {
                          setMobileOpen(false)
                          setProductsOpen(false)
                        }}
                        className={`flex items-center gap-3 rounded-lg px-4 py-3 transition-colors ${
                          active
                            ? "bg-white/10"
                            : "hover:bg-white/10"
                        }`}
                      >
                        <span
                          className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-[10px] text-sm font-bold ${product.bg} ${product.fg}`}
                        >
                          {product.mark}
                        </span>

                        <span>
                          <span className="block font-['MuseoModerno'] text-sm font-bold text-white">
                            {product.name}
                          </span>

                          <span className="block font-['Urbanist'] text-xs text-white/50">
                            {product.tag}
                          </span>
                        </span>
                      </Link>
                    )
                  })}
                </div>
              )}

              {/* Mobile CTAs */}
              <div className="mt-3 flex flex-col gap-2 border-t border-white/10 pt-4">
                <Button
                  asChild
                  className="h-11 rounded-[11px] bg-[#FBC02D] font-['Urbanist'] font-bold text-[#0A1F18] hover:bg-[#ffce4d]"
                >
                  <Link
                    href="/request-card"
                    onClick={() => setMobileOpen(false)}
                  >
                    Apply for Card
                  </Link>
                </Button>

                <Button
                  asChild
                  variant="outline"
                  className="h-11 rounded-[11px] border-white/35 bg-transparent font-['Urbanist'] font-semibold text-white hover:border-[#3CB371] hover:bg-transparent hover:text-white"
                >
                  <Link
                    href="/drive"
                    onClick={() => setMobileOpen(false)}
                  >
                    Drive for TMO X
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}