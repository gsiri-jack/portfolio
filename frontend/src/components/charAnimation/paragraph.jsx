import React, { useRef } from "react";
import { useScroll } from "motion/react";
import RevealWord from "./revealWord";

function Paragraph({ Yprogress }) {
  const container = useRef(null);

  const scrollYProgress = Yprogress;

  const phrases = [
    {
      text: "Technical SDET",
      className: "text-white",
    },
    {
      text: "building scalable",
      className: "",
    },
    {
      text: "automation",
      className: "font-playfair text-secondary italic",
    },
    {
      text: "frameworks and high-impact test suites for quality-driven",
      className: "",
    },
    {
      text: "software",
      className: "font-playfair text-secondary italic",
    },
    {
      text: "delivery.",
      className: "",
    },
  ];

  return (
    <div ref={container}>
      <p
        className="
          text-zinc-200
          font-syne
          text-[30px]
          sm:text-[40px]
          md:text-[50px]
          font-medium
          leading-loose
          tracking-wide
          m-2
          md:ml-[50px]
          mr-3.5
        "
      >
        {phrases.map((phrase, index) => (
          <RevealWord
            key={index}
            progress={scrollYProgress}
            range={[index / phrases.length, (index + 1) / phrases.length]}
            className={phrase.className}
          >
            {phrase.text}
          </RevealWord>
        ))}
      </p>
    </div>
  );
}

export default Paragraph;
