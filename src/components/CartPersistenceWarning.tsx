import React, { useEffect, useState } from "react";
import { AlertCircle, X } from "lucide-react";

const CartPersistenceWarning: React.FC = () => {
  const [show, setShow] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const hasSeenWarning = localStorage.getItem("cart-warning-dismissed");
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    
    if (!hasSeenWarning && cart.length > 0) {
      setShow(true);
    }
  }, []);

  const handleDismiss = () => {
    localStorage.setItem("cart-warning-dismissed", "true");
    setDismissed(true);
    setShow(false);
  };

  if (!show || dismissed) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50 max-w-md animate-slide-up">
      <div className="bg-orange-50 border-l-4 border-orange-500 p-4 rounded-lg shadow-lg">
        <div className="flex items-start">
          <AlertCircle className="w-5 h-5 text-orange-500 mt-0.5 mr-3 flex-shrink-0" />
          <div className="flex-1">
            <h3 className="font-semibold text-orange-900 mb-1">Cart Notice</h3>
            <p className="text-sm text-orange-800">
              Your cart items are saved locally. Please complete your booking soon to avoid losing your selections.
            </p>
          </div>
          <button
            onClick={handleDismiss}
            className="ml-3 text-orange-500 hover:text-orange-700 transition-colors"
            aria-label="Dismiss warning"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPersistenceWarning;
