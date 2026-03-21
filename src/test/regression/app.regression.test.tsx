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
    expect(screen.getByRole("link", { name: /linkedin/i })).toHaveAttribute(
      "href",
      "https://www.linkedin.com/in/pinnamaneni/"
    );
    expect(screen.queryByText(/toswethasri@gmail.com/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/248-657-0635/i)).not.toBeInTheDocument();
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

  it("renders contact route with linkedin-only action", () => {
    renderAt("/contact");

    expect(screen.getByRole("heading", { level: 2, name: /connect on linkedin/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /linkedin/i })).toHaveAttribute(
      "href",
      "https://www.linkedin.com/in/pinnamaneni/"
    );
    expect(screen.queryByRole("link", { name: /email/i })).not.toBeInTheDocument();
    expect(screen.queryByRole("link", { name: /call/i })).not.toBeInTheDocument();
    expect(screen.queryByText(/toswethasri@gmail.com/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/248-657-0635/i)).not.toBeInTheDocument();
  });
});
