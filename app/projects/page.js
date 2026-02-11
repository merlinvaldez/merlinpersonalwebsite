import Section from "@/components/Section";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/content/projects";

export const metadata = {
  title: "Projects",
  description: "Selected projects in civic tech and AI-powered education.",
};

export default function ProjectsPage() {
  return (
    <div className="space-y-16 pb-24 pt-12">
      <Section>
        <div className="space-y-3">
          <h1 className="text-3xl font-semibold text-slate-900">Projects</h1>
          <p className="max-w-2xl text-sm text-slate-600">
            Full-stack products and pipelines that blend engineering, product strategy, and user-centered execution.
          </p>
        </div>
      </Section>

      <Section>
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </Section>
    </div>
  );
}
