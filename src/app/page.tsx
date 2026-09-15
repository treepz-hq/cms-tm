import { ContactSection } from "./components/home/contact-section"
import { FleetManagementSection } from "./components/home/fleet-management-section"
import { HomeHero } from "./components/home/home-hero"
// import SuggestRouteSection from "./routes/page"

export default function HomePage() {
  // const handleSuggestRoute = () => {
  //   // Open modal, navigate to form, etc.
  // }

  return (
    <>
      {/* Previous sections */}
        <HomeHero />
        <FleetManagementSection />
        <ContactSection />

      {/* <SuggestRouteSection
        onSuggestRoute={handleSuggestRoute}
      /> */}
    </>
  )
}
