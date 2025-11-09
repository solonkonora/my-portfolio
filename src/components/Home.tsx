/* eslint-disable react/no-unescaped-entities */
import { Button } from "@/src/components/ui/button";
import { Card } from "@/src/components/ui/card";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code2,
  Palette,
  Database,
  Globe,
} from "lucide-react";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import { ThemeToggle } from "./theme-toggle";

const Index = () => {
  const skills = [
    {
      category: "Languages",
      icon: Globe,
      items: ["HTML", "CSS", "JavaScript", "TypeScript"],
    },
    {
      category: "Frontend",
      icon: Palette,
      items: [
        "React",
        "TypeScript",
        "Next.js",
        "Tailwind CSS",
        "React Context API",
      ],
    },
    {
      category: "Backend",
      icon: Database,
      items: [
        "Node.js",
        "Express.js",
        "Nest.JS",
        "PostgreSQL",
        "MySQL",
        "MongoDB",
        "REST APIs",
        "WebSockets",
      ],
    },
    {
      category: "Tools",
      icon: Code2,
      items: [
        "Git",
        "GitHub",
        "Docker",
        "GCP",
        "Vercel",
        "Render",
        "Figma",
        "Postman",
        "ESLint",
        "Prettier",
        "Trello",
        "Swagger",
        "Vite",
        "npm",
        "pnpm",
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-md z-50 border-b border-border shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <span className="text-xl font-bold text-primary">My Profile</span>
            <div className="flex items-center gap-6">
              <div className="hidden md:flex gap-8">
                <a
                  href="#about"
                  className="text-foreground hover:text-primary transition-smooth"
                >
                  About
                </a>
                <a
                  href="#projects"
                  className="text-foreground hover:text-primary transition-smooth"
                >
                  Projects
                </a>
                <a
                  href="#skills"
                  className="text-foreground hover:text-primary transition-smooth"
                >
                  Skills
                </a>
                <a
                  href="#contact"
                  className="text-foreground hover:text-primary transition-smooth"
                >
                  Contact
                </a>
              </div>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </nav>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-16">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url(/assets/hero1.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          {/* overlay for better text readability */}
          <div className="absolute inset-0 bg-background/85 dark:bg-background/70 backdrop-blur-sm"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-foreground">Hi, I'm </span>
            <span className="text-primary">Nora Solonko</span>
          </h1>
          <p className="text-xl md:text-2xl text-foreground mb-8 max-w-3xl mx-auto font-medium">
            Full-Stack Web Developer crafting beautiful, functional, and
            user-centered digital experiences
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" className="shadow-elegant hover:opacity-90">
              <a href="#Contact">Get In Touch</a>
            </Button>
            <Button size="lg" variant="outline" className="hover:bg-accent">
              <a href="#Projects" className="text-foreground flex items-center gap-2">
                View Projects <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
          </div>
          <div className="flex gap-6 justify-center mt-8">
            <a
              href="https://github.com/solonkonora"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-primary transition-smooth"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://linkedin.com/in/nkwada-nora"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-primary transition-smooth"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="mailto:nkwadanora@gmail.com"
              className="text-foreground hover:text-primary transition-smooth"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
      </section>

      <About />
      <Projects />

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center animate-fade-in">
            Skills & Technologies
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <Card
                  key={index}
                  className="p-6 hover:shadow-elegant transition-smooth animate-slide-up border-accent"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-accent rounded-lg">
                      <Icon className="h-6 w-6 text-accent-foreground" />
                    </div>
                    <h3 className="text-xl font-bold">{skill.category}</h3>
                  </div>
                  <ul className="space-y-2">
                    {skill.items.map((item, i) => (
                      <li
                        key={i}
                        className="text-muted-foreground flex items-center gap-2"
                      >
                        <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <Contact />

      <footer className="bg-background border-t border-border py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center text-muted-foreground">
          <p>&copy; 2025 Nora Solonko. Built with React & Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
