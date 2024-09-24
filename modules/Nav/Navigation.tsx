"use client";

import { Container } from "@/components/Container";
import { Logo } from "@/components/Logo";
import React, { useEffect } from "react";
import { FaTimes } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { Links } from "./Links";

export const Navigation = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      <nav className="container z-50 mx-auto px-4 fixed top-0 right-0 flex justify-between items-center h-16 bg-white md:hidden">
        <Logo />
        <button onClick={toggle}>
          {isOpen ? <FaTimes size={24} /> : <GiHamburgerMenu size={24} />}
        </button>
      </nav>
      {isOpen && (
        <div className="fixed top-16 left-0 right-0 bottom-0  bg-white z-50">
          <Container>
            <div className="flex justify-center items-center mt-8">
              <Links handleLinkClick={handleLinkClick} />
            </div>
          </Container>
        </div>
      )}
    </>
  );
};
