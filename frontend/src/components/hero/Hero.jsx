import React, { useRef } from "react";
import "../../styles/styles.css";
import "./hero.css";
import { easeInOut, motion, useScroll, useTransform } from "motion/react";
import Quote from "../quote/quote";

function Hero() {
  const heroRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end end"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.3]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.3]);

  return (
    <section id="hero-section" className="h-[200dvh]" ref={heroRef}>
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

        <motion.div
          className="hero-cont relative z-1 flex h-[100dvh] flex-col justify-center md:flex-row md:justify-evenly lg:justify-center"
          style={{}}
        >
          <motion.div
            className="context relative md:w-fit md:left-[50px]"
            initial={{
              x: 50,
            }}
            whileInView={{
              x: 0,
              // opacity: 0,
              transition: {
                duration: 1,
                delay: 0.1,
              },
            }}
          >
            <div className="text1">
              <h1 className="text-[1.5rem] md:text-2.5xl lg:text-5xl">
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
                x: -50,
              }}
              whileInView={{
                x: 0,
                // opacity: 0,
                transition: {
                  duration: 1,
                  delay: 0.1,
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
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
