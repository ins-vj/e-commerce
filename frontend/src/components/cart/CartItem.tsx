import React from 'react';
import { Trash2 } from 'lucide-react';
import QuantitySelector from '../QuantitySelector';

interface CartItemProps {
  productId: string; // Changed from id to productId to match store
  name: string;
  price: number;
  quantity: number;
  img: string;
  category: string;
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemove: (productId: string) => void;
}

const CartItem: React.FC<CartItemProps> = ({
  productId, // Changed from id to productId
  name,
  price,
  quantity,
  img,
  category,
  onUpdateQuantity,
  onRemove,
}) => {
  return (
    <div className="p-6 flex gap-6">
      <div className="w-24 h-24 flex-shrink-0 overflow-hidden rounded-lg">
        <img
          src={img}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1">
        <div className="flex justify-between">
          <div>
            <h3 className="text-lg font-medium text-gray-900">{name}</h3>
            <p className="mt-1 text-sm text-gray-500">
              Category: {category}
            </p>
          </div>
          <p className="text-lg font-medium text-gray-900">
            ₹{price * quantity}
          </p>
        </div>
        <div className="mt-4 flex items-center justify-between">
          <QuantitySelector
            quantity={quantity}
            onQuantityChange={(newQuantity) => onUpdateQuantity(productId, newQuantity)}
          />
          <button
            onClick={() => onRemove(productId)}
            className="text-red-600 hover:text-red-700 flex items-center gap-1"
          >
            <Trash2 className="w-4 h-4" />
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;