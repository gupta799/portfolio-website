import { render, screen } from "@testing-library/react";
import App from "../../App";
import { describe, expect, it } from "vitest";

function renderAt(path: string) {
  window.history.pushState({}, "", path);
  return render(<App />);
}

describe("portfolio regression suite", () => {
  it("renders home page content for Swetha", () => {
    renderAt("/");

    expect(screen.getByRole("heading", { level: 1, name: /swetha sri pinnamaneni/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { level: 2, name: /scientist profile/i })).toBeInTheDocument();
  });

  it("renders professional route directly", () => {
    renderAt("/professional");

    expect(screen.getByRole("heading", { level: 2, name: /thermofisher scientific/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { level: 3, name: /scientist i/i })).toBeInTheDocument();
  });

  it("renders research route and excludes removed leadership section", () => {
    renderAt("/research");

    expect(screen.getByRole("heading", { level: 2, name: /the ohio state university/i })).toBeInTheDocument();
    expect(screen.queryByText(/english conversation program/i)).not.toBeInTheDocument();
  });

  it("renders skills route", () => {
    renderAt("/skills");
    expect(screen.getByRole("heading", { level: 3, name: /laboratory techniques/i })).toBeInTheDocument();
  });

  it("renders education route", () => {
    renderAt("/education");
    expect(screen.getByRole("heading", { name: /bachelor of science in biology/i })).toBeInTheDocument();
  });

  it("renders contact route with email and linkedin actions", () => {
    renderAt("/contact");

    expect(screen.getByRole("link", { name: /email/i })).toHaveAttribute("href", "mailto:toswethasri@gmail.com");
    expect(screen.getByRole("link", { name: /linkedin/i })).toHaveAttribute(
      "href",
      "https://www.linkedin.com/in/pinnamaneni/"
    );
  });
});
