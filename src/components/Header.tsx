"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavChild {
  label: string;
  href: string;
  icon: string;
}

interface NavItem {
  label: string;
  href: string;
  hasDropdown?: boolean;
  children?: NavChild[];
}

const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  {
    label: "Divisions",
    href: "#",
    hasDropdown: true,
    children: [
      { label: "Films Productions", href: "/divisions/films-productions", icon: "🎬" },
      { label: "Films Distribution", href: "/divisions/films-distribution", icon: "🎞️" },
    ],
  },
  { label: "Contact Us", href: "/contact" },
];

export default function Header(): React.JSX.Element {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isMobileOpen, setIsMobileOpen] = useState<boolean>(false);
  const [isDivisionsOpen, setIsDivisionsOpen] = useState<boolean>(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = (): void => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileOpen(false);
    setIsDivisionsOpen(false);
  }, [pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileOpen]);

  const isActive = (path: string): boolean => pathname === path;

  return (
    <header className={`site-header ${isScrolled ? "scrolled" : ""}`} id="site-header">
      <div className="header-inner">
        {/* Logo */}
        <Link href="/" className="site-logo" aria-label="Mile High Production Home">
          <div className="logo-icon">M</div>
          <div className="logo-text">
            <span className="logo-main">Mile High</span>
            <span className="logo-sub">Production</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="desktop-nav" aria-label="Main Navigation">
          <ul className="nav-list">
            {navItems.map((item) => (
              <li key={item.label} className="nav-item">
                {item.hasDropdown ? (
                  <>
                    <button
                      className={`nav-link ${
                        item.children?.some((c) => isActive(c.href)) ? "active" : ""
                      }`}
                      aria-expanded="false"
                      aria-haspopup="true"
                    >
                      {item.label}
                      <span className="dropdown-arrow">▼</span>
                    </button>
                    <ul className="dropdown-menu-custom">
                      {item.children?.map((child) => (
                        <li key={child.href}>
                          <Link
                            href={child.href}
                            className={`dropdown-link ${isActive(child.href) ? "active" : ""}`}
                          >
                            <span className="link-icon">{child.icon}</span>
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className={`nav-link ${isActive(item.href) ? "active" : ""}`}
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Toggle */}
        <button
          className={`mobile-toggle ${isMobileOpen ? "active" : ""}`}
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          aria-label="Toggle mobile menu"
          aria-expanded={isMobileOpen}
          id="mobile-menu-toggle"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile Navigation */}
      <nav className={`mobile-nav ${isMobileOpen ? "open d-block" : "d-none"}`} aria-label="Mobile Navigation">
        <ul className="mobile-nav-list">
          {navItems.map((item) => (
            <li key={item.label} className="mobile-nav-item">
              {item.hasDropdown ? (
                <>
                  <button
                    className="mobile-nav-link"
                    onClick={() => setIsDivisionsOpen(!isDivisionsOpen)}
                    aria-expanded={isDivisionsOpen}
                  >
                    {item.label}
                    <span className={`mobile-dropdown-arrow ${isDivisionsOpen ? "open" : ""}`}>
                      ▼
                    </span>
                  </button>
                  <ul className={`mobile-submenu ${isDivisionsOpen ? "open" : ""}`}>
                    {item.children?.map((child) => (
                      <li key={child.href}>
                        <Link href={child.href} className="mobile-submenu-link">
                          <span>{child.icon}</span>
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </>
              ) : (
                <Link href={item.href} className="mobile-nav-link">
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
