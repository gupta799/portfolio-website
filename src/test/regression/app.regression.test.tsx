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
    expect(screen.getByRole("heading", { level: 2, name: /work summary/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { level: 2, name: /current technical strengths/i })).toBeInTheDocument();
    expect(screen.getByText(/scientist \| analytical testing, data analysis, regulated reporting/i)).toBeInTheDocument();
    expect(screen.getByRole("img", { name: /portrait of swetha sri pinnamaneni/i })).toBeInTheDocument();
    expect(screen.getByText(/technical report writing/i)).toBeInTheDocument();
    expect(screen.getByText(/bachelor of science in biology/i)).toBeInTheDocument();
    expect(screen.queryByText(/transitioning into data science/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/ms in data science starting 2027/i)).not.toBeInTheDocument();
    expect(
      screen.getAllByRole("link", { name: /linkedin/i }).some((link) =>
        link.getAttribute("href") === "https://www.linkedin.com/in/pinnamaneni/"
      )
    ).toBe(true);
    expect(screen.queryByText(/toswethasri@gmail.com/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/248-657-0635/i)).not.toBeInTheDocument();
  });

  it("renders professional route directly", () => {
    renderAt("/professional");

    expect(screen.getByRole("heading", { level: 2, name: /thermofisher scientific/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { level: 3, name: /scientist i/i })).toBeInTheDocument();
    expect(screen.getAllByText(/secondary data review/i).length).toBeGreaterThan(0);
    expect(screen.getByText(/biovia workbook/i)).toBeInTheDocument();
    expect(screen.getByText(/methods & instrumentation/i)).toBeInTheDocument();
  });

  it("renders research route and excludes removed leadership section", () => {
    renderAt("/research");

    expect(screen.getByRole("heading", { level: 2, name: /the ohio state university/i })).toBeInTheDocument();
    expect(screen.queryByText(/english conversation program/i)).not.toBeInTheDocument();
  });

  it("renders skills route", () => {
    renderAt("/skills");
    expect(screen.getByRole("heading", { level: 3, name: /laboratory techniques/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { level: 2, name: /data analysis & reporting/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { level: 4, name: /statistical analysis/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { level: 4, name: /scientific reporting/i })).toBeInTheDocument();
    expect(screen.getAllByText(/graphpad prism/i).length).toBeGreaterThan(0);
  });

  it("redirects removed education-contact route back to home and keeps footer content", () => {
    renderAt("/education-contact");
    expect(screen.getByRole("heading", { level: 1, name: /swetha sri pinnamaneni/i })).toBeInTheDocument();
    expect(screen.queryByRole("link", { name: /education & contact/i })).not.toBeInTheDocument();
    expect(screen.getByText(/bachelor of science in biology/i)).toBeInTheDocument();
    expect(screen.getAllByText(/swetha sri pinnamaneni/i).length).toBeGreaterThan(0);
    expect(
      screen.getAllByRole("link", { name: /linkedin/i }).some((link) =>
        link.getAttribute("href") === "https://www.linkedin.com/in/pinnamaneni/"
      )
    ).toBe(true);
    expect(screen.queryByRole("link", { name: /email/i })).not.toBeInTheDocument();
    expect(screen.queryByRole("link", { name: /call/i })).not.toBeInTheDocument();
    expect(screen.queryByText(/toswethasri@gmail.com/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/248-657-0635/i)).not.toBeInTheDocument();
  });
});
