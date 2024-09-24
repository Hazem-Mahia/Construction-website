import { Container } from "@/components/Container";
import { SectionName } from "@/components/SectionName";
import Link from "next/link";
import React from "react";
import { Project } from "../../components/Project";
import { Routes } from "@/types/router";

interface ProjectProps {
  id: number;
  title: string;
  year: number;
  location: string;
  images: string[];
}

interface SimilarProjectsProps {
  projects: ProjectProps[];
}

export const SimilarProjects = ({ projects }: SimilarProjectsProps) => {
  return (
    <section>
      <Container>
        <SectionName name="Similar Projects" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 ">
          {projects.map((project) => (
            <Link key={project.id} href={`${Routes.PROJECTS}/${project.id}`}>
              <Project {...project} />
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
};
