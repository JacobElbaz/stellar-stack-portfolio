import { Github, Linkedin, Mail } from "lucide-react";

const socialLinks = [
  { href: "https://github.com/JacobElbaz", icon: Github, label: "GitHub" },
  { href: "https://linkedin.com/in/jacob-elbaz/", icon: Linkedin, label: "LinkedIn" },
  { href: "mailto:jacobelbz@gmail.com", icon: Mail, label: "Email" },
];

export function FooterSection() {
  return (
    <footer className="border-t border-border py-12">
      <div className="container">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          {/* Logo / Name */}
          <div className="flex items-center gap-4">
            <span className="font-mono text-sm text-muted-foreground">
              &lt;dev /&gt;
            </span>
            <span className="text-sm text-muted-foreground">
              Built with precision & passion
            </span>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="rounded-full border border-border p-2 text-muted-foreground transition-all hover:border-primary/30 hover:text-primary"
              >
                <link.icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Jacob Elbaz. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
