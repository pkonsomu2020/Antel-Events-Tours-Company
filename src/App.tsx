import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import Destination from "./pages/Destination";
import EventPackage from "./pages/EventPackage";
import Contact from "./pages/Contact";
import Booking from "./pages/Booking";
import NotFound from "./pages/NotFound";
import DestinationPackages from "./pages/DestinationPackages";
import HotelPackageBooking from "./pages/HotelPackageBooking";
import KenyaAreaPackages from "./pages/KenyaAreaPackages";
import EventPackageDetail from "./pages/EventPackageDetail";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import BookingConfirmation from "./pages/BookingConfirmation";
import ErrorBoundary from "./components/ErrorBoundary";
import CartPersistenceWarning from "./components/CartPersistenceWarning";
import { FaWhatsapp } from 'react-icons/fa';

const queryClient = new QueryClient();

const WhatsAppButton = () => (
  <a
    href="https://wa.me/254725814767"
    target="_blank"
    rel="noopener noreferrer"
    className="fixed left-4 bottom-4 md:left-6 md:bottom-6 z-[999] bg-[#25D366] rounded-full w-14 h-14 md:w-16 md:h-16 flex items-center justify-center shadow-lg hover:shadow-xl transition-all hover:scale-110"
    aria-label="Chat on WhatsApp"
  >
    <FaWhatsapp color="#fff" size={32} className="md:w-9 md:h-9" />
  </a>
);

const App = () => (
  <ErrorBoundary>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/destination" element={<Destination />} />
            <Route path="/destination/:slug" element={<DestinationPackages />} />
            <Route path="/destination/kenya/area/:area" element={<KenyaAreaPackages />} />
            <Route path="/destination/:slug/:hotelSlug" element={<HotelPackageBooking />} />
            <Route path="/event-package" element={<EventPackage />} />
            <Route path="/event-package/:eventSlug" element={<EventPackageDetail />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/booking-confirmation" element={<BookingConfirmation />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
          <WhatsAppButton />
          <CartPersistenceWarning />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </ErrorBoundary>
);

export default App;
