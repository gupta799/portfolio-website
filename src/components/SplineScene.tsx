import { Component, Suspense, lazy, type ReactNode } from "react";

const Spline = lazy(() => import("@splinetool/react-spline"));

// Catches any crash from the Spline loader so the page never goes blank
class SplineBoundary extends Component<{ children: ReactNode }, { failed: boolean }> {
  state = { failed: false };
  static getDerivedStateFromError() {
    return { failed: true };
  }
  render() {
    if (this.state.failed) return null;
    return this.props.children;
  }
}

// To get the correct scene URL:
// 1. Open the file in Spline editor
// 2. Click Export → Public Link → copy the .splinecode URL
// 3. Replace SCENE_URL below
const SCENE_URL =
  "https://prod.spline.design/f1d017c7-ae36-473c-9ab1-90d262781843/scene.splinecode";

export function SplineScene() {
  return (
    <div className="spline-bg" aria-hidden="true">
      <SplineBoundary>
        <Suspense fallback={null}>
          <Spline scene={SCENE_URL} className="spline-canvas" />
        </Suspense>
      </SplineBoundary>
      <div className="spline-overlay" />
    </div>
  );
}
