import { Award, GraduationCap } from "lucide-react";

const education = [
  {
    type: "degree",
    title: "B.Sc. in Software Engineering",
    institution: "Sami Shamoon College of Engineering (SCE)",
    year: "Oct 2019 – June 2023",
    description: "AI Specialization in AI-powered systems and machine learning\nGPA 86+",
  },
];

const certifications = [
  {
    title: "DevOps Bootcamp",
    issuer: "Develeap",
    year: "Nov – Dec 2024",
    details: "Git, Linux, Docker, AWS EC2/RDS/ECR",
  },
];

export function EducationSection() {
  return (
    <section id="education" className="border-t border-border py-24">
      <div className="container">
        {/* Section header */}
        <div className="mb-16">
          <p className="mb-2 font-mono text-sm text-primary">04</p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Education & Certifications
          </h2>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Education */}
          <div>
            <h3 className="mb-6 flex items-center gap-2 font-mono text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              <GraduationCap className="h-4 w-4" />
              Education
            </h3>
            <div className="space-y-4">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="rounded-lg border border-border bg-card p-6 transition-all hover:border-primary/30 hover:bg-surface-hover"
                >
                  <div className="mb-2 flex items-start justify-between gap-4">
                    <h4 className="font-semibold text-foreground">{edu.title}</h4>
                    <span className="shrink-0 font-mono text-xs text-muted-foreground">
                      {edu.year}
                    </span>
                  </div>
                  <p className="mb-2 text-sm text-primary">{edu.institution}</p>
                  <p className="whitespace-pre-line text-sm text-muted-foreground">{edu.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="mb-6 flex items-center gap-2 font-mono text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              <Award className="h-4 w-4" />
              Certifications
            </h3>
            <div className="space-y-3">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="rounded-lg border border-border bg-card p-4 transition-all hover:border-primary/30 hover:bg-surface-hover"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h4 className="font-medium text-foreground">{cert.title}</h4>
                      <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                      {cert.details && (
                        <p className="mt-1 text-xs text-muted-foreground/80">{cert.details}</p>
                      )}
                    </div>
                    <span className="shrink-0 font-mono text-xs text-primary">
                      {cert.year}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
