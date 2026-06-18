import { Briefcase, Calendar, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const experience = {
  role: "Full Stack Developer",
  program: "NPTEL Winter Internship",
  organization: "Indian Institute of Technology Ropar",
  location: "Remote",
  period: "Jan 2026 - Mar 2026",
  project: "Vi-Notes",
  tech: ["React", "TypeScript", "Node.js", "Express", "MongoDB", "JWT", "Axios"],
  highlights: [
    'Built "Vi-Notes", a secure full-stack writing platform with JWT authentication.',
    "Developed a real-time editor with word and character tracking plus paste detection to improve content integrity.",
    "Designed RESTful APIs and implemented secure authentication with bcrypt and MongoDB Atlas.",
    "Enabled persistent sessions and efficient client-server communication using Axios and a JWT-based architecture.",
  ],
};

export function ExperienceSection() {
  return (
    <section id="experience" className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold font-poppins mb-4 text-glow">
            Experience
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Practical work where I applied full-stack development to build secure, user-focused products
          </p>
        </div>

        <Card className="gradient-card border-border transition-smooth hover:shadow-glow group animate-scale-in">
          <CardContent className="p-8">
            <div className="flex flex-col gap-6 md:flex-row md:items-start">
              <div className="p-4 rounded-xl bg-primary/20 text-primary w-fit flex-shrink-0">
                <Briefcase size={32} />
              </div>

              <div className="flex-1 space-y-6">
                <div>
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h3 className="text-2xl font-semibold group-hover:text-primary transition-smooth">
                        {experience.program}
                      </h3>
                      <p className="text-lg text-accent font-medium mt-2">
                        {experience.role}
                      </p>
                    </div>
                    <Badge variant="secondary" className="bg-primary/20 text-primary w-fit">
                      {experience.project}
                    </Badge>
                  </div>

                  <div className="flex flex-wrap gap-x-5 gap-y-2 mt-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-2">
                      <Briefcase size={16} />
                      {experience.organization}
                    </span>
                    <span className="flex items-center gap-2">
                      <MapPin size={16} />
                      {experience.location}
                    </span>
                    <span className="flex items-center gap-2">
                      <Calendar size={16} />
                      {experience.period}
                    </span>
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-medium text-muted-foreground mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {experience.tech.map((tech) => (
                      <Badge key={tech} variant="outline" className="border-primary/30 text-primary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-medium text-muted-foreground mb-3">Key Contributions</h4>
                  <div className="grid gap-3">
                    {experience.highlights.map((highlight) => (
                      <div key={highlight} className="flex items-start gap-3 text-sm">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground leading-relaxed">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
