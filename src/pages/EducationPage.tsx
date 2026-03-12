import { SectionTitle } from "../components/SectionTitle";
import { profile } from "../data/profile";

export function EducationPage() {
  return (
    <section className="content-section page-top-space">
      <SectionTitle eyebrow="Education" title={profile.education.school} />
      <article className="timeline-item reveal">
        <p className="timeline-period">Graduated {profile.education.graduation}</p>
        <h3>{profile.education.degree}</h3>
        <h4>{profile.education.location}</h4>
        <p>Relevant Coursework: {profile.education.coursework.join(", ")}</p>
      </article>
    </section>
  );
}
