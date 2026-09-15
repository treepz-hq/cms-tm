import LeadershipSection from "../components/leadership/leadership-section"


const leaders = [
  {
    name: 'Enagwolor Johnny',
    role: 'President / Co-Founder, Treepz',
    initials: 'EJ',
    c1: '#3CB371',
    c2: '#0F4C3A',
    photo: ''
  },
  {
    name: 'Alh. Waheed Animosahun',
    role: 'Director & Chairman of Ifelodun Oluyole',
    initials: 'WA',
    c1: '#3CB371',
    c2: '#1A6349',
    photo: 'https://raw.githubusercontent.com/marshalsoft/cms-tm-website/1faaccca49dfa579be2fbfeed918011a53963373/images/MR-ANIMASHAUN-WAHEED-SHOLAGBADE.jpeg'
  },
  {
    name: 'Kareem Arowosaiye',
    role: 'Director & Chairman of Irepodun Kwara',
    initials: 'KA',
    c1: '#0F4C3A',
    c2: '#0A1F18',
    photo: 'https://raw.githubusercontent.com/marshalsoft/cms-tm-website/1faaccca49dfa579be2fbfeed918011a53963373/images/MR-AROWOSAYE-KAREEM.jpeg'
  },
  {
    name: 'Sikiru Mustapha',
    role: 'Director & Chairman of Oyo Atiba',
    initials: 'SM',
    c1: '#3CB371',
    c2: '#0F4C3A',
    photo: 'https://raw.githubusercontent.com/marshalsoft/cms-tm-website/1faaccca49dfa579be2fbfeed918011a53963373/images/MR-SIKIRU-TAFA.jpeg'
  },
  {
    name: 'Olatunde Solomon',
    role: 'Director & Chairman of Ifesowapo',
    initials: 'OS',
    c1: '#FBC02D',
    c2: '#C99A1E',
    photo: 'https://raw.githubusercontent.com/marshalsoft/cms-tm-website/1faaccca49dfa579be2fbfeed918011a53963373/images/MR-SIKIRU-TAFA.jpeg'
  },
  {
    name: 'Alh. Ayinde Omotara',
    role: 'Director & Chairman of Kajola Inner Circle',
    initials: 'AO',
    c1: '#3CB371',
    c2: '#1A6349',
    photo: 'https://raw.githubusercontent.com/marshalsoft/cms-tm-website/1faaccca49dfa579be2fbfeed918011a53963373/images/ALH-AYINDE-OMOTARA-MUDASHIRU.jpeg'
  },
  {
    name: 'Kareem Tijanni',
    role: 'Director & Chairman of Ebedi United',
    initials: 'KT',
    c1: '#3CB371',
    c2: '#0F4C3A',
    photo: 'https://raw.githubusercontent.com/marshalsoft/cms-tm-website/1faaccca49dfa579be2fbfeed918011a53963373/images/R-TIJANI-KAREEM.jpeg'
  },
  {
    name: 'Raufu Oyinlade Adebiyi',
    role: 'Director & Chairman of Osun United Brothers',
    initials: 'RA',
    c1: '#0F4C3A',
    c2: '#0A1F18',
    photo: ''
  }
];

export default function LeadershipPage() {
  return (
    <main>
      <LeadershipSection
        showLeadership
        leaders={leaders}
      />
    </main>
  )
}