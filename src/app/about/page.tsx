import { EmptyState } from "@/components/shared/EmptyState";
import { Section } from "@/components/shared/Section";
import { getAbout, getSiteConfig } from "@/lib/content";

export default function AboutPage() {
  const about = getAbout();
  const siteConfig = getSiteConfig();

  return (
    <main id="main" className="section-shell">
      <Section id="about" eyebrow="About" title="A developer you work with directly" description="Clear communication, practical delivery, and no guesswork.">
        <div className="space-y-6 text-body-lg text-muted-foreground">
          <p>{about.introduction}</p>
          {about.background ? <p>{about.background}</p> : null}
          {about.workingStyle ? <p>{about.workingStyle}</p> : null}
          {!about.background && !about.workingStyle ? (
            <EmptyState
              title="More about me is pending"
              description="I’m keeping the personal story honest and only publishing details once they are approved."
              action={{ label: "Contact me", href: "/contact" }}
            />
          ) : null}
        </div>
      </Section>

      <Section id="profile" eyebrow="Profile" title="Working style" description="A straightforward, production-focused approach.">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-md border border-border bg-surface p-6">
            <p className="text-label uppercase tracking-[0.12em] text-accent">Based in</p>
            <p className="mt-3 text-h3 font-semibold text-foreground">
              {siteConfig.location.locality}, {siteConfig.location.region}, {siteConfig.location.country}
            </p>
          </div>
          <div className="rounded-md border border-border bg-surface p-6">
            <p className="text-label uppercase tracking-[0.12em] text-accent">Focus</p>
            <p className="mt-3 text-h3 font-semibold text-foreground">
              Full stack web apps built with modern JavaScript tooling.
            </p>
          </div>
        </div>
      </Section>
    </main>
  );
}
