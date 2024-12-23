'use client'
import React from 'react';
import { useCartStore } from '@/components/cartStore';
import CartItem from '@/components/cart/CartItem';
import CartSummary from '@/components/cart/CartSummary';
import EmptyCart from '@/components/cart/EmptyCart';
import { ShoppingBag } from 'lucide-react';

const Cart: React.FC = () => {
    const { items, updateQuantity, removeItem } = useCartStore();
  
    const subtotal = items.reduce(
      (sum, item) => sum + (item.price || 0) * (item.quantity || 0),
      0
    );
    const shipping = items.length > 0 ? 49 : 0;
    const total = subtotal + shipping;
  
    const handleCheckout = () => {
      console.log('Proceeding to checkout...');
    };
  
    return (
      <div className="min-h-screen bg-gray-200 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Shopping Cart</h1>
            <span className="flex items-center gap-2 text-gray-600">
              <ShoppingBag className="w-5 h-5" />
              {items.length} {items.length === 1 ? 'item' : 'items'}
            </span>
          </div>
  
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-8">
              <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                {items.length > 0 ? (
                  <div className="divide-y divide-gray-200">
                    {items.map((item) => (
                      <CartItem
                        key={item.productId} // Ensure this matches the actual property from your data
                        productId={item.productId} // Pass productId explicitly
                        name={item.name}
                        price={item.price}
                        quantity={item.quantity}
                        img={item.img}
                        category={item.category}
                        onUpdateQuantity={updateQuantity}
                        onRemove={removeItem}
                      />
                    ))}
                  </div>
                ) : (
                  <EmptyCart />
                )}
              </div>
            </div>
  
            <div className="col-span-4">
              <CartSummary
                subtotal={subtotal}
                shipping={shipping}
                total={total}
                onCheckout={handleCheckout}
                itemCount={items.length}
              />
            </div>
          </div>
        </div>
      </div>
    );
  };

export default Cart;