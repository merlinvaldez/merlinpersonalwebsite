import Section from "@/components/Section";
import ProjectCard from "@/components/ProjectCard";
import ButtonLink from "@/components/ButtonLink";
import IconBadge from "@/components/IconBadge";
import { getProjectsByStatus } from "@/content/projects";

const productionProject = getProjectsByStatus("in-production")[0];
const inDevProjects = getProjectsByStatus("in-dev");
const pastProjects = getProjectsByStatus("past-work");
const featuredProjects = [productionProject, ...inDevProjects, ...pastProjects];

const skills = [
  { label: "JavaScript", icon: "/icons/skills/javascript.svg" },
  { label: "Python", icon: "/icons/skills/python.svg" },
  { label: "SQL / PostgreSQL", icon: "/icons/skills/postgresql.svg" },
  { label: "React", icon: "/icons/skills/react.svg" },
  { label: "Next.js", icon: "/icons/skills/nextjs.svg" },
  { label: "Node.js", icon: "/icons/skills/nodejs.svg" },
  { label: "Express", icon: "/icons/skills/express.svg" },
  { label: "Tailwind CSS", icon: "/icons/skills/tailwindcss.svg" },
  { label: "Postman", icon: "/icons/skills/postman.svg" },
  { label: "Supabase", icon: "/icons/skills/supabase.svg" },
  { label: "Netlify", icon: "/icons/skills/netlify.svg" },
  { label: "Render", icon: "/icons/skills/render.svg" },
  { label: "Vercel", icon: "/icons/skills/vercel.svg" },
  { label: "React Router", icon: "/icons/skills/reactrouter.svg" },
  { label: "Git", icon: "/icons/skills/git.svg" },
  { label: "GitHub", icon: "/icons/skills/github.svg" },
  { label: "HTML5", icon: "/icons/skills/html5.svg" },
  { label: "CSS", icon: "/images/skill-css.png" },
  { label: "VS Code", icon: "/images/skill-vscode.jpg" },
  { label: "Jupyter", icon: "/icons/skills/jupyter.svg" },
  { label: "Notion", icon: "/icons/skills/notion.svg" },
  { label: "Asana", icon: "/icons/skills/asana.svg" },
];

const certifications = [
  {
    label: "Fullstack Academy Web Dev Bootcamp",
    icon: "/icons/certs/fullstack-academy.png",
    iconClassName: "object-cover object-left",
    iconContainerClassName: "bg-white",
  },
  { label: "Google Project Management", icon: "/images/cert-google-pm.png" },
  {
    label: "NYS MWBE Certified",
    icon: "/icons/certs/nys-mwbe.webp",
  },
  {
    label: "DeepLearning.AI (Python, GenAI App Dev)",
    icon: "/icons/certs/deeplearningai.ico",
  },
  {
    label: "DataCamp (Python, GenAI App Dev)",
    icon: "/icons/certs/datacamp.svg",
  },
];

const currentItems = [
  {
    title: "VoteFeed",
    status: "In production",
    detail: "Shipping legislative freshness, bill-result context, and trust surfaces.",
  },
  {
    title: "PrimeMatcher",
    status: "In development",
    detail: "Defining the first workflow for capabilities statement upload and prime matching.",
  },
  {
    title: "StringPhone",
    status: "In development",
    detail: "Scoping v1 around voice cloning, translation, and turn-based conversation.",
  },
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
      "Merlin helped us design both the framework and the implementation plan for our network-wide innovation strategy.",
    name: "Jass Stewart",
    title: "Chief Innovation Officer, Alliance Charter Schools",
  },
];

export default function Home() {
  return (
    <div className="space-y-20 pb-24 pt-12">
      <Section className="pt-4">
        <div className="grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
          <div className="space-y-6">
            <div className="space-y-3">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-700">
                Software Engineer | Product Builder | Solutions Engineer
              </p>
              <h1 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
                Merlin Valdez
              </h1>
              <p className="text-lg leading-8 text-slate-600">
                Building civic, language, and AI-enabled products with full-stack execution, clear product framing, and strong iteration loops.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <ButtonLink href="/contact">Contact</ButtonLink>
              <ButtonLink
                href="https://meetings.hubspot.com/merlin-valdez"
                external
                variant="secondary"
              >
                Schedule a call
              </ButtonLink>
              <ButtonLink href="/projects" variant="secondary">
                View projects
              </ButtonLink>
            </div>
            <div className="rounded-2xl border border-slate-200/80 bg-white/85 px-6 py-4 text-sm font-semibold text-slate-700 shadow-sm">
              JavaScript / SQL / Python / AI workflow systems
            </div>
          </div>
          <div className="relative">
            <div className="absolute -left-6 top-8 h-32 w-32 rounded-full bg-teal-200/40 blur-3xl" />
            <div className="absolute -bottom-6 right-6 h-28 w-28 rounded-full bg-amber-200/50 blur-3xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-slate-200/80 bg-white/85 p-3 shadow-xl">
              <img
                src="/images/merlin-founder-photo-2.jpg"
                alt="Merlin Valdez"
                className="h-full w-full rounded-[1.5rem] object-cover"
              />
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[2rem] border border-slate-200/80 bg-white/85 p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-slate-900">Featured projects</h2>
            <p className="mt-2 max-w-2xl text-sm leading-7 text-slate-600">
              Updated around what is current now: VoteFeed in production, PrimeMatcher and StringPhone in development, and PlanningPeriod as foundational past work.
            </p>
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              {featuredProjects.map((project, index) => (
                <div key={project.slug} className={index === 0 ? "md:col-span-2" : ""}>
                  <ProjectCard project={project} />
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div className="rounded-[2rem] border border-slate-200/80 bg-white/85 p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-slate-900">Currently</h2>
              <div className="mt-4 space-y-4 text-sm text-slate-600">
                {currentItems.map((item) => (
                  <div key={item.title} className="rounded-xl border border-slate-200/80 bg-white px-4 py-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                      {item.status}
                    </p>
                    <p className="mt-1 text-base font-semibold text-slate-900">{item.title}</p>
                    <p className="mt-2 leading-6 text-slate-600">{item.detail}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-[2rem] border border-slate-200/80 bg-white/85 p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-slate-900">Social proof</h2>
              <div className="mt-4 space-y-4 text-sm text-slate-600">
                {quotes.map((quote) => (
                  <blockquote key={quote.name} className="rounded-xl border border-slate-200 bg-white px-4 py-4">
                    <p>&ldquo;{quote.quote}&rdquo;</p>
                    <p className="mt-2 text-xs font-semibold text-slate-700">
                      - {quote.name}, {quote.title}
                    </p>
                  </blockquote>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-semibold text-slate-900">Technical skills</h2>
            <p className="mt-2 text-sm text-slate-600">
              Tools and technologies I use to ship software, data systems, and AI-assisted product workflows.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {skills.map((skill) => (
              <IconBadge key={skill.label} label={skill.label} icon={skill.icon} />
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-semibold text-slate-900">Certifications</h2>
            <p className="mt-2 text-sm text-slate-600">
              Credentials that support my engineering, product delivery, and operator-level execution.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {certifications.map((cert) => (
              <IconBadge
                key={cert.label}
                label={cert.label}
                icon={cert.icon}
                iconClassName={cert.iconClassName}
                iconContainerClassName={cert.iconContainerClassName}
              />
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <div className="rounded-[2rem] border border-slate-200/80 bg-white/85 p-8 text-center shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-900">Let&apos;s build what matters.</h2>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            I work with mission-driven teams and early-stage products that need strong product judgment and hands-on full-stack execution.
          </p>
          <div className="mt-5 flex flex-wrap justify-center gap-3">
            <ButtonLink href="/contact">Contact</ButtonLink>
            <ButtonLink
              href="https://meetings.hubspot.com/merlin-valdez"
              external
              variant="secondary"
            >
              Schedule a call
            </ButtonLink>
          </div>
        </div>
      </Section>
    </div>
  );
}
