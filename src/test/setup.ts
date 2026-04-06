import "@testing-library/jest-dom/vitest";
import { cleanup } from "@testing-library/react";
import { afterEach } from "vitest";

class MockIntersectionObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
  takeRecords() {
    return [];
  }
}

class MockResizeObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
}

if (!("IntersectionObserver" in globalThis)) {
  globalThis.IntersectionObserver =
    MockIntersectionObserver as unknown as typeof IntersectionObserver;
}

if (!("ResizeObserver" in globalThis)) {
  globalThis.ResizeObserver = MockResizeObserver as unknown as typeof ResizeObserver;
}

afterEach(() => {
  cleanup();
});
