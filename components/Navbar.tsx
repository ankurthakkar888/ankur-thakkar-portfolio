
"use client";

import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Certifications", href: "#certifications" },
 { label: "Awards", href: "#awards" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="navbar">
      <div className="nav-inner">

        <a
          href="#"
          className="logo"
          onClick={() => setMenuOpen(false)}
        >
          ANKUR THAKKAR<span> </span>
        </a>

        <nav className={`nav-links ${menuOpen ? "mobile-open" : ""}`}>
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="nav-actions">

          <a
            href="/Ankur-Thakkar-Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-cv"
          >
            <span className="cv-icon">↓</span>
            <span>CV</span>
          </a>

          <a
            href="#contact"
            className="nav-connect"
            onClick={() => setMenuOpen(false)}
          >
            Let's Connect
          </a>

          <button
            type="button"
            className="menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
          >
            <span className="menu-icon">
              {menuOpen ? "×" : "☰"}
            </span>
          </button>

        </div>
      </div>
    </header>
  );
}

