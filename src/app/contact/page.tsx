import { Section } from "@/components/shared/Section";
import { getVisibleSocialLinks } from "@/lib/content";

export default function ContactPage() {
  const socialLinks = getVisibleSocialLinks("contact");

  return (
    <main id="main" className="section-shell">
      <Section id="contact" eyebrow="Contact" title="Tell me about your project" description="Share a few details and I’ll get back to you.">
        <div className="grid gap-6 md:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-5 rounded-md border border-border bg-surface p-6">
            <p className="text-body-lg text-muted-foreground">
              I help businesses and founders turn ideas into clear, reliable web experiences.
            </p>
            <div className="space-y-2">
              {socialLinks.length > 0 ? (
                socialLinks.map((link) => (
                  <a
                    key={link.id}
                    href={link.url ?? "#"}
                    target={link.url?.startsWith("http") ? "_blank" : undefined}
                    rel={link.url?.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="flex items-center justify-between rounded-md border border-border bg-background px-4 py-3 text-foreground hover:border-accent"
                  >
                    <span>{link.label}</span>
                    <span className="text-muted-foreground">{link.handle ?? "Connect"}</span>
                  </a>
                ))
              ) : (
                <p className="text-muted-foreground">Contact channels are pending confirmation.</p>
              )}
            </div>
          </div>

          <form className="rounded-md border border-border bg-surface p-6">
            <div className="space-y-4">
              <div>
                <label className="mb-2 block text-small font-medium text-foreground">Full name</label>
                <input className="w-full rounded-md border border-border bg-background px-3 py-3 text-foreground" placeholder="Your name" />
              </div>
              <div>
                <label className="mb-2 block text-small font-medium text-foreground">Email address</label>
                <input type="email" className="w-full rounded-md border border-border bg-background px-3 py-3 text-foreground" placeholder="you@example.com" />
              </div>
              <div>
                <label className="mb-2 block text-small font-medium text-foreground">Subject</label>
                <input className="w-full rounded-md border border-border bg-background px-3 py-3 text-foreground" placeholder="e.g. Business website for my store" />
              </div>
              <div>
                <label className="mb-2 block text-small font-medium text-foreground">Project description</label>
                <textarea className="min-h-32 w-full rounded-md border border-border bg-background px-3 py-3 text-foreground" placeholder="What do you want to build, and what problem should it solve?" />
              </div>
              <button type="button" className="button-link button-link--primary w-full justify-center">
                Send enquiry
              </button>
            </div>
          </form>
        </div>
      </Section>
    </main>
  );
}
