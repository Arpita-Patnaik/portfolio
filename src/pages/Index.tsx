import { Link } from "react-router-dom";
import { ArrowRight, Download, Mail, Sparkles, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: "💜",
    title: "Data Science",
    description: "Transforming raw data into meaningful insights through ML, statistics, and visualization",
  },
  {
    icon: "💙", 
    title: "Machine Learning",
    description: "Building predictive models and intelligent systems using cutting-edge algorithms",
  },
  {
    icon: "🧡",
    title: "Frontend Development", 
    description: "Creating beautiful, responsive user interfaces with modern web technologies",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary-glow/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="relative z-10 flex items-center min-h-screen py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Content */}
            <div className="text-left space-y-8 animate-fade-in-up">
              <div className="space-y-4">
                <div className="flex items-center space-x-2 text-sm font-medium text-primary animate-fade-in">
                  <Sparkles size={16} />
                  <span>HELLO THERE, NICE TO MEET YOU ❤️, I AM</span>
                </div>
                
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold font-poppins text-glow animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                  Arpita
                </h1>
                
                <div className="text-xl sm:text-2xl text-muted-foreground font-medium animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                  Aspiring Data Scientist & Angular Developer
                </div>
                
                <p className="text-lg text-muted-foreground leading-relaxed max-w-xl animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                  Passionate about transforming data into impactful solutions through ML, analytics, and clean frontend design.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-4 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
                <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground group shadow-glow">
                  <Link to="/projects">
                    View Projects
                    <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                
                <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  <Link to="/contact">
                    <Mail size={20} className="mr-2" />
                    Contact Me
                  </Link>
                </Button>
              </div>
            </div>

            {/* Right Content - Profile Image Area */}
            <div className="flex justify-center lg:justify-end animate-scale-in" style={{ animationDelay: '1s' }}>
              <div className="relative">
                {/* Decorative elements */}
                <div className="absolute -top-8 -right-8 text-4xl animate-float">
                  <Star className="text-primary" size={32} />
                </div>
                <div className="absolute -bottom-8 -left-8 text-4xl animate-float" style={{ animationDelay: '1.5s' }}>
                  <Star className="text-accent" size={24} />
                </div>
                
                {/* Profile image placeholder with circular frame */}
                <div className="relative">
                  <div className="w-80 h-80 sm:w-96 sm:h-96 rounded-full bg-gradient-to-br from-primary/20 via-transparent to-accent/20 p-1 shadow-glow">
                    <div className="w-full h-full rounded-full bg-card border-2 border-primary/30 flex items-center justify-center gradient-card">
                      <div className="text-center p-8">
                        <div className="w-32 h-32 bg-primary/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                          <span className="text-4xl">👩‍💻</span>
                        </div>
                        <p className="text-sm text-muted-foreground">Profile Photo</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Services Section */}
          <div className="mt-24 animate-fade-in-up" style={{ animationDelay: '1.2s' }}>
            <div className="grid md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="gradient-card border-border transition-smooth hover:shadow-glow group">
                  <CardContent className="p-6 text-center">
                    <div className="text-4xl mb-4">{service.icon}</div>
                    <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-smooth">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
