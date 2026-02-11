import Section from "@/components/Section";

export const metadata = {
  title: "PlanningPeriod.io",
  description: "Case study for PlanningPeriod.io, an AI curriculum design platform.",
};

export default function PlanningPeriodPage() {
  return (
    <div className="space-y-16 pb-24 pt-12">
      <Section>
        <div className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-700">
            Case Study
          </p>
          <h1 className="text-3xl font-semibold text-slate-900">PlanningPeriod.io</h1>
          <p className="max-w-2xl text-sm text-slate-600">
            AI-powered curriculum design platform built to help educators produce high-quality, standards-aligned
            resources faster.
          </p>
        </div>
      </Section>

      <Section>
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-slate-200/80 bg-white/80 p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-slate-900">Problem</h2>
            <p className="mt-3 text-sm text-slate-600">
              Teachers and school leaders spend hours adapting curriculum to local standards and student needs, while the
              data is locked inside complex PDFs and disconnected resources.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200/80 bg-white/80 p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-slate-900">What I contributed</h2>
            <p className="mt-3 text-sm text-slate-600">
              Led product direction, designed the prompting system, and built QA pipelines to ensure AI outputs were
              accurate, consistent, and grounded in real curricular data.
            </p>
          </div>
        </div>
      </Section>

      <Section>
        <div className="rounded-2xl border border-slate-200/80 bg-white/80 p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-slate-900">Pipeline and QA work</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-600">
            <li>Built a Python + Jupyter QA workflow to validate prompt outputs at scale.</li>
            <li>Co-designed an OCR ingestion pipeline with the Mistral API for structured PDF extraction.</li>
            <li>Cleaned and mapped large curricular datasets to enable accurate, standards-aligned generation.</li>
            <li>Partnered with educators and institutional clients to refine outputs based on feedback loops.</li>
          </ul>
        </div>
      </Section>

      <Section>
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-slate-200/80 bg-white/80 p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-slate-900">Architecture</h2>
            <p className="mt-3 text-sm text-slate-600">
              Python services orchestrated OCR + prompt pipelines, with Supabase for structured data storage and a Vercel
              front end for delivery and iteration.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200/80 bg-white/80 p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-slate-900">Tech stack</h2>
            <p className="mt-3 text-sm text-slate-600">
              Python, OpenAI API, Mistral OCR API, Jupyter Notebooks, Supabase, Vercel, GitHub.
            </p>
          </div>
        </div>
      </Section>
    </div>
  );
}
