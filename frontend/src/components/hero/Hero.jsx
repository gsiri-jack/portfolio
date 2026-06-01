import React from "react";
import "../../styles/styles.css";
import "./hero.css";

function Hero() {
  return (
    <section id="hero-section" className="h-screen border-2 border-amber-50">
      <div className="hero ">
        <div
          className="hero-blob blur-[60px] opacity-[0.59] sm:blur-[60px] sm:opacity-[0.58]
        md:blur-[80px] md:opacity-[0.50] lg:blur-[100px] lg:opacity-[0.53] xl:blur-[150px] xl:opacity-[0.60] "
        ></div>
        <div className="hero-cont relative z-1 flex flex-col justify-center align-middle  md:justify-evenly  lg:justify-center md:flex-row h-[90vh] md:h-[90vh]">
          <div className="context relative md:w-fit md:left-[50px]">
            <div className="text1">
              <h1 className="text-[1.5rem] md:text-2.5xl lg:text-5xl">
                my name is
              </h1>
              <p className="">
                <span className="text-6xl md:text-[100px] lg:text-[130px] xl:text-[160px] font-extrabold font-unbounded">
                  JACK
                </span>
                <span className="text-[1.5rem] md:text-2xl lg:text-4xl font-medium font-syne">
                  {"\u00a0"} ,I'm a
                </span>
              </p>
            </div>
            <div
              id="text2"
              className="font-unbounded text-xl md:text-3xl lg:text-4xl "
            >
              <p>
                Software{" "}
                <span className="text-secondary">Developer in Test</span>
              </p>
            </div>
          </div>
          <div className="hero-potrait flex flex-col justify-center pt-10 sm:pt-0 md:pt-0 lg:pt-0">
            {/* Added a height class (h-96) and fixed the brackets for arbitrary width */}
            <div className="hpotrait w-90 sm:w-104 md:w-[45vw] md:max-w-[600] lg:w-[50vw] lg:max-w-[700px] h-auto "></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
