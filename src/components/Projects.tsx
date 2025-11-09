import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/src/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "Touristic Site",
      description: "A stunning coastal discovery platform showcasing breathtaking sea views, thrilling adventure activities, and curated sightseeing experiences with interactive maps and location guides.",
      image: "/assets/tour.png",
      tags: ["JavaScript", "TypeScript", "Tailwind CSS", "Vite"],
      demoLink: "https://my-touristic-site.vercel.app/",
      githubLink: "https://github.com/solonkonora/my-touristic-site"
    },
    {
      title: "My-Profile App",
      description: "Analytics dashboard for social media management with data visualization, scheduling tools, and multi-platform integration.",
      image: "/assets/profi.png",
      tags: ["TypeScript", "JavaScript"],
      demoLink: "https://my-portfolio-bx610cvig-norasolonkos-projects.vercel.app/",
      githubLink: "https://github.com/solonkonora/my-portfolio"
    },
    {
      title: "Event Planning",
      description: "A full-featured e-commerce solution with real-time inventory management, secure payment processing, and an intuitive admin dashboard.",
      image: "/assets/ds.png",
      tags: ["Nextjs", "TypeScript", "Supabase", "MongoDB"],
      demoLink: "https://diligent-events.vercel.app/",
      githubLink: "https://github.com/solonkonora/diligent-events"
    },
    {
      title: "Visual Brainstorm Canvas Board",
      description: "Collaborative visual management tool with drawing functionality, real-time updates, and team collaboration features.",
      image: "/assets/profi.png",
      tags: ["TypeScript", "Next.js", "NestJS", "MongoDB", "Socket.io", "ReactKonva"],
      demoLink: "#",
      githubLink: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A selection of projects that showcase my expertise in building modern web applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-large transition-all duration-300 border border-border animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden aspect-video">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="px-3 py-1 bg-accent text-accent-foreground text-xs rounded-full font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 text-foreground">
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="flex-1 gap-2"
                    asChild
                  >
                    <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 text-foreground" />
                      Demo
                    </a>
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="flex-1 gap-2"
                    asChild
                  >
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 text-foreground" />
                      Code
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
