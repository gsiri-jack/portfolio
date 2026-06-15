import React from "react";

function Skills() {
  return (
    <section className="mt-15 md:mt-[20vh] min-h-screen bg-amber-800 text-white">
      <div className="bg-lime-300">
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
      <div className="bg-amber-300 border-2 border-pink-800 flex flex-col justify-evenly  md:flex-row-reverse md:items-center mt">
        <div className="bg-pink-300 mt-4 mb-3 flex flex-col items-center">
          <div
            id="skillTable-div"
            className=" bg-emerald-300 text-[18px] flex flex-col items-center w-fit"
          >
            <div className="m-1">
              <p>Testing Stack</p>
            </div>
            <div className="h-[350px] border-2 border-brand-dark w-[270px] m-2  md:m-3  md:h-[80vh] md:w-[30vw]">
              table
            </div>
          </div>
        </div>
        <div className="text-2xl md:text-6xl bg-sky-400 md:w-[50vw] font-unbounded h-[200px] md:h-[50vh]">
          <p className="p-4 leading-14 md:leading-23">
            Each skill I master drives quality in every framework I build
          </p>
        </div>
      </div>
    </section>
  );
}

export default Skills;
