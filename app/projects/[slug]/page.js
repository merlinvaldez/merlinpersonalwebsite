import { notFound } from "next/navigation";
import ProjectCaseStudy from "@/components/ProjectCaseStudy";
import { getProjectBySlug, projects } from "@/content/projects";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export function generateMetadata({ params }) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    return {
      title: "Project not found",
    };
  }

  return {
    title: project.name,
    description: project.caseStudy.description,
  };
}

export default function ProjectPage({ params }) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  return <ProjectCaseStudy project={project} />;
}
