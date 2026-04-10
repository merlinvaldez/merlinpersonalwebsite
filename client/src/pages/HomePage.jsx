import '../styles/home.css'

const titles = [
  'Innovation Strategist',
  'Product Manager',
  'Edtech Entrepreneur',
  'AI Software Developer',
]

const technicalSkills = [
  {
    alt: 'HTML5 Skill Badge',
    src: '/images/skill- HTML5_Badge_512.png',
    width: '100vh',
  },
  { alt: 'CSS Skill Badge', src: '/images/skill-css.png', width: '100vh' },
  { alt: 'GitHub Skill Badge', src: '/images/skill-github.png', width: '100vh' },
  {
    alt: 'JavaScript Skill Badge',
    src: '/images/skill-js.png',
    width: '100vh',
  },
  {
    alt: 'Jupyter Notebook Skill Badge',
    src: '/images/skill-jupyter-notebook.png',
    width: '100vh',
  },
  {
    alt: 'Mistral Color Skill Badge',
    src: '/images/skill-mistral-color.png',
    width: '100vh',
  },
  {
    alt: 'Ollama Skill Badge',
    src: '/images/skill-ollama.png',
    width: '100vh',
  },
  { alt: 'OpenAI Skill Badge', src: '/images/skill-openai.png', width: '150vh' },
  { alt: 'Python Skill Badge', src: '/images/skill-python.png', width: '250vh' },
  {
    alt: 'Supabase Skill Badge',
    src: '/images/skill-supabase-logo-vector.png',
    width: '200vh',
  },
  { alt: 'Vercel Skill Badge', src: '/images/Skill-Vercel.jpg', width: '150vh' },
  { alt: 'VSCode Skill Badge', src: '/images/skill-vscode.jpg', width: '75vh' },
]

const certifications = [
  {
    alt: 'Google Project Management Certification',
    src: '/images/cert-google-pm.png',
    width: '200px',
  },
  {
    alt: 'New York City Minority Business Enterprise Certification',
    src: '/images/cert- NYC-MBE-300x300.webp',
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
          {technicalSkills.map(({ alt, src, width }) => (
            <img key={src} alt={alt} src={src} style={{ width }} />
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
