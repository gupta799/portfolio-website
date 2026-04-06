import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { SiteLayout } from "./components/SiteLayout";
import { HomePage } from "./pages/HomePage";
import { ProfessionalPage } from "./pages/ProfessionalPage";
import { ResearchPage } from "./pages/ResearchPage";
import { SkillsPage } from "./pages/SkillsPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SiteLayout />}>
          <Route index element={<HomePage />} />
          <Route path="professional" element={<ProfessionalPage />} />
          <Route path="research" element={<ResearchPage />} />
          <Route path="skills" element={<SkillsPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
