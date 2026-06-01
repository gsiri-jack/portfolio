import React from "react";
import "../../styles/styles.css";

function Quote() {
  return (
    <section className="relative z-20 h-[100dvh]">
      <div className="h-full bg-linear-to-b from-[rgba(08,08,15,0.3)] via-[rgba(08,08,15,1)] to-[rgba(08,08,15,0.8)] flex flex-col justify-center">
        <div>
          <p className="text-zinc-200 font-syne text-[30px] sm:text-[40px] md:text-[50px]  font-medium leading-loose tracking-wide m-2  md:ml-[50px] mr-3.5">
            <span className="text-white"> Technical SDET</span> building
            scalable{" "}
            <span className="font-playfair text-secondary italic">
              automation
            </span>{" "}
            frameworks and high-impact test suites for quality-driven{" "}
            <span className="font-playfair text-secondary italic">
              software{" "}
            </span>
            delivery.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Quote;
