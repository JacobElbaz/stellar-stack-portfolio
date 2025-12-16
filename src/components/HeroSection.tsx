import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center justify-center pt-16">
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(hsl(var(--border)/0.3)_1px,transparent_1px),linear-gradient(90deg,hsl(var(--border)/0.3)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]" />

      <div className="container relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          {/* Status badge */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-2 opacity-0 animate-fade-up">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            <span className="font-mono text-xs text-primary">Open to opportunities</span>
          </div>

          {/* Main headline */}
          <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight text-foreground opacity-0 animate-fade-up animation-delay-100 sm:text-5xl md:text-6xl">
            FullStack Engineer
            <br />
            <span className="text-gradient-accent">SaaS & AI Solutions</span>
          </h1>

          {/* Subtitle */}
          <p className="mb-8 text-lg text-muted-foreground opacity-0 animate-fade-up animation-delay-200 sm:text-xl">
            Building scalable platforms that power thousands of users.
            <br className="hidden sm:block" />
            Turning complex problems into elegant, performant solutions.
          </p>

          {/* CTA buttons */}
          <div className="mb-12 flex flex-col items-center justify-center gap-4 opacity-0 animate-fade-up animation-delay-300 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 glow-sm"
            >
              <a href="#experience">View Experience</a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-border bg-transparent hover:bg-surface-hover"
            >
              <a href="mailto:contact@example.com">Get in Touch</a>
            </Button>
          </div>

          {/* Social links */}
          <div className="flex items-center justify-center gap-6 opacity-0 animate-fade-up animation-delay-400">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <Github className="h-4 w-4" />
              <span>GitHub</span>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <Linkedin className="h-4 w-4" />
              <span>LinkedIn</span>
            </a>
            <a
              href="mailto:contact@example.com"
              className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <Mail className="h-4 w-4" />
              <span>Email</span>
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in animation-delay-600">
          <a
            href="#skills"
            className="flex flex-col items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
          >
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <ArrowDown className="h-4 w-4 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
}
