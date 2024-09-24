"use client";

import { Overlay } from "@/components/Overlay";
import Image from "next/image";
import React, { useEffect } from "react";

const images = ["/parapija.jpg", "/hero2.jpg", "/hero3.jpg"]; // Removed /public

export const HeroCarousel = () => {
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0); // Fixed typo
  const [offset, setOffset] = React.useState(0);
  const containerRef = React.useRef<HTMLAnchorElement | null>(null);

  const handleImageChange = (newIndex: number) => {
    if (newIndex !== currentImageIndex) {
      setCurrentImageIndex(newIndex); // Fixed typo
    }
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      handleImageChange((currentImageIndex + 1) % images.length); // Fixed typo
    }, 5000);
    return () => clearInterval(intervalId);
  }, [currentImageIndex]); // Fixed typo

  useEffect(() => {
    if (containerRef.current) {
      const speed = 0.5;
      containerRef.current.style.transform = `translateY(${offset * speed}px)`;
    }
  }, [offset]);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div
        ref={containerRef}
        className="absolute inset-0 overflow-hidden w-full"
      >
        {images.map((img, index) => (
          <div
            key={img}
            className={`absolute inset-0 transition-all duration-1000 ${
              index === currentImageIndex
                ? "opacity-100 scale-105"
                : "opacity-0 scale-100"
            }`}
            style={{
              transform: `translateY(${(index - currentImageIndex) * 5}%)`,
            }}
          >
            <Image
              src={img}
              alt={`carousel image ${index + 1}`}
              fill
              className="object-cover object-center"
              priority={index === currentImageIndex}
            />
          </div>
        ))}
      </div>

      <Overlay />

      <div className="absolute right-4 bottom-4 z-50">
        <div className="flex gap-2">
          {images.map((img, i) => (
            <button
              key={img}
              onClick={() => {
                handleImageChange(i);
              }}
              className={`w-12 h-2 rounded-full transition-all duration-300 shadow ${
                currentImageIndex === i
                  ? "bg-primary"
                  : "bg-white hover:bg-gray-200"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </>
  );
};
