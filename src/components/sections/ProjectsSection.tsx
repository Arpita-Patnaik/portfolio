import { ExternalLink, Github, BarChart3, Brain, PieChart } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "SmartBiz – Business Management System",
    description: "A comprehensive Angular-based business management system with role-based access control, interactive dashboards, and real-time stock management.",
    tech: ["Angular", "TypeScript", "HTML", "CSS"],
    features: [
      "Role-based access control",
      "Interactive dashboards", 
      "CRUD operations",
      "Real-time stock management",
      "Route guards",
      "Purple-themed responsive UI"
    ],
    icon: BarChart3,
    color: "text-primary",
    bgColor: "bg-primary/20",
    link: "#",
    github: "#",
  },
  {
    title: "Power BI Dashboard – Amazon Global Sales Analysis",
    description: "Interactive Power BI dashboard analyzing Amazon's global sales data with drill-down capabilities and comprehensive market insights.",
    tech: ["Power BI", "DAX", "Excel"],
    features: [
      "Interactive data visualizations",
      "DAX calculations",
      "Drill-down metrics for Sales & Profit/Loss",
      "Market share analysis",
      "Customer trend insights",
      "Integrated map visuals",
      "KPI performance cards"
    ],
    icon: PieChart,
    color: "text-accent",
    bgColor: "bg-accent/20",
    link: "#",
    github: "#",
  },
  {
    title: "LC50 Fish Toxicity Analysis",
    description: "Machine learning regression model for predicting chemical toxicity using molecular descriptors and advanced feature engineering.",
    tech: ["Python", "Scikit-learn", "Pandas", "Matplotlib"],
    features: [
      "Exploratory Data Analysis (EDA)",
      "Feature selection and engineering",
      "ML regression model training",
      "Molecular descriptor analysis",
      "Model evaluation metrics",
      "Toxicity prediction system"
    ],
    icon: Brain,
    color: "text-primary-glow",
    bgColor: "bg-primary-glow/20",
    link: "#",
    github: "#",
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold font-poppins mb-4 text-glow">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my work in data science, machine learning, and frontend development
          </p>
        </div>

        <div className="grid lg:grid-cols-1 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="gradient-card border-border transition-smooth hover:shadow-glow group animate-scale-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-4">
                    <div className={`p-4 rounded-xl ${project.bgColor} ${project.color}`}>
                      <project.icon size={32} />
                    </div>
                    <div>
                      <CardTitle className="text-xl group-hover:text-primary transition-smooth">
                        {project.title}
                      </CardTitle>
                      <p className="text-muted-foreground mt-2">{project.description}</p>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <Button size="icon" variant="ghost" className="hover:bg-primary/20">
                      <Github size={20} />
                    </Button>
                    <Button size="icon" variant="ghost" className="hover:bg-primary/20">
                      <ExternalLink size={20} />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-6">
                {/* Tech Stack */}
                <div>
                  <h4 className="text-sm font-medium text-muted-foreground mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="border-primary/30 text-primary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div>
                  <h4 className="text-sm font-medium text-muted-foreground mb-3">Key Features</h4>
                  <div className="grid md:grid-cols-2 gap-2">
                    {project.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2 text-sm">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          <div className="gradient-card p-8 rounded-2xl shadow-soft border border-border max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold mb-4 text-primary">Interested in Collaboration?</h3>
            <p className="text-muted-foreground mb-6">
              I'm always excited to work on new projects and explore innovative solutions
            </p>
            <Button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              Get In Touch
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}