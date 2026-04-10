import '../styles/portfolio.css'

const projectSections = [
  {
    projects: [
      {
        description: [
          'I co-founded Planning Period because I wanted teachers to design curriculum that truly connects with their students. As Head of Product, I lived between pedagogy and engineering. I led more than 70 sprints across three full versions, and turned messy, curriculum documents and state standards into something an AI could help with without losing the human intent behind each lesson.',
          'On the technical side, I designed our prompting system from the ground up and built a QA process for AI outputs in Python and Jupyter using the OpenAI API. I spent long stretches leveraging any library and toolset I could find to clean and map large sets of curricular content and standards so the system could respond with precision and consistency. I also co-designed and tested our PDF processing pipeline using the Mistral OCR API, to pull reliable structure from the documents teachers actually use. The point of all that engineering was simple: give educators responses they can trust, and space to craft lessons that feel personal and culturally grounded.',
          'I was also the face of the business. I secured institutional partnerships, onboarded educators, ran workshops, and folded what I heard back into the roadmap. I carried the backlog, wrote the epics, made the tradeoffs, and kept our small two-person team shipping. Building Planning Period is why I committed to becoming a full stack developer. Once the problem was meaningful enough, the learning took care of itself.',
        ],
        href: 'https://planningperiod.io/',
        title: 'planningperiod.io',
      },
      {
        description: [
          'I built my personal website as part of my Fullstack Academy Web Developer Certification course. Though the assignment asked for a pull request submission, I wanted it to live in the world. I bought a domain, configured DNS, and deployed on Vercel so the site worked like a real product from day one. Version 1 is intentionally simple. I focused on clear structure, readable typography, and a content flow that feels original to me and my story.',
          'I wrote semantic HTML5 so screen readers can navigate the page, kept the head clean with sensible meta tags, and organized sections so the story is easy to follow. I styled with vanilla CSS, paying attention to spacing, type scale, and responsive rules so the layout holds up on phones and large screens. Accessibility mattered throughout. I used descriptive alt text, labels, and keyboard-friendly navigation so the site welcomes more people. I treated the repo like a professional project. I created a clean structure, committed in small, descriptive increments, and worked through the pull request workflow to satisfy the course requirement. I then set up a Vercel project, connected it to the main branch, and confirmed that preview builds and production deploys were predictable. I connected the custom domain, verified DNS and SSL, and added the little touches that make a site feel finished.',
          'This is only version 1. In versions 2 and 3 I plan to adopt Tailwind to establish a tighter design system and use JavaScript to make the site interactive. I want details that respond to the reader without getting in the way. That includes stateful components, smoother navigation, and motion that supports meaning. The goal is to keep it personal and honest while leveling up the craft.',
          'Building this site taught and reinforced the skills I care about: HTML and CSS fundamentals, responsive design, accessibility from the start, version control discipline, and bringing your project to live in the real world after some well-intentioned hard work. It is a small site, but it reflects how I like to build: start with clarity, ship, learn, and then raise the bar in the next version.',
        ],
        href: 'https://merlinvaldez.com',
        title: 'merlinvaldez.com',
      },
    ],
    title: 'In Production',
  },
  {
    projects: [
      {
        description: [
          'I am building anyChangeAi to answer a simple question: can I make it easy to change any document with AI while staying honest about what the tech can and cannot do. I will start from a clean Next.js and TypeScript base so I can move fast and still keep the code readable and testable. The repository lives on GitHub with a project charter and an issue board so the work stays visible and traceable from day one.',
          'A core learning goal for me with this project is to understand the limits of AI-driven development, especially vibe coding. I want to see where AI helps me explore ideas and where it slips into guesswork. I will document those edges clearly, treat AI as a collaborator, and use tests and acceptance criteria to keep me grounded. I also want to find the right balance between fast prototyping and disciplined engineering. I will prototype quickly in small, reversible steps, then dive into what works by writing it down as GitHub issues and shipping behind clear commits. I will create and follow a self-led project charter and implement it through labeled, milestone-linked issues so anyone can see what I am doing, why it matters, and what is next.',
          'Process matters for this project. I want to follow a proven fullstack path using tools that are most common in the industry. Next.js with React and TypeScript for the app, Tailwind for a consistent design system, Vercel for hosting, and GitHub for source control, issues, and CI. If the product needs persistence, I will add a relational database and keep schema changes versioned.',
          'In order to maximize my learning from this project, I built a custom GitHub Copilot agent called Bootcamp Tutor. Its job is to act like a coach who helps me understand the technology and methods behind each issue and then directs me on completing the work myself. It will reference the charter, link relevant docs, ask clarifying questions, and suggest next steps. The goal is learning through practice, not outsourcing the solution the way agent mode often does.',
          'When I ship the first version, the readme will show what the product can do, the tradeoffs I made, and the places where AI accelerates me versus the places where I need to slow down and think. The end goal is not a perfect demo. It is a trustworthy tool that teaches me how to build with AI without giving up my judgment.',
        ],
        href: 'https://github.com/merlinvaldez/anyChangeAi',
        title: 'AnychangeAI',
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
