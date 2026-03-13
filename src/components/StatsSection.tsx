import { useEffect, useState } from "react";

const StatsSection = () => {
  const stats = [
    { value: 500, label: "Events Organized", symbol: "+" },
    { value: 200, label: "Corporate Clients", symbol: "+" },
    { value: 50, label: "Destinations", symbol: "+" },
    { value: 10, label: "Years Experience", symbol: "+" }
  ];
  
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState(stats.map(() => 0));
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    
    const element = document.getElementById("stats-section");
    if (element) observer.observe(element);
    
    return () => {
      if (element) observer.disconnect();
    };
  }, []);
  
  useEffect(() => {
    if (!isVisible) return;
    
    const intervals = stats.map((stat, index) => {
      return setInterval(() => {
        setCounts(prevCounts => {
          const newCounts = [...prevCounts];
          if (newCounts[index] < stat.value) {
            newCounts[index] = Math.min(
              newCounts[index] + Math.ceil(stat.value / 20), 
              stat.value
            );
          }
          return newCounts;
        });
      }, 50);
    });
    
    return () => {
      intervals.forEach(interval => clearInterval(interval));
    };
  }, [isVisible, stats]);
  
  return (
    <section className="py-24 bg-gradient-to-r from-secondary to-secondary/90 text-secondary-foreground" id="stats-section">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-2">
                {counts[index]}{stat.symbol}
              </div>
              <p className="text-lg font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;