"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import type { Product } from "./product-data"



export default function ProductDetailSection({
  products,
  activeProduct,
  onSelect,
  onAction,
}: {
  products: Product[]
  activeProduct: Product
  onSelect: (id: string) => void
  onAction: (product: Product) => void
}) {
  return (
    <section
      id="product-detail"
      className="scroll-mt-20 bg-white px-5 py-24 md:px-10 md:py-[110px]"
    >
      <div className="mx-auto max-w-[1200px]">
        <div className="mx-auto mb-[52px] max-w-[680px] text-center">
          <span className="font-[var(--font-urbanist)] text-[13px] font-bold uppercase tracking-[1.5px] text-[#3CB371]">
            The TMO Platform · In Detail
          </span>

          <h2 className="mt-4 font-[var(--font-museo)] text-[36px] font-bold leading-[1.05] tracking-[-1.5px] text-[#0F4C3A] md:text-[44px]">
            Four services, one institution.
          </h2>
        </div>

        <div className="grid items-start gap-[30px] md:grid-cols-[300px_1fr]">
          {/* Product tabs */}
          <div className="flex flex-col gap-2.5 md:sticky md:top-[88px]">
            {products.map((product) => {
              const active =
                product.id === activeProduct.id

              return (
                <button
                  key={product.id}
                  type="button"
                  onClick={() => onSelect(product.id)}
                  className={`flex items-center gap-3.5 rounded-2xl border-[1.5px] p-4 text-left transition-colors ${active
                      ? "border-[#0F4C3A] bg-[#F0F7F3]"
                      : "border-[#E2E0D6] bg-white hover:border-[#0F4C3A]"
                    }`}
                >
                  <span
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl font-[var(--font-museo)] text-[17px] font-extrabold ${active
                        ? "bg-[#0F4C3A] text-white"
                        : "bg-[#F5E6C8] text-[#0F4C3A]"
                      }`}
                  >
                    {product.mark}
                  </span>

                  <span className="flex flex-col gap-px">
                    <span className="font-[var(--font-museo)] text-base font-bold text-[#0A1F18]">
                      {product.name}
                    </span>

                    <span className="font-[var(--font-urbanist)] text-[12.5px] text-[#5B6B63]">
                      {product.shortTag}
                    </span>
                  </span>
                </button>
              )
            })}
          </div>

          {/* Detail */}
          <Card className="overflow-hidden rounded-[24px] border-[#ECE7DA] shadow-[0_30px_70px_-38px_rgba(10,31,24,.45)]">
            <div
              className="relative overflow-hidden px-8 py-10 md:px-11"
              style={{
                backgroundColor: activeProduct.bg,
              }}
            >
              <div
                className="absolute -right-[50px] -top-[60px] h-[200px] w-[200px] rounded-full blur-lg"
                style={{
                  backgroundColor: activeProduct.blob,
                }}
              />

              <span
                className="relative font-[var(--font-urbanist)] text-[12.5px] font-bold uppercase tracking-[1.5px]"
                style={{
                  color: activeProduct.tagColor,
                }}
              >
                {activeProduct.kicker}
              </span>

              <h3
                className="relative mb-2 mt-3 font-[var(--font-museo)] text-[36px] font-extrabold tracking-[-1px] md:text-[40px]"
                style={{
                  color: activeProduct.fg,
                }}
              >
                {activeProduct.name}
              </h3>

              <p
                className="relative font-[var(--font-urbanist)] text-[17px] font-semibold italic"
                style={{
                  color: activeProduct.tagColor,
                }}
              >
                {activeProduct.tag}
              </p>
            </div>

            <div className="px-8 py-9 md:px-11 md:py-11">
              <p className="mb-4 font-[var(--font-urbanist)] text-[16.5px] leading-[1.7] text-[#2C3A34]">
                {activeProduct.full1}
              </p>

              <p className="mb-[34px] font-[var(--font-urbanist)] text-[16.5px] leading-[1.7] text-[#41514A]">
                {activeProduct.full2}
              </p>

              <h4 className="mb-[18px] font-[var(--font-museo)] text-sm font-bold uppercase tracking-[1.2px] text-[#3CB371]">
                How it works
              </h4>

              <div className="mb-[34px] flex flex-col gap-3.5">
                {activeProduct.steps.map((step) => (
                  <div
                    key={step.n}
                    className="flex items-start gap-4"
                  >
                    <span className="flex h-[34px] w-[34px] shrink-0 items-center justify-center rounded-[10px] bg-[#F5E6C8] font-[var(--font-museo)] text-[15px] font-extrabold text-[#0F4C3A]">
                      {step.n}
                    </span>

                    <span className="pt-1 font-[var(--font-urbanist)] text-[15.5px] leading-[1.5] text-[#2C3A34]">
                      {step.t}
                    </span>
                  </div>
                ))}
              </div>

              {/* Best for */}
              <div className="mb-[34px] flex items-start gap-2.5 rounded-[14px] border border-[#D9EBE1] bg-[#F0F7F3] px-5 py-4">
                <span className="shrink-0 pt-px font-[var(--font-urbanist)] text-[13px] font-bold uppercase tracking-[.5px] text-[#0F4C3A]">
                  Best for
                </span>

                <span className="font-[var(--font-urbanist)] text-[15px] leading-[1.5] text-[#2C3A34]">
                  {activeProduct.bestFor}
                </span>
              </div>

              {/* FAQ */}
              <h4 className="mb-4 font-[var(--font-museo)] text-sm font-bold uppercase tracking-[1.2px] text-[#3CB371]">
                Common questions
              </h4>

              <div className="mb-9 flex flex-col gap-3.5">
                {activeProduct.faq.map((faq) => (
                  <div
                    key={faq.q}
                    className="border-l-[3px] border-[#FBC02D] pl-4"
                  >
                    <div className="mb-0.5 font-[var(--font-urbanist)] text-[15px] font-bold text-[#0A1F18]">
                      {faq.q}
                    </div>

                    <div className="font-[var(--font-urbanist)] text-[14.5px] leading-[1.55] text-[#5B6B63]">
                      {faq.a}
                    </div>
                  </div>
                ))}
              </div>
              <Button
                onClick={() => onAction(activeProduct)}
                className="rounded-[13px] bg-[#0F4C3A] px-[30px] py-4 font-[var(--font-urbanist)] text-base font-bold text-white hover:bg-[#14543B]"
              >
                {activeProduct.ctaLabel} →
              </Button>

            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
