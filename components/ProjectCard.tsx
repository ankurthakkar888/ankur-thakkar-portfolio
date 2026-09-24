import {
  ArrowUpRight,
  BarChart3,
  Cloud,
  FileText,
  Globe2,
  Layers3,
  Receipt,
  Users,
} from "lucide-react";

type Project = {
  title: string;
  category: string;
  period: string;
  featured: boolean;
  description: string;
  scope: string[];
  role: string;
  technologies: string[];
  outcomes: string[];
  awards?: string[];
};

const icons = {
  "Digital Transformation": Layers3,
  "HR Technology": Users,
  "ERP / CAFM": Globe2,
  "Business Applications": FileText,
  "Customer Experience": Globe2,
  "Data & Analytics": BarChart3,
  "Cloud & Infrastructure": Cloud,
  "Tax Technology / Digital Transformation": Receipt,
};

export default function ProjectCard({ project }: { project: Project }) {
  const Icon = icons[project.category as keyof typeof icons] || Layers3;

  return (
    <article
      className={`project-card ${project.featured ? "featured" : ""}`}
    >
      <div className="project-icon">
        <Icon size={22} />
      </div>

      <div className="project-meta">
        <span>{project.category}</span>
        <span>{project.period}</span>
      </div>

      <h3>{project.title}</h3>

      <p className="project-description">
        {project.description}
      </p>

      <div className="project-block">
        <strong>Key Scope</strong>

        <div className="tag-list">
          {project.scope.slice(0, 6).map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </div>

      <div className="project-block">
        <strong>Key Outcomes</strong>

        <ul className="outcome-list">
          {project.outcomes.slice(0, 3).map((outcome) => (
            <li key={outcome}>{outcome}</li>
          ))}
        </ul>
      </div>

      {project.awards && project.awards.length > 0 && (
        <div className="project-awards">
          <strong>Awards & Recognition</strong>

          {project.awards.map((award) => (
            <span key={award}>🏆 {award}</span>
          ))}
        </div>
      )}

      <div className="project-footer">
        <span>Case Study</span>
        <ArrowUpRight size={18} />
      </div>
    </article>
  );
}