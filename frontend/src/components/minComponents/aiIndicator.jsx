import React from "react";
import TrustIndicatorCard from "./trustIndicatorCard";
import { BsRobot } from "react-icons/bs";
import VerifiedCheck from "../../assets/icons/verified-check.svg";
import Location from "../../assets/icons/current-location.svg";
import { RiRobot2Fill } from "react-icons/ri";
import { LuMessageSquareCode } from "react-icons/lu";
import { VscFileCode } from "react-icons/vsc";
import { RxRocket } from "react-icons/rx";
import { LuMessageSquareText } from "react-icons/lu";
import Openai from "../../assets/Aitools/openai.svg";
import claude from "../../assets/Aitools/claude.svg";
import githubcopilot from "../../assets/Aitools/githubcopilot.svg";
import perplexity from "../../assets/Aitools/perplexity.svg";
import postman from "../../assets/Aitools/postman.svg";
import gemini from "../../assets/Aitools/gemini.svg";

function AppliedAiIndicator() {
  const AiToolsList = [
    {
      name: "ChatGPT",
      context: "AI Assistants",
      imgSrc: Openai,
    },
    {
      name: "Claude",
      context: "AI Assistants",
      imgSrc: claude,
    },
    {
      name: "Github Copilot",
      context: "Coding Assistants",
      imgSrc: githubcopilot,
    },
    {
      name: "Gemini AI",
      context: "Testing Platforms",
      imgSrc: gemini,
    },
    {
      name: "PostMan AI",
      context: "API Testing",
      imgSrc: postman,
    },
    {
      name: "Perplexity",
      context: "AI Research",
      imgSrc: perplexity,
    },
  ];
  return (
    <TrustIndicatorCard
      id={"004"}
      title={"Applied AI"}
      consoleTitle={"applied-AI-details "}
      statusValue={"ACTIVE"}
    >
      <div className=" md:w-full h-[98%] md:h-[87%] m-1 p-1 flex flex-col gap-y-1.5 md:gap-x-2 md:flex-row">
        {/* part 1 */}
        <div className="h-[43%] md:h-full md:w-[43%] flex flex-col justify-evenly border px-1 rounded-[10px] border-primary md:pl-2 overflow-scroll">
          {/* Header Quote */}
          <div className="h-[30%] flex md:gap-2 items-center">
            <img
              src="./s.svg"
              alt="d"
              className="w-19  md:w-[28%] h-20 md:h-[98%] py-3 bg-primary/20 p-1 rounded-[10px]"
            />
            <div className="w-[80%] md:w-[70%] px-1 flex flex-col justify-evenly md:justify-center md:gap-4">
              <h1 className="text-[13px] sm:text-[16px] md:text-[20px] md:font-semibold font-code text-primary">
                " AI Exploring "{" "}
              </h1>
              <p className="text-[11px]  md:text-[15px] text-justify font-montserrat">
                Exploring AI Concepts and tools to level the test desinging and
                quality workflows
              </p>
            </div>
          </div>
          {/* Stats */}
          <div className=" relative h-[52%] md:h-[60%]  md:mr-2 flex gap-x-1">
            <AIStats
              id={"01"}
              title={"Prompt Engineering"}
              icon={LuMessageSquareText}
              imgS={VerifiedCheck}
              desc={"Crafting prompts to improve testing insights."}
            />
            <AIStats
              id={"02"}
              title={"AI-Assited Testing"}
              icon={BsRobot}
              imgS={VerifiedCheck}
              desc={"Using AI to enhance testing workflows."}
            />
            <AIStats
              id={"03"}
              title={"AI Tools for Quality"}
              icon={VscFileCode}
              imgS={VerifiedCheck}
              desc={"Leveraging tools that support quality efforts."}
            />
            <AIStats
              id={"04"}
              title={"Future Learning"}
              icon={RxRocket}
              imgS={Location}
              desc={"Exploring the future of AI-driven test engineering."}
            />

            {/* flow line */}
            <div className="h-[2px] md:h-1 w-[85%] bg-primary absolute bottom-4"></div>
          </div>
        </div>
        {/* part 2 */}
        <div className="h-[57%]  md:h-full  md:w-[55%] flex flex-col gap-1 p-0.5 ">
          {/* Tools i used */}
          <div className="relative h-[49%]  flex  rounded-[10px] ">
            <div className="h-full w-full ">
              <p className="">Tools i used</p>
              <div className="h-[89%] w-full px-1 md:w-[100%] bg-primary/0 grid grid-cols-2 grid-rows-3 gap-x-2 ">
                {AiToolsList.map((tool, index) => (
                  <AiTool
                    name={tool.name}
                    imgSrc={tool.imgSrc}
                    context={tool.context}
                    key={index}
                  />
                ))}
              </div>
            </div>
            <div className=" h-[98%] hidden md:block bg-lime-800/40 w-[39%]"></div>
          </div>
          <hr className="mx-2" />
          {/* Case Studies */}
          <div className="bg-primary/10 rounded-[10px] h-[49%] flex flex-col justify-evenly ">
            <AiCaseStudy />
          </div>
        </div>
      </div>
    </TrustIndicatorCard>
  );
}
function AIStats({ id, title, icon: Icon, imgS, desc }) {
  return (
    <div className="relative w-[24%] rounded-[5px]  h-full flex flex-col items-center pt-2 mr-0.5">
      <p className="absolute top-2 left-1 text-primary font-code text-[10px] md:text-[14px]">
        {id}
      </p>
      <div className="h-fit md:h-[90%] w-full px-1 flex flex-col items-center bg-indigo-700/10 py-4  rounded-[5px]">
        <Icon className="w-8 md:w-[33%] md:pt-2 h-auto text-indigo-300/80" />
        <p className="text-[11px] md:text-[16px] tracking-wide font-syne leading-4 md:leading-normal md:tracking-wider  text-center mt-3 md:h-[27%] sm:h-fit overflow-clip">
          {title}
        </p>
        <p className="text-[13px] sm:text-[10px]  md:text-[14px] font-montserrat hidden md:block opacity-60 font-light tracking-wider text-center overflow-hidden">
          {desc}
        </p>
        <div className="absolute w-4 h-4 md:w-6 md:h-6 rounded-full bg-brand-dark bottom-[9px] md:bottom-[7px] z-20 ">
          <img src={imgS} alt="" className="w-full h-full" />
        </div>
      </div>
    </div>
  );
}

function AiTool({ name, imgSrc, context }) {
  return (
    <div className="h-[75%] w-[100%] md:h-[70%] md:w-[93%] bg-primary/30 flex gap-x-1 items-center m-auto rounded-[7px]">
      <img src={imgSrc} alt="d" className="mx-1 h-[90%] w-[20%]" />
      <p className="text-[12px] md:text-[15px] font-code">{name}</p>
    </div>
  );
}

function AiCaseStudy({}) {
  return (
    <div className="h-full w-full p-1 flex flex-col gap-1">
      <div className="h-[9%] border "></div>
      <div className="h-[88%] border">
        <p className="text-[14px] font-code  p-2">heading</p>
        <p className="text-[13px]  w-fit text-justify mt-2 font-montserrat p-1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi sed
          quidem dolore temporibus libero. Nam aspernatur nisi eveniet voluptas
          amet.
        </p>
      </div>
    </div>
  );
}

export default AppliedAiIndicator;
