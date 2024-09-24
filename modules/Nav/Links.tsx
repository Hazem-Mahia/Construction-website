import { Routes, SearchParams } from "@/types/router";
import Link from "next/link";
import React from "react";
import { GrProjects } from "react-icons/gr";
import { GrInfo } from "react-icons/gr"; // Ensure you import all necessary icons
import { GrServices } from "react-icons/gr"; // Similarly for other icons
import { GrPhone } from "react-icons/gr";

interface LinksProps {
  handleLinkClick?: () => void;
}

const links = [
  {
    href: Routes.ABOUT,
    text: "About Us",
    icon: GrInfo,
  },
  {
    href: Routes.SERVICES,
    text: "Services",
    icon: GrServices,
  },
  {
    href: `${Routes.PROJECTS}?${SearchParams.PAGE}=1&${SearchParams.PER_PAGE}=6`,
    text: "Our Work",
    icon: GrProjects,
  },
  {
    href: Routes.CONTACT,
    text: "Contact Us",
    icon: GrPhone,
  },
];

export const Links = ({ handleLinkClick }: LinksProps) => {
  return (
    <ul className="space-y-4 md:space-y-0 md:space-x-4 flex flex-col md:flex-row">
      {links.map((link, index) => {
        return (
          <li key={index}>
            <Link
              onClick={handleLinkClick}
              href={link.href}
              className="flex items-center space-x-2 hover:text-primary text-xl font-medium"
            >
              <link.icon size="14" className="text-primary" />
              <p>{link.text}</p>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
