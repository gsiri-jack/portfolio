import React from "react";
import Hero from "./components/hero/Hero";
import "./styles/styles.css";
import Quote from "./components/quote/quote";
import Lenis from "lenis";
import { useEffect } from "react";
import About from "./components/about/about";

function App() {
  useEffect(() => {
    // Configured parameters optimized to normalize behavior between desktop and touchscreens
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      syncTouch: true, // Crucial parameter to sync hardware touch events with the virtual scroll frame
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return (
    <section className="bg-brand-dark ">
      <Hero />
      {/* <Quote /> */}
      <About />
    </section>
  );
}

export default App;
