import React from "react";


function PillOne(props) {
  return (
    <section className="border border-primaryOP1 bg-primary/20 h-fit px-2 py-1 rounded-[5px]">
      <div className="">
        <p className="text-pillGreen">
          {props.title} : <span className="text-pillGreen">{props.value}</span>
        </p>
      </div>
    </section>
  );
}

export default PillOne;
