import { SectionTitle } from "../components/SectionTitle";
import { profile } from "../data/profile";

export function ContactPage() {
  return (
    <section className="content-section page-top-space contact">
      <SectionTitle eyebrow="Contact" title="Connect on LinkedIn" />
      <div className="contact-panel reveal">
        <a className="btn primary" href={profile.contacts.linkedinUrl} target="_blank" rel="noreferrer">
          LinkedIn
        </a>
      </div>
      <article className="timeline-item reveal">
        <h3>{profile.name}</h3>
        <ul>
          <li>{profile.contacts.linkedin}</li>
        </ul>
      </article>
    </section>
  );
}
