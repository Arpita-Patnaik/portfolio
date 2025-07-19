import { useState } from "react";
import { Mail, Phone, Linkedin, Github, Send, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "arpitapatnaik1367@gmail.com",
    link: "mailto:arpitapatnaik1367@gmail.com",
    color: "text-primary",
    bgColor: "bg-primary/20",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 9337013957",
    link: "tel:+919337013957",
    color: "text-accent",
    bgColor: "bg-accent/20",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Connect with me",
    link: "#",
    color: "text-primary-glow",
    bgColor: "bg-primary-glow/20",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "View my code",
    link: "#",
    color: "text-accent-soft",
    bgColor: "bg-accent-soft/20",
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to a backend service
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon!",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl sm:text-5xl font-bold font-poppins mb-4 text-glow">
            Get In Touch
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'd love to hear from you. Let's discuss opportunities, projects, or just connect!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div>
              <h2 className="text-2xl font-semibold mb-6 text-primary">Contact Information</h2>
              <div className="space-y-4">
                {contactInfo.map((contact, index) => (
                  <Card key={index} className="gradient-card border-border transition-smooth hover:shadow-glow group">
                    <CardContent className="p-6">
                      <a 
                        href={contact.link}
                        className="flex items-center space-x-4 group-hover:text-primary transition-smooth"
                      >
                        <div className={`p-3 rounded-lg ${contact.bgColor} ${contact.color}`}>
                          <contact.icon size={24} />
                        </div>
                        <div>
                          <h3 className="font-medium text-foreground">{contact.label}</h3>
                          <p className="text-muted-foreground">{contact.value}</p>
                        </div>
                      </a>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Additional Info */}
            <Card className="gradient-card border-border shadow-soft">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-lg bg-secondary text-secondary-foreground">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground mb-2">Location</h3>
                    <p className="text-muted-foreground">
                      Based in India, available for remote opportunities worldwide
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <Card className="gradient-card border-border shadow-soft">
              <CardContent className="p-8">
                <h2 className="text-2xl font-semibold mb-6 text-primary">Send Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="bg-background border-border focus:border-primary"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="bg-background border-border focus:border-primary"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="bg-background border-border focus:border-primary"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="bg-background border-border focus:border-primary resize-none"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground group"
                  >
                    <Send size={20} className="mr-2 group-hover:translate-x-1 transition-transform" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <div className="gradient-card p-8 rounded-2xl shadow-soft border border-border max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold mb-4 text-primary">Ready to Collaborate?</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Whether you have a project in mind, want to discuss opportunities, or just want to connect, 
              I'm always excited to meet like-minded individuals and explore new possibilities.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                Download Resume
              </Button>
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
                Schedule a Call
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}