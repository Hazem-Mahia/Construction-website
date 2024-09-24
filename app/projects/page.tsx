import { Container } from "@/components/Container";
import { SectionSplit } from "@/components/SectionSplit";
import { Banner } from "@/modules/Banner";
import Link from "next/link";
import { Project } from "./components/Project";
import { Filtering } from "./components/Filtering";
import { Routes, SearchParams } from "@/types/router";
import { PaginationControls } from "./components/PaginationControls";

export default function ProjectsPage({
  searchParams,
}: {
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
}) {
  const page = Number(searchParams[SearchParams.PAGE] ?? "1");
  const perPage = Number(searchParams[SearchParams.PER_PAGE] ?? "6");

  const startIndex = (page - 1) * perPage;
  const endIndex = startIndex + perPage;

  const totalPages = Math.ceil(projects.length / perPage);

  // Get unique years and locations
  const years = Array.from(new Set(projects.map((project) => project.year)));
  const locations = Array.from(
    new Set(projects.map((project) => project.location))
  );

  // Filter projects based on searchParams
  const filteredProjects = projects.filter((project) => {
    const year = searchParams[SearchParams.YEAR];
    const location = searchParams[SearchParams.LOCATION];

    if (year && location) {
      return project.year === Number(year) && project.location === location;
    } else if (year) {
      return project.year === Number(year);
    } else if (location) {
      return project.location === location;
    } else {
      return true;
    }
  });

  const paginatedProjects = filteredProjects.slice(startIndex, endIndex);

  const isPaginationVisible = filteredProjects.length > Number(perPage);

  return (
    <>
      <Banner />
      <SectionSplit>
        <Container>
          <h1 className="text-4xl font-bold mb-8">Our Works</h1>
          <Filtering years={years} locations={locations} />
          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-12 gap-8">
            {paginatedProjects.map((project) => (
              <Link href={`${Routes.PROJECTS}/${project.id}`} key={project.id}>
                <Project {...project} />
              </Link>
            ))}
          </div>
          {isPaginationVisible && (
            <PaginationControls
              page={page}
              perPage={perPage}
              hasNextPage={filteredProjects.length > endIndex}
              hasPreviousPage={startIndex > 0}
              totalPages={totalPages}
            />
          )}
        </Container>
      </SectionSplit>
    </>
  );
}

export const projects = [
  {
    id: 1,
    title: "Project 1",
    year: 2021,
    location: "New York, USA",
    images: ["/hero.jpg"],
    description: "A modern skyscraper in the heart of New York City.",
  },
  {
    id: 2,
    title: "Project 2",
    year: 2008,
    location: "New York, USA",
    images: ["/hero2.jpg"],
    description: "A sustainable tech office in the Silicon Valley hub.",
  },
  {
    id: 3,
    title: "Project 3",
    year: 2012,
    location: "London, UK",
    images: ["/hero3.jpg"],
    description: "A contemporary museum space located in central London.",
  },
  {
    id: 4,
    title: "Project 4",
    year: 2015,
    location: "Berlin, Germany",
    images: ["/hero.jpg"],
    description:
      "A fusion of modern and historic design in Berlin’s cultural district.",
  },
  {
    id: 5,
    title: "Project 5",
    year: 2015,
    location: "Tokyo, Japan",
    images: ["/hero3.jpg"],
    description: "A sleek urban office building in the bustling city of Tokyo.",
  },
  {
    id: 6,
    title: "Project 6",
    year: 2020,
    location: "Sydney, Australia",
    images: ["/hero2.jpg"],
    description:
      "A waterfront luxury residence offering stunning views of the Sydney Harbour.",
  },
  {
    id: 7,
    title: "Project 7",
    year: 2019,
    location: "New York, USA",
    images: ["/hero.jpg"],
    description: "An elegant renovation of a historic Parisian building.",
  },
  {
    id: 8,
    title: "Project 8",
    year: 2018,
    location: "Toronto, Canada",
    images: ["/hero.jpg"],
    description: "A sustainable office tower in downtown Toronto.",
  },
  {
    id: 9,
    title: "Project 9",
    year: 2022,
    location: "Dubai, UAE",
    images: ["/hero.jpg"],
    description: "A futuristic skyscraper in the dynamic cityscape of Dubai.",
  },
  {
    id: 10,
    title: "Project 10",
    year: 2023,
    location: "Shanghai, China",
    images: ["/hero.jpg"],
    description: "A towering landmark in Shanghai's rapidly evolving skyline.",
  },
  {
    id: 11,
    title: "Project 11",
    year: 2017,
    location: "Barcelona, Spain",
    images: ["/hero.jpg"],
    description: "A vibrant cultural center located in the heart of Barcelona.",
  },
  {
    id: 12,
    title: "Project 12",
    year: 2016,
    location: "Cape Town, South Africa",
    images: ["/hero.jpg"],
    description: "A modern eco-friendly retreat overlooking Table Mountain.",
  },
  {
    id: 13,
    title: "Project 13",
    year: 2021,
    location: "Los Angeles, USA",
    images: ["/hero.jpg"],
    description: "A high-end residential building in the Hollywood Hills.",
  },
];
