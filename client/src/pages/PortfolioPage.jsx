import '../styles/portfolio.css'

const projectSections = [
  {
    projects: [
      {
        description: [
          'VoteFeed turns congressional voting records into a familiar social feed, making it easier to see how a U.S. House representative voted and respond with approval, disapproval, and comments.',
          'The core experience connects address lookup, district matching, representative data, and House vote records into one product flow, then layers in saved profiles, interactions, and a roadmap for notifications, richer bill context, and interest-based filtering.',
          'The pitch is simple: stop guessing what a representative did and start reacting to what actually happened.',
        ],
        href: 'https://github.com/merlinvaldez/votefeed.org',
        title: 'VoteFeed',
      },
    ],
    title: 'In Production',
  },
  {
    projects: [
      {
        description: [
          'StringPhone is a voice-first product built around one human use case: helping people hold real conversations across a language barrier.',
          'Instead of stopping at basic transcription, the product is being shaped as a fuller speech pipeline with transcription, translation, generated responses, and supported-language output working together as one experience.',
          'The idea behind it is direct and practical: talk to your grandma, even if you do not speak her language.',
        ],
        href: 'https://github.com/merlinvaldez/stringphone',
        title: 'StringPhone',
      },
    ],
    title: 'In Development',
  },
]

function PortfolioCard({ description, href, title }) {
  return (
    <article className="portfolio-card">
      <h3>
        <a href={href} rel="noreferrer" target="_blank">
          {title}
        </a>
      </h3>

      {description.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
    </article>
  )
}

function PortfolioSection({ projects, title }) {
  return (
    <section className="portfolio-section">
      <h2 className="section-title">{title}</h2>
      <div className="portfolio-card-list">
        {projects.map((project) => (
          <PortfolioCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  )
}

function PortfolioPage() {
  return (
    <div className="page portfolio-page">
      <h1 className="page-title">Portfolio</h1>

      {projectSections.map((section) => (
        <PortfolioSection key={section.title} {...section} />
      ))}
    </div>
  )
}

export default PortfolioPage
