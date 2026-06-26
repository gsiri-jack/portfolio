import React from "react";
import TrustIndicatorCard from "./trustIndicatorCard";

function QualityPipelineIndicator() {
  const array = [
    {
      title: "Code Commit",
      imgSrc: "",
      context: "Changes pushed to Repo",
    },
    {
      title: "CI Triggered",
      imgSrc: "",
      context: "Github Action Kicks Off",
    },
    {
      title: "Automated Tests",
      imgSrc: "",
      context: "Unit , API & UI tests executed",
    },
    {
      title: "Quality Gates",
      imgSrc: "",
      context: "Code quality & coverage checks",
    },
    {
      title: "Deploy Ready",
      imgSrc: "",
      context: "Ready to Deploy With Confidence",
    },
  ];
  return (
    <TrustIndicatorCard
      id={"005"}
      title={"Qualtiy PipleLine"}
      consoleTitle={"Q-pipe-details "}
      statusValue={"DEVELOPED"}
    >
      <div className=" h-[99%] w-[99%] px-0.5 m-auto  md:w-[70%] md:h-[87%] md:ml-2 flex flex-col justify-evenly ">
        {/* The workflow Main Div */}
        <div className="h-[37%] bg-ambe-500">
          {/* worklfow cont */}
          <div className="h-full w-full">
            <div className=" md:hidden h-[98%] flex flex-col gap-0.5 relative">
              <div className="absolute z-10 top-[17%] w-[92%] h-[50%] border-3 border-l-0 border-dashed rounded-[20px]  border-red-900 ml-5">
                d
              </div>
              {/* for <MD */}
              <div className="h-[50%] grid grid-cols-3 gap-1">
                {array.slice(0, 3).map((feat, index) => (
                  <div className="">
                    <WorkflowCard
                      title={feat.title}
                      imgSrc={feat.imgSrc}
                      key={index}
                    />
                  </div>
                ))}
              </div>

              <div className="h-[50%]  grid grid-cols-3  gap-1">
                <div className="relative z-40  left-1 bg-[#0A0A10]"></div>
                {array.slice(3).map((feat, index) => (
                  <div className="">
                    <WorkflowCard
                      title={feat.title}
                      imgSrc={feat.imgSrc}
                      key={index}
                    />
                  </div>
                ))}
              </div>
            </div>
            {/* for >MD */}
            <div className=" hidden md:grid h-[98%]  grid-cols-5 grid-rows-1 gap-1">
              <div className="absolute z-10 top-[25%] w-[67%]  border-b-3  border-dashed  border-red-900 ml-2">
                d
              </div>
              {array.map((feat, index) => (
                <div className="">
                  <WorkflowCard
                    title={feat.title}
                    context={feat.context}
                    imgSrc={feat.imgSrc}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Middle Main Div */}
        <div className="h-[48%] bg-lime-900">
          {/* Middle Cont */}
          <div className="h-full w-full flex">
            {/* Part Left */}
            <div className="w-[45%] border"></div>
            {/* part right */}
            <div className="w-[54%] border"></div>
          </div>
        </div>
        <div className="h-[12%] bg-red-700">
          <div className="h-full w-full">
            <div>
              <p>The bottom Line</p>
            </div>
          </div>
        </div>
      </div>
    </TrustIndicatorCard>
  );
}
function WorkflowCard({ title, imgSrc, context }) {
  return (
    <div className="relative z-40 h-[100%] w-[90%]  m-auto p-1">
      <div className="h-full w-full flex flex-col md:mt-5 items-center mt-3 md:mt:0">
        <img src="" alt="" className="w-[80%] h-[45%] border bg-primary" />
        <p className="font-code text-[13px] text-center mt-1">{title}</p>
        <p className="font-montserrat text-[11px] opacity-80 hidden md:inline-block  pl-2">
          {context}
        </p>
      </div>
    </div>
  );
}

export default QualityPipelineIndicator;
