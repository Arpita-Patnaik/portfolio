import { useState } from "react";
import { BarChart3, Brain, PieChart } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "Emotion-Aware Decision Support System",
    description:
      "Predicts human emotional states using combined text and behavioral data, with confidence-aware decision support.",
    tech: ["Python", "Scikit-learn", "TF-IDF", "Gradient Boosting"],
    features: [
      "Multimodal ML (text + tabular)",
      "6-class emotion prediction",
      "Confidence-based output filtering",
      "Hybrid ML + rule-based decisions",
      "Feature importance & ablation analysis",
    ],
    icon: Brain,
    color: "text-primary",
    bgColor: "bg-primary/20",
  },
  {
    title: "Mental Health Risk & Support Analyzer",
    description:
      "Classifies mental health risk levels and provides insights using optimized machine learning models.",
    tech: ["Python", "Pandas", "Scikit-learn"],
    features: [
      "Accuracy: 0.74, ROC-AUC: 0.82",
      "Feature engineering & scaling",
      "Model comparison (RF, others)",
      "Hyperparameter tuning",
      "Balanced precision & recall",
    ],
    icon: Brain,
    color: "text-primary-glow",
    bgColor: "bg-primary-glow/20",
  },
  {
    title: "Vi-Notes – Secure Writing Platform",
    description:
      "Full-stack writing app with real-time content tracking, secure authentication, and session management.",
    tech: ["React", "TypeScript", "Node.js", "MongoDB"],
    features: [
      "JWT authentication & bcrypt hashing",
      "Real-time editor with word tracking",
      "Paste detection system",
      "REST APIs with Axios",
      "Secure user management",
    ],
    icon: BarChart3,
    color: "text-accent",
    bgColor: "bg-accent/20",
  },
  {
    title: "Amazon Global Sales Dashboard",
    description:
      "Interactive Power BI dashboard analyzing global sales trends, profitability, and regional performance.",
    tech: ["Power BI", "DAX", "Excel"],
    features: [
      "10+ interactive visuals",
      "Sales & profit insights",
      "Drill-down filters",
      "Map-based analysis",
      "KPI dashboards",
    ],
    icon: PieChart,
    color: "text-primary",
    bgColor: "bg-primary/20",
  },
  {
    title: "LC50 Fish Toxicity Prediction",
    description:
      "Regression model to predict chemical toxicity with strong accuracy and optimized preprocessing.",
    tech: ["Python", "Scikit-learn", "Pandas"],
    features: [
      "R²: 0.91 performance",
      "KNN imputation & scaling",
      "Outlier detection (DBSCAN)",
      "Model comparison",
      "GridSearchCV optimization",
    ],
    icon: Brain,
    color: "text-primary-glow",
    bgColor: "bg-primary-glow/20",
  },
];

export function ProjectsSection() {
  const [showMore, setShowMore] = useState(false);

  const featuredProjects = projects.slice(0, 3);
  const otherProjects = projects.slice(3);

  const renderCard = (project: any, index: number) => (
    <Card
      key={index}
      className="gradient-card border-border transition-smooth hover:shadow-glow group animate-scale-in"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <CardHeader>
        <div className="flex items-start space-x-4">
          <div className={`p-4 rounded-xl ${project.bgColor} ${project.color}`}>
            <project.icon size={28} />
          </div>
          <div>
            <CardTitle className="text-xl group-hover:text-primary transition-smooth">
              {project.title}
            </CardTitle>
            <p className="text-muted-foreground mt-2">
              {project.description}
            </p>
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-5">
        {/* Tech */}
        <div>
          <h4 className="text-sm text-muted-foreground mb-2">
            Technologies
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech: string, i: number) => (
              <Badge
                key={i}
                variant="outline"
                className="border-primary/30 text-primary"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        {/* Features */}
        <div>
          <h4 className="text-sm text-muted-foreground mb-2">
            Key Highlights
          </h4>
          <div className="grid md:grid-cols-2 gap-2">
            {project.features.map((feature: string, i: number) => (
              <div key={i} className="flex items-center space-x-2 text-sm">
                <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                <span className="text-muted-foreground">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <section id="projects" className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold mb-3">Featured Work</h2>
          <p className="text-muted-foreground">
            Projects in machine learning, data science, and full-stack development
          </p>
        </div>

        {/* Featured */}
        <div className="grid lg:grid-cols-1 gap-8">
          {featuredProjects.map(renderCard)}
        </div>

        {/* View More Button */}
        <div className="text-center mt-10">
          <Button
            variant="outline"
            onClick={() => setShowMore(!showMore)}
          >
            {showMore ? "Show Less" : "View More Projects"}
          </Button>
        </div>

        {/* Hidden Projects */}
        {showMore && (
          <div className="mt-10 space-y-6">
            <h3 className="text-xl text-center text-muted-foreground">
              Other Projects
            </h3>

            <div className="grid lg:grid-cols-1 gap-8">
              {otherProjects.map(renderCard)}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}