'use client'

import { CooperativeModel } from "../components/about/cooperative-model"
import { HeroSection } from "../components/about/hero-section"
import { InstitutionSection } from "../components/about/institution-section"
import { MilestonesSection } from "../components/about/milestones-section"

const stats = [
  {
    num: 58,
    suffix: "+",
    final: "58+",
    label: "Years of transport experience",
  },
  {
    num: 1,
    suffix: "",
    final: "1",
    label: "Major transport corridor",
  },
  {
    num: 3,
    suffix: "",
    final: "3",
    label: "Industry affiliations",
  },
]

const affiliations = [
  {
    name: "LAMATA",
    full: "Lagos Metropolitan Area Transport Authority",
    desc: "The regulatory authority responsible for coordinating and developing integrated transportation across Lagos State.",
  },
  {
    name: "BRTAN",
    full: "Bus Rapid Transit Association of Nigeria",
    desc: "An industry association representing operators and stakeholders within Nigeria's bus rapid transit ecosystem.",
  },
  {
    name: "NURTW",
    full: "National Union of Road Transport Workers",
    desc: "A national transport workers' organisation representing members across Nigeria's road transportation sector.",
  },
]

const coopGroups = [
  {
    n: 1,
    name: "Kajola Inner Circle",
    desc: "A transport cooperative group with dedicated leadership and members.",
  },
  {
    n: 2,
    name: "Irepodun Kwara",
    desc: "A member-led cooperative group with its own leadership and governance.",
  },
  {
    n: 3,
    name: "Ebedi United",
    desc: "A member-focused cooperative contributing to the resilience of the organisation.",
  },
  {
    n: 4,
    name: "Irepodun Kwara",
    desc: "A member-led cooperative group with its own leadership and governance.",
  },
  {
    n: 5,
    name: "Osun United Brothers",
    desc: "Predominantly all towns and villages in Osun State.",
  },
  {
    n: 6,
    name: "Ifesowapo United Brothers",
    desc: "An independent cooperative group operating within the CMS T&M framework.",
  },
  {
    n: 7,
    name: "Oyo Atiba Brothers Nigeria",
    desc: "Predominantly indigenes of Oyo town.",
  },
]

const coopAdvantages = [
  {
    n: "01",
    t: "Decision-making is democratized across every group.",
  },
  {
    n: "02",
    t: "Each cooperative grows at its own pace and takes risk as it sees fit.",
  },
  {
    n: "03",
    t: "Each functions as a business unit with maximum autonomy from CMS T&M.",
  },
  {
    n: "04",
    t: "Members hold strong affinity, self-report to the company, and the company steps in when a matter exceeds a single group.",
  },
]

const iloBenefits = [
  {
    t: "Economic Empowerment",
    d: "Better access to resources, shared equipment, and improved market linkages that boost member income.",
  },
  {
    t: "Decent Work & Job Creation",
    d: "Job creation across sectors and improved working conditions for members.",
  },
  {
    t: "Social Protection",
    d: "A safety net for informal and rural-economy workers, including health insurance.",
  },
  {
    t: "Inclusively & Empowerment",
    d: "Participation of women, youth, and people with disabilities — and a tool against child labour.",
  },
  {
    t: "Democratic Governance",
    d: "One member, one vote — prioritizing community welfare over profit maximization.",
  },
]

const milestones = [
  {
    year: "1968",
    desc: "The roots of CMS T&M begin in Lagos public transportation.",
  },
  {
    year: "1970s",
    desc: "The organization develops its presence along major transport routes serving Lagos Island and surrounding communities.",
  },
  {
    year: "1980s",
    desc: "Cooperative structures become increasingly central to the organization's operating model.",
  },
  {
    year: "1990s",
    desc: "CMS T&M strengthens its member-led transport network and governance structure.",
  },
  {
    year: "2000s",
    desc: "The organization continues adapting to Lagos' rapidly expanding transportation needs.",
  },
  {
    year: "2010s",
    desc: "The Lekki–Ajah corridor becomes an increasingly important part of the organization's transport operations.",
  },
  {
    year: "2026",
    desc: "Full digitization of the business with the TMO mobile app — driving legacy rides, intrastate and interstate travel, the logistics business, and the cooperative business.",
  },
]

export default function Page() {
  return (
    <main>
      {/* 1. ABOUT */}
      <HeroSection stats={stats} />

      {/* 2. ABOUT INSTITUTION */}
      <InstitutionSection
        affiliations={affiliations}
        aboutMission="To provide safe, reliable, disciplined and accountable public transportation while creating sustainable opportunities for transport operators and members."
        aboutVision="To become a leading model of cooperative public transportation in Lagos and Nigeria, combining strong governance with dependable mobility."
        aboutValues={[
          "Accountability",
          "Discipline",
          "Reliability",
          "Safety",
          "Cooperation",
          "Integrity",
          "Service",
          "Community",
        ]}
        pillars={[
          {
            n: "01",
            t: "Cooperative strength",
            d: "Independent transport groups operate within a shared governance and accountability structure.",
          },
          {
            n: "02",
            t: "Regulated operations",
            d: "The organisation works within Lagos' wider public transportation regulatory framework.",
          },
          {
            n: "03",
            t: "Member ownership",
            d: "Transport operators participate directly in the cooperative structures that support the organisation.",
          },
          {
            n: "04",
            t: "Route knowledge",
            d: "Decades of operating experience provide deep knowledge of Lagos transport corridors and commuters.",
          },
          {
            n: "05",
            t: "Institutional resilience",
            d: "A distributed cooperative structure reduces dependence on any single operating group.",
          },
        ]}
      />

      {/* 3. MILESTONES */}
      <MilestonesSection milestones={milestones} />

      {/* 4. COOPERATIVE MODEL */}
      <CooperativeModel
        coopGroups={coopGroups}
        coopAdvantages={coopAdvantages}
        iloBenefits={iloBenefits}
        onLeadershipClick={() => {
          document
            .getElementById("leadership")
            ?.scrollIntoView({ behavior: "smooth" })
        }}
      />
    </main>
  )
}