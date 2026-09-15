import type { Service } from "./product-data"

export default function ServicesSection({
  services,
  onAction,
}: {
  services: Service[]
  onAction: (service: Service) => void
}) {
  return (
    <section
      id="services"
      className="bg-[#F5E6C8] px-5 py-24 md:px-10 md:py-30"
    >
      <div className="mx-auto max-w-300">
        <div className="mx-auto mb-16 max-w-160 text-center">
          <span className="text-[13px] font-bold uppercase tracking-[1.5px] text-[#C99A1E]">
            The Products
          </span>

          <h2 className="mt-4 text-[36px] font-bold leading-[1.05] tracking-[-1.5px] text-[#0F4C3A] md:text-[46px]">
            Everything you need to move in Lagos.
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <div
              key={service.name}
              className="group relative flex min-h-75 flex-col overflow-hidden rounded-[24px] p-8 shadow-[0_24px_50px_-28px_rgba(10,31,24,.4)] transition-transform duration-300 hover:-translate-y-1.5"
              style={{ backgroundColor: service.bg }}
            >
              <div
                className="absolute -right-10 -top-10 h-40 w-40 rounded-full blur-md"
                style={{ backgroundColor: service.blob }}
              />

              <div
                className="relative mb-6 flex h-14 w-14 items-center justify-center rounded-[15px] font-(--font-museo)"
                style={{
                  backgroundColor: service.iconBg,
                  color: service.fg,
                }}
              >
                {service.icon}
              </div>

              <h3
                className="relative mb-1.5 font-(--font-museo) text-[27px] font-bold tracking-[-.5px]"
                style={{ color: service.fg }}
              >
                {service.name}
              </h3>

              <p
                className="relative mb-4 font-[var(--font-urbanist)] text-[15px] font-semibold italic"
                style={{ color: service.tagColor }}
              >
                {service.tag}
              </p>

              <p
                className="relative mb-6 max-w-[90%] font-[var(--font-urbanist)] text-[15.5px] leading-[1.6]"
                style={{ color: service.body }}
              >
                {service.desc}
              </p>

              <button
                type="button"
                onClick={() => onAction(service)}
                className="relative mt-auto inline-flex w-fit items-center gap-2 font-[var(--font-urbanist)] text-[15px] font-bold transition-all duration-200 group-hover:gap-3.5"
                style={{ color: service.fg }}
              >
                {service.cta}
                <span className="text-lg">→</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
