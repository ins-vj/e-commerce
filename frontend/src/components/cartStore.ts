import { create } from 'zustand';

const isBrowser = typeof window !== 'undefined';

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

export const useCartStore = create<CartStore>((set) => ({
  items: [],

  addItem: (newItem) =>
    set((state) => {
      const currentItems = [...state.items];
      const existingItemIndex = currentItems.findIndex(
        (item) => item.productId === newItem.productId
      );

      if (existingItemIndex !== -1) {
        currentItems[existingItemIndex] = {
          ...currentItems[existingItemIndex],
          quantity: currentItems[existingItemIndex].quantity + newItem.quantity,
        };
      } else {
        currentItems.push({
          ...newItem,
          quantity: newItem.quantity || 1, // Ensure quantity is at least 1
        });
      }

      if (isBrowser) {
        localStorage.setItem('cart', JSON.stringify(currentItems));
      }

      return { items: currentItems };
    }),

  removeItem: (productId) =>
    set((state) => {
      const updatedItems = state.items.filter(
        (item) => item.productId !== productId
      );

      if (isBrowser) {
        localStorage.setItem('cart', JSON.stringify(updatedItems));
      }

      return { items: updatedItems };
    }),

  updateQuantity: (productId, quantity) =>
    set((state) => {
      const updatedItems = state.items.map((item) =>
        item.productId === productId ? { ...item, quantity } : item
      );

      if (isBrowser) {
        localStorage.setItem('cart', JSON.stringify(updatedItems));
      }

      return { items: updatedItems };
    }),

  loadCart: () =>
    set(() => {
      if (isBrowser) {
        const storedCart = localStorage.getItem('cart');
        const items = storedCart ? JSON.parse(storedCart) : [];
        return { items };
      }
      return { items: [] };
    }),
}));
