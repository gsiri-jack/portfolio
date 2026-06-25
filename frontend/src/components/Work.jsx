import React from "react";
import { useRef, useEffect, useState } from "react";
import {
  useScroll,
  useMotionValueEvent,
  useTransform,
  motion,
} from "motion/react";
import ProjectCard from "./projectCard";

function Work() {
  const projects = [
    {
      title: "jack Eva project",
      tag: "Test-Suite-Test",
      name: "E-Commerce API Test Framework",
      description:
        "End-to-end REST API test framework with data-driven test cases, custom assertion library, and CI pipeline integration. Cut regression cycle time from 3 days to 40 minutes.",
      skills: ["java", "react", "python", "postman", "aws"],
      hiddenSkills: ["spring", "jmeter"],
    },
    {
      title: "jack Eva project",
      tag: "a test suite framework",
      skills: ["java", "react", "python", "postman", "aws"],
    },
    {
      title: "jack Eva project",
      tag: "a test suite framework",
      skills: ["java", "react", "python", "postman", "aws"],
    },
  ];
  const contRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: contRef,
  });

  const containerRef = useRef(null);

  const [maxScroll, setMaxScroll] = useState(0);

  useEffect(() => {
    const update = () => {
      if (!containerRef.current) return;

      const totalWidth = containerRef.current.scrollWidth;
      const viewportWidth = window.innerWidth;

      setMaxScroll(totalWidth - viewportWidth);
    };

    update();
    window.addEventListener("resize", update);

    return () => window.removeEventListener("resize", update);
  }, []);

  const x = useTransform(scrollYProgress, [0.05, 1], [0, -(maxScroll + 80)]);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (import.meta.env.DEV) {
      console.log("work " + latest.toFixed(2));
    }
  });
  return (
    <section
      className="h-[310vh] min-h-[1500px]  mt-[10vh] md:mt-4"
      ref={contRef}
    >
      <div className="sticky top-0.5 md:-top-3 h-[100vh]   flex flex-col gap-1">
        {/*  min-h-[800px] md:min-h-[550px] */}
        <div className="">
          <div className="ml-3.5 ">
            <p className="tag font-code text-neutral-500 mb-2 ">~/ sid002</p>
            <p className="sectionHeader text-white font-code font-light text-4xl md:text-5xl">
              Projects
              <span className="text-primary font-unbounded font-bold">Lab</span>
            </p>
          </div>
        </div>
        {/*  */}
        <div className="h-[85%] md:h-[80%]  overflow-hidden ">
          <p>~$/ project loading</p>
          <motion.div
            className=" flex flex-row shrink-0 gap-1 h-full p-2 items-center"
            style={{ x: x }}
            ref={containerRef}
          >
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Work;
