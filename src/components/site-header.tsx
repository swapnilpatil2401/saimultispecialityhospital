"use client";

import Link from "next/link";
import { useState } from "react";
import { navLinks } from "@/lib/site";

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="utility-bar">
        <div className="container utility-inner">
          <p>Thoughtful healthcare, close to home</p>
          <a href="#contact-cta">Need help? Send an enquiry <span aria-hidden="true">↗</span></a>
        </div>
      </div>
      <div className="container nav-row">
        <Link
          className="brand"
          href="/"
          aria-label="Sangavi Hospital home"
          onClick={() => setMenuOpen(false)}
        >
          <span className="brand-mark" aria-hidden="true">
            <span />
            <span />
          </span>
          <span className="brand-copy">
            <strong>SANGAVI</strong>
            <small>HOSPITAL &amp; HEALTHCARE</small>
          </span>
        </Link>
        <button
          className="menu-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span />
          <span />
        </button>
        <nav
          id="primary-navigation"
          className={`main-nav${menuOpen ? " is-open" : ""}`}
          aria-label="Main navigation"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            className="button button-small nav-cta"
            href="/contact#contact-form"
            onClick={() => setMenuOpen(false)}
          >
            Book an appointment <span aria-hidden="true">↗</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}
