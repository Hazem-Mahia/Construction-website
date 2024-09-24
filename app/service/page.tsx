import { SectionSplit } from "@/components/SectionSplit";
import { Banner } from "../../modules/Banner";
import { Achievement } from "./modules/Achievement";
import { Services } from "@/modules/Services";
import { Projects } from "@/modules/Projects";
import { Container } from "@/components/Container";

export default function ServicesPage() {
  return (
    <>
      <Banner />
      <Container className="mb-20">
        <SectionSplit>
          <Achievement />
          <Services />
          <Projects />
        </SectionSplit>
      </Container>
    </>
  );
}

// const links = [
//   {
//     href: "#company-history",
//     text: "Company History",
//   },
//   {
//     href: "#our-employees",
//     text: "Employees",
//   },
//   {
//     href: "#our-managment",
//     text: "Management",
//   },
//   {
//     href: "#our-vision",
//     text: "Vision",
//   },
//   {
//     href: "#certificates",
//     text: "Certificates",
//   },
// ];
