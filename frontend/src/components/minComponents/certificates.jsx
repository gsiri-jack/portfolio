import React from "react";
import { motion } from "motion/react";
import CertificateCard from "./certificateCard";
import { PiCertificateDuotone } from "react-icons/pi";
import Typewriter from "./typewriter";
import PillOne from "./pillOne";
import sampleCertificate from "../../assets/certificates/sampleCert.webp";
import TrustIndicatorCard from "./trustIndicatorCard";

function CertificatesIndicator() {
  const cert1 = [
    {
      certImage: sampleCertificate,
      title: "Java Programming",
      tags: ["Java", "Backend"],
      desc: "Completed comprehensive training in Java fundamentals, OOP concepts, and application development.",
    },
    {
      certImage: sampleCertificate,
      title: "Software Testing Fundamentals",
      tags: ["QA", "Testing"],
      desc: "Learned testing principles, defect lifecycle, test planning, and quality assurance practices.",
    },
    {
      certImage: sampleCertificate,
      title: "SQL & Database Management",
      tags: ["SQL", "Database"],
      desc: "Gained hands-on experience in database design, queries, joins, indexing, and optimization.",
    },
  ];

  const cert2 = [
    {
      certImage: sampleCertificate,
      title: "Web Development Essentials",
      tags: ["HTML", "CSS"],
      desc: "Built responsive web interfaces using modern HTML and CSS best practices.",
    },
    {
      certImage: sampleCertificate,
      title: "Git & Version Control",
      tags: ["Git", "DevOps"],
      desc: "Learned branching strategies, collaboration workflows, and repository management.",
    },
  ];

  const cert3 = [
    {
      certImage: sampleCertificate,
      title: "API Testing with Postman",
      tags: ["API", "Postman"],
      desc: "Created and executed API test suites, validations, and automated collections.",
    },
  ];
  const allCertificates = [
    {
      certImage: sampleCertificate,
      title: "API Testing with Postman",
      tags: ["API", "Postman"],
      desc: "Created and executed API test suites, validations, and automated collections.",
    },
    {
      certImage: sampleCertificate,
      title: "Web Development Essentials",
      tags: ["HTML", "CSS"],
      desc: "Built responsive web interfaces using modern HTML and CSS best practices.",
    },
    {
      certImage: sampleCertificate,
      title: "Git & Version Control",
      tags: ["Git", "DevOps"],
      desc: "Learned branching strategies, collaboration workflows, and repository management.",
    },
    {
      certImage: sampleCertificate,
      title: "Java Programming",
      tags: ["Java", "Backend"],
      desc: "Completed comprehensive training in Java fundamentals, OOP concepts, and application development.",
    },
    {
      certImage: sampleCertificate,
      title: "Software Testing Fundamentals",
      tags: ["QA", "Testing"],
      desc: "Learned testing principles, defect lifecycle, test planning, and quality assurance practices.",
    },
    {
      certImage: sampleCertificate,
      title: "SQL & Database Management",
      tags: ["SQL", "Database"],
      desc: "Gained hands-on experience in database design, queries, joins, indexing, and optimization.",
    },
  ];
  return (
    <TrustIndicatorCard
      id={"002"}
      title={"Cerifications Vault"}
      consoleTitle={"cert-details"}
      statusValue={"Verified"}
    >
      <div className="h-[98%] md:h-[95%]">
        {/* header */}
        <div className="flex h-[13%] items-center md:h-[15%] md:flex-row-reverse md:w-fit gap-2">
          <p className="font-code text-[11px] sm:text-[12px] pl-2 text-primary">
            Verified learning through trusted programs
          </p>
          <PiCertificateDuotone className="min-w-20 sm:min-w-27 opacity-90 h-[97%]" />
          {/* <img src="./certificate.svg" alt="c" /> */}
        </div>
        <div className="h-[87%] flex gap-3  p-1 ">
          {/* Certificates */}
          {/* Certification */}
          {/* <div className="h-full w-full md:w-[47%] p-1 md:border-0 overflow-scroll">
            {cert1.map((cert, index) => (
              <CertificateCard props={cert} key={index} />
            ))}
            <div className="md:hidden">
              {cert3.map((cert, index) => (
                <CertificateCard props={cert} key={index} />
              ))}
            </div>
          </div>
          <div className="h-full w-full md:w-[47%] ">
            {cert2.map((cert, index) => (
              <CertificateCard props={cert} key={index} />
            ))}
          </div> */}
          <div className="h-full overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {allCertificates.map((cert, index) => (
                <CertificateCard props={cert} key={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </TrustIndicatorCard>
  );
}

export default CertificatesIndicator;
