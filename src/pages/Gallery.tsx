import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ImageLightbox from "@/components/ImageLightbox";
import ImageWithLoader from "@/components/ImageWithLoader";
import { motion } from "framer-motion";
import { useState } from "react";

const galleryImages = [
  // ZANZIBAR HONEYMOON PACKAGE
  "/ANTEL EVENTS/ZANZIBAR HONEYMOON PACKAGE/ZANZIBAR 1.jpg",
  "/ANTEL EVENTS/ZANZIBAR HONEYMOON PACKAGE/ZANZIBAR 2.jpg",
  "/ANTEL EVENTS/ZANZIBAR HONEYMOON PACKAGE/ZANZIBAR 3.jpg",
  // GARDEN WEDDING PACKAGE
  "/ANTEL EVENTS/GARDEN WEDDING PACKAGE/GARDEN WEDDING 1.jpg",
  "/ANTEL EVENTS/GARDEN WEDDING PACKAGE/GARDEN WEDDING 2.jpg",
  // SLIDES
  "/SLIDES/SLIDER_1.png",
  "/SLIDES/SLIDE 2.png",
  // Reef hotel Nyali
  "/ANTEL HOTELS/KENYAN DESTINATIONS/Reef hotel Nyali/REEF HOTEL 1.jpg",
  "/ANTEL HOTELS/KENYAN DESTINATIONS/Reef hotel Nyali/REEF HOTEL 2.jpg",
  // Amari Phuket
  "/ANTEL HOTELS/INTERNATIONAL DESTINATIONS/THAILAND/Amari Phuket/AMARI 1.jpg",
  "/ANTEL HOTELS/INTERNATIONAL DESTINATIONS/THAILAND/Amari Phuket/AMARI 2.jpg",
];

const Gallery = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
    setLightboxOpen(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <motion.section initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="pt-32 pb-12 bg-secondary text-secondary-foreground relative overflow-hidden">
        <img src="/SLIDES/Banner img.png" alt="Gallery Banner" className="absolute inset-0 w-full h-full object-cover z-0" style={{ opacity: 0.5 }} />
        <div className="absolute inset-0 bg-secondary z-10" style={{ opacity: 0.5 }} />
        <div className="container mx-auto px-4 text-center relative z-20">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Gallery</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Explore moments from our events, destinations, and unforgettable experiences.
          </p>
        </div>
      </motion.section>
      <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.7 }} className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {galleryImages.map((img, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: idx * 0.05 }} className="overflow-hidden rounded-xl shadow-lg group cursor-pointer">
                <ImageWithLoader
                  src={img}
                  alt={`Gallery ${idx + 1}`}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105 group-hover:brightness-90"
                  skeletonClassName="w-full h-64"
                  onClick={() => openLightbox(idx)}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
      
      {lightboxOpen && (
        <ImageLightbox
          images={galleryImages}
          currentIndex={selectedImage}
          onClose={() => setLightboxOpen(false)}
          onNext={() => setSelectedImage((prev) => (prev + 1) % galleryImages.length)}
          onPrevious={() => setSelectedImage((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)}
          alt="Gallery"
        />
      )}
      
      <Footer />
    </div>
  );
};

export default Gallery;