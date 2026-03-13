import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Calendar, 
  Car, 
  Compass, 
  GraduationCap, 
  Music, 
  Utensils,
  CheckCircle,
  MapPin,
  Users,
  Headphones
} from "lucide-react";
import toursImage from "@/assets/tours-image.jpg";
import eventsImage from "@/assets/events-image.jpg";
import transportImage from "@/assets/transport-image.jpg";

const Services = () => {
  const services = [
    {
      id: "corporate-events",
      title: "Corporate Events",
      description: "Professional planning and execution of corporate events, conferences, and team-building activities tailored to your company's needs.",
      longDescription: "Our corporate event services cover everything from small team meetings to large conferences and company retreats. We work closely with you to understand your objectives, brand identity, and audience to create memorable and impactful events that align with your business goals.",
      icon: <GraduationCap className="h-12 w-12 text-primary" />,
      image: eventsImage,
      features: [
        "Venue selection and management",
        "Audio-visual setup and technical support",
        "Catering and refreshment coordination",
        "Speaker and entertainment booking",
        "Registration and attendee management",
        "Post-event analysis and reporting"
      ]
    },
    {
      id: "luxury-tours",
      title: "Luxury Tours",
      description: "Unforgettable guided tours to spectacular destinations with premium accommodations and experiences for individuals and groups.",
      longDescription: "Experience the world in style with our luxury tour packages. We combine stunning destinations with exclusive accommodations, unique cultural experiences, and personalized service to create journeys that exceed expectations. Whether you're seeking adventure, relaxation, or cultural immersion, our expert guides ensure a seamless and enriching experience.",
      icon: <Compass className="h-12 w-12 text-primary" />,
      image: toursImage,
      features: [
        "Customized itineraries for individuals and groups",
        "Premium accommodations and transportation",
        "Expert local guides and interpreters",
        "Exclusive access to attractions and experiences",
        "Personalized concierge service",
        "All-inclusive packaging options"
      ]
    },
    {
      id: "transportation",
      title: "Transportation Services",
      description: "Reliable and comfortable transportation options for events, tours, airport transfers, and special occasions.",
      longDescription: "Our fleet of luxury vehicles provides reliable, comfortable, and stylish transportation for all your needs. From airport transfers to event shuttles and tour transportation, we ensure punctuality, safety, and exceptional service. Our professional drivers are trained to provide the highest level of customer care.",
      icon: <Car className="h-12 w-12 text-primary" />,
      image: transportImage,
      features: [
        "Luxury sedans, SUVs, and coach buses",
        "Professional, uniformed drivers",
        "Airport transfers and meet-and-greet service",
        "Event and conference shuttle service",
        "City tours and sightseeing transportation",
        "24/7 availability and flexible scheduling"
      ]
    },
    {
      id: "wedding-planning",
      title: "Wedding Planning",
      description: "Comprehensive wedding planning services from venue selection to day-of coordination for your perfect day.",
      longDescription: "Your dream wedding deserves perfect execution. Our wedding planning services cover every aspect of your special day, from venue selection and decor to catering and entertainment. We work closely with you to bring your vision to life while managing all the details, allowing you to enjoy the celebration without stress.",
      icon: <Calendar className="h-12 w-12 text-primary" />,
      image: eventsImage,
      features: [
        "Venue selection and management",
        "Budget planning and vendor coordination",
        "Design and decor conceptualization",
        "Guest accommodation and transportation",
        "Rehearsal and ceremony coordination",
        "Day-of management and timeline execution"
      ]
    },
    {
      id: "catering",
      title: "Catering Services",
      description: "Exceptional cuisine options for all types of events, featuring local and international flavors to delight your guests.",
      longDescription: "Our catering services offer a diverse range of culinary options to suit any event or preference. From elegant plated dinners to interactive food stations and casual buffets, our expert chefs create memorable dining experiences using fresh, high-quality ingredients. We can accommodate special dietary requirements and customize menus to reflect your tastes and event theme.",
      icon: <Utensils className="h-12 w-12 text-primary" />,
      image: eventsImage,
      features: [
        "Customized menu development",
        "Professional service staff",
        "Complete tableware and equipment setup",
        "Specialty beverages and bar service",
        "Dietary accommodation and allergen management",
        "Tastings and menu consultations"
      ]
    },
    {
      id: "entertainment",
      title: "Entertainment Booking",
      description: "Access to top-tier entertainment options including musicians, DJs, performers, and interactive experiences.",
      longDescription: "Elevate your event with exceptional entertainment that engages and delights your guests. We have connections with a diverse range of talented performers, from classical musicians and jazz bands to DJs, dance groups, and specialty acts. Our entertainment booking service handles all aspects of performer selection, contracting, technical requirements, and scheduling.",
      icon: <Music className="h-12 w-12 text-primary" />,
      image: eventsImage,
      features: [
        "Access to a diverse roster of professional talent",
        "Technical requirements coordination",
        "Performance scheduling and logistics",
        "Contract negotiation and management",
        "Custom performances and themed entertainment",
        "Interactive entertainment options"
      ]
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Discover our comprehensive range of premium event planning and tour services, 
            designed to create extraordinary experiences that exceed expectations.
          </p>
          <div className="flex justify-center space-x-8 mt-12">
            <div className="flex flex-col items-center">
              <MapPin className="h-12 w-12 text-primary mb-4" />
              <p className="font-medium">Global Destinations</p>
            </div>
            <div className="flex flex-col items-center">
              <Users className="h-12 w-12 text-primary mb-4" />
              <p className="font-medium">Expert Team</p>
            </div>
            <div className="flex flex-col items-center">
              <Headphones className="h-12 w-12 text-primary mb-4" />
              <p className="font-medium">24/7 Support</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Services List */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {services.map((service, index) => (
            <div 
              key={index} 
              id={service.id}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-16 ${
                index !== services.length - 1 ? 'border-b border-border' : ''
              }`}
            >
              <div className={`${index % 2 === 0 ? 'order-1' : 'order-1 lg:order-2'}`}>
                <div className="relative">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="rounded-lg shadow-xl w-full h-auto object-cover"
                  />
                  <div className="absolute -bottom-4 -right-4 bg-primary w-24 h-24 rounded-lg flex items-center justify-center">
                    {service.icon}
                  </div>
                </div>
              </div>
              
              <div className={`${index % 2 === 0 ? 'order-2' : 'order-2 lg:order-1'}`}>
                <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
                <p className="text-muted-foreground mb-6">{service.longDescription}</p>
                
                <div className="space-y-3 mb-8">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-1" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Link to={`/booking?service=${service.id}`}>
                  <Button variant="hero">Book This Service</Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Can't Find What You're Looking For?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            We offer customized solutions tailored to your specific needs. Contact us to discuss your unique requirements.
          </p>
          <Link to="/contact">
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white text-white hover:bg-white hover:text-primary"
            >
              Contact Us
            </Button>
          </Link>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Services;