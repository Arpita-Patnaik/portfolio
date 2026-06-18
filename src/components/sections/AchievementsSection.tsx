import { Trophy, Medal, Award, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const achievements = [
  {
    title: "Top 5% Performer (95%)",
    event: "NPTEL - The Joy of Computing using Python",
    organization: "NPTEL",
    year: "2025",
    description:
      "Ranked among the top 5%, demonstrating strong problem-solving skills and proficiency in Python programming.",
    icon: Trophy,
    color: "text-primary",
    bgColor: "bg-primary/20",
    badge: "Top Performer",
  },
  {
    title: "7th Rank Globally",
    event: "Code Olympics Season 1",
    organization: "CodeYoung",
    year: "2021",
    description:
      "Achieved 7th position globally in an international coding competition, showcasing strong algorithmic thinking and competitive programming skills.",
    icon: Medal,
    color: "text-accent",
    bgColor: "bg-accent/20",
    badge: "Global Ranking",
  },
];

const skills = [
  "Problem Solving",
  "Analytical Thinking",
  "Team Collaboration",
  "Innovation",
  "Leadership",
  "Debugging & Troubleshooting",
];

export function AchievementsSection() {
  return (
    <section id="achievements" className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold font-poppins mb-4 text-glow">
            Achievements
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Key milestones that reflect my technical growth and competitive excellence
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

        {/* Skills developed */}
        <div className="animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
          <Card className="gradient-card border-border shadow-soft">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-6 text-center text-primary">
                Skills Strengthened Through Achievements
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
        {/* <div className="mt-16 text-center animate-fade-in-up" style={{ animationDelay: "0.8s" }}>
          <div className="gradient-card p-8 rounded-2xl shadow-soft border border-border max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold mb-6 text-primary">Looking Ahead</h3>
            <p className="text-muted-foreground leading-relaxed text-lg">
              These achievements reflect my commitment to continuous learning and technical excellence. 
              I aim to further deepen my expertise in machine learning, full-stack development, and 
              data-driven systems, building impactful solutions that solve real-world problems and 
              contribute meaningfully to the tech industry.
            </p>
          </div>
        </div> */}
      </div>
    </section>
  );
}