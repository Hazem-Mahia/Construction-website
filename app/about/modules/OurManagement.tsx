import { SectionName } from "@/components/SectionName";
import Image from "next/image";
import React from "react";

export const OurManagement = () => {
  return (
    <div>
      <SectionName name="our managment" id="our-managment" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
        {managers.map((manager) => (
          <div key={manager.name}>
            <div className="relative h-96 md:h-64">
              <Image src={manager.image} alt={manager.name} fill />
            </div>
            <h5 className="mt-1">{manager.name}</h5>
            <p>{manager.position}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const managers = [
  {
    image: "/Manager1.jpg",
    name: "Hazem Hazem",
    position: "CEO",
  },
  {
    image: "/manager2.jpg",
    name: "Mohamed Ali",
    position: "CFO",
  },
  {
    image: "/manager3.jpg",
    name: "Sara Ahmed",
    position: "COD",
  },
  {
    image: "/manager4.jpg",
    name: "Laila Youssef",
    position: "CTO",
  },
];
