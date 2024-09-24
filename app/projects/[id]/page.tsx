import { SectionSplit } from "@/components/SectionSplit";
import { Banner } from "@/modules/Banner";
import { ProjectSingle } from "./modules/ProjectSingle";
import { projects } from "../page";
import { SimilarProjects } from "./modules/SimilarProjects";

export default function Work({ params }: { params: { id: string } }) {
  const project = projects.find((project) => project.id === Number(params.id));

  const similarProjects = projects
    .filter((p) => p.location === project?.location && p.id !== project?.id)
    .slice(0, 3);

  return (
    <>
      <Banner />
      <SectionSplit>
        {project ? (
          <ProjectSingle {...project} />
        ) : (
          <p className="text-center text-gray-500">Project not found.</p>
        )}

        {/* {similarProjects.length > 0 && (
          <SimilarProjects projects={similarProjects} />
        )} */}

        {similarProjects.length > 0 && (
          <SimilarProjects projects={similarProjects} />
        )}
      </SectionSplit>
    </>
  );
}
