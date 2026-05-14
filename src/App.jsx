import { useState, useEffect, lazy, Suspense } from "react";
import "./App.css";

// Lazy-loaded section components for performance
const About = lazy(() => import("./components/About"));
const Skills = lazy(() => import("./components/Skills"));
const Projects = lazy(() => import("./components/Projects"));
const Experience = lazy(() => import("./components/Experience"));
const Certifications = lazy(() => import("./components/Certifications"));
const Contact = lazy(() => import("./components/Contact"));

function Loader() {
  return <div className="section-loader" aria-label="Loading section…" />;
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = ["About", "Skills", "Projects", "Experience", "Certifications", "Contact"];

  return (
    <>
      {/* ── NAV ── */}
      <nav className={`nav${scrolled ? " nav--scrolled" : ""}`}>
        <div className="nav__inner">
          <a className="nav__logo" href="#hero">SN<span>.</span></a>
          <ul className="nav__links">
            {navLinks.map((l) => (
              <li key={l}><a href={`#${l.toLowerCase()}`}>{l}</a></li>
            ))}
          </ul>
          <button
            className="hamburger"
            aria-label="Toggle menu"
            onClick={() => setMenuOpen((o) => !o)}
          >
            <span /><span /><span />
          </button>
        </div>
        {menuOpen && (
          <div className="mobile-menu">
            {navLinks.map((l) => (
              <a key={l} href={`#${l.toLowerCase()}`} onClick={() => setMenuOpen(false)}>
                {l}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* ── HERO ── */}
      <section id="hero" className="hero">
        <div className="hero__bg" aria-hidden="true" />
        <div className="hero__content fade-up">
          <span className="hero__eyebrow">IT Engineering Student · Fullstack Java Developer</span>
          <h1 className="hero__name">
            Shakuntala<br /><em>Nalawade</em>
          </h1>
          <p className="hero__sub">
           IT Engineering Student with a passion for software development and building real-world solutions.
          </p>
          <div className="hero__cta">
            <a className="btn btn--primary" href="#projects">View Projects</a>
            <a className="btn btn--outline" href="#contact">Get In Touch</a>
          </div>
          <div className="hero__stats">
            {[
              { value: "2+", label: "Projects Built" },
              { value: "5★", label: "C++ HackerRank" },
              { value: "IoT", label: "+ Web Stack" },
              { value: "2027", label: "Expected Grad." },
            ].map((s) => (
              <div className="hero__stat fade-up-2" key={s.label}>
                <strong>{s.value}</strong>
                <span>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LAZY SECTIONS ── */}
      <Suspense fallback={<Loader />}><About /></Suspense>
      <Suspense fallback={<Loader />}><Skills /></Suspense>
      <Suspense fallback={<Loader />}><Projects /></Suspense>
      <Suspense fallback={<Loader />}><Experience /></Suspense>
      <Suspense fallback={<Loader />}><Certifications /></Suspense>
      <Suspense fallback={<Loader />}><Contact /></Suspense>

      {/* ── FOOTER ── */}
      <footer className="footer">
        <p>Designed &amp; built with ♥ by <strong>Shakuntala Nalawade</strong></p>
        <p>
          Wakad, Pune ·{" "}
          <a href="mailto:shaku6979@gmail.com">shaku6979@gmail.com</a> ·{" "}
          <a href="https://github.com/shakuntalanalawade20" target="_blank" rel="noreferrer">GitHub</a> ·{" "}
          <a href="https://www.linkedin.com/in/shakuntala-nalawade-21885824b" target="_blank" rel="noreferrer">LinkedIn</a>
        </p>
      </footer>
    </>
  );
}
