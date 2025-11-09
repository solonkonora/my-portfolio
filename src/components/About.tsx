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
    <section id="about" className="py-20 px-6 bg-secondary/30 dark:bg-secondary/10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="animate-fade-in-up">
            <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-primary">
              Software Developer
            </h3>

            <p className="leading-relaxed mb-6 text-base about-text">
              I'm a passionate full-stack web developer with a keen eye for
              design and a love for creating seamless digital experiences. With
              expertise spanning from frontend frameworks to backend systems, I
              build applications that are both beautiful and functional making
              use of modern technologies.
            </p>
            <p className="mb-6 text-base about-text">
              My journey in tech began with a curiosity for solving real-world
              problems through innovative solutions, which evolved into a love
              for crafting user-centric digital experiences. With a strong
              foundation in JavaScript frameworks, I focus on creating scalable,
              efficient, and visually appealing applications.
            </p>
            <p className="mb-6 text-base about-text">
              When I'm not coding, you'll find me exploring new technologies,
              contributing to open-source projects, or sharing knowledge with
              the developer community. I believe in continuous learning and the
              power of collaboration.
            </p>
            <p className="text-base about-text">
              I aim to contribute to impactful projects that make a difference
              in users' lives.
            </p>
          </div>

          <div className="grid gap-6 animate-fade-in-up">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="bg-white dark:bg-card p-6 rounded-xl shadow-soft hover:shadow-medium transition-all duration-300 border border-border/50"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/15 dark:bg-primary/10 rounded-lg">
                    <highlight.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-primary font-semibold text-lg mb-2">
                      {highlight.title}
                    </h4>
                    <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-100">
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
