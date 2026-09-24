import { BriefcaseBusiness, CalendarDays, MapPin } from "lucide-react";
import type { Experience } from "@/data/experience";

type ExperienceTimelineProps = {
  experience: Experience[];
};

export default function ExperienceTimeline({
  experience,
}: ExperienceTimelineProps) {
  return (
    <div className="experience-timeline">
      {experience.map((item, index) => (
        <article className="experience-item" key={`${item.company}-${item.period}`}>
          <div className="experience-marker">
            <BriefcaseBusiness size={18} />
          </div>

          <div className="experience-card">
            <div className="experience-top">
              <div>
                <span className="experience-period">
                  <CalendarDays size={14} />
                  {item.period}
                </span>

                <h3>{item.role}</h3>

                <p className="experience-company">{item.company}</p>
              </div>

              <span className="experience-location">
                <MapPin size={14} />
                Dubai, UAE
              </span>
            </div>

            <p className="experience-description">
              {item.description}
            </p>

            <div className="experience-highlights">
           {item.achievements.map((achievement) => (
  <div className="experience-highlight" key={achievement}>
    <span>✓</span>
    <p>{achievement}</p>
  </div>
))}
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}