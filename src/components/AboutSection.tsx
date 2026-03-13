import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import teamImage from "@/assets/team-image.jpg";
import { CheckCircle } from "lucide-react";

const AboutSection = () => {
  const features = [
    "10+ years of industry experience",
    "Dedicated team of event professionals",
    "Customized solutions for every client",
    "Premium service at competitive rates",
    "Attention to detail and flawless execution",
    "24/7 customer support throughout your event"
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 animate-fade-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About Antel Events & Tours</h2>
            <p className="text-muted-foreground mb-6">
              At Antel, we're passionate about creating extraordinary experiences that exceed expectations. 
              With over a decade of experience in event planning and tour management, we've built a 
              reputation for excellence, creativity, and meticulous attention to detail.
            </p>
            <p className="text-muted-foreground mb-8">
              Our team of dedicated professionals brings expertise, enthusiasm, and a personalized approach 
              to every project. Whether you're planning a corporate event, destination wedding, or luxury tour, 
              we're committed to turning your vision into reality.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
            
            <Link to="/about">
              <Button variant="hero">Learn More About Us</Button>
            </Link>
          </div>
          
          <div className="order-1 lg:order-2 animate-fade-up" style={{ animationDelay: '200ms' }}>
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-24 h-24 border-2 border-primary z-0"></div>
              <img 
                src={teamImage} 
                alt="Antel Events and Tours Team" 
                className="rounded-lg shadow-xl w-full h-auto object-cover relative z-10"
              />
              <div className="absolute -bottom-6 -right-6 w-24 h-24 border-2 border-primary z-0"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;