# Portfolio - Jacob Elbaz

Modern and responsive professional portfolio showcasing my skills, experience, and projects as a FullStack Engineer.

## 🚀 Technologies

This project is built with a modern and performant stack:

- **React 18** - Modern UI library
- **TypeScript** - Static typing for better maintainability
- **Vite** - Ultra-fast build tool
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Accessible and customizable UI components
- **React Router** - Client-side routing
- **Lucide React** - Modern icons

## 📋 Prerequisites

Before getting started, make sure you have installed:

- **Node.js** (version 18 or higher) - [Install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
- **npm** or **bun** (package manager)

## 🛠️ Installation

1. **Clone the repository**

```bash
git clone <YOUR_GIT_URL>
cd stellar-stack-portfolio
```

2. **Install dependencies**

```bash
npm install
# or with bun
bun install
```

3. **Start the development server**

```bash
npm run dev
# or with bun
bun run dev
```

The site will be accessible at `http://localhost:8080`

## 📁 Project Structure

```
stellar-stack-portfolio/
├── src/
│   ├── components/          # Reusable React components
│   │   ├── ui/              # shadcn/ui components
│   │   ├── HeroSection.tsx  # Hero section
│   │   ├── SkillsSection.tsx # Skills section
│   │   ├── ExperienceSection.tsx # Experience section
│   │   ├── ProjectsSection.tsx # Projects section
│   │   ├── EducationSection.tsx # Education section
│   │   ├── Navigation.tsx   # Main navigation
│   │   └── FooterSection.tsx # Footer
│   ├── pages/               # Application pages
│   ├── hooks/               # Custom React hooks
│   ├── lib/                 # Utilities and helpers
│   └── main.tsx             # Application entry point
├── public/                  # Static assets
└── package.json            # Dependencies and scripts
```

## 🎨 Portfolio Sections

- **Hero** - Main presentation with CTA
- **Skills** - Technical skills
- **Experience** - Professional journey
- **Projects** - Completed projects with metrics
- **Education** - Academic background
- **Footer** - Contact information and links

## 📜 Available Scripts

```bash
# Development
npm run dev          # Start development server

# Build
npm run build        # Production build
npm run build:dev    # Development build

# Code Quality
npm run lint         # Check code with ESLint

# Preview
npm run preview      # Preview production build
```

## 🚢 Deployment

### Production Build

```bash
npm run build
```

Optimized files will be generated in the `dist/` folder.

### Deployment Options

The project can be deployed on any platform that supports static sites:

- **Vercel** - Automatic deployment from Git
- **Netlify** - Continuous deployment
- **GitHub Pages** - Free hosting
- **Cloudflare Pages** - Optimal performance

### Example with Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

## 🎯 Customization

### Modify Personal Information

Data is directly integrated into the components:

- `src/components/HeroSection.tsx` - Main information
- `src/components/ExperienceSection.tsx` - Professional experience
- `src/components/ProjectsSection.tsx` - Projects
- `src/components/EducationSection.tsx` - Education
- `src/components/SkillsSection.tsx` - Skills

### Customize Colors

Colors are defined in `tailwind.config.ts` via custom CSS variables in `src/index.css`.

## 📝 License

This project is private and personal.

## 📧 Contact

For any questions or suggestions, feel free to reach out:

- Email: jacobelbz@gmail.com
- Portfolio: [Your portfolio URL]

---

Built with ❤️ by Jacob Elbaz
