import React, { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EmptyState from "@/components/EmptyState";
import { useNavigate } from "react-router-dom";
import { X, Plus, Minus, ShoppingCart } from "lucide-react";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCartItems(cart);
  }, []);

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * (item.quantity || 1), 0);

  // Remove item from cart
  function removeItem(idx) {
    const updated = cartItems.filter((_, i) => i !== idx);
    setCartItems(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  }
  // Change quantity
  function changeQuantity(idx, delta) {
    const updated = cartItems.map((item, i) =>
      i === idx ? { ...item, quantity: Math.max(1, (item.quantity || 1) + delta) } : item
    );
    setCartItems(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="pt-32 pb-8 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-2">Cart</h1>
          <div className="text-lg text-gray-500">Home &gt; Cart</div>
        </div>
      </section>
      <section className="py-12">
        <div className="container mx-auto px-4">
          {cartItems.length === 0 ? (
            <EmptyState
              icon={ShoppingCart}
              title="Your cart is empty"
              description="Looks like you haven't added any packages to your cart yet. Explore our amazing destinations and events!"
              actionLabel="Browse Destinations"
              onAction={() => navigate("/destination")}
            />
          ) : (
            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex-1 bg-white rounded-xl shadow p-6">
            <table className="w-full mb-6">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-2 text-orange-500">Product</th>
                  <th className="text-left py-2 text-orange-500">Price</th>
                  <th className="text-left py-2 text-orange-500">Subtotal</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item, idx) => (
                  <tr key={idx} className="border-b">
                    <td className="py-4">
                      <div className="flex items-center gap-2">
                        <button onClick={() => removeItem(idx)} className="text-red-500 hover:text-red-700"><X className="w-5 h-5" /></button>
                        <div className="font-bold text-lg">{item.name}</div>
                      </div>
                      <div className="text-sm text-gray-600">Adult Person: KSh{item.price.toLocaleString()} X 
                        <button onClick={() => changeQuantity(idx, -1)} className="inline-flex items-center justify-center w-6 h-6 rounded-full border border-orange-500 text-orange-500 mx-1"><Minus className="w-4 h-4" /></button>
                        {item.quantity || 1}
                        <button onClick={() => changeQuantity(idx, 1)} className="inline-flex items-center justify-center w-6 h-6 rounded-full border border-orange-500 text-orange-500 mx-1"><Plus className="w-4 h-4" /></button>
                      </div>
                      <div className="text-sm text-gray-600">Travel Date: {item.date}</div>
                    </td>
                    <td className="py-4">KSh {item.price.toLocaleString()}</td>
                    <td className="py-4">KSh {(item.price * (item.quantity || 1)).toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="flex gap-2 mb-4">
              <input type="text" placeholder="Coupon code" className="border rounded px-4 py-2 flex-1" />
              <button className="bg-black text-white px-6 py-2 rounded">Apply coupon</button>
            </div>
          </div>
          <div className="w-full md:w-96 bg-white rounded-xl shadow p-6 flex flex-col gap-4">
            <div className="text-lg font-semibold mb-2">CART OVERVIEW</div>
            <div className="flex justify-between border-b pb-2">
              <span>Subtotal</span>
              <span>KSh {subtotal.toLocaleString()}</span>
            </div>
            <div className="flex justify-between font-bold text-xl mt-2">
              <span>Total</span>
              <span>KSh {subtotal.toLocaleString()}</span>
            </div>
            <button
              className="w-full bg-orange-500 text-white font-semibold py-3 rounded shadow hover:bg-orange-600 transition-all text-lg mt-4"
              onClick={() => navigate("/checkout")}
            >
              Proceed to checkout
            </button>
          </div>
        </div>
          )}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Cart; 