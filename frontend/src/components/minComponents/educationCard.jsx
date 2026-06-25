import React from "react";
import { FaUniversity } from "react-icons/fa";
import GraduationCap from "../../assets/icons/graduation-cap.svg";
import School from "../../assets/icons/school-flag.svg";

import GradeCenter from "../../assets/icons/grade-center.svg";
import { FaRegCalendar } from "react-icons/fa6";

function EducationCard({ props }) {
  return (
    <div className="border border-primary h-[48%]  md:h-[95%] md:w-[45%] bg-[#5c43ff10] rounded-[7px] flex flex-col md:shadow-[0_0_12px_-4px_var(--color-secondary)] transition-all duration-300 ease-out hover:scale-[1.02] hover:shadow-[0_0_25px_-5px_var(--color-secondary)] hover:border-secondary/60">
      <div className="pl-3 mt-5 md:mt-0">
        <div className="flex md:justify-between md:flex-row-reverse md:mt-5 relative items-center">
          <img
            src={props.title === "B.Tech" ? GraduationCap : School}
            alt="clg"
            className="w-14 h-14 md:w-[70px] md:h-[70px] mr-4 bg-indigo-800/20 p-2 rounded-2xl mt-1 md:mt-0 md:mr-6 "
          />
          <div className="pl-3">
            <p className="font-syne font-semibold text-[18px] md:text-[20px] uppercase tracking-wider">
              {props.title}
            </p>
            <p className="mt-2">{props.course}</p>
          </div>

          {/* <FaGraduationCap className="text-6xl" /> */}
        </div>

        <div className=" mt-2 mb-5 flex items-center ">
          <FaUniversity className="  mr-4 mt-2 opacity-80 text-2xl" />
          <p className="w-[80%] text-pretty text-secondary border-l-2 border-primary/70 pl-4 mt-3 ">
            {props.institution}
          </p>
        </div>
      </div>
      <hr className="w-[95%] mx-auto my-1.5 text-primary" />
      <div className="pl-4">
        <table className="border-collapse border-gray-500 w-[85%] md:w-[75%] ">
          <tbody>
            <tr>
              <td className=" px-2 pl-4 py-2 font-semibold flex items-center">
                <img
                  src={GradeCenter}
                  alt=""
                  srcset=""
                  className="inline w-5 h-5 md:w-6 md:h-6"
                />{" "}
                <p className="ml-3">{props.scoreType}</p>
              </td>
              <td className="w-fit">:</td>
              <td className=" px-2 py-2">{props.score}</td>
            </tr>

            <tr>
              <td className=" px-2 pl-4 py-2 font-semibold flex items-center">
                <FaRegCalendar className="inline font-normal text-primary w-5 h-5 md:w-6 md:h-6" />{" "}
                <p className="ml-3">Completion</p>
              </td>
              <td className="w-fit">:</td>
              <td className=" px-2 py-2">{props.completion}</td>
            </tr>
          </tbody>
        </table>
        <div className="hidden md:block mt-3 mb-3 ml-4">
          <p>Course Work</p>
          <ul className="mt-3.5 flex gap-2 flex-wrap ">
            {props.courseWork.map((course, index) => (
              <li className="px-2 py-1 bg-primaryOP1 rounded-[7px]">
                {course}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default EducationCard;
