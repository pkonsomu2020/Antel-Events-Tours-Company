import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import teamImage from "@/assets/hero-image.jpg";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Award, Clock, Heart, Landmark, Target, Truck, Gift, Users, Sparkles, MapPin, PartyPopper } from "lucide-react";
import { motion } from "framer-motion";

const About = () => {
  const values = [
    {
      icon: <Heart className="h-6 w-6 text-primary" />,
      title: "Passion",
      description: "We're passionate about creating extraordinary experiences that leave lasting impressions."
    },
    {
      icon: <Award className="h-6 w-6 text-primary" />,
      title: "Excellence",
      description: "We strive for excellence in every aspect of our service, from planning to execution."
    },
    {
      icon: <Target className="h-6 w-6 text-primary" />,
      title: "Customization",
      description: "We believe each client deserves a tailored approach that meets their unique needs."
    },
    {
      icon: <Clock className="h-6 w-6 text-primary" />,
      title: "Reliability",
      description: "We deliver on our promises, ensuring timely and consistent service every time."
    },
    {
      icon: <Landmark className="h-6 w-6 text-primary" />,
      title: "Integrity",
      description: "We operate with transparency and honesty in all our business relationships."
    },
    {
      icon: <Truck className="h-6 w-6 text-primary" />,
      title: "Innovation",
      description: "We continuously seek new ideas and approaches to enhance our service offerings."
    }
  ];

  const team = [
    {
      name: "Michael Johnson",
      role: "Founder & CEO",
      bio: "With over 20 years in the events and tourism industry, Michael brings extensive experience and vision to Antel Events and Tours."
    },
    {
      name: "Sarah Williams",
      role: "Events Director",
      bio: "Sarah leads our events team with creativity and precision, ensuring flawless execution of every event we manage."
    },
    {
      name: "David Chen",
      role: "Tours Manager",
      bio: "David's passion for travel and deep knowledge of global destinations makes him the perfect leader for our tours division."
    },
    {
      name: "Emily Rodriguez",
      role: "Client Relations Manager",
      bio: "Emily ensures every client receives personalized attention and support throughout their journey with us."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-secondary text-secondary-foreground relative overflow-hidden">
        <img src="/SLIDES/Banner img.png" alt="About Banner" className="absolute inset-0 w-full h-full object-cover z-0" style={{ opacity: 0.5 }} />
        <div className="absolute inset-0 bg-secondary z-10" style={{ opacity: 0.5 }} />
        <div className="container mx-auto px-4 text-center relative z-20">
          <motion.h1 initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="text-4xl md:text-5xl font-bold mb-6">About Us</motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.7 }} className="text-xl max-w-3xl mx-auto">
            Get To Know Our Agency And What We Are Offering
          </motion.p>
        </div>
      </section>
      
      {/* Agency Story & Experience */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
              <div className="flex items-center gap-4 mb-4">
                <Gift className="w-10 h-10 text-orange-500 animate-bounce" />
                <span className="text-3xl font-bold text-orange-500">5</span>
                <span className="text-lg font-semibold">Year Experience</span>
              </div>
              <h2 className="text-3xl font-bold mb-6">ANTEL Events & Tours</h2>
              <p className="text-muted-foreground mb-4">
                ANTEL Events & Tours is a travel and event agency, founded by Elsie Neema, that strives to make your dream a reality. We create affordable packages both domestic and international for all kinds of groups: families, group of friends, colleagues, solo travelers.
              </p>
              <p className="text-muted-foreground mb-4">
                Our passion is to see smiles, we believe travelling is therapeutic. We give excellent service, extraordinary packages and elegant living. We offer travel events packages: couple retreats, girls trip, family trips, corporate end of year events and team buildings.
              </p>
              <motion.ul initial="hidden" whileInView="visible" variants={{ visible: { transition: { staggerChildren: 0.1 } } }} className="mb-4 list-disc pl-6 text-muted-foreground">
                <motion.li variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}>Sightseeing Tours</motion.li>
                <motion.li variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}>Travel itineraries</motion.li>
                <motion.li variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}>Free rewards (calendars, notebooks, pens, jumpers, etc)</motion.li>
                <motion.li variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}>Elegant living</motion.li>
                <motion.li variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}>Extraordinary group packages</motion.li>
                <motion.li variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}>Events packages (birthdays, anniversaries)</motion.li>
                <motion.li variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}>Passenger escorts upon arrival</motion.li>
                <motion.li variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}>Luggage assistance</motion.li>
                <motion.li variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}>Flight booking</motion.li>
                <motion.li variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}>Return private transfers to the hotel</motion.li>
                <motion.li variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}>Hotel reservations</motion.li>
                <motion.li variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}>Excellent service</motion.li>
                <motion.li variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}>Reliable travel assistant</motion.li>
                <motion.li variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}>Breathtaking accommodation amenities (gyms, spa, etc)</motion.li>
                <motion.li variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}>Discounts for long stay (more than a week)</motion.li>
                <motion.li variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}>Passenger assistance for the disabled (with prior notice)</motion.li>
                <motion.li variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}>Advice to clients and reminders to adhere to airline requirements and rules</motion.li>
                <motion.li variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}>Follow-ups on how your vacation is going</motion.li>
                <motion.li variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}>Meeting traveler's needs</motion.li>
                <motion.li variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}>Quick solutions to problems if they arise</motion.li>
              </motion.ul>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }} className="relative">
              <div className="absolute -top-6 -left-6 w-24 h-24 border-2 border-orange-500 z-0 animate-pulse"></div>
              <img 
                src={teamImage} 
                alt="Antel Events and Tours Team" 
                className="rounded-lg shadow-xl w-full h-auto object-cover relative z-10 animate-fade-in"
              />
              <div className="absolute -bottom-6 -right-6 w-24 h-24 border-2 border-orange-500 z-0 animate-pulse"></div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Our Values */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="text-3xl font-bold mb-4">Our Core Values</motion.h2>
            <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.2, duration: 0.7 }} className="text-muted-foreground max-w-2xl mx-auto">
              These principles guide everything we do, from how we interact with clients to how we design and deliver our services.
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: <Heart className="h-6 w-6 text-pink-500 animate-bounce" />, title: "Passion for Service", description: "We love to see smiles and believe travelling is therapeutic. Our passion is to create joy and memories." },
              { icon: <Award className="h-6 w-6 text-yellow-500 animate-spin-slow" />, title: "Excellence & Elegance", description: "We give excellent service, extraordinary packages, and elegant living for all our clients." },
              { icon: <Sparkles className="h-6 w-6 text-orange-400 animate-pulse" />, title: "Extraordinary Experiences", description: "We offer unique group and event packages, making every celebration unforgettable." },
              { icon: <Users className="h-6 w-6 text-blue-500 animate-bounce" />, title: "Inclusive for All", description: "We serve families, friends, colleagues, solo travelers, and offer assistance for the disabled." },
              { icon: <MapPin className="h-6 w-6 text-green-500 animate-pulse" />, title: "Global & Local Reach", description: "We create affordable packages both domestic and international, for all kinds of groups." },
              { icon: <PartyPopper className="h-6 w-6 text-purple-500 animate-bounce" />, title: "Celebration & Fun", description: "From birthdays to anniversaries, we make every event a celebration to remember." },
            ].map((value, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }} className="bg-background p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Our Team */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Meet Our Leadership Team</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The passionate professionals behind Antel Events and Tours, dedicated to creating exceptional experiences.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center">
                <div className="w-32 h-32 bg-primary/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-primary font-medium mb-3">{member.role}</p>
                <p className="text-muted-foreground">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="text-3xl font-bold mb-4">Ready to Work with Us?</motion.h2>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.2, duration: 0.7 }} className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your event or tour needs and discover how we can bring your vision to life.
          </motion.p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/destination">
              <Button 
                variant="outline" 
                size="lg" 
                className="border-white text-orange-500 hover:bg-white hover:text-primary"
              >
                Destination
              </Button>
            </Link>
            <Link to="/event-package">
              <Button 
                variant="hero" 
                size="lg" 
                className="bg-secondary text-orange-500 hover:bg-secondary/90"
              >
                Event Package
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default About;