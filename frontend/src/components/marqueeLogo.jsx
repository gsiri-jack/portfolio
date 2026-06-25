// MarqueeLogo.jsx
// Requires: framer-motion  →  npm i framer-motion

import React, { useRef, useCallback, useEffect } from "react";
import { motion, useAnimationFrame, useMotionValue } from "framer-motion";

const RAW_MODULES = import.meta.glob("../assets/skillLogos/*.svg", {
  eager: true,
});

const LABEL_MAP = {
  aws: "AWS",
  docker: "Docker",
  git: "Git",
  github: "GitHub",
  java: "Java",
  jenkins: "Jenkins",
  Jmeter: "JMeter",
  mysql: "MySQL",
  playwright: "Playwright",
  postman: "Postman",
  python: "Python",
  react: "React",
  selenium: "Selenium",
};

const SDET_KEYWORDS = [
  "Quality",
  "Automation",
  "Reliability",
  "Regression",
  "Test Strategy",
  "Validation",
  "Engineering",
  "CI/CD",
  "Shift Left",
  "Coverage",
  "Performance",
  "Observability",
];

// ─── Infinite ticker ──────────────────────────────────────────────────────────
function InfiniteTicker({ children, speed = 60, reverse = false }) {
  const x = useMotionValue(0);
  const trackRef = useRef(null);
  const pausedRef = useRef(false);
  const speedRef = useRef(speed);
  const resumeRef = useRef(null);
  const initRef = useRef(false);

  const pause = useCallback(() => {
    clearTimeout(resumeRef.current);
    pausedRef.current = true;
  }, []);

  const resume = useCallback(() => {
    clearTimeout(resumeRef.current);
    resumeRef.current = setTimeout(() => {
      pausedRef.current = false;
    }, 600);
  }, []);

  useAnimationFrame((_, delta) => {
    const el = trackRef.current;
    if (!el) return;

    const totalW = el.scrollWidth;
    const oneSet = totalW / 4; // 4 copies rendered
    if (oneSet === 0) return;

    // On first frame, seed reverse ticker at -oneSet so left side is filled
    if (!initRef.current) {
      initRef.current = true;
      if (reverse) x.set(-oneSet);
    }

    // Smooth speed lerp
    const target = pausedRef.current ? 0 : speed;
    speedRef.current += (target - speedRef.current) * Math.min(delta / 250, 1);
    if (Math.abs(speedRef.current) < 0.05) return;

    const step = (speedRef.current * delta) / 1000;
    let next = x.get() + (reverse ? step : -step);

    // Seamless reset: jump by exactly one set width at the boundary
    // Forward : scrolls left  → resets from -oneSet  back to 0
    // Reverse : scrolls right → resets from 0        back to -oneSet
    if (!reverse && next <= -oneSet) next += oneSet;
    if (reverse && next >= 0) next -= oneSet;

    x.set(next);
  });

  return (
    <div
      className="overflow-hidden w-full cursor-pointer"
      onMouseEnter={pause}
      onMouseLeave={resume}
      onTouchStart={pause}
      onTouchEnd={resume}
    >
      <motion.div
        ref={trackRef}
        className="flex w-max"
        style={{ x, willChange: "transform" }}
      >
        {children}
        {children}
        {children}
        {children}
      </motion.div>
    </div>
  );
}

// ─── Logo tile ────────────────────────────────────────────────────────────────
function LogoTile({ src, label }) {
  return (
    <div className="flex flex-col items-center justify-center gap-2 shrink-0 px-7 select-none group">
      <div
        className="w-14 h-14 flex items-center justify-center rounded
                      border border-transparent transition-all duration-300
                      group-hover:border-[#5c43ff] group-hover:bg-[rgba(92,67,255,0.12)]"
      >
        <img
          src={src}
          alt={label}
          draggable={false}
          className="w-9 h-9 md:w-12 md:h-12 object-contain opacity-50 group-hover:opacity-100
                     transition-all duration-300
                     [filter:brightness(0)_invert(1)]
                     group-hover:[filter:brightness(0)_invert(1)_sepia(1)_hue-rotate(210deg)_saturate(3)]"
        />
      </div>
      <span
        className="text-[11px] md:text-[14px] font-syne font-medium text-white/30
                       group-hover:text-[#5c43ff] transition-colors duration-300 whitespace-nowrap"
      >
        {label}
      </span>
    </div>
  );
}

// ─── Keyword tile ─────────────────────────────────────────────────────────────
function KeywordTile({ text }) {
  return (
    <div className="flex items-center shrink-0">
      <span
        className="font-syne font-semibold text-[14px] tracking-widest
                       uppercase text-white/80 whitespace-nowrap px-8"
      >
        {text}
      </span>
      <svg
        width="12"
        height="12"
        viewBox="0 0 12 12"
        className="shrink-0 text-white/30 fill-current"
      >
        <polygon points="6,0 12,6 6,12 0,6" />
      </svg>
    </div>
  );
}

// ─── Main ─────────────────────────────────────────────────────────────────────
export default function MarqueeLogo() {
  const logos = React.useMemo(
    () =>
      Object.entries(RAW_MODULES)
        .sort(([a], [b]) => {
          const stem = (p) =>
            p
              .split("/")
              .pop()
              .replace(/\.svg$/i, "")
              .toLowerCase();
          return stem(a).localeCompare(stem(b));
        })
        .map(([path, mod]) => {
          const stem = path
            .split("/")
            .pop()
            .replace(/\.svg$/i, "");
          return { src: mod.default, label: LABEL_MAP[stem] ?? stem };
        }),
    [],
  );

  return (
    <section className="w-full overflow-hidden" aria-label="Skills">
      {/* ── TOP: logos → scroll LEFT ─────────────────────────────── */}
      <div className="relative py-6">
        <div
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24
                        bg-gradient-to-r from-[#08080f] to-transparent"
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24
                        bg-gradient-to-l from-[#08080f] to-transparent"
        />
        <InfiniteTicker speed={55} reverse={false}>
          {logos.map(({ src, label }) => (
            <LogoTile key={label} src={src} label={label} />
          ))}
        </InfiniteTicker>
      </div>

      {/* ── BOTTOM: keywords → scroll RIGHT ──────────────────────── */}
      <div
        className="relative py-4 mt-2"
        style={{
          background:
            "linear-gradient(90deg, #291c7d 0%, #3d2db5 50%, #291c7d 100%)",
          borderTop: "1px solid rgba(92,67,255,0.4)",
          borderBottom: "1px solid rgba(92,67,255,0.4)",
        }}
      >
        <div
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20
                        bg-gradient-to-r from-[#291c7d] to-transparent"
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20
                        bg-gradient-to-l from-[#291c7d] to-transparent"
        />
        <InfiniteTicker speed={40} reverse={true}>
          {SDET_KEYWORDS.map((kw) => (
            <KeywordTile key={kw} text={kw} />
          ))}
        </InfiniteTicker>
      </div>
    </section>
  );
}
