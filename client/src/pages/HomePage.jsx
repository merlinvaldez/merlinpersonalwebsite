import {
  Clerk,
  CSS3,
  ExpressJsDark,
  GitHubDark,
  HTML5,
  JavaScript,
  MaterialUI,
  NextJs,
  NodeJs,
  OpenAI,
  PostgreSQL,
  Python,
  React,
  ReactRouter,
  ReSend,
  Supabase,
  TypeScript,
  VercelDark,
  VisualStudioCode,
  ViteJS,
} from 'developer-icons'
import '../styles/home.css'

const titles = [
  'Fullstack Software Engineer',
  'Product Manager',
  'Solutions Partner',
  'Serial Entrepreneur',
]

const technicalSkills = [
  {
    Icon: Clerk,
    label: 'Clerk',
  },
  { Icon: CSS3, label: 'CSS' },
  {
    Icon: ExpressJsDark,
    label: 'Express',
  },
  {
    Icon: GitHubDark,
    label: 'GitHub',
  },
  {
    Icon: HTML5,
    label: 'HTML5',
  },
  {
    Icon: JavaScript,
    label: 'JavaScript',
  },
  {
    alt: 'Jupyter Notebook skill badge',
    label: 'Jupyter',
    src: '/images/skill-jupyter-notebook.png',
  },
  {
    Icon: MaterialUI,
    label: 'Material UI',
  },
  {
    alt: 'Mistral Color skill badge',
    label: 'Mistral',
    src: '/images/skill-mistral-color.png',
  },
  {
    Icon: NextJs,
    label: 'Next.js',
  },
  {
    Icon: NodeJs,
    label: 'Node.js',
  },
  {
    alt: 'Ollama skill badge',
    label: 'Ollama',
    src: '/images/skill-ollama.png',
  },
  {
    Icon: OpenAI,
    label: 'OpenAI',
  },
  {
    Icon: PostgreSQL,
    label: 'PostgreSQL',
  },
  {
    Icon: Python,
    label: 'Python',
  },
  {
    Icon: React,
    label: 'React',
  },
  {
    Icon: ReactRouter,
    label: 'React Router',
  },
  {
    Icon: ReSend,
    label: 'Resend',
  },
  {
    Icon: Supabase,
    label: 'Supabase',
  },
  {
    Icon: TypeScript,
    label: 'TypeScript',
  },
  {
    Icon: VercelDark,
    label: 'Vercel',
  },
  {
    Icon: ViteJS,
    label: 'Vite',
  },
  {
    Icon: VisualStudioCode,
    label: 'VS Code',
  },
]

const certifications = [
  {
    alt: 'Google Project Management Certification',
    src: '/images/cert-google-pm.png',
    width: '200px',
  },
  {
    alt: 'Fullstack Academy Certification',
    src: '/images/cert-fullstack-academy.jpg',
    width: '220px',
  },
  {
    alt: 'New York City Minority Business Enterprise Certification',
    src: '/images/cert- NYC-MBE-300x300.webp',
    width: '200px',
  },
  {
    alt: 'New York State Minority and Women-Owned Business Enterprise Certification',
    src: '/images/cert-nys-mwbe.png',
    width: '200px',
  },
]

function HomePage() {
  return (
    <div className="page home-page">
      <h1 className="page-title">Merlin Valdez</h1>

      <section className="home-hero">
        <figure className="home-founder-photo">
          <img
            alt="Founder Photo of Merlin Valdez"
            src="/images/Merlin Founder Photo 2.jpg"
          />
        </figure>

        <ul className="home-title-list">
          {titles.map((title) => (
            <li key={title}>{title}</li>
          ))}
        </ul>
      </section>

      <section className="home-section">
        <h2 className="section-title">Technical Skills</h2>
        <div className="home-skills-grid">
          {technicalSkills.map(({ Icon, alt, label, src }) => (
            <figure key={label} className="home-skill-badge">
              {Icon ? (
                <Icon
                  aria-hidden="true"
                  className="home-skill-icon"
                  size={72}
                />
              ) : (
                <img alt={alt} loading="lazy" src={src} />
              )}
              <figcaption>{label}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="home-section">
        <h2 className="section-title">Certifications</h2>
        <div className="home-certifications-grid">
          {certifications.map(({ alt, src, width }) => (
            <img key={src} alt={alt} src={src} style={{ width }} />
          ))}
        </div>
      </section>
    </div>
  )
}

export default HomePage
