/* eslint-disable react/no-unescaped-entities */
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
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

const Index = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "Full-stack e-commerce solution with payment integration, inventory management, and admin dashboard.",
      tech: ["React", "Node.js", "PostgreSQL", "Stripe"],
      link: "#",
    },
    {
      title: "Task Management App",
      description:
        "Collaborative task management tool with real-time updates, team collaboration features, and analytics.",
      tech: ["React", "TypeScript", "Firebase", "Tailwind"],
      link: "#",
    },
    {
      title: "Portfolio CMS",
      description:
        "Content management system for creative professionals with drag-and-drop builder and SEO optimization.",
      tech: ["Next.js", "Prisma", "PostgreSQL", "AWS"],
      link: "#",
    },
  ];

  const skills = [
    {
      category: "Frontend",
      icon: Palette,
      items: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Vue.js"],
    },
    {
      category: "Backend",
      icon: Database,
      items: ["Node.js", "Express", "PostgreSQL", "MongoDB", "REST APIs"],
    },
    {
      category: "Tools",
      icon: Code2,
      items: ["Git", "Docker", "AWS", "Vercel", "Figma"],
    },
    {
      category: "Languages",
      icon: Globe,
      items: ["JavaScript", "TypeScript", "Python", "SQL", "HTML/CSS"],
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md z-50 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <span className="text-xl font-bold gradient-primary bg-clip-text text-transparent">
              Portfolio
            </span>
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
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-16 gradient-subtle">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Hi, I'm{" "}
            <span className="gradient-primary bg-clip-text text-transparent">
              Jane Doe
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Full-Stack Web Developer crafting beautiful, functional, and
            user-centered digital experiences
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" className="shadow-elegant">
              <a href="#contact">Get In Touch</a>
            </Button>
            <Button size="lg" variant="outline">
              <a href="#projects" className="flex items-center gap-2">
                View Projects <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
          </div>
          <div className="flex gap-6 justify-center mt-8">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-primary transition-smooth"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-primary transition-smooth"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="mailto:jane@example.com"
              className="text-foreground hover:text-primary transition-smooth"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="animate-slide-in">
              <img
                src="/assets/vercel.svg"
                alt="Profile"
                width={400}
                height={400}
                className="rounded-2xl shadow-2xl w-full max-w-md mx-auto"
              />
            </div>
            <div className="space-y-6 animate-fade-in">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a passionate full-stack web developer focused on building
                elegant, user-centric applications using modern tools.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I enjoy turning ideas into robust, maintainable code and
                shipping delightful user experiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="py-20 px-4 sm:px-6 lg:px-8 gradient-subtle"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center animate-fade-in">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-elegant transition-smooth hover:-translate-y-1 animate-scale-in border-accent"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-2xl font-bold mb-3 text-primary">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <Badge key={i} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <Button variant="outline" className="w-full group">
                  <a
                    href={project.link}
                    className="flex items-center justify-center gap-2 w-full"
                  >
                    View Project
                    <ExternalLink className="h-4 w-4 group-hover:translate-x-1 transition-smooth" />
                  </a>
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

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

      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 px-4 sm:px-6 lg:px-8 gradient-subtle"
      >
        <div className="max-w-2xl mx-auto text-center animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Let's Work Together
          </h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            I'm always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision.
          </p>
          <Card className="p-8 shadow-elegant border-accent">
            <div className="space-y-4">
              <div className="flex items-center justify-center gap-3 text-lg">
                <Mail className="h-5 w-5 text-primary" />
                <a
                  href="mailto:jane@example.com"
                  className="hover:text-primary transition-smooth"
                >
                  jane@example.com
                </a>
              </div>
              <div className="flex items-center justify-center gap-3 text-lg">
                <Github className="h-5 w-5 text-primary" />
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-smooth"
                >
                  github.com/janedoe
                </a>
              </div>
              <div className="flex items-center justify-center gap-3 text-lg">
                <Linkedin className="h-5 w-5 text-primary" />
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-smooth"
                >
                  linkedin.com/in/janedoe
                </a>
              </div>
            </div>
            <Button size="lg" className="mt-8 w-full shadow-elegant">
              <a href="mailto:jane@example.com">Send Message</a>
            </Button>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t border-border py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center text-muted-foreground">
          <p>&copy; 2025 Jane Doe. Built with React & Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
