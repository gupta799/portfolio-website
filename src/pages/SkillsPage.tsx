import { SectionTitle } from "../components/SectionTitle";
import { profile } from "../data/profile";

export function SkillsPage() {
  return (
    <section className="content-section page-top-space">
      <SectionTitle eyebrow="Technical Skills" title="Lab, Instrumentation, Software, Compliance" />
      <div className="work-grid">
        {profile.technicalSkills.map((group, index) => (
          <article
            key={group.category}
            className="work-card reveal"
            style={{ animationDelay: `${index * 90}ms` }}
          >
            <h3>{group.category}</h3>
            <p>{group.items.join(", ")}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
