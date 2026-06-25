import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BiSolidQuoteLeft, BiSolidQuoteRight } from "react-icons/bi";

const LETTER_DELAY = 0.025;
const BOX_FADE_DURATION = 0.125;
const MAIN_FADE_DURATION = 0.4;

export default function Typewriter({ texts, delay = 4000, loop = true }) {
  const textArray = Array.isArray(texts) ? texts : [texts];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [iteration, setIteration] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    if (!loop && currentIndex === textArray.length - 1) {
      setIsDone(true);
      return;
    }

    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % textArray.length);
      setIteration((prev) => prev + 1);
    }, delay);

    return () => clearInterval(intervalId);
  }, [currentIndex, textArray.length, delay, loop]);

  const currentText = textArray[currentIndex];

  return (
    <h1 className="font-code text-white tracking-normal ml-2 text-[16px] text-pretty flex items-center gap-1">
      <BiSolidQuoteLeft className="inline flex-shrink-0" />

      <div className="text-sm font-light ml-3 min-h-[24px] flex items-center">
        <AnimatePresence mode="wait">
          <motion.p
            key={`${currentIndex}-${iteration}`}
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={!isDone ? { opacity: 0 } : false} // FIX: Changed {} to false
            transition={{ duration: MAIN_FADE_DURATION, ease: "easeInOut" }}
            className="inline-block"
          >
            {currentText.split("").map((letter, i) => (
              <span key={`${iteration}-${i}`} className="relative inline-block">
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    delay: i * LETTER_DELAY,
                    duration: 0,
                  }}
                >
                  {letter === " " ? "\u00A0" : letter}
                </motion.span>

                {letter !== " " && (
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{
                      delay: i * LETTER_DELAY,
                      times: [0, 0.1, 1],
                      duration: BOX_FADE_DURATION,
                      ease: "easeInOut",
                    }}
                    className="absolute bottom-[3px] left-[1px] right-0 top-[3px] bg-white"
                  />
                )}
              </span>
            ))}
          </motion.p>
        </AnimatePresence>
      </div>

      <BiSolidQuoteRight className="inline flex-shrink-0" />
    </h1>
  );
}
