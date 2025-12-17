const skillCategories = [
  {
    title: "Frontend",
    skills: ["React", "React Native", "TypeScript", "Vite", "Next.js", "Redux", "Material UI", "Tailwind"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "NestJS", "Express", "SQL", "REST API", "Postman", "OpenAI"],
  },
  {
    title: "Databases & DevOps",
    skills: ["MongoDB", "PostgreSQL", "Docker", "Git", "GitHub", "Azure"],
  },
  {
    title: "Languages",
    skills: ["Hebrew (Native)", "French (Native)", "English (Professional)"],
  },
];

export function SkillsSection() {
  return (
    <section id="skills" className="border-t border-border py-24">
      <div className="container">
        {/* Section header */}
        <div className="mb-16">
          <p className="mb-2 font-mono text-sm text-primary">01</p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Technical Skills
          </h2>
        </div>

        {/* Skills grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="group rounded-lg border border-border bg-card p-6 transition-all hover:border-primary/30 hover:bg-surface-hover"
            >
              <h3 className="mb-4 font-mono text-sm font-semibold uppercase tracking-wider text-primary">
                {category.title}
              </h3>
              <ul className="space-y-2">
                {category.skills.map((skill) => (
                  <li
                    key={skill}
                    className="flex items-center gap-2 text-sm text-muted-foreground transition-colors group-hover:text-foreground"
                  >
                    <span className="h-1 w-1 rounded-full bg-primary/50" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
