
import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { api, Product } from '../api';

interface ShopContextType {
  products: Product[];
  loading: boolean;
  error: string | null;
  cartItems: { product: Product; quantity: number }[];
  wishlistItems: number[];
  addToCart: (productId: number) => void;
  updateQuantity: (productId: number, change: number) => void;
  removeFromCart: (productId: number) => void;
  addToWishlist: (productId: number) => void;
  removeFromWishlist: (productId: number) => void;
  fetchProducts: (params?: { category?: string; search?: string }) => Promise<void>;
}

const ShopContext = createContext<ShopContextType | undefined>(undefined);

export function ShopProvider({ children }: { children: ReactNode }) {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [cartItems, setCartItems] = useState<{ product: Product; quantity: number }[]>([]);
  const [wishlistItems, setWishlistItems] = useState<number[]>([]);

  const fetchProducts = async (params?: { category?: string; search?: string }) => {
    try {
      setLoading(true);
      setError(null);
      const response = await api.getProducts(params);
      setProducts(response.data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch products');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const addToCart = (productId: number) => {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    setCartItems(prev => {
      const existing = prev.find(item => item.product.id === productId);
      if (existing) {
        return prev.map(item =>
          item.product.id === productId ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { product, quantity: 1 }];
    });
  };

  const updateQuantity = (productId: number, change: number) => {
    setCartItems(prev => {
      const itemIndex = prev.findIndex(item => item.product.id === productId);
      if (itemIndex === -1) return prev;
      
      const item = prev[itemIndex];
      const newQuantity = item.quantity + change;
      
      if (newQuantity <= 0) {
        return prev.filter(i => i.product.id !== productId);
      }
      
      const newItems = [...prev];
      newItems[itemIndex] = { ...item, quantity: newQuantity };
      return newItems;
    });
  };

  const removeFromCart = (productId: number) => {
    setCartItems(prev => prev.filter(item => item.product.id !== productId));
  };

  const addToWishlist = (productId: number) => {
    if (!wishlistItems.includes(productId)) {
      setWishlistItems(prev => [...prev, productId]);
    }
  };

  const removeFromWishlist = (productId: number) => {
    setWishlistItems(prev => prev.filter(id => id !== productId));
  };

  return (
    <ShopContext.Provider value={{ 
      products, 
      loading, 
      error, 
      cartItems, 
      wishlistItems, 
      addToCart, 
      updateQuantity, 
      removeFromCart, 
      addToWishlist, 
      removeFromWishlist,
      fetchProducts
    }}>
      {children}
    </ShopContext.Provider>
  );
}

export function useShop() {
  const context = useContext(ShopContext);
  if (!context) {
    throw new Error('useShop must be used within ShopProvider');
  }
  return context;
}
