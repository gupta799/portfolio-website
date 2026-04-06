import { SectionTitle } from "../components/SectionTitle";
import { profile } from "../data/profile";

export function ResearchPage() {
  return (
    <section className="content-section page-top-space">
      <SectionTitle eyebrow="Research Experience" title="The Ohio State University" />
      <div className="timeline">
        {profile.researchExperience.map((item) => (
          <article key={`${item.company}-${item.role}`} className="timeline-item reveal">
            <p className="timeline-period">{item.period}</p>
            <h3>{item.role}</h3>
            <h4>
              {item.company} | {item.location}
            </h4>
            <div className="role-focus-tags">
              {item.tags.map((tag) => (
                <span key={tag} className="role-focus-tag">{tag}</span>
              ))}
            </div>
            <ul>
              {[...item.bullets, ...profile.additionalResearchHighlights].map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
