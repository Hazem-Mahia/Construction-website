"use client";

import { Breedcrumbs } from "@/components/Breedcrumbs";
import { Container } from "@/components/Container";
import { Overlay } from "@/components/Overlay";
import Image from "next/image";
import React from "react";

export const Banner = () => {
  return (
    <div className="relative w-full h-[260px] md:h-[300px]">
      <Image src="/hero2.jpg" alt="banner" fill className="object-fit " />
      <Overlay />

      <div className="absolute bottom-4 left-0 w-full h-auto ">
        <Container>
          <Breedcrumbs />
        </Container>
      </div>
    </div>
  );
};
