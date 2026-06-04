import React, { useRef } from "react";
import "../../styles/styles.css";
import {
  useScroll,
  useMotionValueEvent,
  motion,
  translateAxis,
} from "motion/react";
import About from "../about/about";

function Quote() {
  const heroRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (import.meta.env.DEV) {
      console.log("change " + latest.toFixed(2));
    }
  });

  return (
    <section className="relative z-20 h-[150dvh] md:h-[200dvh]">
      <div className="h-9 bg-linear-to-b from-[rgba(8,8,15,0)] via-[rgba(8,8,15,0.3)] to-[rgba(8,8,15,1)] opacity-5" />
      <div className="flex h-full flex-col bg-brand-dark" ref={heroRef}>
        <div className="sticky top-0 h-screen bg-brand-dark ">
          <div className="h-10  border-amber-50 bg-brand-dark mt-[5vh] md:mt-[10vh] flex flex-row  items-center justify-end">
            <motion.div
              className="h-0.5 w-[60vw] bg-linear-to-r from-[rgba(165,180,252,0)]  via-[rgba(165,180,252,0.5)] to-[rgba(165,180,252,1)] opacity-35 mr-2 "
              initial={{
                scaleX: -1,
              }}
              whileInView={{
                scaleX: 1,
                transition: {
                  duration: 0.6,
                },
              }}
              viewport={
                {
                  // once: true,
                }
              }
            ></motion.div>

            <h1 className="font-code text-0.5xl font-medium text-shadow-indigo-300 text-right pr-7 opacity-45">
              ~/sid00
            </h1>
          </div>
          <motion.div
            className="shadow-sm border-2 border-primary rounded-2xl m-2.5 p-2 h-[80%]"
            initial={{
              scale: -1,
            }}
            whileInView={{
              scale: 1,
              transition: {
                duration: 0.4,
              },
            }}
            viewport={{
              once: true,
            }}
          >
            <motion.p
              className=" font-syne text-[30px] font-medium leading-loose tracking-wide text-zinc-200  sm:text-[40px] md:ml-[50px] md:text-[50px] "
              initial={{
                opacity: 0,
                x: -150,
              }}
              whileInView={{
                x: 0,
                opacity: 0.2,
                transition: {
                  duration: 1.2,
                  delay: 0.5,
                },
              }}
              viewport={{
                once: true,
              }}
            >
              <span className="text-white">Technical SDET</span> building
              scalable <span className="font-playfair italic ">automation</span>{" "}
              frameworks and high-impact test suites for quality-driven{" "}
              <span className="font-playfair italic ">software</span> delivery.
            </motion.p>
            <div
              className="
          absolute
       
          right-4
          md:right-10
          w-fit
          pointer-events-none
          select-none
          flex
          flex-col
        "
            >
              <span
                className="
            font-syne
            font-extrabold
            text-[2.3rem]
            md:text-[6rem]
            lg:text-[8rem]
            uppercase
            tracking-tight
            text-transparent
            opacity-40
            [-webkit-text-stroke:1px_rgba(109,92,255,0.6)]
          "
              >
                verified
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Quote;
