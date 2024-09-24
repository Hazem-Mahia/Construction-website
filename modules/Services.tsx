import { Container } from "@/components/Container";
import { SectionName } from "@/components/SectionName";
import { Routes } from "@/types/router";
import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

export const Services = () => {
  return (
    <section>
      <Container>
        <SectionName name="services" />
        <div className="grid grid-cols-1 md:grid-cols-3 text-white">
          {data.map((item, index) => {
            const isSecond = index === 1;
            return (
              <div
                key={item.title}
                className={`flex flex-col justify-between px-4 md:px-8 py-8 md:py-4 space-y-12 ${
                  isSecond ? "bg-white text-black" : "bg-primary"
                }`}
              >
                <h3>0{index + 1}</h3>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <div className="flex justify-between">
                  <Link href={item.href}>
                    <button
                      className={`border-2 ${
                        isSecond ? "border-black" : "border-white"
                      } p-4 inline-block`}
                    >
                      <FaArrowRight size="24" />
                    </button>
                  </Link>
                  <div
                    className={`relative rounded-lg w-16 h-full border-2  ${
                      isSecond
                        ? "bg-primary border-primary"
                        : "bg-white border-white"
                    }`}
                  >
                    <div
                      className={`absolute w-full h-full right-2 bottom-2 ${
                        isSecond ? "bg-white" : "bg-primary"
                      }`}
                    ></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

const data = [
  {
    title: "GENERAL CONTRACTING",
    href: Routes.GENERAL_CONTRACTING,
    description:
      "WE OFFER WE OFFER WE OFFER WE OFFER WE OFFER WE OFFER WE OFFER WE OFFER",
  },
  {
    title: "RENOVATION AND RESTORATION",
    href: Routes.RENOVATION_AND_RESTOORATION,
    description:
      "WE OFFER WE OFFER WE OFFER WE OFFER WE OFFER WE OFFER WE OFFER WE OFFER",
  },
  {
    title: "MONOLITHIC CONSTRUCTION",
    href: Routes.MONOLITHIC_CONSTRUCTION,
    description:
      "WE OFFER WE OFFER WE OFFER WE OFFER WE OFFER WE OFFER WE OFFER WE OFFER",
  },
];
