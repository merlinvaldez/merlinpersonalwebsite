import ButtonLink from "@/components/ButtonLink";
import Section from "@/components/Section";
import { projectStatusMeta } from "@/content/projects";

const statusClasses = {
  "in-production": "border-emerald-200 bg-emerald-50 text-emerald-700",
  "in-dev": "border-amber-200 bg-amber-50 text-amber-700",
  "past-work": "border-slate-200 bg-slate-100 text-slate-600",
};

export default function ProjectCaseStudy({ project }) {
  return (
    <div className="space-y-16 pb-24 pt-12">
      <Section>
        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="space-y-6">
            <span
              className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] ${statusClasses[project.status]}`}
            >
              {projectStatusMeta[project.status].label}
            </span>
            <div className="space-y-4">
              <h1 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
                {project.name}
              </h1>
              <p className="max-w-3xl text-xl leading-8 text-slate-600">
                {project.headline}
              </p>
              <p className="max-w-3xl text-base leading-8 text-slate-600">
                {project.caseStudy.intro}
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              {project.links.live && (
                <ButtonLink href={project.links.live} external>
                  Visit live site
                </ButtonLink>
              )}
              {project.links.repo && (
                <ButtonLink href={project.links.repo} external variant="secondary">
                  GitHub
                </ButtonLink>
              )}
              <ButtonLink href="/projects" variant="secondary">
                Back to work
              </ButtonLink>
            </div>
          </div>

          <aside className="rounded-[1.75rem] border border-slate-200/80 bg-white p-6 shadow-sm">
            <div className="space-y-6">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                  Role
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-600">{project.role}</p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                  Current focus
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {project.currentFocus}
                </p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                  System angle
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {project.systemAngle}
                </p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                  Stack
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-600"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </aside>
        </div>
      </Section>

      <Section>
        <div className="space-y-5">
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold text-slate-900">Proof and scope</h2>
            <p className="max-w-2xl text-sm leading-7 text-slate-600">
              The project summary below is organized around the product decisions, system choices, and milestones that matter most right now.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {project.proofPoints.map((point) => (
              <div
                key={point}
                className="rounded-[1.5rem] border border-slate-200/80 bg-white px-5 py-4 text-sm leading-7 text-slate-600 shadow-sm"
              >
                {point}
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <div className="grid gap-6 lg:grid-cols-2">
          {project.caseStudy.sections.map((section) => (
            <article
              key={section.title}
              className="rounded-[1.75rem] border border-slate-200/80 bg-white p-6 shadow-sm"
            >
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-slate-900">{section.title}</h2>
                <p className="text-sm leading-7 text-slate-600">{section.body}</p>
                <div className="space-y-2">
                  {section.points.map((point) => (
                    <p
                      key={point}
                      className="rounded-2xl bg-slate-50 px-4 py-3 text-sm leading-6 text-slate-600"
                    >
                      {point}
                    </p>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section>
        <div className="rounded-[1.75rem] border border-slate-200/80 bg-slate-950 p-8 text-slate-100 shadow-sm">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <h2 className="text-2xl font-semibold">Source of truth</h2>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                This public case study is distilled from the product artifacts I am actively using to define, ship, and evaluate the work.
              </p>
            </div>
            <div className="space-y-3">
              {project.sourceOfTruth.map((source) => (
                <div
                  key={source}
                  className="rounded-2xl border border-slate-800 px-4 py-3 text-sm leading-6 text-slate-200"
                >
                  {source}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
