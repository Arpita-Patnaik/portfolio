import { GraduationCap, School } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const educationData = [
  {
    title: "B.Tech, Computer Engineering",
    institution: "Silicon University",
    period: "2023 - 2027",
    icon: GraduationCap,
    current: true,
  },
  {
    title: "12th",
    institution: "K.C. Public School",
    period: "Completed",
    icon: School,
    current: false,
  },
  {
    title: "10th",
    institution: "K.C. Public School",
    period: "Completed",
    icon: School,
    current: false,
  },
];

export function AboutSection() {
  return (
    <section id="about" className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold font-poppins mb-4 text-glow">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get to know more about my journey, passion, and aspirations
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Bio Section */}
          <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="gradient-card p-8 rounded-2xl shadow-soft border border-border">
              <h3 className="text-2xl font-semibold mb-6 text-primary">My Story</h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I'm a results-driven Computer Engineering student with a strong 
                foundation in data science, full-stack development, and analytical problem-solving. 
                I'm proficient in Python, SQL, and modern web technologies, with hands-on 
                experience in building scalable applications using the MERN stack and developing 
                machine learning models using Scikit-learn.
              </p>

              <p>
                Currently pursuing B.Tech at Silicon University, I have worked on impactful 
                projects such as an Emotion-Aware Decision Support System, Mental Health Risk Analyzer, 
                and interactive Power BI dashboards. My work focuses on combining data-driven 
                insights with practical applications, including predictive modeling, feature 
                engineering, and real-time data visualization.
              </p>

              <p>
                I have also gained industry exposure through my internship at IIT Ropar, 
                where I developed a secure full-stack platform with real-time content monitoring. 
                With a keen interest in AI and data-driven systems, I aim to build intelligent 
                solutions that bridge the gap between complex data and meaningful decision-making.
              </p>
              </div>
            </div>
          </div>

          {/* Education Section */}
          <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <h3 className="text-2xl font-semibold text-primary mb-6">Education</h3>
            <div className="space-y-4">
              {educationData.map((edu, index) => (
                <Card 
                  key={index} 
                  className={`gradient-card border-border transition-smooth hover:shadow-glow group ${
                    edu.current ? 'ring-1 ring-primary/30' : ''
                  }`}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className={`p-3 rounded-lg ${
                        edu.current 
                          ? 'bg-primary/20 text-primary' 
                          : 'bg-secondary text-secondary-foreground'
                      }`}>
                        <edu.icon size={24} />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-lg mb-1 group-hover:text-primary transition-smooth">
                          {edu.title}
                        </h4>
                        <p className="text-muted-foreground mb-2">{edu.institution}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-accent">{edu.period}</span>
                          {edu.current && (
                            <span className="px-2 py-1 bg-primary/20 text-primary text-xs rounded-full">
                              Current
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}