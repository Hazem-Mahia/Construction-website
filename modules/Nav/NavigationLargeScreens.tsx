"use client";

import { Container } from "@/components/Container";
import { Logo } from "@/components/Logo";
import React, { useEffect } from "react";
import { Links } from "./Links";

export const NavigationLargeScreens = () => {
  const [isScrolled, setIsScrolled] = React.useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Add event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty array to ensure effect runs once on mount

  return (
    <nav
      className={`hidden md:block fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white text-black" : "bg-transparent text-white"
      }`}
    >
      <Container>
        <div className="flex items-center justify-between h-16">
          <Logo />

          <Links />
        </div>
      </Container>
    </nav>
  );
};
