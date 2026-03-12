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
            <ul>
              {item.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <SectionTitle eyebrow="Additional Highlights" title="Selected Research Outcomes" />
      <article className="timeline-item reveal">
        <ul>
          {profile.additionalResearchHighlights.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </article>
    </section>
  );
}
