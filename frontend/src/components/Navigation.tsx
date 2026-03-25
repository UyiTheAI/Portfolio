import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface NavigationProps {
  activeSection: string;
}

const navItems = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "projects", label: "Projects" },
];

export function Navigation({ activeSection }: NavigationProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="nav hidden lg:block" aria-label="In-page jump links">
      <ul className="mt-16 w-max">
        {navItems.map((item) => {
          const isActive = activeSection === item.id;
          
          return (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={(e) => handleClick(e, item.id)}
                className={cn(
                  "group flex items-center py-3",
                  isActive ? "text-primary" : "text-secondary hover:text-slate-200"
                )}
              >
                <span
                  className={cn(
                    "mr-4 h-px transition-all duration-300 ease-out",
                    isActive
                      ? "w-16 bg-primary"
                      : "w-8 bg-secondary group-hover:w-16 group-hover:bg-slate-200"
                  )}
                />
                <span
                  className={cn(
                    "text-xs font-bold uppercase tracking-widest transition-colors duration-300",
                    isActive ? "text-primary" : "text-secondary group-hover:text-slate-200"
                  )}
                >
                  {item.label}
                </span>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
