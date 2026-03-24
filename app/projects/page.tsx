import { Container } from '@/components/container';
import { PageHeading } from '@/components/page-heading';
import { ProjectCard } from '@/components/project-card';
import { projects } from '@/content/projects';

export default function ProjectsPage() {
  return (
    <Container>
      <main>
        <PageHeading
          title="Projects"
          description="Experiments, tools, and shipped products that reflect my curiosity and craft across product and engineering."
        />
        <section className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </section>
      </main>
    </Container>
  );
}
