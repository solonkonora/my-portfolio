/* eslint-disable react/no-unescaped-entities */
import { Code2, Palette, Zap } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: "Clean Code",
      description:
        "Writing maintainable, scalable code following best practices and modern standards.",
    },
    {
      icon: Palette,
      title: "Creative Design",
      description:
        "Blending aesthetics with functionality to create engaging user interfaces.",
    },
    {
      icon: Zap,
      title: "Performance",
      description:
        "Optimizing applications for speed, accessibility, and seamless experiences.",
    },
  ];

  return (
    <section id="about" className="py-20 px-6 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="animate-fade-in-up">
            <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-primary">
              Software Developer & Problem Solver
            </h3>
           
            <p className="text-muted-foreground leading-relaxed mb-6">
              I'm a passionate full-stack web developer with a keen eye for
              design and a love for creating seamless digital experiences. With
              expertise spanning from frontend frameworks to backend systems, I
              build applications that are both beautiful and functional. My journey in tech began with a curiosity for
              solving real-world problems through innovative solutions, which
              evolved into a love for crafting user-centric digital experiences.
              With a strong foundation in JavaScript frameworks, I focus on
              creating scalable, efficient, and visually appealing applications.
              Currently, I always put a more emphasis on backend development with
              Node.js and Express to constantly update my skill set and deliver powerful,
              server-side solutions
            </p>
            <p className="text-muted-foreground leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies,
              contributing to open-source projects, or sharing knowledge with
              the developer community. I believe in continuous learning and the
              power of collaboration.
            </p>
            <p>
            I aim to contribute to impactful projects that make a
              difference in users' lives.</p>
          </div>

          <div className="grid gap-6 animate-fade-in-up">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="bg-card p-6 rounded-xl shadow-soft hover:shadow-medium transition-all duration-300 border border-border"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <highlight.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">
                      {highlight.title}
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      {highlight.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
