import '../styles/about.css'

const partners = [
  { alt: 'Alliance Charter Schools logo', src: '/images/partner-alliance.png' },
  { alt: 'Girls Inc. logo', src: '/images/partner-girlsinc.png' },
  {
    alt: 'National Fellowship of Black and Latino Male Educators logo',
    src: '/images/partner-nfblme.png',
  },
  {
    alt: 'New York City Department of Education logo',
    src: '/images/partner-nycdoe.png',
  },
  {
    alt: 'New York State Digital Equity Network logo',
    src: '/images/partner-nysden.png',
  },
  { alt: 'Paterson Public Schools logo', src: '/images/partner-pps.png' },
  { alt: 'Teach For America logo', src: '/images/partner-tfa.png' },
  { alt: 'The Academy School logo', src: '/images/partner-theacademy.png' },
]

const quotes = [
  {
    attribution: 'Jennifer Early, Chief Operating Officer, Teach For America NY',
    text: '"Merlin has been my sherpa in these AI times, helping me and my team navigate a fast-changing landscape with clarity and confidence."',
  },
  {
    attribution:
      'Osarumwense Pat-Osagie, Digital Equity Program Director, NYS Digital Equity Network',
    text: "\"Merlin's voice and perspective are essential in shaping the conversation on digital equity. I'm excited for all that's ahead in our continued work together.\"",
  },
  {
    attribution: 'Nancy Correa, Principal, Paterson School 16',
    text: '"For the last three years, Merlin has been instrumental in helping us design, launch, and implement our dual language program at our community school."',
  },
  {
    attribution: 'Patricia Jacovina, COO, Girls Inc. of New York City',
    text: '"Merlin has been our guide in deciding how to thoughtfully integrate AI into our work with women and girls."',
  },
  {
    attribution: 'Jass Stewart, Chief Innovation Officer, Alliance Charter Schools',
    text: '"Merlin helped us design both the framework and the implementation plan for our network-wide innovation strategy."',
  },
  {
    attribution:
      'Kevin Waters, Managing Director, Program Partnerships & Integration, Teach For America Philadelphia',
    text: '"Merlin has been an invaluable partner in helping our teachers understand how to leverage AI in community-centered and empowering ways."',
  },
]

function AboutPage() {
  return (
    <div className="page about-page">
      <h1 className="page-title">About Me</h1>

      <section className="about-intro">
        <div className="about-copy">
          <p>
            I started my career as a bilingual elementary educator, where my
            students taught me that learning works best when it honors who they
            are and where they come from. That belief carried me into roles as a
            teacher coach and nonprofit partner manager, where I was always
            tinkering with ways technology could bring our shared vision to life.
            My wife and I eventually launched our first company, supporting
            schools and organizations with the design, implementation, and change
            management of powerful interventions for bilingual, newcomer, and
            housing-insecure students.
          </p>

          <p>
            When GenAI took off in early 2023, I saw a way to help teachers plan
            lessons grounded in students&apos; lived experiences and the assets of
            their communities. I co-founded Planningperiod.io, learned to product
            manage through many user-informed iterations, and even coded simple
            features and processes when the work called for it. I fell in love
            with software development because building and deploying systems that
            solve real pain points helps people create their own paradigm shifts.
            Today, I am a student at Fullstack Academy, and I want to spend the
            rest of my life building human-centered tech.
          </p>
        </div>

        <figure className="about-gif">
          <img
            alt="Gif showing all the different activities I do other than coding"
            src="/images/gif-for-about-me.gif"
          />
          <figcaption>
            When I&apos;m not coding, you can find me petting my cat or hanging out
            with my wife.
          </figcaption>
        </figure>
      </section>

      <section className="about-partners">
        <h2 className="section-title">My Partners</h2>
        <div className="about-partners-grid">
          {partners.map(({ alt, src }) => (
            <img key={src} alt={alt} src={src} />
          ))}
        </div>
      </section>

      <section className="about-quotes">
        <h2 className="section-title">
          People <span aria-hidden="true">&#10084;</span> Working With Me
        </h2>
        <div className="about-quote-list">
          {quotes.map(({ attribution, text }) => (
            <blockquote key={attribution} className="about-quote">
              <p>{text}</p>
              <b>- {attribution}</b>
            </blockquote>
          ))}
        </div>
      </section>
    </div>
  )
}

export default AboutPage
