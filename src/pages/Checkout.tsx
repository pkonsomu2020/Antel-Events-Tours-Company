import React, { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { apiRequest } from "@/lib/api";

const countryList = [
  "Kenya", "Uganda", "Tanzania", "Rwanda", "Burundi", "South Africa", "Nigeria", "Ghana", "Egypt", "Ethiopia", "United States", "United Kingdom", "Canada", "Australia", "India", "China", "Japan", "Germany", "France", "Italy", "Spain", "Brazil", "Mexico", "South Korea", "Turkey", "Russia", "Netherlands", "Sweden", "Norway", "Denmark", "Finland", "Switzerland", "Belgium", "Austria", "Poland", "Portugal", "Greece", "Hungary", "Czech Republic", "Slovakia", "Slovenia", "Croatia", "Serbia", "Morocco", "Tunisia", "Algeria", "Zimbabwe", "Zambia", "Malawi", "Mozambique"
];
const kenyaCounties = [
  "Baringo", "Bomet", "Bungoma", "Busia", "Elgeyo Marakwet", "Embu", "Garissa", "Homa Bay", "Isiolo", "Kajiado", "Kakamega", "Kericho", "Kiambu", "Kilifi", "Kirinyaga", "Kisii", "Kisumu", "Kitui", "Kwale", "Laikipia", "Lamu", "Machakos", "Makueni", "Mandera", "Marsabit", "Meru", "Migori", "Mombasa", "Murang'a", "Nairobi", "Nakuru", "Nandi", "Narok", "Nyamira", "Nyandarua", "Nyeri", "Samburu", "Siaya", "Taita Taveta", "Tana River", "Tharaka Nithi", "Trans Nzoia", "Turkana", "Uasin Gishu", "Vihiga", "Wajir", "West Pokot"
];

const Checkout = () => {
  const [cartItems, setCartItems] = useState([]);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [country, setCountry] = useState("Kenya");
  const [county, setCounty] = useState("");
  const [street, setStreet] = useState("");
  const [detecting, setDetecting] = useState(false);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    notes: "",
    mpesaPhone: ""
  });
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCartItems(cart);
  }, []);

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * (item.quantity || 1), 0);

  async function handlePlaceOrder(e) {
    e.preventDefault();
    setSubmitting(true);
    setError("");
    // Prepare booking data
    const bookingData = {
      type: cartItems.length === 1 ? (cartItems[0].type || "hotel") : "hotel",
      package_name: cartItems.length === 1 ? cartItems[0].name : "Multiple Packages",
      package_slug: cartItems.length === 1 ? cartItems[0].slug || null : null,
      hotel_slug: cartItems.length === 1 ? cartItems[0].hotelSlug || null : null,
      event_slug: cartItems.length === 1 ? cartItems[0].eventSlug || null : null,
      date_from: cartItems.length === 1 ? cartItems[0].date || null : null,
      date_to: null, // Could be extended for multi-day bookings
      quantity: cartItems.length === 1 ? cartItems[0].quantity || 1 : cartItems.reduce((sum, item) => sum + (item.quantity || 1), 0),
      total_price: subtotal,
      extra_services: cartItems.length === 1 ? cartItems[0].extraServices || null : null,
      meal_plan: cartItems.length === 1 ? cartItems[0].mealPlan || null : null,
      purpose: cartItems.length === 1 ? cartItems[0].purpose || null : null,
      itinerary_needed: cartItems.length === 1 ? cartItems[0].itineraryNeeded || false : false,
      travel_option: cartItems.length === 1 ? cartItems[0].travelOption || null : null,
      country,
      county,
      street_address: street,
      notes: form.notes,
      payment_method: "mpesa",
      payment_status: "pending",
      mpesa_code: "", // To be filled after payment integration
      items: cartItems.map(item => ({
        name: item.name,
        type: item.type || "hotel",
        price: item.price,
        quantity: item.quantity || 1,
        extra_services: item.extraServices || null
      }))
    };
    try {
      const res = await apiRequest("/api/bookings", {
        method: "POST",
        body: JSON.stringify(bookingData)
      });
      if (!res.ok) throw new Error("Failed to place order. Please try again.");
      const result = await res.json();
      localStorage.removeItem("cart");
      localStorage.removeItem("cart-warning-dismissed");
      // Redirect to confirmation page
      window.location.href = `/booking-confirmation?bookingId=${result.bookingId || ""}`;
    } catch (err) {
      setError(err.message || "Failed to place order.");
    } finally {
      setSubmitting(false);
    }
  }

  function detectLocation() {
    setDetecting(true);
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const lat = pos.coords.latitude;
          const lng = pos.coords.longitude;
          fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`)
            .then(res => res.json())
            .then(data => {
              const address = data.display_name
                ? `Live Location: ${data.display_name}`
                : `Live Location: Lat: ${lat}, Lng: ${lng}`;
              setStreet(address);
              setDetecting(false);
            })
            .catch(() => {
              setStreet(`Live Location: Lat: ${lat}, Lng: ${lng}`);
              setDetecting(false);
            });
        },
        () => {
          setStreet("Location detection failed");
          setDetecting(false);
        }
      );
    } else {
      setStreet("Geolocation not supported");
      setDetecting(false);
    }
  }

  function handleInputChange(e) {
    const { name, value } = e.target;
    setForm(f => ({ ...f, [name]: value }));
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="pt-32 pb-8 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-2">Checkout</h1>
          <div className="text-lg text-gray-500">Home &gt; Checkout</div>
        </div>
      </section>
      <section className="py-12">
        <div className="container mx-auto px-4 flex flex-col md:flex-row gap-8">
          {/* Billing Details */}
          <div className="flex-1 bg-white rounded-xl shadow p-6">
            <h2 className="text-2xl font-bold mb-6">Billing details</h2>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8" onSubmit={handlePlaceOrder}>
              <div className="flex flex-col col-span-1 md:col-span-1">
                <label className="mb-1 font-medium">First name *</label>
                <input type="text" name="firstName" placeholder="First name *" className="border rounded px-4 py-2" required value={form.firstName} onChange={handleInputChange} />
              </div>
              <div className="flex flex-col col-span-1 md:col-span-1">
                <label className="mb-1 font-medium">Last name *</label>
                <input type="text" name="lastName" placeholder="Last name *" className="border rounded px-4 py-2" required value={form.lastName} onChange={handleInputChange} />
              </div>
              <div className="flex flex-col col-span-1 md:col-span-2">
                <label className="mb-1 font-medium">Country / Region *</label>
                <select className="border rounded px-4 py-2" value={country} onChange={e => setCountry(e.target.value)} required>
                  {countryList.map(c => <option key={c} value={c}>{c}</option>)}
                </select>
              </div>
              <div className="flex flex-col col-span-1 md:col-span-2">
                <label className="mb-1 font-medium">Street address *</label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Live Location: 11th Meta close, Uthiru/Ruthimitu ward, Waithaka division, Dagoretti, Nairobi, Nairobi County, 29039, Kenya"
                    className="border rounded px-4 py-2 flex-1"
                    value={street}
                    onChange={e => setStreet(e.target.value)}
                    required
                  />
                  <button type="button" className="bg-orange-500 text-white px-4 py-2 rounded" onClick={detectLocation} disabled={detecting}>{detecting ? "Detecting..." : "Detect Location"}</button>
                </div>
              </div>
              {country === "Kenya" && (
                <div className="flex flex-col col-span-1 md:col-span-2">
                  <label className="mb-1 font-medium">State / County *</label>
                  <select className="border rounded px-4 py-2" value={county} onChange={e => setCounty(e.target.value)} required>
                    <option value="">Select County</option>
                    {kenyaCounties.map(c => <option key={c} value={c}>{c}</option>)}
                  </select>
                </div>
              )}
              <div className="flex flex-col col-span-1 md:col-span-2">
                <label className="mb-1 font-medium">Phone *</label>
                <input type="tel" name="phone" placeholder="Phone *" className="border rounded px-4 py-2" required value={form.phone} onChange={handleInputChange} />
              </div>
              <div className="flex flex-col col-span-1 md:col-span-2">
                <label className="mb-1 font-medium">Email address *</label>
                <input type="email" name="email" placeholder="Email address *" className="border rounded px-4 py-2" required value={form.email} onChange={handleInputChange} />
              </div>
              <div className="flex flex-col col-span-1 md:col-span-2">
                <label className="mb-1 font-medium">Order notes (optional)</label>
                <textarea name="notes" placeholder="Order notes (optional)" className="border rounded px-4 py-2" rows={3} value={form.notes} onChange={handleInputChange}></textarea>
              </div>
              <div className="flex flex-col col-span-1 md:col-span-2">
                <label className="mb-1 font-medium">Confirm M-PESA Phone Number *</label>
                <input type="text" name="mpesaPhone" placeholder="Confirm M-PESA Phone Number *" className="border rounded px-4 py-2 w-full mb-2" required value={form.mpesaPhone} onChange={handleInputChange} />
              </div>
              {error && <div className="col-span-2 text-red-600 font-semibold">{error}</div>}
              <div className="col-span-2">
                <button className="w-full bg-orange-500 text-white font-semibold py-3 rounded shadow hover:bg-orange-600 transition-all text-lg mt-4" type="submit" disabled={submitting}>{submitting ? "Placing Order..." : "Place Order"}</button>
              </div>
            </form>
          </div>
          {/* Order Summary & Payment */}
          <div className="w-full md:w-96 bg-white rounded-xl shadow p-6 flex flex-col gap-4">
            <div className="text-lg font-semibold mb-2">Your order</div>
            <table className="w-full mb-4">
              <thead>
                <tr>
                  <th className="text-left text-orange-500">Product</th>
                  <th className="text-right text-orange-500">Amount</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item, idx) => (
                  <tr key={idx}>
                    <td className="py-2">
                      {item.name}
                      <div className="text-xs text-gray-500">Adult Person: KSh{item.price.toLocaleString()} X {item.quantity}</div>
                      <div className="text-xs text-gray-500">Travel Date: {item.date}</div>
                    </td>
                    <td className="py-2 text-right">KSh {item.price.toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="flex justify-between border-b pb-2">
              <span>Subtotal</span>
              <span>KSh {subtotal.toLocaleString()}</span>
            </div>
            <div className="flex justify-between font-bold text-xl mt-2">
              <span>Total</span>
              <span>KSh {subtotal.toLocaleString()}</span>
            </div>
            {/* M-PESA Payment Section */}
            <div className="bg-gray-50 p-4 rounded mt-4">
              <div className="font-bold text-green-700 mb-2">Lipa Na M-PESA</div>
              <p className="text-xs text-gray-700 mb-2">
                Cross-check your details above before pressing the button below.<br />
                Your phone number MUST be registered with Safaricom (M-PESA) for this to work.<br />
                You will get a pop-up on your phone asking you to confirm the payment.<br />
                Enter your Safaricom (M-PESA) phone to proceed.<br />
                You will receive a confirmation message shortly thereafter.
              </p>
              <input type="text" name="mpesaPhone" placeholder="Confirm M-PESA Phone Number *" className="border rounded px-4 py-2 w-full mb-2" required value={form.mpesaPhone} onChange={handleInputChange} />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Checkout; 