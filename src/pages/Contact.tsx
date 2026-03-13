import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  SendHorizontal,
  Facebook,
  Instagram,
  Twitter,
  Linkedin
} from "lucide-react";
import { useState, useRef } from "react";
import { useToast } from "@/components/ui/use-toast";
import { apiRequest } from "@/lib/api";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const formRef = useRef(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    };
    try {
      const res = await apiRequest("/api/contact", {
        method: "POST",
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const errData = await res.json();
        throw new Error(errData.error || "Failed to send message.");
      }
      toast({
        title: "Message Sent!",
        description: "We'll get back to you as soon as possible.",
        duration: 5000,
      });
      if (formRef.current) formRef.current.reset();
    } catch (err) {
      setError(err.message || "Failed to send message.");
      toast({
        title: "Error",
        description: err.message || "Failed to send message.",
        duration: 5000,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />, title: "Email", details: ["info@anteleventsandtours.com"], action: "mailto:info@anteleventsandtours.com"
    },
    {
      icon: <Phone className="h-6 w-6" />, title: "Phone", details: ["+254 725 814767"], action: "tel:+254725814767"
    },
    {
      icon: <MapPin className="h-6 w-6" />, title: "Address", details: ["00200, Nairobi, Kenya"], action: "https://maps.google.com/?q=00200+Nairobi+Kenya"
    },
    {
      icon: <Clock className="h-6 w-6" />, title: "Working Hours", details: ["Monday - Friday: 9AM - 5PM"]
    }
  ];

  const socialLinks = [
    { icon: <Facebook className="h-5 w-5" />, url: "https://www.facebook.com/people/ANTEL-Events-Tours/100063708379128/", name: "Facebook" },
    { icon: <Instagram className="h-5 w-5" />, url: "https://www.instagram.com/antel_events_tours/?igsh=MTY0cTQ1dGEwM3B6dg%3D%3D#", name: "Instagram" },
    { icon: <svg className="h-5 w-5" viewBox="0 0 48 48"><g><circle cx="24" cy="24" r="24" fill="#010101"/><path fill="#fff" d="M34.6 19.7c-.2-.7-.7-1.2-1.4-1.4-1.2-.3-6.2-.3-6.2-.3s-5 0-6.2.3c-.7.2-1.2.7-1.4 1.4-.3 1.2-.3 3.7-.3 3.7s0 2.5.3 3.7c.2.7.7 1.2 1.4 1.4 1.2.3 6.2.3 6.2.3s5 0 6.2-.3c.7-.2 1.2-.7 1.4-1.4.3-1.2.3-3.7.3-3.7s0-2.5-.3-3.7zm-11.2 5.2v-3.8l3.3 1.9-3.3 1.9z"/></g></svg>, url: "https://www.tiktok.com/@antel_events_tours?is_from_webapp=1&sender_device=pc", name: "TikTok" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-secondary text-secondary-foreground relative overflow-hidden">
        <img src="/SLIDES/Banner img.png" alt="Contact Banner" className="absolute inset-0 w-full h-full object-cover z-0" style={{ opacity: 0.5 }} />
        <div className="absolute inset-0 bg-secondary z-10" style={{ opacity: 0.5 }} />
        <div className="container mx-auto px-4 text-center relative z-20">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Have a question or ready to start planning your next event? We're here to help.
            Reach out to us through any of our contact channels or fill out the form below.
          </p>
        </div>
      </section>
      
      {/* Contact Information */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <Card key={index} className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <div className="text-primary">{info.icon}</div>
                  </div>
                  <h3 className="text-lg font-semibold mb-3">{info.title}</h3>
                  <div className="space-y-1">
                    {info.details.map((detail, i) => (
                      <p key={i} className="text-muted-foreground">{detail}</p>
                    ))}
                  </div>
                  {info.action && (
                    <a 
                      href={info.action}
                      target={info.action.startsWith('http') ? '_blank' : undefined}
                      rel={info.action.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="text-primary hover:underline mt-3"
                    >
                      {info.title === "Address" ? "View on Map" : `Contact via ${info.title}`}
                    </a>
                  )}
                </div>
              </Card>
            ))}
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6" ref={formRef}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" name="name" required placeholder="Your name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" name="email" type="email" required placeholder="your@email.com" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" name="phone" type="tel" placeholder="Your phone number" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" name="subject" required placeholder="How can we help you?" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" name="message" required placeholder="Tell us more about your needs..." className="min-h-[150px]" />
                </div>
                {error && <div className="text-red-600 font-semibold">{error}</div>}
                <Button 
                  type="submit" 
                  variant="hero"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <div className="animate-spin rounded-full h-4 w-4 border-2 border-current border-t-transparent" />
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <SendHorizontal className="h-4 w-4" />
                      Send Message
                    </span>
                  )}
                </Button>
              </form>
            </div>
            
            {/* Social & Additional Info */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Connect With Us</h2>
              <p className="text-muted-foreground mb-8">
                Follow us on social media to stay updated with our latest events, tours, and special offers.
                Join our growing community of satisfied clients and travel enthusiasts.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-12">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-4 rounded-lg border border-border hover:border-primary transition-colors"
                  >
                    <div className="text-primary">{social.icon}</div>
                    <span className="font-medium">{social.name}</span>
                  </a>
                ))}
              </div>
              
              <Card className="p-6 bg-muted">
                <h3 className="font-semibold mb-2">Looking for Immediate Assistance?</h3>
                <p className="text-muted-foreground mb-4">
                  Our customer service team is available during business hours for urgent inquiries.
                  Call us directly or use our 24/7 emergency contact for urgent matters.
                </p>
                <Button variant="outline" className="w-full" asChild>
                  <a href="tel:+12345678901">
                    <Phone className="h-4 w-4 mr-2" />
                    Call Us Now
                  </a>
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Contact;