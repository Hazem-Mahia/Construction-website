import { Routes } from "@/types/router";
import Link from "next/link";
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
}

export const Button = ({ children, ...rest }: ButtonProps) => {
  return (
    <button
      className="px-16 py-4 bg-primary text-white text-xl w-full md:w-auto"
      {...rest}
    >
      {children ? children : <Link href={Routes.CONTACT}>contact us</Link>}
    </button>
  );
};
