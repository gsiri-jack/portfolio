import React from "react";
import { motion } from "motion/react";
import Typewriter from "./typewriter";
import PillOne from "./pillOne";
import { PiCertificateDuotone } from "react-icons/pi";
import TrustIndicatorCard from "./trustIndicatorCard";
import CheckList from "../../assets/icons/checklist-on-clipboard.svg";
import RiskMajor from "../../assets/icons/riskmajor.svg";
import ShieldStar from "../../assets/icons/shield-star.svg";
import VerifiedCheck from "../../assets/icons/verified-check.svg";
import WorkFlow from "../../assets/icons/workflow.svg";
import { FaQuoteLeft } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";
import CodeReview from "../../assets/icons/code-review.svg";

function TestEngneeringIndicator() {
  return (
    <TrustIndicatorCard
      id={"003"}
      title={"Test Engineering"}
      consoleTitle={"test-eng-details "}
      statusValue={"Passed"}
    >
      <div className=" md:w-full h-[98%] md:h-[87%] m-1 p-1 flex flex-col gap-y-1.5 md:flex-row">
        <div className="h-[36%] md:h-full md:w-[43%] flex flex-col justify-evenly">
          {/* Header Quote */}
          <div className="h-[47%] flex md:gap-2 items-center">
            <img
              src={CodeReview}
              alt="d"
              className="w-19 md:w-29 h-fit py-3 bg-primary/20 p-1 rounded-[10px]"
            />
            <div className="w-[80%] md:w-[70%] px-1 flex flex-col justify-evenly md:justify-center md:gap-4">
              <h1 className="text-[13px] md:text-[20px] md:font-semibold font-code text-primary">
                " CONFIDENCE IS ENGINEERED "{" "}
              </h1>
              <p className="text-[11px] md:text-[15px] text-justify font-montserrat">
                I trace a system end to end — UI, API contract, backend state —
                to find where confidence actually breaks down.
              </p>
            </div>
          </div>
          {/* Metrics */}
          <div className="h-[48%] bg-primary/10 rounded-[10px] md:mr-2">
            empty
          </div>
        </div>
        <div className="h-[74%] md:h-full md:w-[57%]  flex flex-row gap-1 p-0.5 ">
          {/* context left */}
          <div className="h-full w-[52%]  flex flex-col bg-primary/10 rounded-[10px] ">
            <FeatureCont
              imgS={CheckList}
              title={"Start with the Requirement"}
              description={"Understand the expected behavior."}
            />
            <FeatureCont
              imgS={WorkFlow}
              title={"Trace the Flow"}
              description={"Follow requests, responses, and data movement."}
            />
            <FeatureCont
              imgS={RiskMajor}
              title={"Focus on Risk"}
              description={"Prioritize what matters most to users."}
            />
            <FeatureCont
              imgS={VerifiedCheck}
              title={"State matters"}
              description={
                "Check that data and system behavior remain correct."
              }
            />
            <FeatureCont
              imgS={ShieldStar}
              title={"Build Confidence"}
              description={
                "Provide evidence that the feature works as intended."
              }
            />
          </div>
          <div className=" w-[47%] flex flex-col justify-evenly ">
            <div className="h-[58%] flex md:px-5 bg-primary/10 py-1 rounded-[10px]">
              <div className="border md:border-2 h-[95%] ml-1.5 border-dashed my-2  border-white/30"></div>
              <div className="h-full flex w-full flex-col ml-2 gap-y-2">
                <p className="text-[14px] md:text-[16px] md:font-bold md:mt-2 text-primary font-syne">
                  What i Work With
                </p>

                <div className="h-[17%] w-[90%] relative">
                  <div className="h-2 w-2 md:w-4 md:h-4 rounded-full p-1 border-2 md:border-3 border-brand-dark bg-secondary absolute flex top-[18%] -left-[15px] md:-left-[16px] items-center justify-center"></div>
                  <p className="text-[12px] font-code my-1 ml-2 md:text-[15px] md:ml-3">
                    Automation
                  </p>
                </div>

                <div className="h-[17%] w-[90%] relative">
                  <div className="h-2 w-2 md:w-4 md:h-4 rounded-full p-1 border-2 md:border-3 border-brand-dark bg-secondary absolute flex top-[18%] -left-[15px] md:-left-[16px] items-center justify-center"></div>
                  <p className="text-[12px] font-code my-1 ml-2 md:text-[15px] md:ml-3">
                    API Testing
                  </p>
                </div>

                <div className="h-[17%]  w-[90%] relative">
                  <div className="h-2 w-2 md:w-4 md:h-4 rounded-full p-1 border-2 md:border-3 border-brand-dark bg-secondary absolute flex top-[18%] -left-[15px] md:-left-[16px] items-center justify-center"></div>
                  <p className="text-[12px] font-code my-1 ml-2 md:text-[15px] md:ml-3">
                    Backend Validation
                  </p>
                </div>

                <div className="h-[17%]  w-[90%] relative">
                  <div className="h-2 w-2 md:w-4 md:h-4 rounded-full p-1 border-2 md:border-3 border-brand-dark bg-secondary absolute flex top-[18%] -left-[15px] md:-left-[16px] items-center justify-center"></div>
                  <p className="text-[12px] font-code my-1 ml-2 md:text-[15px] md:ml-3">
                    Quality Engineering
                  </p>
                </div>

                <div className="h-[17%]  w-[90%] relative">
                  <div className="h-2 w-2 md:w-4 md:h-4 rounded-full p-1 border-2 md:border-3 border-brand-dark bg-secondary absolute flex top-[18%] -left-[15px] md:-left-[16px] items-center justify-center"></div>
                  <p className="text-[12px] font-code my-1 ml-2 md:text-[15px] md:ml-3">
                    Automation
                  </p>
                </div>
              </div>
            </div>
            <div className="h-fit mt-1 text-[11px] bg-primary/10 p-1 rounded-[10px] md:text-[18px] relative pt-2">
              <FaQuoteLeft className="relative left-[7%] opacity-75" />
              <div className="flex text-center mt-1">
                <p className=" font-code italic mx-1 ">
                  Code to test, design to prevent.
                </p>
              </div>
              <FaQuoteRight className="relative left-[80%] opacity-75" />
            </div>
            <div className="h-[9%] font-light text-[13px] md:text-[15px] font-code border p-1  border border-primaryOP1 rounded-[10px] mt-1 flex items-center justify-center">
              <p>jack@quality{"  "}</p>
              <motion.span
                className="inline-block w-[3px] h-4 bg-secondary ml-3"
                animate={{ opacity: [1, 0, 1] }}
                transition={{
                  duration: 0.8,
                  repeat: Infinity,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </TrustIndicatorCard>
  );
}

function FeatureCont({ title, imgS, description }) {
  return (
    <>
      <div className="h-[19%] flex items-center gap-x-1 mt-1 ">
        <img
          src={imgS}
          alt="d"
          className="w-6 h-6  border-0 ml-0.5 mr-0.5 md:w-8 md:h-8 md:ml-3 md:mr-2"
        />
        <div>
          <h4 className="text-[12px] text-secondary font-unbounded md:text-[14px]">
            {title}
          </h4>
          <p className="text-[11px] font-syne mb-1 md:text-[13px]">
            {description}
          </p>
        </div>
      </div>
      <hr className="opacity-25 mx-2" />
    </>
  );
}

export default TestEngneeringIndicator;
