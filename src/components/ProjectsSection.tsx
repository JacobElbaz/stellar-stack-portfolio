import { ExternalLink, Github, Users, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "AI Analytics Platform",
    description:
      "Real-time analytics dashboard with AI-powered insights. Processes millions of events daily with sub-second query response times.",
    technologies: ["React", "NestJS", "PostgreSQL", "Redis", "OpenAI"],
    metrics: { users: "3,000+", performance: "99.9% uptime" },
    links: { github: "#", live: "#" },
  },
  {
    title: "E-Commerce Microservices",
    description:
      "Scalable e-commerce backend built with microservices architecture. Handles high-traffic sales events without degradation.",
    technologies: ["Node.js", "MongoDB", "Docker", "Kubernetes", "RabbitMQ"],
    metrics: { users: "50K+ orders/day", performance: "<100ms latency" },
    links: { github: "#" },
  },
  {
    title: "Developer Toolkit CLI",
    description:
      "Open-source CLI tool for automating development workflows. Includes code generation, testing utilities, and deployment scripts.",
    technologies: ["TypeScript", "Node.js", "Commander.js"],
    metrics: { users: "500+ stars", performance: "NPM downloads: 10K+" },
    links: { github: "#" },
  },
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
          {projects.map((project, index) => (
            <div
              key={index}
              className="group flex flex-col rounded-lg border border-border bg-card transition-all hover:border-primary/30 hover:glow-sm"
            >
              {/* Card header */}
              <div className="border-b border-border p-6">
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
