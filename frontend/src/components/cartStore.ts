import { create } from 'zustand';
import { useEffect } from 'react';

interface CartItem {
  productId: string;
  name: string;
  price: number;
  quantity: number;
  img: string;
  category: string;
}

interface CartStore {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  loadCart: () => void;
}

export const useCartStore = create<CartStore>((set, get) => ({
  items: [],

  addItem: (newItem) =>
    set((state) => {
      // Create a copy of the current items
      const currentItems = [...state.items];
      
      // Find if the item already exists
      const existingItemIndex = currentItems.findIndex(
        item => item.productId === newItem.productId
      );

      if (existingItemIndex !== -1) {
        // Update existing item quantity
        currentItems[existingItemIndex] = {
          ...currentItems[existingItemIndex],
          quantity: currentItems[existingItemIndex].quantity + newItem.quantity
        };
      } else {
        // Add new item
        currentItems.push({
          ...newItem,
          quantity: newItem.quantity || 1  // Ensure quantity is at least 1
        });
      }

      // Save to localStorage
      localStorage.setItem('cart', JSON.stringify(currentItems));
      
      // Return new state
      return { items: currentItems };
    }),

  removeItem: (productId) =>
    set((state) => {
      const updatedItems = state.items.filter(
        item => item.productId !== productId
      );
      localStorage.setItem('cart', JSON.stringify(updatedItems));
      return { items: updatedItems };
    }),

  updateQuantity: (productId, quantity) =>
    set((state) => {
      const updatedItems = state.items.map(item =>
        item.productId === productId
          ? { ...item, quantity }
          : item
      );
      localStorage.setItem('cart', JSON.stringify(updatedItems));
      return { items: updatedItems };
    }),

  loadCart: () =>
    set(() => {
      const storedCart = localStorage.getItem('cart');
      const items = storedCart ? JSON.parse(storedCart) : [];
      return { items };
    }),
}));

// Hook with automatic persistence
export const useCartStoreWithPersistence = () => {
  const store = useCartStore();
  
  useEffect(() => {
    store.loadCart();
  }, []);
  
  return store;
};