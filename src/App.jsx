import { useEffect, useState } from 'react'

const GITHUB = 'https://github.com/replacerog65-dotcom'
const EMAIL = 'replacerog65@gmail.com'
const PHONE_NUMBER = '+255657849920'
const PHONE_DISPLAY = '+255 657 849 920'

function Icon({ name, size = 20 }) {
  const paths = {
    arrow: <><path d="M5 12h14"/><path d="m13 6 6 6-6 6"/></>,
    external: <><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></>,
    github: <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3.3-.4 6.8-1.6 6.8-7.4A5.8 5.8 0 0 0 19.3 3 5.4 5.4 0 0 0 19.1 0S17.9-.4 15 1.5a14 14 0 0 0-7 0C5.1-.4 3.9 0 3.9 0a5.4 5.4 0 0 0-.2 3A5.8 5.8 0 0 0 2.2 7.1c0 5.8 3.5 7 6.8 7.4A4.8 4.8 0 0 0 8 18v4m0-3c-3 .9-3-1.5-4.2-2"/>,
    menu: <><path d="M4 7h16"/><path d="M4 17h16"/></>,
    close: <><path d="m6 6 12 12"/><path d="m18 6-12 12"/></>,
    pin: <><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/></>,
    code: <><path d="m8 9-4 3 4 3"/><path d="m16 9 4 3-4 3"/><path d="m14 5-4 14"/></>,
    spark: <><path d="m12 3-1.6 4.4L6 9l4.4 1.6L12 15l1.6-4.4L18 9l-4.4-1.6L12 3Z"/><path d="m5 16-.7 1.8L2.5 18.5l1.8.7L5 21l.7-1.8 1.8-.7-1.8-.7L5 16Z"/></>,
    check: <path d="m5 12 4 4L19 6"/>,
  }
  return (
    <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      {paths[name]}
    </svg>
  )
}

function Reveal({ children, className = '' }) {
  return <div className={`reveal ${className}`}>{children}</div>
}

function QuizVisual() {
  return (
    <div className="project-visual quiz-visual" aria-label="QuizPulse live session interface illustration">
      <div className="browser-bar"><span/><span/><span/><small>quizpulse / live</small></div>
      <div className="quiz-ui">
        <div className="quiz-topline"><span className="live-dot">Live session</span><strong>08 <small>/ 12</small></strong></div>
        <p className="question-label">Question 08</p>
        <h3>Which method helps learners connect new ideas to prior knowledge?</h3>
        <div className="answers">
          <div><span>A</span><i style={{'--bar': '78%'}}/><b>78%</b></div>
          <div><span>B</span><i style={{'--bar': '38%'}}/><b>14%</b></div>
          <div><span>C</span><i style={{'--bar': '20%'}}/><b>8%</b></div>
        </div>
        <div className="quiz-footer"><span><i/> 48 learners connected</span><b>00:24</b></div>
      </div>
    </div>
  )
}

function NutritionVisual() {
  return (
    <div className="project-visual nutrition-visual" aria-label="NutriVision mobile food recognition illustration">
      <div className="phone-shell">
        <div className="phone-status"><span>9:41</span><i/></div>
        <div className="camera-view">
          <div className="food-shape ugali"><span>Ugali</span></div>
          <div className="food-shape beans"><span>Maharage</span></div>
          <div className="scan-corner tl"/><div className="scan-corner tr"/><div className="scan-corner bl"/><div className="scan-corner br"/>
          <div className="scan-line"/>
        </div>
        <div className="nutrition-result">
          <div><small>Meal estimate</small><strong>624 <span>kcal</span></strong></div>
          <div className="macro"><span>Protein <b>24g</b></span><span>Carbs <b>91g</b></span></div>
        </div>
      </div>
      <div className="dataset-note"><strong>39</strong><span>local food<br/>classes</span></div>
    </div>
  )
}

function CanvasVisual() {
  const modules = ['Orientation & expectations', 'Learning activities', 'Knowledge check']
  return (
    <div className="project-visual canvas-visual" aria-label="Canvas LMS course modules illustration">
      <div className="canvas-side"><b>H</b><i/><i/><i/><i/></div>
      <div className="canvas-main">
        <div className="canvas-head"><div><small>Course workspace</small><strong>Digital Learning Foundations</strong></div><span>Published</span></div>
        <div className="progress-copy"><span>Module progress</span><b>72%</b></div>
        <div className="progress-track"><i/></div>
        <div className="module-list">
          {modules.map((module, index) => <div key={module}><span>{index + 1}</span><p>{module}<small>{index === 2 ? 'Quiz • 10 points' : 'Page • Published'}</small></p><Icon name="check" size={18}/></div>)}
        </div>
      </div>
    </div>
  )
}

function ServiceVisual() {
  return (
    <div className="service-visual" aria-hidden="true">
      <div className="service-top"><span>Operations</span><small>August 2026</small></div>
      <div className="service-stats"><div><small>Bookings</small><b>128</b><i>+12%</i></div><div><small>Revenue</small><b>TSh 4.8m</b><i>+8%</i></div></div>
      <div className="service-chart"><span style={{height:'36%'}}/><span style={{height:'50%'}}/><span style={{height:'43%'}}/><span style={{height:'72%'}}/><span style={{height:'60%'}}/><span style={{height:'88%'}}/><span style={{height:'78%'}}/></div>
    </div>
  )
}

const smallerProjects = [
  {
    number: '01', title: 'Prettyzz', type: 'Full-stack service platform', className: 'lime',
    description: 'Customer booking, payments, invoices and a complete admin workflow connected to a Laravel REST API.',
    tech: 'React · Laravel · Sanctum · MySQL', visual: <ServiceVisual />,
  },
  {
    number: '02', title: 'Travel Explorer Tanzania', type: 'Travel discovery experience', className: 'orange',
    description: 'A multi-page, accessible travel interface with search, filters, tour packages and motion that respects user settings.',
    tech: 'React · TypeScript · Vite',
    live: 'https://travel-explorer-tanzania.vercel.app', code: 'https://github.com/replacerog65-dotcom/travel-explorer-tanzania',
  },
  {
    number: '03', title: 'TechStore Tanzania', type: 'E-commerce frontend', className: 'blue',
    description: 'Searchable product catalogue, persistent cart, order calculations and a responsive checkout experience.',
    tech: 'React · Context API · LocalStorage',
    live: 'https://techstore-tanzania.vercel.app', code: 'https://github.com/replacerog65-dotcom/techstore-tanzania',
  },
  {
    number: '04', title: 'Savannah Grill', type: 'Hospitality website', className: 'sand',
    description: 'A warm, responsive restaurant experience built around local dishes, clear menus and a simple reservation journey.',
    tech: 'React · TypeScript · Responsive CSS',
    live: 'https://restaurant-ruddy-delta-42.vercel.app', code: 'https://github.com/replacerog65-dotcom/Restaurant',
  },
]

function Header({ menuOpen, setMenuOpen }) {
  const closeMenu = () => setMenuOpen(false)
  return (
    <header className="site-header">
      <a className="brand" href="#top" onClick={closeMenu} aria-label="Hamisi James, back to top"><span>HJ</span><b>Hamisi James</b></a>
      <nav className={menuOpen ? 'nav-links open' : 'nav-links'} aria-label="Main navigation">
        <a href="#work" onClick={closeMenu}>Work</a>
        <a href="#about" onClick={closeMenu}>About</a>
        <a href="#toolkit" onClick={closeMenu}>Toolkit</a>
        <a href="#contact" onClick={closeMenu}>Contact</a>
        <a className="nav-github" href={GITHUB} target="_blank" rel="noreferrer"><Icon name="github"/> GitHub</a>
      </nav>
      <button className="menu-button" type="button" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}>
        <Icon name={menuOpen ? 'close' : 'menu'} size={24}/>
      </button>
    </header>
  )
}

function ProjectLinks({ live, code }) {
  if (!live && !code) return <span className="development-note"><i/> In active development</span>
  return <div className="card-links">{live && <a href={live} target="_blank" rel="noreferrer">Live site <Icon name="external" size={16}/></a>}{code && <a href={code} target="_blank" rel="noreferrer">Source <Icon name="github" size={16}/></a>}</div>
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const elements = document.querySelectorAll('.reveal')
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.12 })
    elements.forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const close = () => setMenuOpen(false)
    window.addEventListener('resize', close)
    return () => window.removeEventListener('resize', close)
  }, [])

  return (
    <>
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <main id="top">
        <section className="hero section-shell">
          <div className="hero-copy">
            <div className="eyebrow"><span/> Instructional technology × software</div>
            <h1>I build digital tools that help people <em>learn and do.</em></h1>
            <p className="hero-intro">I’m Hamisi James, a developer and instructional technology student at UDOM. I turn learning problems and everyday needs into useful web, mobile and AI products.</p>
            <div className="hero-actions">
              <a className="button primary" href="#work">Explore my work <Icon name="arrow"/></a>
              <a className="text-link" href={GITHUB} target="_blank" rel="noreferrer"><Icon name="github"/> github.com/replacerog65-dotcom</a>
            </div>
            <div className="availability"><span><i/> Open to internships & collaboration</span><span><Icon name="pin" size={16}/> Tanzania</span></div>
          </div>
          <div className="hero-board" aria-label="Current work overview">
            <div className="board-grid"/>
            <div className="board-heading"><span>On my desk / 2026</span><Icon name="spark"/></div>
            <div className="board-title"><small>Current focus</small><strong>Teaching a phone to recognise the food on our plates.</strong></div>
            <div className="board-card board-card-one"><span className="board-number">39</span><p>East African food<br/>classes prepared</p></div>
            <div className="board-card board-card-two"><span><i/><i/><i/></span><p>YOLO → TensorFlow Lite<br/><b>mobile inference</b></p></div>
            <div className="board-footer"><span>NutriVision</span><span>React Native / AI</span></div>
          </div>
          <a className="scroll-cue" href="#work"><span>Scroll to selected work</span><i/></a>
        </section>

        <section className="intro-strip" aria-label="Professional focus">
          <div><span>01</span><p><b>Build</b>Full-stack products</p></div>
          <div><span>02</span><p><b>Design</b>Learning experiences</p></div>
          <div><span>03</span><p><b>Explore</b>Practical mobile AI</p></div>
        </section>

        <section className="work section-shell" id="work">
          <Reveal className="section-intro">
            <div><span className="section-kicker">Selected work</span><h2>Projects with a reason to exist.</h2></div>
            <p>These are the systems where I’ve done my deepest work—across real-time learning, mobile AI and learning-platform administration.</p>
          </Reveal>

          <article className="feature-project feature-quiz">
            <Reveal className="project-copy">
              <div className="project-meta"><span>01 / Learning technology</span><span>Ongoing</span></div>
              <h3>QuizPulse</h3>
              <p className="project-lead">A live quiz room that makes classroom participation visible.</p>
              <p>Instructors can launch a session while learners join and answer in real time. I designed the product across the stack, including authenticated REST APIs, WebSocket events, queues and the session architecture behind the live experience.</p>
              <div className="tech-list"><span>React</span><span>Laravel 13</span><span>Redis</span><span>Reverb</span><span>MySQL</span></div>
              <ProjectLinks />
            </Reveal>
            <Reveal className="visual-wrap"><QuizVisual/></Reveal>
          </article>

          <article className="feature-project feature-nutrition">
            <Reveal className="visual-wrap"><NutritionVisual/></Reveal>
            <Reveal className="project-copy">
              <div className="project-meta"><span>02 / Mobile & AI</span><span>In development</span></div>
              <h3>NutriVision</h3>
              <p className="project-lead">Food recognition designed around what people here actually eat.</p>
              <p>I prepared a 39-class food dataset, trained a YOLO model and exported TensorFlow Lite variants for Android. The broader workflow connects camera recognition with portion estimates, barcode lookup and nutrition data.</p>
              <div className="tech-list"><span>React Native</span><span>YOLO</span><span>TensorFlow Lite</span><span>OpenCV</span><span>MediaPipe</span></div>
              <ProjectLinks />
            </Reveal>
          </article>

          <article className="feature-project feature-canvas">
            <Reveal className="project-copy">
              <div className="project-meta"><span>03 / Platform administration</span><span>Ongoing</span></div>
              <h3>Canvas LMS</h3>
              <p className="project-lead">Learning-platform work from infrastructure to course flow.</p>
              <p>I deployed Canvas locally on Ubuntu, managed its supporting PostgreSQL and Redis services, and worked with users, courses and learning modules. I also evaluated H5P as a route to more interactive learning content.</p>
              <div className="tech-list"><span>Canvas LMS</span><span>Docker</span><span>PostgreSQL</span><span>Redis</span><span>H5P</span></div>
              <ProjectLinks />
            </Reveal>
            <Reveal className="visual-wrap"><CanvasVisual/></Reveal>
          </article>
        </section>

        <section className="builds section-shell" aria-labelledby="builds-title">
          <Reveal className="builds-heading"><span className="section-kicker">More from the workshop</span><h2 id="builds-title">Smaller builds. Real lessons.</h2><p>Not every project needs a grand case study. These helped me sharpen product thinking, responsive UI and full-stack workflows.</p></Reveal>
          <div className="build-grid">
            {smallerProjects.map((project) => (
              <Reveal className={`build-card ${project.className}`} key={project.title}>
                <div className="build-card-head"><span>{project.number}</span><small>{project.type}</small></div>
                {project.visual}
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="build-card-foot"><span>{project.tech}</span><ProjectLinks live={project.live} code={project.code}/></div>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="about section-shell" id="about">
          <Reveal className="about-title"><span className="section-kicker">A little context</span><h2>I sit between the classroom and the codebase.</h2></Reveal>
          <div className="about-grid">
            <Reveal className="about-copy">
              <p className="large-copy">I’m studying <strong>Instructional Design and Information Technology</strong> at the University of Dodoma. That combination shapes the way I work: understand the learner, map the system, then choose the technology.</p>
              <p>I’m most interested in projects where software can remove friction from learning or daily life. I enjoy owning the practical details too—from API contracts and databases to deployment, documentation and the last awkward mobile breakpoint.</p>
              <p>When I’m not building, I’m usually researching a new tool, improving a course experience or helping someone else make sense of technology.</p>
            </Reveal>
            <Reveal className="principles">
              <div><span>01</span><h3>Useful over flashy</h3><p>The interface should make the next step obvious.</p></div>
              <div><span>02</span><h3>Design for context</h3><p>Local needs, devices and connectivity matter.</p></div>
              <div><span>03</span><h3>Keep learning public</h3><p>Document the process, including what is still in progress.</p></div>
            </Reveal>
          </div>
        </section>

        <section className="toolkit" id="toolkit">
          <div className="section-shell toolkit-inner">
            <Reveal className="toolkit-title"><span className="section-kicker">Working toolkit</span><h2>The tools change. The thinking travels.</h2><p>I’m comfortable moving between product layers and choosing what the work actually needs.</p></Reveal>
            <div className="skill-groups">
              <Reveal className="skill-group"><span>01</span><h3>Web products</h3><p>React, Vite, JavaScript, HTML, CSS, Tailwind, accessible responsive interfaces</p></Reveal>
              <Reveal className="skill-group"><span>02</span><h3>Backends & data</h3><p>Laravel, PHP, REST APIs, Sanctum, MySQL, PostgreSQL, Redis, queues, WebSockets</p></Reveal>
              <Reveal className="skill-group"><span>03</span><h3>Mobile & AI</h3><p>React Native CLI, Android, Java, YOLO, TensorFlow Lite, OpenCV, MediaPipe</p></Reveal>
              <Reveal className="skill-group"><span>04</span><h3>Learning systems</h3><p>Instructional design, Canvas LMS, course structure, digital content and H5P</p></Reveal>
              <Reveal className="skill-group"><span>05</span><h3>Shipping</h3><p>Git, GitHub, Docker, Linux, Vercel, Railway and Cloudflare R2</p></Reveal>
            </div>
          </div>
        </section>

        <section className="contact section-shell" id="contact">
          <Reveal className="contact-card">
            <div className="contact-note"><span><i/> Available for the right opportunity</span><small>Dar es Salaam time / EAT</small></div>
            <div className="contact-main"><span className="section-kicker">Let’s make something useful</span><h2>Have a learning problem—or a good product idea?</h2><p>I’m open to internships, educational-technology collaborations and thoughtful software projects. Send me an email and tell me what you’re working on.</p></div>
            <div className="contact-actions">
              <a className="button contact-button" href={`mailto:${EMAIL}`}>Email me <Icon name="arrow"/></a>
              <a className="contact-link" href={`tel:${PHONE_NUMBER}`}>Call {PHONE_DISPLAY}</a>
              <a className="contact-link" href={GITHUB} target="_blank" rel="noreferrer"><Icon name="github"/> GitHub</a>
            </div>
            <div className="contact-mark" aria-hidden="true">HJ</div>
          </Reveal>
        </section>
      </main>
      <footer className="footer section-shell">
        <a className="brand footer-brand" href="#top"><span>HJ</span><b>Hamisi James</b></a>
        <p>Designed and built in Tanzania. <span>© {new Date().getFullYear()}</span></p>
        <div><a href={`mailto:${EMAIL}`}>{EMAIL}</a><a href={`tel:${PHONE_NUMBER}`}>{PHONE_DISPLAY}</a><a href={GITHUB} target="_blank" rel="noreferrer">GitHub <Icon name="external" size={14}/></a><a href="#top">Back to top ↑</a></div>
      </footer>
    </>
  )
}

export default App
