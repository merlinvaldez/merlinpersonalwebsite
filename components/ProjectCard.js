import Link from "next/link";

export default function ProjectCard({ project }) {
  return (
    <div className="flex h-full flex-col justify-between rounded-2xl border border-slate-200/80 bg-white/80 p-6 shadow-sm">
      <div className="space-y-4">
        <div>
          <Link
            href={project.caseStudyUrl}
            className="text-lg font-semibold text-slate-900 hover:text-teal-700"
          >
            {project.name}
          </Link>
          <p className="mt-2 text-sm text-slate-600">{project.summary}</p>
        </div>
        <div className="flex flex-wrap gap-2">
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
      <div className="mt-6 flex flex-wrap gap-3 text-sm font-medium">
        <Link
          href={project.caseStudyUrl}
          className="rounded-full border border-slate-200 px-4 py-2 text-slate-700 transition hover:border-teal-200 hover:text-teal-700"
        >
          Case study
        </Link>
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-slate-200 px-4 py-2 text-slate-700 transition hover:border-teal-200 hover:text-teal-700"
          >
            Live site
          </a>
        )}
        {project.repoUrl && (
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-slate-200 px-4 py-2 text-slate-700 transition hover:border-teal-200 hover:text-teal-700"
          >
            GitHub
          </a>
        )}
      </div>
    </div>
  );
}
