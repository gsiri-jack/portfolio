import React from "react";
import Hero from "./components/hero/Hero";
import "./styles/styles.css";
import Quote from "./components/quote/quote";

function App() {
  return (
    <section className="bg-brand-dark ">
      <Hero />
      <Quote />
    </section>
  );
}

export default App;
