import Section from "@/components/Section";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/content/projects";

const statusSummary = [
  { label: "In Production", detail: "VoteFeed" },
  { label: "In Dev", detail: "PrimeMatcher, StringPhone" },
  { label: "Past Work", detail: "PlanningPeriod.io" },
];

export const metadata = {
  title: "Projects",
  description: "Selected projects across civic tech, AI workflows, and product systems.",
};

export default function ProjectsPage() {
  return (
    <div className="space-y-16 pb-24 pt-12">
      <Section>
        <div className="space-y-4">
          <h1 className="text-3xl font-semibold text-slate-900">Projects</h1>
          <p className="max-w-3xl text-sm leading-7 text-slate-600">
            Full-stack products and workflow systems that blend engineering, product strategy, and user-centered execution. The current mix is one product in production, two in development, and one foundational past product that still reflects how I work.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            {statusSummary.map((item) => (
              <div
                key={item.label}
                className="rounded-full border border-slate-200/80 bg-white/85 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-slate-600 shadow-sm"
              >
                {item.label}: {item.detail}
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <div key={project.slug} className={index === 0 ? "md:col-span-2" : ""}>
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}
