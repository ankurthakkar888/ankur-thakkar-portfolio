const stats = [
  { value: "14+", label: "Years Experience" },
  { value: "AED 7M+", label: "Project Portfolio" },
  { value: "20+", label: "Team Members" },
  { value: "4+", label: "ERP Implementations" },
];

const projects = [
  {
    number: "01",
    title: "EnFM360",
    category: "Digital Transformation",
    description:
      "Enterprise digital transformation platform connecting operational, corporate and customer-facing processes through a unified digital ecosystem.",
  },
  {
    number: "02",
    title: "HRMS Transformation",
    category: "HR & Payroll",
    description:
      "HR and payroll transformation supporting approximately 4,200 employees with integrated attendance, WPS and employee processes.",
  },
  {
    number: "03",
    title: "ERP & CAFM",
    category: "Enterprise Applications",
    description:
      "End-to-end ERP and CAFM implementation experience spanning business analysis, requirements, configuration, UAT and go-live.",
  },
];

const skills = [
  "Digital Transformation",
  "Project Management",
  "Product Ownership",
  "ERP",
  "CAFM",
  "HRMS",
  "Business Applications",
  "Power BI",
  "Microsoft Azure",
  "Microsoft 365",
  "Stakeholder Management",
  "Vendor Management",
];

export default function Home() {
  return (
    <main>
      {/* Navigation */}
      <header className="navbar">
        <div className="container nav-inner">
          <a href="#" className="logo">
            ANKUR<span>.</span>
          </a>

          <nav>
            <a href="#about">About</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Contact</a>
          </nav>

          <a href="#contact" className="nav-button">
            Let&apos;s Connect
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-content">
            <div className="eyebrow">
              <span className="status-dot" />
              AVAILABLE FOR NEW OPPORTUNITIES
            </div>

            <h1>
              Senior IT Professional
              <br />
              <span>Digital Transformation</span>
            </h1>

            <p className="hero-description">
              PMP® Certified IT professional with 14+ years of experience
              delivering digital transformation, enterprise applications,
              ERP/CAFM/HRMS implementations, project management and business
              technology solutions across the UAE.
            </p>

            <div className="hero-actions">
              <a href="#projects" className="primary-button">
                View My Work →
              </a>

              <a href="/Ankur-Thakkar-Resume.pdf" className="secondary-button">
                Download Resume
              </a>
            </div>
          </div>

          <div className="hero-card">
            <div className="card-label">PROFILE</div>

            <div className="profile-placeholder">
              <span>AT</span>
            </div>

            <h2>Ankur Thakkar</h2>
            <p>IT Leadership · Transformation · Technology</p>

            <div className="card-line" />

            <div className="profile-row">
              <span>Based in</span>
              <strong>Dubai, UAE</strong>
            </div>

            <div className="profile-row">
              <span>Experience</span>
              <strong>14+ Years</strong>
            </div>

            <div className="profile-row">
              <span>Certification</span>
              <strong>PMP®</strong>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="stats-section">
        <div className="container stats-grid">
          {stats.map((stat) => (
            <div className="stat" key={stat.label}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="section">
        <div className="container two-column">
          <div>
            <p className="section-kicker">01 / ABOUT</p>
            <h2 className="section-title">
              Bridging business
              <br />
              <span>and technology.</span>
            </h2>
          </div>

          <div className="about-text">
            <p>
              I am a Senior IT Professional focused on digital transformation,
              project management, enterprise applications and technology
              leadership.
            </p>

            <p>
              My experience covers the complete technology lifecycle — from
              understanding business challenges and defining requirements to
              solution implementation, stakeholder management, vendor
              governance, adoption and continuous improvement.
            </p>

            <p>
              I combine business analysis with hands-on technology knowledge
              to translate business objectives into practical, scalable
              solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="section dark-section">
        <div className="container">
          <p className="section-kicker">02 / EXPERIENCE</p>

          <h2 className="section-title">
            A career built around
            <br />
            <span>technology transformation.</span>
          </h2>

          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-year">2021 — 2026</div>

              <div className="timeline-content">
                <h3>IT Manager</h3>
                <p className="company">Emirates National Facilities Management</p>

                <p>
                  Established and developed the IT function while leading
                  enterprise technology, digital transformation, business
                  applications, infrastructure, vendors and a multi-million
                  dirham project portfolio.
                </p>

                <div className="tags">
                  <span>IT Leadership</span>
                  <span>Digital Transformation</span>
                  <span>ERP</span>
                  <span>Azure</span>
                  <span>Power BI</span>
                </div>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-year">2017 — 2021</div>

              <div className="timeline-content">
                <h3>Product Consultant / Functional Product Specialist</h3>
                <p className="company">Lattice</p>

                <p>
                  Worked across ERP and CAFM implementations, business
                  requirements, product functionality and customer
                  transformation initiatives.
                </p>

                <div className="tags">
                  <span>ERP</span>
                  <span>CAFM</span>
                  <span>Business Analysis</span>
                  <span>Product</span>
                </div>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-year">2014 — 2017</div>

              <div className="timeline-content">
                <h3>Associate Product Analyst / ERP Solutions Specialist</h3>
                <p className="company">Realtime</p>

                <p>
                  Supported ERP solutions, product analysis, implementation
                  activities and business requirements.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-year">2012 — 2014</div>

              <div className="timeline-content">
                <h3>.NET Developer</h3>
                <p className="company">Suntech</p>

                <p>
                  Application development and software engineering experience
                  forming the technical foundation of my career.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="section">
        <div className="container">
          <p className="section-kicker">03 / SELECTED WORK</p>

          <div className="section-heading-row">
            <h2 className="section-title">
              Transformation
              <br />
              <span>in action.</span>
            </h2>

            <p>
              Selected programs demonstrating my experience across digital
              transformation, enterprise applications and technology
              delivery.
            </p>
          </div>

          <div className="projects-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.number}>
                <div className="project-number">{project.number}</div>

                <p className="project-category">{project.category}</p>

                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <a href="#contact">View Case Study →</a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="section skills-section">
        <div className="container">
          <p className="section-kicker">04 / EXPERTISE</p>

          <h2 className="section-title">
            Technology &amp;
            <br />
            <span>leadership expertise.</span>
          </h2>

          <div className="skills-grid">
            {skills.map((skill) => (
              <div className="skill" key={skill}>
                <span>✦</span>
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="cta-section">
        <div className="container cta-content">
          <p className="section-kicker">05 / LET&apos;S CONNECT</p>

          <h2>
            Let&apos;s build something
            <br />
            <span>meaningful.</span>
          </h2>

          <p>
            Open to opportunities across IT leadership, digital
            transformation, project management, business applications and
            technology programs.
          </p>

          <div className="hero-actions">
            <a
              href="mailto:ankurthakkar8@gmail.com"
              className="primary-button"
            >
              Email Me →
            </a>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="secondary-button"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="container footer-inner">
          <span>© {new Date().getFullYear()} Ankur Thakkar</span>
          <span>Senior IT Professional · Dubai, UAE</span>
        </div>
      </footer>
    </main>
  );
}