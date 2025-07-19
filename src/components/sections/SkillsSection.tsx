import { Code, Database, BarChart, Palette } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const skillCategories = [
  {
    title: "Languages & Tools",
    icon: Code,
    skills: ["Python", "SQL", "HTML", "CSS", "TypeScript"],
    color: "text-primary",
    bgColor: "bg-primary/20",
  },
  {
    title: "Libraries & Frameworks",
    icon: Database,
    skills: ["Pandas", "NumPy", "Scikit-learn", "Matplotlib", "Seaborn", "Angular"],
    color: "text-accent",
    bgColor: "bg-accent/20",
  },
  {
    title: "Platforms",
    icon: BarChart,
    skills: ["Power BI", "Tableau"],
    color: "text-primary-glow",
    bgColor: "bg-primary-glow/20",
  },
  {
    title: "Concepts",
    icon: Palette,
    skills: ["Statistics", "Supervised/Unsupervised ML", "Data Visualization", "Model Evaluation"],
    color: "text-accent-soft",
    bgColor: "bg-accent-soft/20",
  },
];

export function SkillsSection() {
  return (
    <section id="skills" className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold font-poppins mb-4 text-glow">
            Skills & Expertise
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <Card 
              key={index} 
              className="gradient-card border-border transition-smooth hover:shadow-glow group animate-scale-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className={`p-4 rounded-xl ${category.bgColor} ${category.color} mr-4`}>
                    <category.icon size={32} />
                  </div>
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-smooth">
                    {category.title}
                  </h3>
                </div>
                
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex}
                      variant="secondary"
                      className="px-4 py-2 text-sm font-medium bg-secondary hover:bg-primary hover:text-primary-foreground transition-smooth cursor-default"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Skills Section */}
        <div className="mt-16 text-center animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          <div className="gradient-card p-8 rounded-2xl shadow-soft border border-border max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold mb-6 text-primary">Core Strengths</h3>
            <div className="grid md:grid-cols-3 gap-6 text-muted-foreground">
              <div className="space-y-2">
                <h4 className="font-medium text-foreground">Analytical Thinking</h4>
                <p className="text-sm">Strong problem-solving skills with data-driven approaches</p>
              </div>
              <div className="space-y-2">
                <h4 className="font-medium text-foreground">Fast Learning</h4>
                <p className="text-sm">Quick adaptation to new technologies and methodologies</p>
              </div>
              <div className="space-y-2">
                <h4 className="font-medium text-foreground">Detail-Oriented</h4>
                <p className="text-sm">Meticulous attention to accuracy and quality</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}