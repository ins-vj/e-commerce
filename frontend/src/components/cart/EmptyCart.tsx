import React from 'react';
import { ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';

const EmptyCart: React.FC = () => {
  return (
    <div className="p-8 text-center">
      <ShoppingBag className="w-16 h-16 mx-auto text-gray-400 mb-4" />
      <h3 className="text-lg font-medium text-gray-900 mb-2">
        Your cart is empty
      </h3>
      <p className="text-gray-500 mb-6">
        Looks like you have not added any items to your cart yet.
      </p>
      <Link
        to="/"
        className="inline-block bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition-colors"
      >
        Continue Shopping
      </Link>
    </div>
  );
};
export default EmptyCart;