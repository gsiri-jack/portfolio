import React from "react";
import EducationIndicator from "./minComponents/educationIndicator";
import CertificatesIndicator from "./minComponents/certificates";
import AiLearningPathIndicator from "./minComponents/aiLearningPath";
import TestEngneeringIndicator from "./minComponents/testEngneeringIndicator";
import QaMindsetIndicator from "./minComponents/qaMindset";

import Accordion from "./minComponents/accordin";
import { useRef } from "react";
import {
  motion,
  useScroll,
  useMotionValueEvent,
  useTransform,
} from "motion/react";
import AppliedAiIndicator from "./minComponents/aiIndicator";
import QualityPipelineIndicator from "./minComponents/pipelineIndicator";

function TrustIndicators() {
  const contRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: contRef,
  });
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (import.meta.env.DEV) {
      console.log("trust " + latest.toFixed(2));
    }
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "95%"]);
  return (
    <section className="relative h-fit" ref={contRef}>
      {/* Timeline line */}
      <div className="">
        <div className="mr-3.5 text-right">
          <p className="tag font-code text-neutral-500 mb-2 ">~/ sid002</p>
          <p className="sectionHeader text-white font-code font-light text-4xl md:text-5xl">
            Skill
            <span className="text-primary font-unbounded font-bold">
              Matrix
            </span>
          </p>
        </div>
      </div>
      <div>
        <motion.div
          className="absolute left-2 top-20 h-[97%]  w-1.5 bg-primary  z-20 md:w-2 md:ml-2 rounded-2xl text-white flex flex-col items-center justify-end opacity-60"
          style={{
            height: lineHeight,
          }}
        >
          <div className=" w-4 h-4 md:w-6 md:h-6 bg-primary rounded-[100px]">
            {" "}
          </div>
        </motion.div>

        {/* Content */}
        <div className="relative z-10 flex flex-col gap-8 bg-brand-dark">
          <EducationIndicator />
          <CertificatesIndicator />
          <TestEngneeringIndicator />
          <AppliedAiIndicator />
          <QualityPipelineIndicator />
        </div>
      </div>
    </section>
  );
}

export default TrustIndicators;
