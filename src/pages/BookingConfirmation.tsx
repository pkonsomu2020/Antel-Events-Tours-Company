import React, { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CheckCircle, Calendar, Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const BookingConfirmation: React.FC = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const bookingId = searchParams.get("bookingId");

  useEffect(() => {
    // Clear cart after successful booking
    localStorage.removeItem("cart");
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="mb-6 flex justify-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
                <CheckCircle className="w-12 h-12 text-green-600" />
              </div>
            </div>
            <h1 className="text-4xl font-bold mb-4">Booking Confirmed!</h1>
            <p className="text-xl text-muted-foreground">
              Thank you for choosing ANTEL Events & Tours
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-2xl shadow-lg p-8 mb-8"
          >
            {bookingId && (
              <div className="mb-6 pb-6 border-b">
                <p className="text-sm text-muted-foreground mb-1">Booking Reference</p>
                <p className="text-2xl font-bold text-orange-500">#{bookingId}</p>
              </div>
            )}

            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-semibold mb-4">What Happens Next?</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="w-4 h-4 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Confirmation Email</h3>
                      <p className="text-sm text-muted-foreground">
                        You'll receive a confirmation email with your booking details within the next few minutes.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="w-4 h-4 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Personal Contact</h3>
                      <p className="text-sm text-muted-foreground">
                        Our team will contact you within 24 hours to confirm your booking and discuss any special requirements.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Calendar className="w-4 h-4 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Itinerary Details</h3>
                      <p className="text-sm text-muted-foreground">
                        We'll send you a detailed itinerary and all necessary information before your travel date.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-orange-50 p-6 rounded-lg">
                <h3 className="font-semibold mb-2 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-orange-600" />
                  Need Assistance?
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Our customer service team is here to help with any questions or concerns.
                </p>
                <div className="space-y-2 text-sm">
                  <p>
                    <span className="font-medium">Phone:</span>{" "}
                    <a href="tel:+254725814767" className="text-orange-600 hover:underline">
                      +254 725 814767
                    </a>
                  </p>
                  <p>
                    <span className="font-medium">Email:</span>{" "}
                    <a href="mailto:info@anteleventsandtours.com" className="text-orange-600 hover:underline">
                      info@anteleventsandtours.com
                    </a>
                  </p>
                  <p>
                    <span className="font-medium">WhatsApp:</span>{" "}
                    <a
                      href="https://wa.me/254725814767"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-orange-600 hover:underline"
                    >
                      Chat with us
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button onClick={() => navigate("/")} variant="hero" size="lg">
              Back to Home
            </Button>
            <Button onClick={() => navigate("/destination")} variant="outline" size="lg">
              Explore More Destinations
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BookingConfirmation;
