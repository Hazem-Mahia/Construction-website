import EmblaCarousel from "@/components/Carousel/EmblaCarsoul";
import { Container } from "@/components/Container";
import { SectionName } from "@/components/SectionName";
import React from "react";
// const images = ["/hero.jpg", "/hero2.jpg", "/hero3.jpg"];

const data = [
  {
    image: "/hero.jpg",
    title: "Project 1",
    link: "/project1",
  },
  {
    image: "/hero2.jpg",
    title: "Project 2",
    link: "/project2",
  },
  {
    image: "/hero3.jpg",
    title: "Project 3",
    link: "/project3",
  },
];

export const Projects = () => {
  return (
    <section className="mb-">
      <Container>
        <SectionName name="projects" />
        <EmblaCarousel slides={data} className="w-full" />
      </Container>
    </section>
  );
};
