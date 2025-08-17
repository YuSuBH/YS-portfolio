import { useEffect } from "react";
import { ModeToggle } from "./mode-toggle";
import useScrollDirection from "../hooks/useScrollDirection";

export const Navbar = ({ menuOpen, setmenuOpen }) => {
  const { isVisible } = useScrollDirection();

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  // Determine navbar visibility classes
  // Mobile menu state overrides scroll behavior - navbar stays visible when menu is open
  const navbarClasses = `navbar-scroll-responsive w-full z-40 bg-[rgba(10, 10, 10, 0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg ${
    menuOpen || isVisible ? "navbar-visible" : "navbar-hidden"
  }`;

  return (
    <nav className={navbarClasses}>
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <a
            href="#home"
            className="font-mono text-xl font-bold text-foreground"
          >
            yusuf<span className="text-primary">.suhail</span>
          </a>

          <div className="flex items-center gap-x-4 md:hidden">
            <ModeToggle />

            <button
              className="text-2xl z-40"
              onClick={() => setmenuOpen((prev) => !prev)}
              aria-label="Toggle menu"
            >
              &#9776;
            </button>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Home
            </a>

            <a
              href="#about"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              About
            </a>

            <a
              href="#projects"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Projects
            </a>

            <a
              href="#contact"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Contact
            </a>

            <ModeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
};
