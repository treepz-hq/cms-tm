import Image from "next/image";
import Link from "next/link";

const footProducts = [
  { label: "TMO X", href: "/driver-register" },
  { label: "Ride-along", href: "/products/payments" },
  { label: "Logistics", href: "/products/fleet-management" },
];


const companyLinks = [
  { label: "About", href: "/about" },
  { label: "Leadership", href: "/leadership" },
  { label: "Blog", href: "/blog" },
];


const supportLinks = [
  { label: "Contact", href: "/contact" },
  { label: "Routes", href: "/routes" },
  { label: "Apply for Card", href: "/request-card" },
  { label: "Driver Registration", href: "/driver-register" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0A1F18] px-5 pb-9 pt-[72px] sm:px-10">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr_1.2fr] lg:gap-9">
        {/* Brand */}
        <div>
          <Link href="/" className="inline-block">
            {/* Replace with your actual CMS T&M logo */}
            <div className="mb-5 flex h-10 items-center">
              <span className="font-museo text-xl font-extrabold text-white">
                CMS <span className="text-[#7FE0AC]">T&amp;M</span>
              </span>
            </div>
          </Link>

          <p className="max-w-[240px] font-urbanist text-sm leading-[1.6] text-white/55">
            Operator of the Lekki–Ajah Corridor. Powered by 58 years of Lagos
            transport heritage.
          </p>
        </div>

        {/* Products */}
        <FooterColumn title="Products">
          {footProducts.map((product) => (
            <FooterLink key={product.href} href={product.href}>
              {product.label}
            </FooterLink>
          ))}
        </FooterColumn>

        {/* Company */}
        <FooterColumn title="Company">
          {companyLinks.map((link) => (
            <FooterLink key={link.href} href={link.href}>
              {link.label}
            </FooterLink>
          ))}
        </FooterColumn>

        {/* Support */}
        <FooterColumn title="Support">
          {supportLinks.map((link) => (
            <FooterLink key={link.href} href={link.href}>
              {link.label}
            </FooterLink>
          ))}
        </FooterColumn>

        {/* Powered by */}
        <div>
          <FooterHeading>Powered by</FooterHeading>

          <div className="mt-3.5">
            <a
              href="https://www.treepz.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Treepz website"
              className="inline-block"
            >
              <Image
                src="/images/treepz-logo.png"
                alt="Treepz"
                width={148}
                height={32}
                className="h-[30px] w-auto object-contain"
              />
            </a>

            <p className="mt-3 max-w-[240px] font-urbanist text-[13px] leading-[1.55] text-white/60">
              Powered by{" "}
              <strong className="font-bold text-white">Treepz</strong> in
              partnership with{" "}
              <strong className="font-bold text-white">CMS T&amp;M</strong>.
            </p>
          </div>

          {/* Partners */}
          <div className="mt-[18px] flex items-center gap-2">
            <span
              aria-hidden="true"
              className="h-3.5 w-3.5 rounded-[3px] bg-white/[0.18]"
            />

            <span className="font-urbanist text-[11px] tracking-[1px] text-white/40">
              BRTAN · LAMATA · NURTW
            </span>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mx-auto mt-12 flex max-w-[1200px] flex-wrap items-center justify-between gap-3 border-t border-white/[0.08] pt-6">
        <span className="font-urbanist text-[13px] text-white/45">
          © 2026 CMS T&amp;M. All Rights Reserved.
        </span>

        <Link
          href="/privacy"
          className="font-urbanist text-[13px] text-white/45 transition-colors"
        >
          Privacy Policy
        </Link>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2.5">
      <FooterHeading>{title}</FooterHeading>
      {children}
    </div>
  );
}

function FooterHeading({ children }: { children: React.ReactNode }) {
  return (
    <span className="mb-1 font-urbanist text-[13px] font-bold uppercase tracking-[1px] text-[#7FE0AC]">
      {children}
    </span>
  );
}

function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="font-urbanist text-[14.5px] text-white/[0.65] transition-colors duration-200"
    >
      {children}
    </Link>
  );
}
