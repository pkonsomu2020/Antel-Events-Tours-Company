import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ServicesSection from "@/components/ServicesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import StatsSection from "@/components/StatsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { motion } from "framer-motion";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Home"
        description="ANTEL Events & Tours - Your premier travel and event planning partner in Kenya. Discover amazing destinations, luxury hotels, and unforgettable event packages across Africa and beyond."
        keywords="travel agency Kenya, event planning, tours, hotels, destinations, vacation packages, corporate events, weddings, honeymoon packages"
      />
      <Navbar />
      <motion.div initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
        <Hero />
      </motion.div>
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.2, duration: 0.7 }}>
        <ServicesSection />
      </motion.div>
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.7 }}>
        <StatsSection />
      </motion.div>
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.4, duration: 0.7 }}>
        <TestimonialsSection />
      </motion.div>
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.7 }}>
        <CTASection />
      </motion.div>
      <Footer />
    </div>
  );
};

export default Index;