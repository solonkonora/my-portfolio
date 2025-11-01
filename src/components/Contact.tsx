/* eslint-disable react/no-unescaped-entities */
import profileImg from "@/public/vercel.svg";

const About = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">
          About Me
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="animate-slide-in">
            <img
              src={profileImg}
              alt="Nora Solonko"
              className="rounded-2xl shadow-2xl w-full max-w-md mx-auto"
            />
          </div>
          <div className="space-y-6 animate-fade-in">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a passionate full-stack web developer with over 5 years of
              experience building elegant, user-centric applications. I
              specialize in creating seamless digital experiences that blend
              beautiful design with robust functionality.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              My journey in tech started with a curiosity for problem-solving
              and has evolved into a career I absolutely love. I thrive on
              tackling complex challenges and transforming ideas into reality
              through clean, maintainable code.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies,
              contributing to open-source projects, or sharing knowledge with
              the developer community through blog posts and mentoring.
            </p>
            <div className="flex gap-4 pt-4">
              <div className="bg-accent rounded-lg p-4 flex-1">
                <h3 className="text-3xl font-bold text-primary mb-1">3+</h3>
                <p className="text-sm text-muted-foreground">
                  Years Experience
                </p>
              </div>
              <div className="bg-accent rounded-lg p-4 flex-1">
                <h3 className="text-3xl font-bold text-primary mb-1">10+</h3>
                <p className="text-sm text-muted-foreground">
                  Projects Completed
                </p>
              </div>
              <div className="bg-accent rounded-lg p-4 flex-1">
                <h3 className="text-3xl font-bold text-primary mb-1">2+</h3>
                <p className="text-sm text-muted-foreground">Happy Clients</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
