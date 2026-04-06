import { NavLink, Outlet } from "react-router-dom";
import { profile } from "../data/profile";

const nav = [
  { to: "/", label: "Home" },
  { to: "/professional", label: "Professional" },
  { to: "/research", label: "Research" },
  { to: "/skills", label: "Skills" }
];

export function SiteLayout() {
  return (
    <main className="page-shell">
      <header className="top-nav reveal">
        <NavLink className="brand" to="/">
          <span className="brand-mark">SP</span>
          <span className="brand-copy">
            <strong>Swetha Sri Pinnamaneni</strong>
            <small>Scientist</small>
          </span>
        </NavLink>
        <nav aria-label="Main navigation">
          {nav.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) => (isActive ? "active" : "")}
              end={item.to === "/"}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </header>
      <div className="page-content">
        <Outlet />
      </div>
      <footer className="site-footer">
        <div className="footer-inner">
          <div className="footer-left">
            <span className="footer-name">{profile.name}</span>
            <span className="footer-edu">
              {profile.education.degree} · {profile.education.school}, {profile.education.graduation}
            </span>
          </div>
          <div className="footer-right">
            <a href={profile.contacts.linkedinUrl} target="_blank" rel="noreferrer" className="footer-link">
              LinkedIn
            </a>
            <span className="footer-copy">© {new Date().getFullYear()}</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
