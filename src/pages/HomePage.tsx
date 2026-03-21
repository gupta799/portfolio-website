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
        <div className="hero-actions reveal">
          <a className="btn ghost" href={profile.contacts.linkedinUrl} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>
        <div className="lab-visual reveal" aria-hidden="true">
          <div className="lab-orb orb-a" />
          <div className="lab-orb orb-b" />
          <div className="lab-orb orb-c" />
          <div className="workflow">
            <span>Sample Prep</span>
            <span>Analysis</span>
            <span>Reporting</span>
          </div>
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
