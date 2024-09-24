import { SectionName } from "@/components/SectionName";
import Image from "next/image";
import React from "react";

export const OurEmployees = () => {
  return (
    <div>
      {/* Section Title */}
      <SectionName name="Our Employees" id="our-employees" />

      {/* Grid layout for employees */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
        {people.map((person) => (
          <div key={person.name}>
            <div className="relative h-96 md:h-46 ">
              <Image
                src={person.image}
                alt={person.name}
                fill
                className="object-cover"
              />
            </div>
            <h5 className="mt-1">{person.name}</h5>
            <p>{person.position}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

// Data for employees
const people = [
  {
    image: "/person1.jpg",
    name: "Hazem Hazem",
    position: "Engineer",
  },
  {
    image: "/person2.jpg",
    name: "Mohamed Ali",
    position: "Project Manager",
  },
  {
    image: "/person3.jpg",
    name: "Sara Ahmed",
    position: "Developer",
  },
  {
    image: "/person4.jpg",
    name: "Laila Youssef",
    position: "Designer",
  },
];
