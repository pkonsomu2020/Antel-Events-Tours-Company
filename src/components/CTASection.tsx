import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Create Unforgettable Experiences?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Contact us today to discuss your event or tour needs and discover how we can bring your vision to life.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/booking">
            <Button 
              variant="outline" 
              size="xl" 
              className="border-white text-orange-500 bg-white hover:bg-white hover:text-primary"
            >
              Book a Service
            </Button>
          </Link>
          <Link to="/contact">
            <Button 
              variant="hero" 
              size="xl" 
              className="bg-secondary text-secondary-foreground hover:bg-secondary/90"
            >
              Get in Touch
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTASection;