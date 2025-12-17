import { ExternalLink, Github, Users, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

type Project = {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  technologies: string[];
  metrics: { users: string; performance: string };
  links: { github?: string; live?: string };
};

const projects: Project[] = [
  {
    id: 1,
    title: "Virtual Penpal",
    category: "web app",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&h=400&fit=crop",
    description:
      "Innovative web application leveraging artificial intelligence to create virtual penpal experiences for children, facilitating cultural education and global awareness through interactive learning.",
    technologies: ["React", "TypeScript", "Redux", "Vite", "Tailwind", "OpenAI", "NestJS", "MongoDB"],
    metrics: { users: "5K+ children", performance: "AI response <500ms" },
    links: { live: "https://www.penpaloo.io/" },
  },
  {
    id: 2,
    title: "Food Scanner",
    category: "mobile",
    image: "https://plus.unsplash.com/premium_photo-1664305032567-2c460e29dec1?w=600&h=400&fit=crop",
    description:
      "Cross-platform mobile application, featuring advanced barcode scanning technology to provide consumers with essential product information and nutritional data.",
    technologies: ["React Native", "Expo", "TypeScript", "Barcode Scanner", "iOS", "Android"],
    metrics: { users: "10K+ downloads", performance: "<2s scan time" },
    links: { live: "https://www.kaspenu.org/" },
  },
  {
    id: 3,
    title: "Dental Laboratories Client Portal",
    category: "portal",
    image: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?q=80&w=1740?w=600&h=400&fit=crop",
    description:
      "Comprehensive client portal solutions developed for dental laboratories, delivering streamlined management tools and enhanced operational efficiency for dental professionals.",
    technologies: ["React", "Next.js", "Material UI"],
    metrics: { users: "500+ professionals", performance: "99.9% uptime" },
    links: { live: "https://hyperdentaire.fr/" },
  },
  // {
  //   id: 4,
  //   title: "Audio Prosthetics Laboratory Client Portal",
  //   category: "portal",
  //   image: "https://plus.unsplash.com/premium_photo-1673351535183-fab0f7be7cd5?w=600&h=400&fit=crop",
  //   description:
  //     "Specialized client portal solution developed for an audio prosthetics laboratory, offering comprehensive management tools tailored for hearing aid professionals and their clients.",
  //   technologies: ["React", "Node.js", "PostgreSQL", "TypeScript"],
  //   metrics: { users: "300+ professionals", performance: "99.8% uptime" },
  //   links: { live: "https://otolab3d.com/" },
  // },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="border-t border-border py-24">
      <div className="container">
        {/* Section header */}
        <div className="mb-16">
          <p className="mb-2 font-mono text-sm text-primary">03</p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Featured Projects
          </h2>
        </div>

        {/* Projects grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group flex flex-col rounded-lg border border-border bg-card transition-all hover:border-primary/30 hover:glow-sm"
            >
              {/* Card header */}
              <div className="border-b border-border p-6">
                <span className="mb-2 inline-block font-mono text-xs uppercase tracking-wider text-primary">
                  {project.category}
                </span>
                <h3 className="mb-2 text-lg font-semibold text-foreground">
                  {project.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>
              </div>

              {/* Metrics */}
              <div className="flex gap-4 border-b border-border p-4">
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Users className="h-3 w-3 text-primary" />
                  <span>{project.metrics.users}</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Zap className="h-3 w-3 text-primary" />
                  <span>{project.metrics.performance}</span>
                </div>
              </div>

              {/* Technologies */}
              <div className="flex-1 p-4">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-border bg-background px-2 py-1 font-mono text-xs text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div className="flex gap-2 border-t border-border p-4">
                {project.links.github && (
                  <Button
                    asChild
                    variant="ghost"
                    size="sm"
                    className="h-8 text-muted-foreground hover:text-foreground"
                  >
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </a>
                  </Button>
                )}
                {project.links.live && (
                  <Button
                    asChild
                    variant="ghost"
                    size="sm"
                    className="h-8 text-muted-foreground hover:text-foreground"
                  >
                    <a
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live
                    </a>
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
