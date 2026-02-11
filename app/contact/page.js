import Section from "@/components/Section";
import ButtonLink from "@/components/ButtonLink";

export const metadata = {
  title: "Contact",
  description: "Get in touch with Merlin Valdez.",
};

export default function ContactPage() {
  return (
    <div className="space-y-16 pb-24 pt-12">
      <Section>
        <div className="space-y-3">
          <h1 className="text-3xl font-semibold text-slate-900">Contact</h1>
          <p className="max-w-2xl text-sm text-slate-600">
            Reach out for collaborations, consulting, or full-time SWE/SE/PM opportunities.
          </p>
        </div>
      </Section>

      <Section>
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-slate-200/80 bg-white/80 p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-slate-900">Direct links</h2>
            <div className="mt-4 flex flex-col gap-3 text-sm font-medium text-slate-700">
              <a href="mailto:merlinvaldez@gmail.com">merlinvaldez@gmail.com</a>
              <a href="https://www.linkedin.com/in/merlinvaldez/" target="_blank" rel="noreferrer">
                LinkedIn
              </a>
              <a href="https://github.com/merlinvaldez" target="_blank" rel="noreferrer">
                GitHub
              </a>
            </div>
          </div>
          <div className="rounded-2xl border border-slate-200/80 bg-white/80 p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-slate-900">Schedule time</h2>
            <p className="mt-2 text-sm text-slate-600">
              Prefer a quick call? Grab time on my calendar.
            </p>
            <div className="mt-4">
              <ButtonLink href="https://meetings.hubspot.com/merlin-valdez" external>
                Schedule a call
              </ButtonLink>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
