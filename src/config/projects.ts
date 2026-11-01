import { projectSchema } from "@/types/content";

export const projects = projectSchema.array().parse([
  {
    slug: "client-blog-platform",
    title: "Client Blog Platform",
    summary: null,
    featured: false,
    status: "draft",
    liveUrl: "https://blog-for-client-fhod.vercel.app/",
    githubUrl: null,
    image: null,
    technologies: [],
    role: null,
    timeframe: null,
    caseStudy: {
      overview: null,
      problem: null,
      solution: null,
      features: [],
      challenges: [],
      outcome: null,
    },
    verified: false,
  },
]);
