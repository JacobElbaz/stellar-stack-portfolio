import { Calendar, ExternalLink } from "lucide-react";

const experiences = [
  {
    title: "Senior FullStack Engineer",
    company: "TechCorp AI",
    period: "2022 – Present",
    description:
      "Developed and maintained an AI-powered SaaS platform serving 3,000+ active users. Led architecture decisions for microservices migration, improving system reliability by 40%.",
    technologies: ["React", "NestJS", "PostgreSQL", "Azure", "Docker"],
    highlights: [
      "Reduced API response times by 60% through query optimization",
      "Implemented real-time collaboration features using WebSockets",
      "Built CI/CD pipelines reducing deployment time from hours to minutes",
    ],
  },
  {
    title: "FullStack Developer",
    company: "StartupHub Inc",
    period: "2020 – 2022",
    description:
      "Built scalable web applications for B2B clients. Collaborated with cross-functional teams to deliver projects on time and within budget.",
    technologies: ["Next.js", "Node.js", "MongoDB", "AWS"],
    highlights: [
      "Delivered 5 major product launches to production",
      "Mentored junior developers and conducted code reviews",
      "Established testing standards achieving 85% code coverage",
    ],
  },
  {
    title: "Frontend Developer",
    company: "Digital Agency Co",
    period: "2018 – 2020",
    description:
      "Created responsive, accessible web interfaces for enterprise clients. Focused on performance optimization and modern UI/UX patterns.",
    technologies: ["React", "TypeScript", "Redux", "Sass"],
    highlights: [
      "Improved Core Web Vitals scores by 45% across all projects",
      "Built reusable component library used across 10+ projects",
    ],
  },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="border-t border-border py-24">
      <div className="container">
        {/* Section header */}
        <div className="mb-16">
          <p className="mb-2 font-mono text-sm text-primary">02</p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Experience
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative space-y-12">
          {/* Vertical line */}
          <div className="absolute left-0 top-0 hidden h-full w-px bg-border md:left-[120px] md:block" />

          {experiences.map((exp, index) => (
            <div
              key={index}
              className="group relative grid gap-4 md:grid-cols-[120px_1fr] md:gap-8"
            >
              {/* Date column */}
              <div className="flex items-start gap-2 text-sm text-muted-foreground md:flex-col md:items-end md:text-right">
                <Calendar className="h-4 w-4 md:hidden" />
                <span className="font-mono">{exp.period}</span>
              </div>

              {/* Timeline dot */}
              <div className="absolute left-[116px] top-1 hidden h-3 w-3 rounded-full border-2 border-primary bg-background md:block" />

              {/* Content */}
              <div className="rounded-lg border border-border bg-card p-6 transition-all hover:border-primary/30 hover:bg-surface-hover md:ml-4">
                <div className="mb-4">
                  <h3 className="text-lg font-semibold text-foreground">
                    {exp.title}
                  </h3>
                  <p className="font-mono text-sm text-primary">{exp.company}</p>
                </div>

                <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                  {exp.description}
                </p>

                {/* Highlights */}
                <ul className="mb-4 space-y-1">
                  {exp.highlights.map((highlight, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-primary" />
                      {highlight}
                    </li>
                  ))}
                </ul>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-border bg-background px-3 py-1 font-mono text-xs text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
