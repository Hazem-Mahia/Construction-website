import React from "react";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import Link from "next/link";
import { FaArrowDown } from "react-icons/fa";
import { HeroCarousel } from "./HeroCarousel";
import { Badge } from "@/components/Badge";

export const Hero = () => {
  return (
    <div className="relative h-screen w-full pt-12 md:pt-0 overflow-hidden">
      <HeroCarousel />
      <Container className="relative z-10 flex flex-col justify-between h-full text-white">
        <div />
        <div>
          <Badge />

          <h1 className="my-4">
            WE BUILD WITH <br />
            <span className="text-primary">PRECISION</span>
          </h1>

          <p className="mb-8 md:max-w-3xl">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi
            reprehenderit voluptates maiores totam, qui maxime impedit corrupti
            ducimus voluptatem non, doloribus quisquam dolores sapiente
            voluptatibus quidem! Tenetur illum adipisci praesentium.
          </p>

          <Button />
        </div>
        <Link
          href="/"
          className="inline-block rounded-full p-2 bg-transparent w-10  text-white border-2 border-white shadow-lg animate-bounce "
        >
          <FaArrowDown size="20" />
        </Link>
      </Container>
    </div>
  );
};
