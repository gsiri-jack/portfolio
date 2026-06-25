import React from "react";
import Table from "./table";
import { motion } from "motion/react";
import MarqueeLogo from "./marqueeLogo";

function Skills() {
  const columns = [
    { key: "skill_id", label: "skill_id" },
    { key: "skill_case", label: "skill_case" },
    { key: "outcome", label: "outcome" },
  ];

  // Define your data
  const data = [
    { skill_id: "ts001", skill_case: "Selenium", outcome: "Admin" },
    { skill_id: "ts002", skill_case: "PlayWright", outcome: "Editor" },
    { skill_id: "ts003", skill_case: "Java", outcome: "Viewer" },
    { skill_id: "ts004", skill_case: "Python", outcome: "Viewer" },
    { skill_id: "ts005", skill_case: "TestNG", outcome: "Viewer" },
    { skill_id: "ts006", skill_case: "RestAssured", outcome: "Viewer" },
    { skill_id: "ts007", skill_case: "PostMan", outcome: "Viewer" },
    { skill_id: "ts008", skill_case: "Docker", outcome: "Viewer" },
    { skill_id: "ts009", skill_case: "Java", outcome: "Viewer" },
  ];
  return (
    <section className="mt-15 md:mt-[20vh]  text-white min-h-[1100px] ">
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
      <div className="flex flex-col justify-evenly  md:flex-row-reverse md:items-center mt-5 md:mt-8 ">
        <div className="mt-4 mb-3 flex flex-col items-center">
          <div
            id="skillTable-div"
            className=" text-[18px] flex flex-col items-center w-fit md:mt-2 rounded-[8px] border-2 border-primary"
          >
            <div className="p-2 w-full flex">
              <p>
                <span className="text-primary pr-1.5">~/</span> Testing Stack --
                Loaded
              </p>
              <motion.div
                className="w-1.5 h-6 bg-secondary ml-2 inline-block"
                initial={{}}
                animate={{
                  opacity: [0, 1, 1, 0],
                }}
                transition={{
                  times: [0, 0.1, 0.9, 1],
                  repeat: Infinity,
                  repeatDelay: 0,
                  duration: 0.8,
                  ease: "easeInOut",
                }}
              ></motion.div>
            </div>
            <div className="min-h-[500px]   w-[310px] m-2  md:m-3  md:h-[80vh] md:w-[30vw]">
              <Table data={data} columns={columns} />
            </div>
          </div>
        </div>
        <div className="text-2xl md:text-6xl  md:w-[50vw] font-unbounded h-[200px] md:h-[50vh]">
          <p className="p-4 leading-14 md:leading-23">
            Each skill I master drives quality in every framework I build
          </p>
        </div>
      </div>
      <div>
        <MarqueeLogo />
      </div>
    </section>
  );
}

export default Skills;
