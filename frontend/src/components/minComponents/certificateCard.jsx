import React from "react";
import sampleCertificate from "../../assets/certificates/sampleCert.webp";

function CertificateCard({ props }) {
  return (
    <section className="h-fit py-1 px-1 md:py-1">
      <div className="flex border rounded-[6px] border-primary/30 bg-primaryOP1/20 h-30 items-center gap-1.5 pl-2">
        <img
          src={props.certImage}
          alt={props.title}
          className="min-w-32 h-26 bg-primary/60 rounded-[5px] p-1.5"
        />

        <div className="h-full pt-2">
          <ul className="flex gap-1 flex-wrap">
            {props.tags.map((tag, index) => (
              <li key={index} className="px-2 py-1 bg-primaryOP1 rounded-[7px]">
                {tag}
              </li>
            ))}
          </ul>

          <p className="text-[14px] font-montserrat font-medium mt-1">
            {props.title}
          </p>

          <p className="hidden md:block text-[13px] opacity-80">{props.desc}</p>
        </div>
      </div>
    </section>
  );
}
export default CertificateCard;
