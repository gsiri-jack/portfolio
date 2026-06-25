import React from "react";
import PillOne from "./pillOne";
import Typewriter from "./typewriter";
function TrustIndicatorCard({
  id,
  title,
  consoleTitle,
  statusValue,
  children,
}) {
  return (
    <section className="h-[110vh] sticky top-4">
      <div className="text-white overflow-hidden  h-[95vh]  ml-5 mr-1  mt-3  relative md:w-[90%] md:ml-15 bg-[#0A0A10]">
        <div className="h-[10%]  flex  flex-col justify-center  ">
          <p className="text-neutral-500 font-code text-[10px] ">
            $ jack/sec/ti-<span>{id}</span>/
          </p>
          <p className="text-[24px]   font-bold font-syne tracking-wider">
            <span className="opacity-65">{id}</span> {title}
          </p>
        </div>
        <div className="rounded-b-[20px] text-white border-2 md:border-3 border-primaryOP1 h-[85%] ">
          <div className="hidden md:block  h-[10%]  font-code text-[14px]">
            <div className="flex justify-between  h-full items-center px-4">
              <Typewriter
                texts={`~/../ti-${id}/${consoleTitle}..Loaded`}
                loop={false}
              />
              <PillOne title="Status" value={statusValue} />
            </div>
          </div>

          {children}
        </div>
      </div>
    </section>
  );
}

export default TrustIndicatorCard;
