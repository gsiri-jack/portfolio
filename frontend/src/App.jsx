// App.jsx
import React, { useEffect } from "react";
import Hero from "./components/hero/Hero";
import "./styles/styles.css";
import Quote from "./components/quote";
import Lenis from "lenis";
import About from "./components/about/about";
import Skills from "./components/skills";
import Work from "./components/Work";
import TrustIndicators from "./components/trustIndicators";

function App() {
  useEffect(() => {
    const isTouchDevice =
      "ontouchstart" in window || navigator.maxTouchPoints > 0;

    // Lenis is a desktop wheel-smoothing enhancement only.
    // Mobile already has smooth native touch scrolling —
    // Lenis's RAF-driven scroll hijack is unreliable on mobile
    // (stale scroll-limit on load, address-bar collapse, etc.)
    if (isTouchDevice) return;

    const lenis = new Lenis({
      smoothWheel: true,
    });

    let rafId;
    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return (
    <section className="bg-brand-dark">
      <Hero />
      <Quote />
      <About />
      <Skills />
      <Work />
      <TrustIndicators />
      <div className="bg-white h-50 mb-5">footer</div>
    </section>
  );
}

export default App;
