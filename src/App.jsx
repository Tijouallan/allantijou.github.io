import { useCallback, useEffect, useMemo, useState } from "react";
import Sidebar from "./components/Sidebar";
import ProfileCard from "./components/ProfileCard";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import ExperienceTimeline from "./components/ExperienceTimeline";
import SkillsSection from "./components/SkillsSection";
import ContactCard from "./components/ContactCard";
import {
  profile,
  projects,
  experience,
  skills,
  about,
  contact,
  navItems,
} from "./data/portfolio";

function getInitialTheme() {
  if (typeof window === "undefined") return "light";
  const stored = localStorage.getItem("portfolio-theme");
  if (stored === "light" || stored === "dark") return stored;
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

export default function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  const navigateToSection = useCallback((id) => {
    setActiveSection(id);
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme((t) => (t === "light" ? "dark" : "light"));
  }, []);

  const activeContent = useMemo(() => {
    switch (activeSection) {
      case "projects":
        return <ProjectsSection projects={projects} />;
      case "experience":
        return <ExperienceTimeline experience={experience} />;
      case "skills":
        return <SkillsSection skills={skills} />;
      case "contact":
        return <ContactCard contact={contact} />;
      case "home":
      default:
        return <AboutSection about={about} />;
    }
  }, [activeSection]);

  return (
    <div className="h-svh  bg-surface text-foreground">
      <div className="mx-auto grid h-svh max-w-[1400px] grid-cols-1 lg:grid-cols-[80px_minmax(280px,340px)_1fr] xl:grid-cols-[100px_minmax(300px,360px)_1fr]">
        <div className="fixed bottom-0 left-0 right-0 z-20 border-t border-border bg-card/95 backdrop-blur-md lg:static lg:border-t-0 lg:bg-transparent lg:backdrop-blur-none">
          <div className="mx-auto max-w-[1400px] lg:h-full">
            <Sidebar
              activeSection={activeSection}
              onNavigate={navigateToSection}
              theme={theme}
              onToggleTheme={toggleTheme}
              onContactShortcut={() => navigateToSection("contact")}
            />
          </div>
        </div>

        <div className="hidden h-svh border-r border-border px-4 py-6 lg:block">
          <ProfileCard profile={profile} />
        </div>

        <main className="col-span-1 h-svh  px-4 py-6 pb-28 lg:col-start-3 lg:px-8 lg:py-8 lg:pb-8">
          <div className="mb-8 lg:hidden">
            <ProfileCard profile={profile} />
          </div>

          <div className="mx-auto flex h-full w-full max-w-3xl items-start">
            <div className="w-full">
              {activeContent}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
