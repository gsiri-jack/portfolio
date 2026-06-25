import React from "react";
import { motion } from "motion/react";
import { BsDot } from "react-icons/bs";
import { FaGraduationCap } from "react-icons/fa";
import { FaUniversity } from "react-icons/fa";
import GraduationCap from "../../assets/icons/graduation-cap.svg";
import GradeCenter from "../../assets/icons/grade-center.svg";
import { FaRegCalendar } from "react-icons/fa6";
import EducationCard from "./educationCard";
import PillOne from "./pillOne";
import Typewriter from "./typewriter";
import TrustIndicatorCard from "./trustIndicatorCard";

function EducationIndicator() {
  const educationDetails = [
    {
      title: "B.Tech",
      course: "Computer Science Engineering",
      institution: "Pace Institue of Technology and Sciences",
      scoreType: "CGPA",
      score: "7.94",
      completion: "June, 2026",
      courseWork: [
        "Python",
        "Java",
        "DBMS",
        "Operating Systems",
        "Computer Networks",
        "Data Structures",
      ],
      icon: "GraduactionCap",
    },
    {
      title: "Intermediate",
      course: "MPC",
      institution: "Jawahar Navodaya Vidyalaya - Markapur [CBSE]",
      scoreType: "Percentage",
      score: "75%",
      completion: "April, 2022",
      courseWork: [
        "Mathematics",
        "Physics",
        "Chemistry",
        "Computer Science",
        "Python",
      ],
      icon: "GraduactionCap",
    },
  ];
  return (
    <TrustIndicatorCard
      id={"001"}
      title={"Education"}
      consoleTitle={"edu-details"}
      statusValue={"Verified"}
    >
      <div className=" h-[97%] md:h-[90%]  flex flex-col  md:flex-row justify-evenly md:items-center text-[14px] md:text-[16px] font-montserrat px-1 ">
        {/* edu 01 */}
        {educationDetails.map((educationDetail, index) => (
          <EducationCard props={educationDetail} />
        ))}
      </div>
    </TrustIndicatorCard>
  );
}

export default EducationIndicator;
