import { Link } from "react-router-dom";
import { ArrowRight, Download, Mail, Sparkles, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    // icon: "💜",
    title: "Data Science",
    description: "Transforming raw data into meaningful insights through ML, statistics, and visualization",
  },
  {
    // icon: "💙", 
    title: "Machine Learning",
    description: "Building predictive models and intelligent systems using cutting-edge algorithms",
  },
  {
    // icon: "🧡",
    title: "Frontend Development", 
    description: "Creating beautiful, responsive user interfaces with modern web technologies",
  },
];

export function HeroSection() {
  return (
    <section id="home" className="min-h-screen relative overflow-hidden flex items-center">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary-glow/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="relative z-10 w-full py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Content */}
            <div className="text-left space-y-8 animate-fade-in-up">
              <div className="space-y-4">
                <div className="flex items-center space-x-2 text-sm font-medium text-primary animate-fade-in">
                  <Sparkles size={16} />
                  <span>HELLO THERE! I AM</span>
                </div>
                
                <h1
                  className="text-3xl sm:text-5xl lg:text-7xl font-bold font-poppins text-glow animate-fade-in-up"
                  style={{ animationDelay: '0.2s' }}
                >
                  Arpita Patnaik
                </h1>
                
                <div className="text-base sm:text-xl text-muted-foreground font-medium animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                  Aspiring Data Scientist & Angular Developer
                </div>
                <p className="text-sm sm:text-lg text-muted-foreground leading-relaxed max-w-xl animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                  Passionate about transforming data into impactful solutions through ML, analytics, and clean frontend design.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-4 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
                <Button 
                  onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground group shadow-glow"
                >
                  View Projects
                  <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>

                <Button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                variant="outline" 
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-2 flex items-center gap-2"
                >
                <Mail size={20} className="mr-2" />
                Contact Me
                </Button>

                <a
                href="/portfolio/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
                >
                <Button
                  variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-2 flex items-center gap-2"
                >
                  <Download size={18} className="mr-1" />
                  Resume
                </Button>
              </a>

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
                  <div className="w-48 h-48 sm:w-72 sm:h-72 md:w-96 md:h-96 rounded-full bg-gradient-to-br from-primary/20 via-transparent to-accent/20 p-1 shadow-glow flex items-center justify-center">
                    <img
                      src="/portfolio/arpita-pf.jpg"
                      alt="Arpita Patnaik - Profile Picture"
                      className="rounded-full w-40 h-40 sm:w-64 sm:h-64 md:w-80 md:h-80 max-w-full object-cover border-4 border-primary/30 shadow-lg transition-transform hover:scale-105"
                    />
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
                    {/* <div className="text-4xl mb-4">{service.icon}</div> */}
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
    </section>
  );
}