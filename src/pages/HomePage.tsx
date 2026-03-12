import { profile } from "../data/profile";
import { SectionTitle } from "../components/SectionTitle";

export function HomePage() {
  return (
    <>
      <section className="hero">
        <p className="hero-kicker reveal">Portfolio</p>
        <h1 className="reveal">{profile.name}</h1>
        <p className="hero-headline reveal">{profile.headline}</p>
        <p className="hero-intro reveal">{profile.summary}</p>
        <div className="contact-line reveal">
          <span>{profile.contacts.phone}</span>
          <span>{profile.contacts.email}</span>
          <span>{profile.contacts.linkedin}</span>
          <span>{profile.location}</span>
        </div>
      </section>

      <section className="content-section">
        <SectionTitle eyebrow="About" title="Scientist Profile" />
        <div className="about-box reveal">
          <p>
            Biotechnology scientist with hands-on experience in cGMP analytical testing and research
            workflows spanning sample prep, analysis, data review, reporting, and SOP documentation.
          </p>
        </div>
      </section>
    </>
  );
}
