import Image from "next/image";
import React from "react";
import { LabelWithIcon } from "./LabelWithIcon";

interface ProjectProps {
  title: string;
  year: string;
  location: string;
  images: string[];
}

export const Project = ({ title, year, location, images }: ProjectProps) => {
  return (
    <div>
      <div className="relative h-56 w-full transform transition-transform hover:scale-105 hover:opacity-70">
        <Image
          src={images[0]}
          alt="project image"
          fill
          className="object-cover "
        />
        <div className="absolute  right-1 bottom-1 gap-1 ">
          <div className="flex gap-1">
            <LabelWithIcon
              text={location}
              icon="/location.png"
              alt="location"
            />
            <LabelWithIcon text={year} icon="/calendar.png" alt="calendar" />
          </div>
        </div>
      </div>
      <p className="mt-2 text-xl font-bold">{title}</p>
    </div>
  );
};
