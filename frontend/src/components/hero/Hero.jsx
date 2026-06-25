import React, { useRef } from "react";
import "../../styles/styles.css";
import "./hero.css";
import { easeInOut, motion, useScroll, useTransform } from "motion/react";
import { BiSolidQuoteLeft, BiSolidQuoteRight } from "react-icons/bi";
import { BsDash, BsCursorText } from "react-icons/bs";
import Typewriter from "../minComponents/heroTypeWriter.jsx";

function Hero() {
  const heroRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end end"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.3]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.6]);
  const quotes = [
    "Building Trust through Every Test",
    "Quality is not an act, it is a habit",
    "Automate the predictable, test the unpredictable",
  ];
  return (
    <section
      id="hero-section"
      className="h-[110vh] overflow-hidden"
      ref={heroRef}
    >
      <div className="hero sticky top-0">
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

        <div className="hero-cont relative z-1 flex min-h-screen flex-col justify-center md:flex-row md:justify-evenly lg:justify-center">
          <motion.div
            className="context relative md:w-fit md:left-[50px]"
            initial={{
              x: 70,
            }}
            whileInView={{
              x: 0,
              // opacity: 0,
              transition: {
                duration: 0.5,
                delay: 0.3,
              },
            }}
            viewport={{
              once: true,
            }}
          >
            <div className="text1">
              <div className="h-fit font-code border-2 border-primary w-fit flex items-center flex-row rounded-2xl mb-2.5 p-1.5 opacity-80 text-[12px] md:text-xl">
                <p className="text-primary">~/</p>
                <p className="text-secondary text-left">Hello world !</p>
              </div>
              <h1 className="text-[1.3rem] md:text-2xl lg:text-4xl text-left  font-poppins font-normal">
                my name is
              </h1>

              <p>
                <span className="font-unbounded text-6xl font-extrabold md:text-[100px] lg:text-[150px] xl:text-[160px]">
                  JACK
                </span>

                <span className="font-syne text-[1.5rem] font-medium md:text-2xl lg:text-4xl">
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
          </motion.div>

          <div className="hero-potrait flex flex-col justify-center pt-10 md:pt-0">
            <motion.div
              className="hpotrait w-90 h-auto sm:w-104 md:w-[45vw] md:max-w-[600px] lg:w-[50vw] lg:max-w-[700px]"
              initial={{
                x: -70,
              }}
              whileInView={{
                x: 0,
                // opacity: 0,
                transition: {
                  duration: 0.5,
                  delay: 0.3,
                },
              }}
              whileHover={{
                scale: 1.05,
                transition: {
                  duration: 0.5,
                  ease: easeInOut,
                },
              }}
              whileFocus={{
                scale: 1.05,
              }}
            />
          </div>
          <div className="md:hidden border-l-2 border-indigo-400 flex items-center justify-center ml-auto mr-auto  w-[70%] mt-5 absolute bottom-16 left-10 right-auto z-40 text-wrap">
            <Typewriter texts={quotes[0]} delay={4500} loop={true} />
            <div className="relative -top-4"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
