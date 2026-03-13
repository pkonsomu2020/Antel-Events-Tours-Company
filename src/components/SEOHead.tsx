import { useEffect } from "react";

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description,
  keywords = "travel, tours, events, Kenya, hotels, destinations, vacation packages",
  image = "/ANTEL-EVENTS-LOGO.jpg",
  url,
  type = "website"
}) => {
  useEffect(() => {
    // Update title
    document.title = `${title} | ANTEL Events & Tours`;

    // Update or create meta tags
    const updateMetaTag = (name: string, content: string, isProperty = false) => {
      const attribute = isProperty ? "property" : "name";
      let element = document.querySelector(`meta[${attribute}="${name}"]`);
      
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      
      element.setAttribute("content", content);
    };

    // Standard meta tags
    updateMetaTag("description", description);
    updateMetaTag("keywords", keywords);
    updateMetaTag("author", "ANTEL Events & Tours");

    // Open Graph tags
    updateMetaTag("og:title", `${title} | ANTEL Events & Tours`, true);
    updateMetaTag("og:description", description, true);
    updateMetaTag("og:type", type, true);
    updateMetaTag("og:image", image, true);
    if (url) updateMetaTag("og:url", url, true);
    updateMetaTag("og:site_name", "ANTEL Events & Tours", true);

    // Twitter Card tags
    updateMetaTag("twitter:card", "summary_large_image");
    updateMetaTag("twitter:title", `${title} | ANTEL Events & Tours`);
    updateMetaTag("twitter:description", description);
    updateMetaTag("twitter:image", image);

    // Structured data (JSON-LD)
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "TravelAgency",
      "name": "ANTEL Events & Tours",
      "description": description,
      "url": url || "https://anteleventsandtours.com",
      "logo": image,
      "telephone": "+254725814767",
      "email": "info@anteleventsandtours.com",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "KE",
        "addressLocality": "Nairobi",
        "postalCode": "00200"
      },
      "sameAs": [
        "https://www.facebook.com/people/ANTEL-Events-Tours/100063708379128/",
        "https://www.instagram.com/antel_events_tours/",
        "https://www.tiktok.com/@antel_events_tours"
      ]
    };

    let scriptTag = document.querySelector('script[type="application/ld+json"]');
    if (!scriptTag) {
      scriptTag = document.createElement("script");
      scriptTag.setAttribute("type", "application/ld+json");
      document.head.appendChild(scriptTag);
    }
    scriptTag.textContent = JSON.stringify(structuredData);

  }, [title, description, keywords, image, url, type]);

  return null;
};

export default SEOHead;
