import React from "react";
import Logo from "../assets/skillLogos/git.svg";

function ProjectCard({ project }) {
  return (
    <section
      className=" h-[90%]  w-[90%] min-w-[320px] md:min-w-[600px] md:min-w-[50%] mr-3 rounded-[10px] md:rounded-[15px] border-2 border-primary overflow-hidden bg-primary/10
    backdrop-blur-md
    "
    >
      <style>{`
    @media (max-width: 767px) {
      [data-connector-root] { --connector-length: 16px; }
    }
  `}</style>
      <div className="h-12% text-secondary font-code  pl-1 border-b-2 flex justify-between items-center">
        <p className="opacity-55 text-[12px] md:text-[15px]">
          ~/ pid001/
          <span className="tracking-tight ">{project.tag}</span>
        </p>
        <div className="mr-1.5 text-pillGreen text-[11px] border-1 p-1 m-1 rounded-[3px] px-4">
          PASS
        </div>
      </div>
      <div className="text-white p-3">
        <p className="opacity-20 font-code  text-[12px] md:text[14px]">
          {" "}
          {"> "}running suite: {project.title}
        </p>
        <p className="text-[20px] font-medium mt-3 block  h-fit  max-h-[100px] overflow-hidden text-ellipsis font-syne">
          {project.name}
        </p>
        <div className="">
          <p className="font-light leading-relaxed mt-2 tracking-wide font-montserrat opacity-85 pr-3">
            {project.description}
          </p>
          <hr className="mt-5 md:mt-3 opacity-55 text-primary" />
        </div>
        <div className="mt-3 md:mt-2 ">
          <p className="mb-2">stack</p>
          <div className="flex flex-wrap shrink-1">
            {project.skills.map((skill, index) => (
              <Pill name={skill} ImgSrc={"/skillLogos/" + skill + ".svg"} />
            ))}
            <p className="flex justify-center items-center px-3">
              {project.hiddenSkills?.length || 0} more
            </p>
          </div>
        </div>
        <div></div>
      </div>
    </section>
  );
}

function Pill(props) {
  return (
    <section className="w-fit  bg-primaryOP1 rounded-[5px] inline-block py-1 px-2 m-1">
      <div className="flex">
        <img
          src={props.ImgSrc}
          alt="d"
          className="w-7 h-7 object-cover opacity-75"
        />
        <p className="text-ellipsis overflow-hidden ml-2">{props.name}</p>
      </div>
    </section>
  );
}

export default ProjectCard;
