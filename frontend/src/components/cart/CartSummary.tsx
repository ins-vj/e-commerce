import React from 'react';

interface CartSummaryProps {
  subtotal: number;
  shipping: number;
  total: number;
  onCheckout: () => void;
  itemCount: number;
}

const CartSummary: React.FC<CartSummaryProps> = ({
  subtotal,
  shipping,
  total,
  onCheckout,
  itemCount,
}) => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h2 className="text-lg font-medium text-gray-900 mb-6">Order Summary</h2>
      <div className="space-y-4">
        <div className="flex justify-between">
          <span className="text-gray-600">Subtotal</span>
          <span className="text-gray-900">₹{subtotal}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Shipping</span>
          <span className="text-gray-900">₹{shipping}</span>
        </div>
        <div className="border-t pt-4 flex justify-between">
          <span className="text-lg font-medium text-gray-900">Total</span>
          <span className="text-lg font-medium text-gray-900">₹{total}</span>
        </div>
      </div>
      <button
        className="w-full mt-6 bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
        onClick={onCheckout}
        disabled={itemCount === 0}
      >
        Proceed to Checkout
      </button>
    </div>
  );
};
export default CartSummary;