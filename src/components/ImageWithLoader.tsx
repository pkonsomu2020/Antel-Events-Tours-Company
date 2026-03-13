import React, { useState, useEffect, useRef } from "react";
import { Skeleton } from "@/components/ui/skeleton";

interface ImageWithLoaderProps {
  src: string;
  alt: string;
  className?: string;
  skeletonClassName?: string;
  onClick?: () => void;
}

const ImageWithLoader: React.FC<ImageWithLoaderProps> = ({
  src,
  alt,
  className = "",
  skeletonClassName = "",
  onClick
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.disconnect();
          }
        });
      },
      { rootMargin: "50px" }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="relative">
      {!isLoaded && (
        <Skeleton className={`absolute inset-0 ${skeletonClassName}`} />
      )}
      <img
        ref={imgRef}
        src={isInView ? src : ""}
        alt={alt}
        className={`${className} ${!isLoaded ? "opacity-0" : "opacity-100"} transition-opacity duration-300`}
        onLoad={() => setIsLoaded(true)}
        onClick={onClick}
        loading="lazy"
      />
    </div>
  );
};

export default ImageWithLoader;
