import {
  ArrowDownToLine,
  ArrowRight,
  BriefcaseBusiness,
  CheckCircle2,
  MapPin,
  Mail,
} from "lucide-react";

import Navbar from "@/components/Navbar";
import ProjectCard from "@/components/ProjectCard";
import ExperienceTimeline from "@/components/ExperienceTimeline";

import { experience } from "@/data/experience";
import { projects } from "@/data/projects";
import { skills } from "@/data/skills";
import { certifications } from "@/data/certifications";
import { awards } from "@/data/awards";

console.log("projects:", projects);
console.log("skills:", skills);
console.log("certifications:", certifications);
console.log("experience:", experience);

export default function Home() {
  return (
    <main>
      <Navbar />

      {/* HERO */}
      <section className="hero">
        <div className="hero-grid container">

          {/* HERO CONTENT */}
          <div className="hero-content">
            <div className="availability">
              <span className="availability-dot" />
              AVAILABLE FOR NEW OPPORTUNITIES
            </div>

            <div className="hero-kicker">
              <BriefcaseBusiness size={17} />
              <span>SENIOR IT LEADERSHIP</span>
            </div>

            <h1>
              Transforming
              <span>Technology Into Business Value.</span>
            </h1>

            <p className="hero-text">
              PMP® Certified Senior IT Professional with 14+ years of UAE
              experience across digital transformation, ERP, business
              applications, project management, product ownership and
              technology leadership.
            </p>

            <div className="hero-actions">
              <a href="#projects" className="btn btn-primary">
                Explore My Work
                <ArrowRight size={17} />
              </a>

              <a
                href="/Ankur-Thakkar-Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                Download CV
                <ArrowDownToLine size={17} />
              </a>
            </div>

            <div className="hero-contact">
              <a href="mailto:ankurthakkar8@gmail.com">
                <Mail size={15} />
                <span>Email</span>
              </a>

              <a
                href="https://www.linkedin.com/in/ankurthakkar-pm/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          {/* HERO PROFILE */}
          <div className="hero-profile">
            <div className="profile-glow" />

            <div className="profile-card">
              <div className="profile-image-wrapper">
                <img
                  src="/profile/ankur-thakkar.jpg"
                  alt="Ankur Thakkar - Senior IT Professional"
                />
              </div>

              <div className="profile-status">
                <CheckCircle2 size={16} />
                <span>PMP® Certified</span>
              </div>

              <h2>Ankur Thakkar</h2>

              <p className="profile-title">
                IT Leadership · Digital Transformation
              </p>

              <div className="profile-location">
                <MapPin size={15} />
                <span>Dubai, United Arab Emirates</span>
              </div>
            </div>

            <div className="floating-stat stat-one">
              <strong>14+</strong>
              <span>Years UAE</span>
            </div>

            <div className="floating-stat stat-two">
              <strong>AED 7M+</strong>
              <span>Project Portfolio</span>
            </div>
          </div>

        </div>
      </section>

      {/* STATS */}
      <section className="stats-section">
        <div className="container stats-grid">
          <div className="stat">
            <strong>14+</strong>
            <span>Years Experience</span>
          </div>

          <div className="stat">
            <strong>AED 7M+</strong>
            <span>Project Portfolio</span>
          </div>

          <div className="stat">
            <strong>20+</strong>
            <span>Team Members Led</span>
          </div>

          <div className="stat">
            <strong>4+</strong>
            <span>ERP Implementations</span>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="section">
        <div className="container">
          <div className="section-heading">
            <span>01 — ABOUT</span>
            <h2>Technology leadership with a business mindset.</h2>
          </div>

          <div className="about-grid">
            <div>
              <p>
               I am a Senior IT Professional with 14+ years of experience in the UAE, leading technology, digital transformation, business applications, ERP, and strategic IT initiatives.
              </p>

              <p>
                My career has evolved across software development, ERP consulting, product management, business analysis, project management, and IT leadership. This broad experience has given me a practical understanding of both technology and business operations — and the ability to connect the two effectively.
              </p>

		<p>
In my recent leadership role, I have been responsible for shaping IT strategy, managing teams and technology partners, overseeing budgets and project portfolios, and delivering business-critical applications and digital transformation initiatives. I have worked closely with senior management and business stakeholders to understand operational challenges, define technology roadmaps, prioritize investments, and turn ideas into practical solutions.
		</p>

<p>
My experience includes:
<ul>
  <li>IT Strategy & Digital Transformation</li>
  <li>ERP, CAFM, HRMS & Business Applications</li>
  <li>Project & Program Management</li>
  <li>Business Analysis & Process Improvement</li>
  <li>Product Ownership & Solution Delivery</li>
  <li>Team, Vendor & Stakeholder Management</li>
  <li>Power BI, Data & Management Reporting</li>
  <li>Microsoft 365, Azure & Enterprise IT</li>
  <li>Emerging Technology, AI & Automation</li>
</ul>
	</p>

<p>
I enjoy working at the intersection of business, technology, and people — whether that means modernizing legacy processes, implementing enterprise platforms, improving operational visibility, building capable IT teams, or leading complex transformation programs.
	</p>

<p>
I am particularly interested in leadership opportunities where I can take ownership of technology strategy and execution while creating measurable business value and building a scalable, future-ready IT environment.
</p>

<p>
PMP® Certified | Digital Transformation | IT Leadership | ERP & Business Applications | Project Management | Technology Strategy
</p>
            </div>

           <div className="about-highlight">
  <div className="approach-header">
    <span>MY APPROACH</span>
    <h3>How I Lead Technology & Transformation</h3>
    <p>
      I connect business priorities with practical technology solutions —
      from strategy and stakeholder alignment through delivery,
      measurement, and continuous improvement.
    </p>
  </div>

  <div className="approach-list">

    <div className="approach-item">
      <span className="approach-number">01</span>
      <div>
        <h4>Business First</h4>
        <p>
          Understand the business problem, operational challenges, and
          desired outcomes before selecting the right technology solution.
        </p>
      </div>
    </div>

    <div className="approach-item">
      <span className="approach-number">02</span>
      <div>
        <h4>Strategy → Execution</h4>
        <p>
          Translate business priorities into practical technology
          roadmaps, projects, and measurable outcomes.
        </p>
      </div>
    </div>

    <div className="approach-item">
      <span className="approach-number">03</span>
      <div>
        <h4>People & Stakeholders</h4>
        <p>
          Build alignment across leadership, business teams, IT teams,
          and technology partners to keep transformation moving.
        </p>
      </div>
    </div>

    <div className="approach-item">
      <span className="approach-number">04</span>
      <div>
        <h4>Governance & Accountability</h4>
        <p>
          Establish clear ownership, priorities, risks, budgets,
          timelines, and decision-making throughout delivery.
        </p>
      </div>
    </div>

    <div className="approach-item">
      <span className="approach-number">05</span>
      <div>
        <h4>Measure & Improve</h4>
        <p>
          Measure adoption, efficiency, cost, and business impact —
          then continuously improve the solutions delivered.
        </p>
      </div>
    </div>

  </div>

  <div className="approach-flow">
    <span>Understand</span>
    <span>→</span>
    <span>Define</span>
    <span>→</span>
    <span>Align</span>
    <span>→</span>
    <span>Deliver</span>
    <span>→</span>
    <span>Measure</span>
    <span>→</span>
    <span>Improve</span>
  </div>
</div>          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="section">
        <div className="container">
          <div className="section-heading">
            <span>02 — CAREER JOURNEY</span>

            <h2>Experience That Delivers Results.</h2>

            <p>
              14+ years of experience across IT leadership, digital
              transformation, enterprise applications, and technology
              delivery.
            </p>
          </div>

          <ExperienceTimeline experience={experience} />
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="section">
        <div className="container">
          <div className="section-heading">
            <span>03 — PROJECT PORTFOLIO</span>

            <h2>Selected transformation initiatives.</h2>
          </div>

          <div className="projects-grid">
            {projects.map((project) => (
              <ProjectCard
                key={project.title}
                project={project}
              />
            ))}
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="section section-dark">
        <div className="container">
          <div className="section-heading">
            <span>04 — SKILLS & TECHNOLOGY</span>

            <h2>Business, technology and delivery expertise.</h2>
          </div>

          <div className="skills-grid">
            {skills.map((group) => (
              <div className="skill-group" key={group.category}>
                <h3>{group.category}</h3>

                <div className="tag-list">
                  {group.skills.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section id="certifications" className="section">
        <div className="container">
          <div className="section-heading">
            <span>05 — CREDENTIALS</span>

            <h2>Professional certification & education.</h2>
          </div>

          <div className="certifications-grid">
            {certifications.map((certification) => (
              <article
                className="certification-card"
                key={certification.name}
              >
                <div className="cert-icon">✓</div>

                <div>
                  <span>{certification.type}</span>

                  <h3>{certification.name}</h3>

                  <h4>{certification.issuer}</h4>

                  <p>{certification.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

{/* AWARDS & RECOGNITION */}
<section id="awards" className="section awards-section">
  <div className="container">

    <div className="section-heading">
      <span>06 — AWARDS & RECOGNITION</span>

      <h2>Recognition for technology & transformation.</h2>

      <p>
        Recognition received for technology leadership, digital transformation,
        innovation, and successful implementation of business-focused solutions.
      </p>
    </div>

    <div className="awards-grid">
      {awards.map((award) => (
        <article className="award-card" key={`${award.year}-${award.title}`}>

          <div className="award-top">
            <span className="award-year">{award.year}</span>
            <span className="award-mark">★</span>
          </div>

          <div className="award-content">
            <span className="award-organization">
              {award.organization}
            </span>

            <h3>{award.title}</h3>

            <p>{award.description}</p>
          </div>

        </article>
      ))}
    </div>

  </div>
</section>

      {/* CONTACT */}
      <section id="contact" className="section contact-section">
        <div className="container contact-inner">

          <div>
            <span className="eyebrow">07 — CONTACT</span>

            <h2>
              Let's build something
              <span>meaningful.</span>
            </h2>

            <p>
              Open to senior IT leadership, digital transformation, project
              management, business applications and technology opportunities.
            </p>
          </div>

          <div className="contact-links">
            <a href="mailto:ankurthakkar8@gmail.com">
              ankurthakkar8@gmail.com
            </a>

            <a href="tel:+971501002801">
              +971 50 100 2801
            </a>

            <a
              href="https://www.linkedin.com/in/ankurthakkar-pm/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn →
            </a>
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container footer-inner">
          <span>
            © {new Date().getFullYear()} Ankur Thakkar
          </span>

          <span>
            Senior IT Professional · Digital Transformation
          </span>
        </div>
      </footer>
    </main>
  );
}