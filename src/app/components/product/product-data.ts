export type Service = {
  name: string;
  productId: string;
  tag: string;
  desc: string;
  cta: string;
  bg: string;
  blob: string;
  iconBg: string;
  fg: string;
  tagColor: string;
  body: string;
  icon: string;
};

export type ProductStep = {
  n: string
  t: string
}

export type ProductFaq = {
  q: string
  a: string
}

export type Product = {
  id: string
  name: string
  kicker: string
  shortTag: string
  mark: string
  tag: string
  desc: string

  cta: string
  ctaLabel: string

  bg: string
  fg: string
  tagColor: string
  body: string
  iconBg: string
  blob: string
  iconEl: string

  full1: string
  full2: string

  steps: ProductStep[]
  bestFor: string
  faq: ProductFaq[]
}

export const products: Product[] = [
  {
    id: "ride",
    name: "TMO Ride-Along",
    kicker: "Carpooling · Lekki–Ajah",
    shortTag: "Smart carpool",
    mark: "R",

    tag: "Your daily commute, shared smarter.",
    desc: "Carpool with people going your way, at your time. Affordable, structured, and cashless — powered by your TMO card.",

    cta: "Learn more",
    ctaLabel: "Get a TMO Card to ride",

    bg: "#0F4C3A",
    fg: "#FFFFFF",
    tagColor: "#7FE0AC",
    body: "rgba(255,255,255,0.72)",
    iconBg: "rgba(255,255,255,0.12)",
    blob: "rgba(60,179,113,0.18)",
    iconEl: "👥",

    full1:
      "TMO Ride-Along is Lagos' most structured carpooling experience. Built for the daily commuter who knows the Lekki–Ajah corridor like the back of their hand, it connects people heading the same way at the same time — turning solo commutes into shared, affordable, and predictable journeys.",

    full2:
      "You pick your route. You pick your time. We handle the rest. No empty buses. No wasted seats. No wahala.",

    steps: [
      {
        n: "1",
        t: "Open the TMO app or website and select “Ride-Along”.",
      },
      {
        n: "2",
        t: "Enter your pickup point and destination along the corridor.",
      },
      {
        n: "3",
        t: "See other commuters going your way, at your time.",
      },
      {
        n: "4",
        t: "Confirm your seat and tap your TMO card at the stop.",
      },
      {
        n: "5",
        t: "Ride together. Split the cost. Arrive together.",
      },
    ],

    bestFor:
      "Daily workers, students, and commuters on fixed schedules along the Lekki–Ajah expressway.",

    faq: [
      {
        q: "Is it cashless?",
        a: "Yes — fares are paid by tapping your TMO card at the stop.",
      },
      {
        q: "Do I need to book ahead?",
        a: "Confirm your seat before the trip so we can match you with commuters going your way.",
      },
    ],
  },

  {
    id: "x",
    name: "TMO X",
    kicker: "Executive Rides · Earn",
    shortTag: "Drive & earn",
    mark: "X",

    tag: "You're already going. Make it count.",
    desc: "Own a car? Drive your usual route and earn by filling empty seats — without changing your schedule.",

    cta: "Learn more",
    ctaLabel: "Register as a TMO X Driver",

    bg: "#3CB371",
    fg: "#FFFFFF",
    tagColor: "rgba(255,255,255,0.95)",
    body: "rgba(255,255,255,0.9)",
    iconBg: "rgba(255,255,255,0.18)",
    blob: "rgba(255,255,255,0.16)",
    iconEl: "🚗",

    full1:
      "TMO X is not a taxi app. It's a smart mobility platform for people who own cars and are already driving to work — turning everyday commutes into income without disrupting your routine.",

    full2:
      "List your route, your departure time, and how many seats you have. Commuters on that route see your vehicle, your rating, and your ETA — and request to ride with you. You earn. They ride. Lagos moves smarter.",

    steps: [
      {
        n: "1",
        t: "Register as a TMO X Driver — submit your vehicle details and route.",
      },
      {
        n: "2",
        t: "Before your trip, log in and activate your route on the platform.",
      },
      {
        n: "3",
        t: "Commuters along your route see your listing and request a seat.",
      },
      {
        n: "4",
        t: "Accept the requests that work for you — you're always in control.",
      },
      {
        n: "5",
        t: "Pick them up on your way. Earn per seat filled. No detours required.",
      },
    ],

    bestFor:
      "Car owners who commute daily and want to offset fuel costs or fill empty seats on their regular route.",

    faq: [
      {
        q: "Do I have to change my route?",
        a: "No. You only accept commuters already on your way — no detours.",
      },
      {
        q: "How do I get paid?",
        a: "Earnings are credited per seat to your TMO wallet automatically.",
      },
    ],
  },

  {
    id: "logistics",
    name: "TMO Logistics",
    kicker: "Goods · Property · Parcels",
    shortTag: "Move anything",
    mark: "L",

    tag: "Move it. Trust it. Track it.",
    desc: "From parcels to full household moves — handled with the discipline of Nigeria's most structured transport institution.",

    cta: "Learn more",
    ctaLabel: "Request a pickup",

    bg: "#0A1F18",
    fg: "#FFFFFF",
    tagColor: "#7FE0AC",
    body: "rgba(255,255,255,0.7)",
    iconBg: "rgba(255,255,255,0.1)",
    blob: "rgba(60,179,113,0.14)",
    iconEl: "📦",

    full1:
      "TMO Logistics is your reliable partner for moving goods, property, and packages across Lagos — backed by CMS T&M's 58-year operational infrastructure.",

    full2:
      "Relocating your home, sending business inventory across town, or shipping from the Island to the Mainland — TMO Logistics provides structured, accountable, tracked delivery. No guesswork. No ghost drivers. No missing packages.",

    steps: [
      {
        n: "1",
        t: "Submit a logistics request via the website or MOAT app.",
      },
      {
        n: "2",
        t: "Describe your item(s), pickup address, and destination.",
      },
      {
        n: "3",
        t: "Receive a quote and schedule your pickup window.",
      },
      {
        n: "4",
        t: "A verified TMO Logistics operator picks up and transports your goods.",
      },
      {
        n: "5",
        t: "Track your delivery in real time. Receive confirmation on arrival.",
      },
    ],

    bestFor:
      "Households relocating, small businesses moving inventory, and individuals sending packages across Lagos.",

    faq: [
      {
        q: "Can I track my delivery?",
        a: "Yes — every delivery is tracked in real time until confirmed on arrival.",
      },
      {
        q: "What can you move?",
        a: "From parcels to full household moves — tell us your items and we will quote it.",
      },
    ],
  },

  {
    id: "coop",
    name: "TMO Cooperatives",
    kicker: "Save · Borrow · Grow",
    shortTag: "Save & borrow",
    mark: "C",

    tag: "Save together. Grow together. Borrow with confidence.",
    desc: "Membership in CMS T&M's 58-year cooperative model. Save monthly, build credit, and access fair loans — member-governed, one member, one vote.",

    cta: "Learn more",
    ctaLabel: "Join the Co-op",

    bg: "#FBC02D",
    fg: "#0A1F18",
    tagColor: "#7A5C0E",
    body: "rgba(10,31,24,0.72)",
    iconBg: "rgba(10,31,24,0.1)",
    blob: "rgba(255,255,255,0.3)",
    iconEl: "🌱",

    full1:
      "TMO Cooperatives opens CMS T&M's 58-year cooperative model to members. The institution is organised around independent transport groups — each with its own leaders, members, and governance — all submitting to the limited liability company known today as CMS T&M. It's not a bank. It's a member-governed society where the people who save are the people who benefit.",

    full2:
      "Members save consistently, build a shared pool of funds, and access low-interest loans when they need them. Decisions are democratic — one member, one vote — and risk is shared across the cooperative, the same structure that has kept CMS T&M resilient for decades.",

    steps: [
      {
        n: "1",
        t: "Apply for TMO Cooperative membership via the website.",
      },
      {
        n: "2",
        t: "Set your monthly savings contribution.",
      },
      {
        n: "3",
        t: "Build your savings history over time.",
      },
      {
        n: "4",
        t: "When eligible, apply for a loan — at rates far below commercial lenders.",
      },
      {
        n: "5",
        t: "Repay on a structured schedule. Your savings stay intact.",
      },
    ],

    bestFor:
      "TMO drivers, commuters, staff, and community members who want structured savings and fair credit.",

    faq: [
      {
        q: "Is this a bank?",
        a: "No — it is a member-governed cooperative society. Governance is democratic: one member, one vote, community welfare over profit.",
      },
      {
        q: "How is it structured?",
        a: "Around CMS T&M's seven transport cooperative groups, each with its own leaders and members, all submitting to the company.",
      },
    ],
  },

  {
    id: "interstate",
    name: "TMO Interstate Travel",
    kicker: "Long-distance · Abuja–Lagos",
    shortTag: "Abuja–Lagos",
    mark: "I",

    tag: "Cross the country in comfort.",
    desc: "Scheduled long-distance coaches between Lagos and Abuja — reserved seats, fixed departures, and cashless fares on your TMO card.",

    cta: "Learn more",
    ctaLabel: "Book an interstate trip",

    bg: "#134E3A",
    fg: "#FFFFFF",
    tagColor: "#7FE0AC",
    body: "rgba(255,255,255,0.72)",
    iconBg: "rgba(255,255,255,0.12)",
    blob: "rgba(60,179,113,0.18)",
    iconEl: "🛣️",

    full1:
      "TMO Interstate Travel connects Lagos and Abuja with scheduled, long-distance coaches — built on CMS T&M's structured, safety-first operating standards and the reliability of a 58-year transport institution.",

    full2:
      "Reserve your seat, travel on a fixed schedule, and pay cashless with your TMO card. No haggling at the park. No endless waiting for the bus to fill. Just a dependable ride across the country.",

    steps: [
      {
        n: "1",
        t: "Open the TMO app or website and select “Interstate Travel”.",
      },
      {
        n: "2",
        t: "Choose the Abuja–Lagos route and your travel date.",
      },
      {
        n: "3",
        t: "Pick your departure time and reserve your seat.",
      },
      {
        n: "4",
        t: "Pay cashless with your TMO card or wallet.",
      },
      {
        n: "5",
        t: "Arrive at the terminal, board, and travel in comfort.",
      },
    ],

    bestFor:
      "Travellers moving between Lagos and Abuja who want scheduled departures, reserved seats, and cashless fares.",

    faq: [
      {
        q: "Which routes are available?",
        a: "The Abuja–Lagos corridor is live now, with more interstate routes being added.",
      },
      {
        q: "Can I reserve a seat in advance?",
        a: "Yes — reserve and pay ahead so your seat is guaranteed before departure.",
      },
    ],
  },

  {
    id: "intrastate",
    name: "TMO Intrastate Travels",
    kicker: "Within Lagos · Multiple routes",
    shortTag: "Across Lagos",
    mark: "T",

    tag: "Move across the city, the structured way.",
    desc: "Regulated intrastate routes across Lagos — CMS–Lekki–Ajah–Epe, Festac–CMS and Festac–Oshodi — with fixed stops and cashless tap-to-pay.",

    cta: "Learn more",
    ctaLabel: "Ride an intrastate route",

    bg: "#3CB371",
    fg: "#FFFFFF",
    tagColor: "rgba(255,255,255,0.95)",
    body: "rgba(255,255,255,0.9)",
    iconBg: "rgba(255,255,255,0.18)",
    blob: "rgba(255,255,255,0.16)",
    iconEl: "🚌",

    full1:
      "TMO Intrastate Travels moves you across Lagos on structured, regulated routes — the same corridors CMS T&M has operated for decades, now digitised, cashless, and predictable.",

    full2:
      "Active routes include CMS–Lekki–Ajah–Epe, Festac–CMS and Festac–Oshodi. Choose your route, board at a designated stop, and tap to pay with your TMO card. Regulated fares, fixed stops, and reliable travel times across the city.",

    steps: [
      {
        n: "1",
        t: "Open the TMO app or website and select “Intrastate Travels”.",
      },
      {
        n: "2",
        t: "Pick your route — CMS–Lekki–Ajah–Epe, Festac–CMS or Festac–Oshodi.",
      },
      {
        n: "3",
        t: "Head to the designated boarding stop for your route.",
      },
      {
        n: "4",
        t: "Tap your TMO card to pay — fully cashless.",
      },
      {
        n: "5",
        t: "Board and ride on a regulated, predictable schedule.",
      },
    ],

    bestFor:
      "Daily commuters, traders, and students travelling across Lagos on the CMS, Lekki–Ajah–Epe, Festac and Oshodi corridors.",

    faq: [
      {
        q: "Which routes run?",
        a: "CMS–Lekki–Ajah–Epe, Festac–CMS and Festac–Oshodi, with more routes added regularly.",
      },
      {
        q: "How do I pay?",
        a: "Tap your TMO card at the stop — fares are fully cashless and regulated.",
      },
    ],
  },
]

export const services: Service[] = [
  {
    name: 'TMO Ride-Along',
    productId: 'tmo-ride-along',
    tag: 'Your daily commute, shared smarter..',
    desc: 'Carpool with people going your way, at your time. Affordable, structured, and cashless powered by your TMO card.',
    cta: 'Learn more',
    bg: '#0F4C3A',
    blob: 'rgba(60,179,113,.25)',
    iconBg: '#FBC02D',
    fg: '#FFFFFF',
    tagColor: '#FBC02D',
    body: 'rgba(255,255,255,.72)',
    icon: 'X',
  },
  {
    name: 'TMO X',
    productId: 'tmo-x',
    tag: "You're already going. Make it count..",
    desc: 'Own a car? Drive your usual route and earn by filling empty seats without changing your schedule.',
    cta: 'Learn more',
    bg: '#0F4C3A',
    blob: 'rgba(60,179,113,.25)',
    iconBg: '#FBC02D',
    fg: '#FFFFFF',
    tagColor: '#FFFF',
    body: 'rgba(255,255,255,.72)',
    icon: 'X',
  },
  {
    name: 'TMO Logistics',
    productId: 'card',
    tag: 'Move it. Trust it. Track it.',
    desc: 'From parcels to full household moves handled with the discipline of Nigeria’s most structured transport institution.',
    cta: 'Get your TMO Card',
    bg: '#F5E6C8',
    blob: 'rgba(251,192,45,.3)',
    iconBg: '#0F4C3A',
    fg: '#0F4C3A',
    tagColor: '#C99A1E',
    body: '#41514A',
    icon: 'C',
  },
  {
    name: 'TMO Cooperatives',
    productId: 'fleet',
    tag: 'Save together. Grow together. Borrow with confidence.',
    desc: 'Membership in CMS T&M’s 58-year cooperative model. Save monthly, build credit, and access fair loans member-governed, one member, one vote',
    cta: 'Learn more',
    bg: '#FFFFFF',
    blob: 'rgba(60,179,113,.14)',
    iconBg: '#EAF5EF',
    fg: '#0F4C3A',
    tagColor: '#3CB371',
    body: '#41514A',
    icon: 'F',
  },
  {
    name: 'TMO Interstate Travel',
    productId: 'coop',
    tag: 'Cross the country in comfort.',
    desc: 'Scheduled long-distance coaches between Lagos and Abuja — reserved seats, fixed departures, and cashless fares on your TMO card.',
    cta: 'Learn more',
    bg: '#DDEDE4',
    blob: 'rgba(15,76,58,.14)',
    iconBg: '#0F4C3A',
    fg: '#0F4C3A',
    tagColor: '#3CB371',
    body: '#41514A',
    icon: 'P',
  },
  {
    name: 'TMO Interstate Travel',
    productId: 'coop',
    tag: 'Move across the city, the structured way.',
    desc: 'Regulated intrastate routes across Lagos — CMS–Lekki–Ajah–Epe, Festac–CMS and Festac–Oshodi with fixed stops and cashless tap-to-pay.',
    cta: 'Learn more',
    bg: '#DDEDE4',
    blob: 'rgba(15,76,58,.14)',
    iconBg: '#0F4C3A',
    fg: '#0F4C3A',
    tagColor: '#3CB371',
    body: '#41514A',
    icon: 'P',
  },
];

export const driverSteps = [
  {
    n: 1,
    title: 'Register your route',
    text: 'Sign up as a TMO X driver — your car, your usual route, your departure time. Verification takes 48 hours.',
  },
  {
    n: 2,
    title: "Go live when you're ready",
    text: 'On any morning you choose to earn, activate your route before you leave. Commuters nearby see your listing.',
  },
  {
    n: 3,
    title: 'Pick up. Earn. Arrive',
    text: 'Accept requests that match your route. They tap their TMO card. You earn per seat credited to your wallet.',
  },
];
