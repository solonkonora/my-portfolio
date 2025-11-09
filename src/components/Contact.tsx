/* eslint-disable react/no-unescaped-entities */
import { Mail, Github, Linkedin, MapPin } from "lucide-react";
import { Button } from "@/src/components/ui/button";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "nkwadanora@gmail.com",
      link: "mailto:nkwadanora@gmail.com"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/solonkonora",
      link: "https://github.com/solonkonora"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/nkwada-nora",
      link: "https://linkedin.com/in/nkwada-nora"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Remote / Yaounde, Cameroon",
      link: null
    }
  ];

  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Let's Connect</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I'm always interested in hearing and working on new projects and opportunities.
            Feel free to reach out!
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 mb-12 text-foreground">
          {contactInfo.map((info, index) => (
            <div 
              key={index}
              className="bg-card p-6 rounded-xl shadow-soft hover:shadow-medium transition-all duration-300 border border-border animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {info.link ? (
                <a 
                  href={info.link}
                  target={info.link.startsWith('http') ? '_blank' : undefined}
                  rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="flex items-start gap-4 group"
                >
                  <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <info.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">{info.label}</p>
                    <p className="font-medium group-hover:text-primary transition-colors">{info.value}</p>
                  </div>
                </a>
              ) : (
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <info.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">{info.label}</p>
                    <p className="font-medium">{info.value}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center animate-fade-in-up">
          <div className="bg-gradient-to-r from-primary via-accent to-primary p-8 rounded-2xl">
            <h3 className="text-2xl font-semibold mb-4">Ready to Start a Project?</h3>
            <p className="text-muted-foreground mb-6">
              Let's collaborate and build something amazing together.
            </p>
            <Button 
              size="lg"
              className="shadow-teal hover:shadow-large transition-all duration-300"
              asChild
            >
              <a href="mailto:nkwadanora@gmail.com">
                Send a Message
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
