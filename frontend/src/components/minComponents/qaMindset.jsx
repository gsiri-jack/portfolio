import React from "react";
import { motion } from "motion/react";

function QaMindsetIndicator() {
  return (
    <motion.section className="h-[110vh] sticky top-4">
      <motion.div className="text-white   h-[90vh] ml-5 mr-1  mt-3  relative md:w-[90%] md:ml-10 bg-[#0A0A10]">
        <div className="h-[10%]  flex  flex-col justify-center  ">
          <p className="text-neutral-500 font-code text-[10px] ">
            $ jack/sec/ti-001/
          </p>
          <p className="text-[24px]   font-bold font-syne tracking-wider">
            <span className="opacity-65">005</span> QA Mindset
          </p>
        </div>
        <div className="rounded-b-[20px]  border-2 md:border-3 border-primaryOP1 h-[90%]"></div>
      </motion.div>
    </motion.section>
  );
}

export default QaMindsetIndicator;
