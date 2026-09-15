export default function TmoCardSection() {
  return (
    <section
      id="card"
      className="bg-white px-5 py-24 md:px-10 md:py-27.5"
    >
      <div className="mx-auto grid max-w-300 items-start gap-10 md:grid-cols-2">
        <div className="max-w-140">
          <span className="font-(--font-urbanist) text-[13px] uppercase tracking-[1.5px] text-[#C99A1E]">
            TMO Card
          </span>

          <h2 className="mt-4 font-(--font-museo) text-[36px] leading-[1.05] tracking-[-1.5px] text-[#0F4C3A] md:text-[46px]">
            Get your TMO Card
          </h2>

          <p className="mb-4.5 mt-3.5 font-(--font-urbanist) text-[17px] leading-[1.7] text-[#41514A]">
            Request your TMO Card and start riding cashless
            across supported routes.
          </p>

          <div className="mt-4 grid gap-2.5">
            {[
              "Cashless taps at stops",
              "One card for your daily commute",
              "Fast onboarding with NIN/BVN verification",
            ].map((item) => (
              <div
                key={item}
                className="flex items-start gap-2.5"
              >
                <span className="text-base leading-6">
                  ✓
                </span>

                <span className="font-(--font-urbanist) text-[15.5px] leading-[1.6] text-[#41514A]">
                  {item}
                </span>
              </div>
            ))}
          </div>
          </div>
        
      </div>
    </section>
  )
}
