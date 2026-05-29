import {
  Home,
  FolderKanban,
  Briefcase,
  Layers,
  Mail,
  Sun,
  Moon,
  MessageCircle,
} from "lucide-react";
import { navItems } from "../data/portfolio";

const iconMap = {
  home: Home,
  projects: FolderKanban,
  experience: Briefcase,
  skills: Layers,
  contact: Mail,
};

export default function Sidebar({
  activeSection,
  onNavigate,
  theme,
  onToggleTheme,
  onContactShortcut,
}) {
  return (
    <aside className="flex h-16 w-full flex-row items-center justify-between gap-2 px-4 py-2 lg:h-full lg:w-auto lg:flex-col lg:justify-between lg:px-3 lg:py-6">
      <nav
        className="flex flex-1 flex-row items-center justify-center gap-1 lg:flex-none lg:flex-col lg:gap-2"
        aria-label="Main navigation"
      >
        {navItems.map(({ id, label }) => {
          const Icon = iconMap[id];
          const isActive = activeSection === id;
          return (
            <button
              key={id}
              type="button"
              onClick={() => onNavigate(id)}
              aria-current={isActive ? "page" : undefined}
              title={label}
              className={`group flex flex-col items-center gap-0.5 rounded-2xl px-2.5 py-2 text-[10px] font-medium transition-all duration-200 lg:gap-1 lg:px-3 lg:py-2.5 lg:text-xs ${
                isActive
                  ? "bg-foreground text-surface"
                  : "text-muted hover:bg-card hover:text-foreground"
              }`}
            >
              <Icon
                size={20}
                strokeWidth={isActive ? 2.25 : 1.75}
                className="transition-transform duration-200 group-hover:scale-105"
              />
              <span className="hidden xl:block">{label}</span>
            </button>
          );
        })}
      </nav>

      <div className="flex shrink-0 flex-row items-center gap-1 lg:flex-col lg:gap-2">
        <button
          type="button"
          onClick={onToggleTheme}
          title={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
          className="flex flex-col items-center gap-0.5 rounded-2xl p-2 text-muted transition-all duration-200 hover:bg-card hover:text-foreground lg:px-3 lg:py-2.5"
        >
          {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
          <span className="hidden xl:block text-xs font-medium">Theme</span>
        </button>
        <button
          type="button"
          onClick={onContactShortcut}
          title="Contact"
          className="flex flex-col items-center gap-0.5 rounded-2xl p-2 text-muted transition-all duration-200 hover:bg-card hover:text-foreground lg:px-3 lg:py-2.5"
        >
          <MessageCircle size={20} />
          <span className="hidden xl:block text-xs font-medium">Contact</span>
        </button>
      </div>
    </aside>
  );
}
