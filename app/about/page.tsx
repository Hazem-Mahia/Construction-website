import { SectionSplit } from "@/components/SectionSplit";
import { Banner } from "../../modules/Banner";
import { Container } from "@/components/Container";
import { CompanyHistory } from "./modules/CompanyHistory";
import { OurEmployees } from "./modules/OurEmployes";
import { OurManagement } from "./modules/OurManagement";
import { OurVision } from "./modules/OurVision";
import { Certificates } from "./modules/Certificates";
import { CoreValues } from "../(home)/modules/CoreValues";

export default function Home() {
  return (
    <>
      <Banner />
      <SectionSplit>
        <Container>
          <h1 className="mb-8">ABOUT US</h1>
          <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-4 md:gap-8 relative min-h-screen">
            <div className="space-y-8">
              <CompanyHistory />
              <OurEmployees />
              <OurManagement />
              <OurVision />
              <Certificates />
            </div>
            <div className="relative">
              <div className="sticky top-16">
                <ul className="hidden md:block space-y-2">
                  {links.map((link) => (
                    <li className="flex items-center gap-2" key={link.text}>
                      <span className="w-8 h-1 bg-primary" />
                      <a href={link.href}>{link.text}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </SectionSplit>
      <CoreValues />
    </>
  );
}

const links = [
  {
    href: "#company-history",
    text: "Company History",
  },
  {
    href: "#our-employees",
    text: "Employees",
  },
  {
    href: "#our-managment",
    text: "Management",
  },
  {
    href: "#our-vision",
    text: "Vision",
  },
  {
    href: "#certificates",
    text: "Certificates",
  },
];
