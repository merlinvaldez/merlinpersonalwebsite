import Section from "@/components/Section";

const strengths = [
  "Product framing that turns ambiguous user problems into tractable systems.",
  "Full-stack execution across frontend, backend, data flows, and AI workflow design.",
  "Founder-style iteration with clear scope, QA habits, and customer-facing communication.",
];

const interests = [
  "Civic products that make public systems more understandable and actionable.",
  "Language and communication tools that preserve trust, clarity, and identity.",
  "AI workflow systems where source quality, evaluation, and UX all matter.",
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
  description: "Current background, strengths, partners, and social proof for Merlin Valdez.",
};

export default function AboutPage() {
  return (
    <div className="space-y-16 pb-24 pt-12">
      <Section>
        <div className="space-y-4">
          <h1 className="text-3xl font-semibold text-slate-900">About</h1>
          <p className="max-w-3xl text-sm text-slate-600">
            I came into engineering through education and entrepreneurship. Before working as a full-stack engineer, I was
            designing learning experiences, building partnerships, and co-founding PlanningPeriod.io, where product
            strategy and AI workflow design had to work together in the real world.
          </p>
          <p className="max-w-3xl text-sm text-slate-600">
            Today my work is centered on product systems: VoteFeed in production, PrimeMatcher and StringPhone in active
            development, and the kinds of civic, language, and AI-enabled workflows that require both technical execution
            and strong product judgment. I am most useful when the job is to define the right workflow, build the system,
            and iterate based on what people actually need.
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
                <p className="text-sm text-slate-600">
                  &ldquo;{quote.quote}&rdquo;
                </p>
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
