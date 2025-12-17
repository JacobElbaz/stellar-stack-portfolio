import { Calendar } from "lucide-react";

const experiences = [
  {
    title: "FullStack Engineer",
    company: "LIMOVA.AI",
    period: "Dec 2024 – Present",
    description:
      "Developed and maintained an AI-powered SaaS platform, serving 3000+ active users. Delivered new features end-to-end, ensuring high performance, scalability, and reliability. Implemented code optimizations and accelerated feature delivery.",
    technologies: ["React", "NestJS", "MongoDB", "PostgreSQL", "Azure"],
    highlights: [
      "Serving 3000+ active users on AI-powered platform",
      "End-to-end feature delivery with high performance",
      "Code optimizations for scalability and reliability",
    ],
  },
  {
    title: "Frontend Developer",
    company: "XFORCE CONSULTING",
    period: "Jul 2022 – Dec 2024",
    description:
      "Designed and built a multi-tenant ordering & tracking platform adopted by 3 laboratories and used daily by hundreds of dentists. Developed an intuitive user interface for seamless order placement and case tracking.",
    technologies: ["React", "Next.js", "ASP.NET", "Azure"],
    highlights: [
      "Multi-tenant platform adopted by 3 laboratories",
      "Daily use by hundreds of dentists",
      "Intuitive UI for order placement and case tracking",
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
              <div className="flex items-start gap-2 text-sm text-muted-foreground md:flex-col md:items-end md:text-right md:pr-4">
                <Calendar className="h-4 w-4 md:hidden" />
                <span className="font-mono">{exp.period}</span>
              </div>

              {/* Timeline dot */}
              <div className="absolute left-[115px] top-1 hidden h-3 w-3 rounded-full border-2 border-primary bg-background md:block" />

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
