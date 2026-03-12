import { NavLink, Outlet } from "react-router-dom";

const nav = [
  { to: "/", label: "Home" },
  { to: "/professional", label: "Professional" },
  { to: "/research", label: "Research" },
  { to: "/skills", label: "Skills" },
  { to: "/education", label: "Education" },
  { to: "/contact", label: "Contact" }
];

export function SiteLayout() {
  return (
    <main className="page-shell">
      <header className="top-nav reveal">
        <NavLink className="brand" to="/">
          SP
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
      <Outlet />
    </main>
  );
}
