import { SectionTitle } from "../components/SectionTitle";
import { profile } from "../data/profile";

export function SkillsPage() {
  return (
    <section className="content-section page-top-space">
      <SectionTitle eyebrow="" title="Data Analysis & Reporting" />
      <div className="role-focus-tags reveal">
        {profile.analyticalSkills.tags.map((tag) => (
          <span key={tag} className="role-focus-tag">{tag}</span>
        ))}
      </div>
      <div className="analytics-proficiency-grid reveal">
        {profile.analyticalSkills.proficiencies.map((item, index) => (
          <article
            key={item.title}
            className={`analytics-panel${index % 2 === 1 ? " analytics-panel-soft" : ""}`}
          >
            <h4>{item.title}</h4>
            <p>{item.detail}</p>
          </article>
        ))}
      </div>

      <SectionTitle eyebrow="" title="Laboratory & Technical Skills" />
      <div className="work-grid">
        {profile.technicalSkills.map((group, index) => (
          <article
            key={group.category}
            className="work-card reveal"
            style={{ animationDelay: `${index * 90 + 120}ms` }}
          >
            <h3>{group.category}</h3>
            <div className="role-focus-tags">
              {group.items.slice(0, 4).map((item) => (
                <span key={item} className="role-focus-tag">{item}</span>
              ))}
            </div>
            <p>{group.items.join(", ")}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
