import portraitSrc from "../assets/swetha-portrait.jpeg";
import { profile } from "../data/profile";
import { SectionTitle } from "../components/SectionTitle";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
export function HomePage() {
  return (
    <>
      <section className="hero">
        <DotLottieReact
          src="https://lottie.host/6977e0ce-d63c-4ec8-b2cd-cad501882f04/l5XLPcRVXO.lottie"
          loop
          autoplay
          className="lottie-hero-bg"
        />
        <div className="hero-top">
            <div className="hero-copy">
              <p className="hero-kicker reveal">Biotechnology Scientist</p>
              <h1 className="reveal">{profile.name}</h1>
              <p className="hero-headline reveal">{profile.headline}</p>
              <p className="hero-intro reveal">{profile.summary}</p>
              <div className="hero-actions reveal">
                <a className="btn ghost" href={profile.contacts.linkedinUrl} target="_blank" rel="noreferrer">
                  LinkedIn
                </a>
              </div>
              <div className="hero-meta reveal">
                {profile.heroPills.map((item) => (
                  <article key={item.label} className="meta-pill">
                    <strong>{item.label}</strong>
                    <span>{item.value}</span>
                  </article>
                ))}
              </div>
            </div>

            <article className="portrait-card reveal">
              <img className="portrait-image" src={portraitSrc} alt={profile.portrait.alt} />
            </article>
        </div>
      </section>

      <section className="content-section">
        <SectionTitle eyebrow="" title="Work Summary" />
        <div className="about-box reveal">
          <p>
            Scientist with hands-on experience in cGMP analytical testing, instrument analysis,
            data review, data analysis, reporting, and SOP-based documentation in regulated
            laboratory environments.
          </p>
        </div>
      </section>

      <section className="content-section">
        <SectionTitle eyebrow="" title="Current Technical Strengths" />
        <div className="proof-grid">
          {profile.proofHighlights.map((item, index) => (
            <article
              key={item.title}
              className="proof-card reveal"
              style={{ animationDelay: `${index * 90}ms` }}
            >
              <p className="proof-label">{item.label}</p>
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
