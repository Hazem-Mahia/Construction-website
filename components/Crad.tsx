import Image from "next/image";
import React from "react";

interface CardProps {
  image: string;
  name: string;
  position: string;
}

export const Crad = ({ image, name, position }: CardProps) => {
  return (
    <>
      <div className="relative h-96 md:h-64">
        <Image src={image} alt={name} fill className="object-cover" />
      </div>
      <h5 className="mt-1">{name}</h5>
      <p>{position}</p>
    </>
  );
};
