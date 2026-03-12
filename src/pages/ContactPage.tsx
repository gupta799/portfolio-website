import { SectionTitle } from "../components/SectionTitle";
import { profile } from "../data/profile";

export function ContactPage() {
  return (
    <section className="content-section page-top-space contact">
      <SectionTitle eyebrow="Contact" title="Get in touch" />
      <div className="contact-panel reveal">
        <a className="btn primary" href={`mailto:${profile.contacts.email}`}>
          Email
        </a>
        <a className="btn ghost" href={`tel:${profile.contacts.phone.replace(/-/g, "")}`}>
          Call
        </a>
        <a className="btn ghost" href={profile.contacts.linkedinUrl} target="_blank" rel="noreferrer">
          LinkedIn
        </a>
      </div>
      <article className="timeline-item reveal">
        <h3>{profile.name}</h3>
        <ul>
          <li>{profile.contacts.phone}</li>
          <li>{profile.contacts.email}</li>
          <li>{profile.contacts.linkedin}</li>
          <li>{profile.location}</li>
        </ul>
      </article>
    </section>
  );
}
