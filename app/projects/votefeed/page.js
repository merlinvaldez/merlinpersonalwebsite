import Section from "@/components/Section";

export const metadata = {
  title: "VoteFeed",
  description: "Case study for VoteFeed, a civic engagement platform.",
};

export default function VoteFeedPage() {
  return (
    <div className="space-y-16 pb-24 pt-12">
      <Section>
        <div className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-700">
            Case Study
          </p>
          <h1 className="text-3xl font-semibold text-slate-900">VoteFeed</h1>
          <p className="max-w-2xl text-sm text-slate-600">
            A full-stack civic engagement app that helps constituents understand their representatives and engage with
            policy decisions in real time.
          </p>
        </div>
      </Section>

      <Section>
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-slate-200/80 bg-white/80 p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-slate-900">Problem</h2>
            <p className="mt-3 text-sm text-slate-600">
              Constituents struggle to follow what their U.S. House representatives are voting on, and the data is
              scattered across multiple sources that are hard to interpret.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200/80 bg-white/80 p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-slate-900">What I built</h2>
            <p className="mt-3 text-sm text-slate-600">
              An address-to-representative workflow that turns official vote data into a personalized feed, with clear
              summaries and links to primary sources.
            </p>
          </div>
        </div>
      </Section>

      <Section>
        <div className="rounded-2xl border border-slate-200/80 bg-white/80 p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-slate-900">Key features</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-600">
            <li>Address intake and district resolution using the U.S. Census Geocoder API.</li>
            <li>Representative lookup and vote feed powered by the Congress.gov API.</li>
            <li>Normalized data layer that keeps vote, bill, and representative data consistent.</li>
            <li>Reusable React components for feed cards, policy summaries, and updates.</li>
          </ul>
        </div>
      </Section>

      <Section>
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-slate-200/80 bg-white/80 p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-slate-900">Architecture</h2>
            <p className="mt-3 text-sm text-slate-600">
              React front end backed by an Express API and PostgreSQL database. The server orchestrates external API
              calls, validates responses, and returns normalized JSON for the client.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200/80 bg-white/80 p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-slate-900">Tech stack</h2>
            <p className="mt-3 text-sm text-slate-600">
              React, Node.js, Express, PostgreSQL, Netlify, Render, U.S. Census Geocoder API, Congress.gov API.
            </p>
          </div>
        </div>
      </Section>
    </div>
  );
}
