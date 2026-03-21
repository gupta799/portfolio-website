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
        <div className="lab-showcase reveal" aria-hidden="true">
          <article className="lab-card chromatogram-card">
            <p className="lab-card-title">HPLC / UV-Vis (QC)</p>
            <div className="chromatogram">
              <svg viewBox="0 0 320 96" preserveAspectRatio="none" className="chromatogram-svg">
                <polyline
                  points="0,82 20,78 42,64 58,24 76,80 92,74 118,66 136,34 154,78 176,70 202,58 218,18 236,82 258,72 282,68 320,62"
                  className="chromatogram-trace"
                />
              </svg>
              <span className="scan-line" />
            </div>
          </article>

          <article className="lab-card pcr-card">
            <p className="lab-card-title">PCR Cycle</p>
            <div className="pcr-bands">
              <span className="pcr-band denature">Denature</span>
              <span className="pcr-band anneal">Anneal</span>
              <span className="pcr-band extend">Extend</span>
            </div>
            <div className="pcr-well">
              <span />
            </div>
          </article>

          <article className="lab-card flow-card">
            <p className="lab-card-title">Sample to Report</p>
            <div className="workflow">
              <span>Sample Prep</span>
              <span>Analysis</span>
              <span>Reporting</span>
              <i className="flow-dot" />
            </div>
          </article>
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
