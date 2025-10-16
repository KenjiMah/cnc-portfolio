import { Link, useLocation } from "react-router-dom";
import { FileText, BookOpen } from "lucide-react";
import { ROUTES } from "@/utils/constants";
import { cn } from "@/lib/utils";

export function ComputerScienceNav() {
  const location = useLocation();
  const currentPath = location.pathname;

  const navItems = [
    {
      href: `/${ROUTES.COMPUTERSCIENCE_RESUME}`,
      label: "Resume & Portfolio",
      icon: FileText,
      isActive:
        currentPath === `/${ROUTES.COMPUTERSCIENCE_RESUME}` ||
        currentPath === `/${ROUTES.COMPUTERSCIENCE}`,
    },
    {
      href: `/${ROUTES.COMPUTERSCIENCE_BLOG}`,
      label: "Blog Posts",
      icon: BookOpen,
      isActive:
        currentPath === `/${ROUTES.COMPUTERSCIENCE_BLOG}` ||
        currentPath.startsWith(`/${ROUTES.COMPUTERSCIENCE_BLOG}/`),
    },
  ];

  return (
    <nav className="mb-8 relative z-10">
      <div className="inline-flex h-10 items-center justify-center rounded-md bg-zinc-800 p-1 text-zinc-400">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              to={item.href}
              className={cn(
                "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
                item.isActive && "bg-zinc-700 text-zinc-100 shadow-sm",
                !item.isActive && "hover:bg-zinc-700/50 hover:text-zinc-300"
              )}
            >
              <Icon className="w-4 h-4 mr-2" />
              {item.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
