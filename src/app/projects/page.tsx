import { EmptyState } from "@/components/shared/EmptyState";
import { Section } from "@/components/shared/Section";
import { TechChip } from "@/components/shared/TechChip";
import { getPublishedProjects } from "@/lib/content";

export default function ProjectsPage() {
  const projects = getPublishedProjects();

  return (
    <main id="main" className="section-shell">
      <Section id="work" eyebrow="Work" title="Selected projects" description="Real projects, with a clear description of my role in each.">
        {projects.length > 0 ? (
          <div className="grid gap-6 lg:grid-cols-2">
            {projects.map((project) => (
              <article key={project.slug} className="overflow-hidden rounded-md border border-border bg-surface">
                <div className="border-b border-border bg-surface-raised p-6">
                  <p className="text-label uppercase tracking-[0.12em] text-accent">{project.featured ? "Featured" : "Project"}</p>
                  <h3 className="mt-3 text-h3 font-semibold text-foreground">{project.title}</h3>
                  {project.summary ? <p className="mt-3 text-muted-foreground">{project.summary}</p> : null}
                </div>
                <div className="space-y-5 p-6">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                      <TechChip key={`${project.slug}-${technology}`} label={technology} />
                    ))}
                  </div>
                  {project.liveUrl ? (
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex text-small font-medium text-foreground underline-offset-4 hover:underline">
                      View live project
                    </a>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        ) : (
          <EmptyState
            title="Projects are being added"
            description="Only verified, approved project work is published. New cases will appear here once they are ready."
            action={{ label: "Let’s Work Together", href: "/contact" }}
          />
        )}
      </Section>
    </main>
  );
}
