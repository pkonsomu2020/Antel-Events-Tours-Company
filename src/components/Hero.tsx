import { useEffect, useRef, useState } from "react";
import heroImage from "@/assets/hero-image.jpg";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const slideImages = [
  "/SLIDES/SLIDER_1.png",
  "/SLIDES/SLIDE 2.png",
  "/SLIDES/SLIDE 3.png",
  "/SLIDES/SLIDE 4.png",
  "/SLIDES/SLIDE 5.png",
  "/SLIDES/SLIDE 6.png",
];

const SLIDE_INTERVAL = 4000; // 4 seconds

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % slideImages.length);
    }, SLIDE_INTERVAL);
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [current]);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Slider Images with Zoom-in Animation */}
      <div className="absolute inset-0 z-0">
        {slideImages.map((img, idx) => (
          <img
            key={img}
            src={img}
            alt={`Slide ${idx + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out
              ${current === idx ? 'opacity-100 scale-105 animate-zoom-in' : 'opacity-0 scale-100'}
            `}
            style={{
              transitionProperty: 'opacity, transform',
            }}
          />
        ))}
        {/* Overlay for dark effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#00152bB3] to-[#00152bB3]" />
      </div>
      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-center">
        <div className="max-w-3xl mx-auto animate-fade-up">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Exceptional Events & Unforgettable Tours
          </h1>
          <p className="text-xl text-white/90 mb-8">
            We create extraordinary experiences tailored to your needs, from corporate events to luxury tours
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/destination">
              <Button variant="hero" size="xl" className="bg-orange-500 text-white hover:bg-orange-600">
                Destination
              </Button>
            </Link>
            <Link to="/event-package">
              <Button variant="outline" size="xl" className="border-white text-orange-500 hover:bg-white hover:text-secondary">
                Event Package
              </Button>
            </Link>
          </div>
        </div>
      </div>
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg 
          className="w-10 h-10 text-white opacity-70" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M19 14l-7 7m0 0l-7-7m7 7V3" 
          />
        </svg>
      </div>
    </div>
  );
};

export default Hero;
// Tailwind custom animation for zoom-in
// Add to your global CSS (e.g., App.css or index.css):
// @layer utilities {
//   @keyframes zoom-in {
//     0% { transform: scale(1); }
//     100% { transform: scale(1.08); }
//   }
//   .animate-zoom-in {
//     animation: zoom-in 4s linear forwards;
//   }
// }