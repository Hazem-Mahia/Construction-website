import EmblaCarousel from "@/components/Carousel/EmblaCarsoul";
import { Container } from "@/components/Container";
import React from "react";
import { LabelWithIconAndColor } from "../components/LabelWithIconAndColor";

interface ProjectSingleProps {
  title: string;
  description: string;
  year: number;
  location: string;
  images: string[];
}

export const ProjectSingle = ({
  title,
  description,
  year,
  location,
  images,
}: ProjectSingleProps) => {
  return (
    <section>
      <Container>
        <h3 className="mb-4 text-3xl font-bold">{title}</h3>
        <EmblaCarousel slides={images} isControllVisible={false} />

        <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1.5fr] gap-4 md:gap-8 mt-6 md:w-[65%] md:mx-auto">
          <p className="text-lg">{description}</p>
          <div className="flex flex-wrap items-center justify-start md:justify-end gap-2">
            <LabelWithIconAndColor
              icon="/location.png"
              alt="Location"
              text={location}
            />
            <LabelWithIconAndColor
              icon="/calendar.png"
              alt="Calendar"
              text={String(year)}
            />
          </div>
        </div>
      </Container>
    </section>
  );
};
