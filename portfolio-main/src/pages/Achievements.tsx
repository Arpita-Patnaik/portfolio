import { Trophy, Medal, Award, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const achievements = [
  {
    title: "7th Rank Globally",
    event: "Code Olympics Season 1",
    organization: "CodeYoung",
    year: "2021",
    description: "Achieved 7th position globally in a competitive programming contest among thousands of participants worldwide.",
    icon: Trophy,
    color: "text-primary",
    bgColor: "bg-primary/20",
    badge: "Global Ranking",
  },
  {
    title: "Ideathon Participant",
    event: "SafeKey Emergency Alarm Keychain",
    organization: "Silicon University",
    year: "2024",
    description: "Participated in the ideathon for developing innovative emergency safety solutions, focusing on keychain-based alarm systems.",
    icon: Award,
    color: "text-accent",
    bgColor: "bg-accent/20",
    badge: "Innovation",
  },
];

const skills = [
  "Problem Solving",
  "Analytical Thinking", 
  "Team Collaboration",
  "Innovation",
  "Technical Excellence",
  "Leadership"
];

export default function Achievements() {
  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl sm:text-5xl font-bold font-poppins mb-4 text-glow">
            Achievements
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Recognition and milestones in my academic and professional journey
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {achievements.map((achievement, index) => (
            <Card 
              key={index}
              className="gradient-card border-border transition-smooth hover:shadow-glow group animate-scale-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-8">
                <div className="flex items-start space-x-6">
                  <div className={`p-4 rounded-xl ${achievement.bgColor} ${achievement.color} flex-shrink-0`}>
                    <achievement.icon size={32} />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-semibold group-hover:text-primary transition-smooth">
                        {achievement.title}
                      </h3>
                      <Badge variant="secondary" className="bg-primary/20 text-primary">
                        {achievement.badge}
                      </Badge>
                    </div>
                    
                    <h4 className="text-lg font-medium text-accent mb-2">
                      {achievement.event}
                    </h4>
                    
                    <div className="flex items-center space-x-4 mb-4 text-sm text-muted-foreground">
                      <span className="flex items-center space-x-1">
                        <Medal size={16} />
                        <span>{achievement.organization}</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <Calendar size={16} />
                        <span>{achievement.year}</span>
                      </span>
                    </div>
                    
                    <p className="text-muted-foreground leading-relaxed">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Skills developed through achievements */}
        <div className="animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <Card className="gradient-card border-border shadow-soft">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-6 text-center text-primary">
                Skills Developed Through Achievements
              </h3>
              <div className="flex flex-wrap justify-center gap-4">
                {skills.map((skill, index) => (
                  <Badge 
                    key={index}
                    variant="outline"
                    className="px-4 py-2 text-sm font-medium border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground transition-smooth cursor-default"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Future Goals */}
        <div className="mt-16 text-center animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          <div className="gradient-card p-8 rounded-2xl shadow-soft border border-border max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold mb-6 text-primary">Looking Ahead</h3>
            <p className="text-muted-foreground leading-relaxed text-lg">
              These achievements have shaped my journey and continue to drive my passion for excellence. 
              I'm committed to pushing boundaries in data science and development, aiming to contribute 
              meaningfully to innovative projects and make a positive impact in the tech industry.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}