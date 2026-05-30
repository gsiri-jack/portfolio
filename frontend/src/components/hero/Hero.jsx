import React from "react";
import "../../styles/styles.css";
import "./hero.css";

function Hero() {
  return (
    <section id="hero-section">
      <div className=" w-72 h-[583.50px] hero-blob absolute -z-1 bg-primary backdrop-blur-[360]">
        d
      </div>
      <div className="hero">
        <div className="hero-cont">
          <div className="context">
            <div className="text1">
              <h1>my name is</h1>
              <p>
                <span>JACK</span> ,I'm a
              </p>
            </div>
            <div id="text2" className="font-unbounded">
              <p>
                Software <span className="text-primary">Developer in Test</span>
              </p>
            </div>
          </div>
          <div className="hero-potrait">
            <div className="hpotrait"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
