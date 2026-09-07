import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ScrollProgress from "../components/ScrollProgress.js";
import { CATEGORIES, WHATSAPP } from "../data/services.js";

const LINKS = [
  { label: "The Practice", href: "/about" },
  { label: "Transformations", href: "/about?tab=transformations" },
  { label: "Testimonials", href: "/testimonials" },
];

const NavbarUtil = () => {
  const [scrolled, setScrolled] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <ScrollProgress />

      <header
        className="nav-shell"
        data-scrolled={scrolled}
        onMouseLeave={() => setMegaOpen(false)}
      >
        <nav className="nav-bar">
          <a href="/" className="nav-brand">
            Dr Sandhya&rsquo;s Total Dental Care
          </a>

          <ul className="nav-links">
            <li>
              <a className="nav-link" href="/about">
                The Practice
              </a>
            </li>
            <li>
              <button
                type="button"
                className="nav-link"
                data-open={megaOpen}
                aria-expanded={megaOpen}
                onMouseEnter={() => setMegaOpen(true)}
                onClick={() => setMegaOpen((v) => !v)}
              >
                Services
              </button>
            </li>
            <li>
              <a className="nav-link" href="/about?tab=transformations">
                Transformations
              </a>
            </li>
            <li>
              <a className="nav-link" href="/testimonials">
                Testimonials
              </a>
            </li>
            <li>
              <a className="btn-lux" href={WHATSAPP}>
                Book
              </a>
            </li>
          </ul>

          <button
            type="button"
            className="nav-burger"
            aria-label="Menu"
            aria-expanded={drawerOpen}
            onClick={() => setDrawerOpen((v) => !v)}
          >
            <motion.span animate={{ rotate: drawerOpen ? 45 : 0, y: drawerOpen ? 6 : 0 }} />
            <motion.span animate={{ opacity: drawerOpen ? 0 : 1 }} />
            <motion.span animate={{ rotate: drawerOpen ? -45 : 0, y: drawerOpen ? -6 : 0 }} />
          </button>
        </nav>

        {/* Desktop mega menu */}
        <AnimatePresence>
          {megaOpen && (
            <motion.div
              className="mega"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="mega__grid">
                {CATEGORIES.map((cat) => (
                  <div key={cat.id}>
                    <a href={cat.link} className="mega__title">
                      {cat.title}
                    </a>
                    <ul className="mega__list">
                      {cat.items.map((item) => (
                        <li key={item.link + item.name}>
                          <a className="mega__item" href={item.link}>
                            {item.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
                <div>
                  <p className="eyebrow">Not sure where to start?</p>
                  <p
                    className="text-quiet"
                    style={{ fontSize: "var(--fs-sm)", margin: ".9rem 0 1.5rem" }}
                  >
                    Tell us what&rsquo;s bothering you. We&rsquo;ll point you the right way.
                  </p>
                  <a className="btn-lux btn-lux--ghost" href={WHATSAPP}>
                    Ask a dentist
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Mobile drawer */}
        <AnimatePresence>
          {drawerOpen && (
            <motion.div
              className="nav-drawer"
              initial={{ height: 0 }}
              animate={{ height: "auto" }}
              exit={{ height: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="nav-drawer__inner">
                {LINKS.map((l) => (
                  <a key={l.href} className="nav-link" href={l.href}>
                    {l.label}
                  </a>
                ))}
                <hr className="rule" style={{ margin: "1.2rem 0" }} />
                {CATEGORIES.map((cat) => (
                  <div key={cat.id} style={{ marginBottom: "1.1rem" }}>
                    <a href={cat.link} className="mega__title">
                      {cat.title}
                    </a>
                    <ul className="mega__list">
                      {cat.items.map((item) => (
                        <li key={item.link + item.name}>
                          <a className="mega__item" href={item.link}>
                            {item.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
                <a className="btn-lux" href={WHATSAPP} style={{ marginTop: ".5rem" }}>
                  Book an appointment
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* keeps page content clear of the fixed header */}
      <div style={{ height: "var(--nav-h)" }} aria-hidden="true" />
    </>
  );
};

export default NavbarUtil;
