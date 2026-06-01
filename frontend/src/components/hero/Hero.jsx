import React from "react";
import "../../styles/styles.css";
import "./hero.css";
import { useRef } from "react";
import { useScroll, useTransform } from "motion/react";
import { motion } from "motion/react";
import Quote from "../quote/quote";

function Hero() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end end"],
  });
  const x = useTransform(scrollYProgress, [0, 1], [0, 900]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 3]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  return (
    <section
      id="hero-section"
      className="h-[200dvh] md:h-[200dvh]  overflow-hidden "
      ref={heroRef}
    >
      <div className="hero sticky top-0 ">
        <motion.div
          className="
            hero-blob
            blur-[60px] opacity-[0.59]
            sm:blur-[60px] sm:opacity-[0.58]
            md:blur-[80px] md:opacity-[0.50]
            lg:blur-[100px] lg:opacity-[0.53]
            xl:blur-[150px] xl:opacity-[0.60]
          "
          style={{ opacity }}
        />

        <motion.div
          className="hero-cont relative z-1 flex flex-col justify-center align-middle md:flex-row md:justify-evenly lg:justify-center h-[100dvh] md:h-[100dvh] "
          style={{ scale, y, opacity }}
        >
          <div className="context relative md:w-fit md:left-[50px]">
            <div className="text1">
              <h1 className="text-[1.5rem] md:text-2.5xl lg:text-5xl">
                my name is
              </h1>

              <p>
                <span className="text-6xl md:text-[100px] lg:text-[150px] xl:text-[160px] font-extrabold font-unbounded">
                  JACK
                </span>

                <span className="text-[1.5rem] md:text-2xl lg:text-4xl font-medium font-syne">
                  {"\u00a0"}, I'm a
                </span>
              </p>
            </div>

            <div
              id="text2"
              className="font-unbounded text-xl md:text-3xl lg:text-4xl"
            >
              <p>
                Software{" "}
                <span className="text-secondary">Developer in Test</span>
              </p>
            </div>
          </div>

          <div className="hero-potrait flex flex-col justify-center pt-10 md:pt-0">
            <motion.div className="hpotrait w-90 sm:w-104 md:w-[45vw] md:max-w-[600px] lg:w-[50vw] lg:max-w-[700px] h-auto "></motion.div>
          </div>
        </motion.div>
      </div>
      <Quote />
    </section>
  );
}

export default Hero;
