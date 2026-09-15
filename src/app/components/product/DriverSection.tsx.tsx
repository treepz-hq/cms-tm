import { Button } from "@/components/ui/button";
import { driverSteps } from "./product-data";

export default function DriverSection() {
  return (
    <section className="relative overflow-hidden bg-[#0A1F18] px-5 py-24 md:px-10 md:py-[120px]">
      <div className="absolute -right-[60px] -top-[100px] h-[460px] w-[460px] rounded-full bg-[radial-gradient(circle,rgba(60,179,113,.16),transparent_65%)] blur-[10px]" />

      <div className="relative mx-auto max-w-[1200px]">
        <div className="mb-[60px] max-w-[620px]">
          <span className="font-[var(--font-urbanist)] text-[13px] font-bold uppercase tracking-[1.5px] text-[#3CB371]">
            TMO X · Driver Focus
          </span>

          <h2 className="mb-[18px] mt-4 font-[var(--font-museo)] text-[36px] font-bold leading-[1.04] tracking-[-1.5px] text-white md:text-[46px]">
            Turn your commute into income.
          </h2>

          <p className="font-[var(--font-urbanist)] text-[17px] leading-[1.6] text-white/65 md:text-[18px]">
            If you drive to work daily, you&apos;re leaving
            money in your seat. TMO X connects you with
            commuters on your exact route — no detours, no
            disruption.
          </p>
        </div>

        <div className="mb-12 grid gap-6 md:grid-cols-3">
          {driverSteps.map((step) => (
            <div
              key={step.n}
              className="relative rounded-[20px] border border-[#3CB371]/[0.18] bg-white/[0.04] p-[34px_30px]"
            >
              <span className="mb-[22px] flex h-[42px] w-[42px] items-center justify-center rounded-xl bg-[#FBC02D] font-[var(--font-museo)] text-lg font-extrabold text-[#0A1F18]">
                {step.n}
              </span>

              <h3 className="mb-2.5 font-[var(--font-museo)] text-[21px] font-bold text-white">
                {step.title}
              </h3>

              <p className="font-[var(--font-urbanist)] text-[15px] leading-[1.6] text-white/60">
                {step.text}
              </p>
            </div>
          ))}
        </div>

        <Button
          onClick={() =>
            window.location.assign(
              "https://cmstnm.com/driver-register",
            )
          }
          className="h-auto rounded-[14px] bg-[#FBC02D] px-[30px] py-[17px] font-[var(--font-urbanist)] text-base font-bold text-[#0A1F18] shadow-[0_14px_34px_-12px_rgba(251,192,45,.5)] hover:-translate-y-0.5 hover:bg-[#ffce4d]"
        >
          Register as a TMO X Driver →
        </Button>
      </div>
    </section>
  )
}
