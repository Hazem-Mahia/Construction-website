import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { SectionSplit } from "@/components/SectionSplit";
import { Banner } from "@/modules/Banner";
import { Projects } from "@/modules/Projects";
import { Routes } from "@/types/router";
import Image from "next/image";
import Link from "next/link";
import React, { ReactNode } from "react";

interface ServicePageContentProps {
  title: string | ReactNode;
  description: string;
  image: string;
  subtitle: string;
}
export const ServicePageContent = ({
  title,
  description,
  image,
  subtitle,
}: ServicePageContentProps) => {
  return (
    <>
      <Banner />

      <SectionSplit>
        <Container className="mb-20">
          <h1 className="mb-8">{title}</h1>

          <p className="mb-8">{subtitle}</p>

          <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] bg-white pb-8 gap-8">
            <div className="relative h-96 md:h-full">
              <Image
                src={image}
                alt="service image"
                className="object-cover"
                fill
              />
            </div>
            <div>
              <p className="pb-8">{description}</p>
              <Link href={`${Routes.PROJECTS}`}>
                <Button>View Projects</Button>
              </Link>
            </div>
          </div>
          <Projects />
        </Container>
      </SectionSplit>
    </>
  );
};
