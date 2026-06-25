import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";

const LETTER_DELAY = 0.025;
const BOX_FADE_DURATION = 0.125;
const MAIN_FADE_DURATION = 0.4;
const CURSOR_BLINK_DURATION = 0.8;

export default function Typewriter({ texts, delay = 4000, loop = true }) {
  const textArray = Array.isArray(texts) ? texts : [texts];

  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.6 });

  const [currentIndex, setCurrentIndex] = useState(0);
  const [iteration, setIteration] = useState(0);

  const isSingleStatic = !loop && textArray.length === 1;

  // Cycle through multiple texts (skip entirely for the single, non-looping case)
  useEffect(() => {
    if (!isInView || isSingleStatic) return;

    if (!loop && currentIndex === textArray.length - 1) {
      return; // stop cycling, but keep cursor visible — don't touch isDone here
    }

    const intervalId = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % textArray.length);
      setIteration((prev) => prev + 1);
    }, delay);

    return () => clearInterval(intervalId);
  }, [isInView, isSingleStatic, currentIndex, textArray.length, delay, loop]);

  const currentText = textArray[currentIndex];

  return (
    <h1
      ref={containerRef}
      className="font-code text-white tracking-normal ml-2 text-[16px] text-pretty flex items-center gap-1"
    >
      <div className="text-sm font-light ml-3 min-h-[24px] flex items-center">
        {isInView && (
          <>
            <AnimatePresence mode="wait">
              <motion.p
                key={`${currentIndex}-${iteration}`}
                initial={{ opacity: 1 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: MAIN_FADE_DURATION, ease: "easeInOut" }}
                className="inline-block"
              >
                {currentText.split("").map((letter, i) => (
                  <span
                    key={`${iteration}-${i}`}
                    className="relative inline-block"
                  >
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: i * LETTER_DELAY, duration: 0 }}
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

            <motion.span
              aria-hidden="true"
              className="w-1.5 h-5.5 bg-secondary ml-2 inline-block"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 1, 0] }}
              transition={{
                times: [0, 0.1, 0.9, 1],
                repeat: Infinity,
                duration: CURSOR_BLINK_DURATION,
                ease: "easeInOut",
              }}
            />
          </>
        )}
      </div>
    </h1>
  );
}
