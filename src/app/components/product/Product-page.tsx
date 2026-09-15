"use client"

import { useState } from "react"

import ProductDetailSection from "./ProductDetail"
import ServicesSection from "./ServicesSection"

import {
  products,
  services,
  type Product,
  type Service,
} from "./product-data"
import TmoCardSection from "./TmoCardSection.tsx"
import DriverSection from "./DriverSection.tsx"

export default function ProductPage() {
  const [activeProductId, setActiveProductId] = useState("tmo-x")

  const activeProduct =
    products.find(
      (product) => product.id === activeProductId,
    ) ?? products[0]

  const handleServiceAction = (service: Service) => {
    setActiveProductId(service.productId)

    requestAnimationFrame(() => {
      document
        .getElementById("product-detail")
        ?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
    })
  }

  const handleProductAction = (product: Product) => {
    switch (product.id) {
      case "tmo-x":
        window.location.assign(
          "https://cmstnm.com/driver-register",
        )
        return

      case "card":
        window.location.assign(
          "https://cmstnm.com/request-card",
        )
        return

      case "fleet":
        // TODO: open fleet modal
        return

      case "coop":
        // TODO: open co-op modal
        return
    }
  }

  return (
    <main className="min-h-screen bg-white">
      <ServicesSection
        services={services}
        onAction={handleServiceAction}
      />

      <TmoCardSection />

      <ProductDetailSection
        products={products}
        activeProduct={activeProduct}
        onSelect={setActiveProductId}
        onAction={handleProductAction}
      />

      <DriverSection />
    </main>
  )
}
