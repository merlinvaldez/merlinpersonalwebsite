import Section from "@/components/Section";

const strengths = [
  "Product sense that connects user pain to practical roadmaps.",
  "Shipping discipline with clear scope, QA habits, and iteration loops.",
  "Client-facing execution across partnerships, training, and delivery.",
];

const interests = [
  "AI for education that improves outcomes, not just output volume.",
  "Civic tech that helps people engage with public systems and policy.",
  "Tools that make complex workflows feel simple and trustworthy.",
];

const partners = [
  { src: "/images/partner-alliance.png", alt: "Alliance Charter Schools" },
  { src: "/images/partner-girlsinc.png", alt: "Girls Inc." },
  { src: "/images/partner-nfblme.png", alt: "NFBLME" },
  { src: "/images/partner-nycdoe.png", alt: "NYC Department of Education" },
  { src: "/images/partner-nysden.png", alt: "NYS Digital Equity Network" },
  { src: "/images/partner-pps.png", alt: "Paterson Public Schools" },
  { src: "/images/partner-tfa.png", alt: "Teach For America" },
  { src: "/images/partner-theacademy.png", alt: "The Academy School" },
];

const quotes = [
  {
    quote:
      "Merlin has been my sherpa in these AI times, helping me and my team navigate a fast-changing landscape with clarity and confidence.",
    name: "Jennifer Early",
    title: "Chief Operating Officer, Teach For America NY",
  },
  {
    quote:
      "Merlin's voice and perspective are essential in shaping the conversation on digital equity. I'm excited for all that's ahead in our continued work together.",
    name: "Osarumwense Pat-Osagie",
    title: "Digital Equity Program Director, NYS Digital Equity Network",
  },
  {
    quote:
      "For the last three years, Merlin has been instrumental in helping us design, launch, and implement our dual language program at our community school.",
    name: "Nancy Correa",
    title: "Principal, Paterson School 16",
  },
  {
    quote:
      "Merlin has been our guide in deciding how to thoughtfully integrate AI into our work with women and girls.",
    name: "Patricia Jacovina",
    title: "COO, Girls Inc. of New York City",
  },
  {
    quote:
      "Merlin helped us design both the framework and the implementation plan for our network-wide innovation strategy.",
    name: "Jass Stewart",
    title: "Chief Innovation Officer, Alliance Charter Schools",
  },
  {
    quote:
      "Merlin has been an invaluable partner in helping our teachers understand how to leverage AI in community-centered and empowering ways.",
    name: "Kevin Waters",
    title: "Managing Director, Program Partnerships & Integration, Teach For America Philadelphia",
  },
];

export const metadata = {
  title: "About",
  description: "Background, strengths, partners, and social proof for Merlin Valdez.",
};

export default function AboutPage() {
  return (
    <div className="space-y-16 pb-24 pt-12">
      <Section>
        <div className="space-y-4">
          <h1 className="text-3xl font-semibold text-slate-900">About</h1>
          <p className="max-w-3xl text-sm text-slate-600">
            I started my career in education, helping schools design learning experiences that honored student identity.
            That work grew into entrepreneurship, where I co-founded PlanningPeriod.io and built product systems to help
            teachers design community-centered curriculum at scale. Along the way, I fell in love with software
            development and committed to building human-centered technology as a software engineer, solutions engineer,
            and product leader.
          </p>
          <p className="max-w-3xl text-sm text-slate-600">
            Today I focus on shipping products that connect research, user feedback, and technical execution - especially
            in civic tech and AI for education. I blend product strategy with hands-on engineering to deliver systems that
            are reliable, measurable, and useful.
          </p>
        </div>
      </Section>

      <Section>
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-slate-200/80 bg-white/80 p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-slate-900">Strengths</h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-600">
              {strengths.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-slate-200/80 bg-white/80 p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-slate-900">Interests</h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-600">
              {interests.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section>
        <div className="rounded-2xl border border-slate-200/80 bg-white/80 p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-slate-900">Partners</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {partners.map((partner) => (
              <div
                key={partner.src}
                className="flex items-center justify-center rounded-xl border border-slate-100 bg-white p-4"
              >
                <img src={partner.src} alt={partner.alt} className="max-h-16 object-contain" />
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <div className="rounded-2xl border border-slate-200/80 bg-white/80 p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-slate-900">People Working With Me</h2>
          <div className="mt-6 grid gap-4 lg:grid-cols-2">
            {quotes.map((quote) => (
              <blockquote key={quote.name} className="rounded-xl border border-slate-200 bg-white px-4 py-3">
                <p className="text-sm text-slate-600">"{quote.quote}"</p>
                <p className="mt-2 text-xs font-semibold text-slate-700">
                  - {quote.name}, {quote.title}
                </p>
              </blockquote>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
}
