import { SectionTitle } from "../components/SectionTitle";
import { profile } from "../data/profile";

export function ProfessionalPage() {
  return (
    <section className="content-section page-top-space">
      <SectionTitle eyebrow="Professional Experience" title="ThermoFisher Scientific" />
      <div className="timeline">
        {profile.professionalExperience.map((item) => (
          <article key={`${item.company}-${item.role}`} className="timeline-item reveal">
            <p className="timeline-period">{item.period}</p>
            <h3>{item.role}</h3>
            <h4>
              {item.company} | {item.location}
            </h4>
            <ul>
              {item.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
