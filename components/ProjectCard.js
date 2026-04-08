import Link from "next/link";
import { projectStatusMeta } from "@/content/projects";

const statusClasses = {
  "in-production": "border-emerald-200 bg-emerald-50 text-emerald-700",
  "in-dev": "border-amber-200 bg-amber-50 text-amber-700",
  "past-work": "border-slate-200 bg-slate-100 text-slate-600",
};

function ActionLink({ href, children, external = false, primary = false }) {
  if (!href) {
    return null;
  }

  const className = primary
    ? "inline-flex items-center justify-center rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800"
    : "inline-flex items-center justify-center rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-teal-200 hover:text-teal-700";

  if (external) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={className}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}

function StatusBadge({ status }) {
  return (
    <span
      className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] ${statusClasses[status]}`}
    >
      {projectStatusMeta[status].label}
    </span>
  );
}

export default function ProjectCard({ project, variant = "default" }) {
  const isSpotlight = variant === "spotlight";

  if (isSpotlight) {
    return (
      <article className="overflow-hidden rounded-[2rem] border border-slate-200/80 bg-white shadow-sm">
        <div className="grid gap-10 p-8 lg:grid-cols-[1.2fr_0.8fr] lg:p-10">
          <div className="space-y-6">
            <div className="space-y-4">
              <StatusBadge status={project.status} />
              <div className="space-y-3">
                <Link
                  href={project.links.caseStudy}
                  className="inline-block text-3xl font-semibold tracking-tight text-slate-900 transition hover:text-teal-700 sm:text-4xl"
                >
                  {project.name}
                </Link>
                <p className="max-w-2xl text-lg leading-8 text-slate-600">
                  {project.headline}
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <ActionLink href={project.links.caseStudy} primary>
                  Case study
                </ActionLink>
                <ActionLink href={project.links.live} external>
                  Live site
                </ActionLink>
                <ActionLink href={project.links.repo} external>
                  GitHub
                </ActionLink>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {project.proofPoints.map((point) => (
                <div
                  key={point}
                  className="rounded-2xl border border-slate-200/80 bg-slate-50 px-5 py-4 text-sm leading-6 text-slate-600"
                >
                  {point}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[1.75rem] border border-slate-200/80 bg-slate-950 p-6 text-slate-100">
            <div className="space-y-6">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                  Role
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-200">{project.role}</p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                  Current focus
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-200">
                  {project.currentFocus}
                </p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                  System angle
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-200">
                  {project.systemAngle}
                </p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                  Stack
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-slate-700 px-3 py-1 text-xs font-medium text-slate-200"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    );
  }

  return (
    <article className="flex h-full flex-col justify-between rounded-[1.75rem] border border-slate-200/80 bg-white/90 p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <div className="space-y-5">
        <div className="space-y-4">
          <StatusBadge status={project.status} />
          <div className="space-y-3">
            <Link
              href={project.links.caseStudy}
              className="inline-block text-2xl font-semibold tracking-tight text-slate-900 transition hover:text-teal-700"
            >
              {project.name}
            </Link>
            <p className="text-base leading-7 text-slate-600">{project.headline}</p>
          </div>
        </div>

        <div className="space-y-4 text-sm leading-6 text-slate-600">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
              Role
            </p>
            <p className="mt-2">{project.role}</p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
              Current focus
            </p>
            <p className="mt-2">{project.currentFocus}</p>
          </div>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
            System angle
          </p>
          <p className="mt-2 rounded-2xl bg-slate-50 px-4 py-3 text-sm leading-6 text-slate-600">
            {project.systemAngle}
          </p>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
            Stack and systems
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {project.stack.map((item) => (
              <span
                key={item}
                className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-600"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        <ActionLink href={project.links.caseStudy} primary>
          Case study
        </ActionLink>
        <ActionLink href={project.links.live} external>
          Live site
        </ActionLink>
        <ActionLink href={project.links.repo} external>
          GitHub
        </ActionLink>
      </div>
    </article>
  );
}
