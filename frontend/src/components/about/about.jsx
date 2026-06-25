import React from "react";
import { BsDownload, BsDot } from "react-icons/bs";
import aboutImg from "../../assets/aboutPic.png";
import aboutImgMob from "../../assets/aboutpic2.png";

function About() {
  return (
    <section className="min-h-[900px] md:min-h-[850px] h-screen w-screen opacity-100 pt-8 p-1 md:pt-[10vh] mt-[10vh] md:mt-[23vh]">
      {/* TODO: Modify the Features content
                Implement the button for the download CV
                Implement the Reveal Animation based on the Scroll
      */}
      {/* heading */}
      <div className="mr-3.5 md:mr-9 text-right mb-3.5 md:mb-9">
        <p className="tag font-code text-neutral-500 mb-2 ">~/ sid001</p>
        <p className="sectionHeader text-white font-code font-light text-4xl md:text-6xl">
          About<span className="text-primary font-unbounded font-bold">Me</span>
        </p>
      </div>
      <div
        id="about-cont"
        className="min-h-[85%] flex flex-col justify-evenly md:flex-row"
      >
        <div
          id="about-photo"
          className="h-[30vh] md:h-[90vh] md:min-h-[750px] md:w-[30%] flex items-center justify-center"
        >
          <img
            src={aboutImgMob}
            alt=""
            srcset=""
            className="md:hidden h-[100%] w-fit"
          />

          <img src={aboutImg} alt="" srcset="" className="hidden md:block" />
        </div>
        <div
          id="about-context"
          className="h-[60vh] md:h-[90vh] md:min-h-[700px] md:w-[50%] flex flex-col justify-evenly items-center"
        >
          <div className="h-[50%] md:h-[30%]  text-[16px] sm:text-[16px] md:text-xl  text-pretty font-syne flex flex-col justify-evenly pl-2 text-white ">
            <p>
              I’m <span className="text-primary font-bold">Jack,</span> a
              Software Developer in Test focused on building reliable, scalable,
              and automation-driven systems.
            </p>
            <p className="text-neutral-300 font-syne opacity-70">
              My journey began with manual testing, where I developed a deep
              attention to detail and system reliability. Today, I design and
              automate testing workflows that improve software quality,
              stability, and user confidence.
            </p>
          </div>

          <div className="w-[95%] md:mr-2 md:ml-2 h-[15%] md:h-[13%] text-[23px] sm:text-[30px]  flex items-center justify-center border-primary border-t-2 border-b-2 font-code font-bold md:text-3xl lg:text-5xl">
            <p className="block text-white pl-2.5 pr-2.5">
              Dev + Test + Automate
            </p>
          </div>

          <div className="hidden md:grid grid-cols-2 gap-2 md:h-[32%]">
            <div className="rounded-[10px] bg-primaryOP1">
              <div className="h-full flex items-center justify-evenly align-middle">
                <BsDownload className="text-3xl p-0 m-0 text-white" />
                <div className="w-[70%]">
                  <p className=" font-code font-light text-[18px] text-secondary">
                    Automation-driven
                  </p>
                  <p className="font-poppins text-[14px] text-white">
                    Lorem ipsum dolor sit amet consectetur. Lorem, ipsum.
                  </p>
                </div>
              </div>
            </div>
            <div className="rounded-[10px] bg-primaryOP1">
              <div className=" border-2 h-full flex items-center justify-evenly align-middle">
                <BsDownload className="text-3xl p-0 m-0 text-white" />
                <div className="w-[70%]">
                  <p className=" font-code font-light text-[18px] text-secondary">
                    Lorem, ipsum.
                  </p>
                  <p className="font-poppins text-[14px] text-white">
                    Lorem ipsum dolor sit amet consectetur. Lorem, ipsum.
                  </p>
                </div>
              </div>
            </div>
            <div className="rounded-[10px] bg-primaryOP1">
              <div className=" border-2 h-full flex items-center justify-evenly align-middle">
                <BsDownload className="text-3xl p-0 m-0 text-white" />
                <div className="w-[70%]">
                  <p className=" font-code font-light text-[18px] text-secondary">
                    Lorem, ipsum.
                  </p>
                  <p className="font-poppins text-[14px] text-white">
                    Lorem ipsum dolor sit amet consectetur. Lorem, ipsum.
                  </p>
                </div>
              </div>
            </div>
            <div className="rounded-[10px] bg-primaryOP1">
              <div className=" border-2 h-full flex items-center justify-evenly align-middle">
                <BsDownload className="text-3xl p-0 m-0 text-white" />
                <div className="w-[70%]">
                  <p className=" font-code font-light text-[18px] text-secondary">
                    Lorem, ipsum.
                  </p>
                  <p className="font-poppins text-[14px] text-white">
                    Lorem ipsum dolor sit amet consectetur. Lorem, ipsum.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="h-[25%] md:h-[15%] flex flex-col md:flex-row text-white justify-evenly align-middle items-center font-syne md:text-[20px]">
            <div className="bg-brand-dark h-9 w-[170px] mb-3 md:mb-0 md:h-11 md:w-[200px] border-2 border-primary rounded-[10px] flex items-center justify-evenly text-secondary">
              <BsDownload />
              <p>download CV</p>
            </div>
            <div className="flex-col align-middle justify-center items-center h-9 md:h-15 w-[200px] md:h-11 md:w-[250px]">
              <p className="opacity-45 block text-center ">
                Available for Opportunites
              </p>
              <p className="block text-center">
                {" "}
                <BsDot className="inline text-4xl text-green-800" /> Open To
                work
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
