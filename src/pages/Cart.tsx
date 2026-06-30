
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ShoppingBag, Minus, Plus, X, Heart } from 'lucide-react'
import Header from '../components/Header'
import TrustIndicators from '../components/TrustIndicators'
import ProductImage from '../components/ProductImage'
import { useShop } from '../context/ShopContext'

const Footer = () => (
  <footer className="bg-black text-white pt-20 pb-10">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="border-t border-gray-800 pt-8">
        <p className="text-gray-500 text-sm text-center">© 2024 HUB. All rights reserved.</p>
      </div>
    </div>
  </footer>
)

export default function Cart() {
  const { cartItems, updateQuantity, removeFromCart, addToWishlist, wishlistItems } = useShop()
  
  const subtotal = cartItems.reduce((sum, item) => {
    const priceNum = parseInt(item.product.price.replace(/\D/g, ''))
    return sum + (priceNum * item.quantity)
  }, 0)
  
  const shipping = 0
  const total = subtotal + shipping
  
  const handleUpdateQuantity = (productId: string, change: number) => {
    updateQuantity(productId, change)
  }
  
  const handleRemove = (productId: string) => {
    removeFromCart(productId)
  }

  const handleMoveToWishlist = (productId: string) => {
    if (!wishlistItems.includes(productId)) {
      addToWishlist(productId)
    }
    removeFromCart(productId)
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-black text-white text-center py-2">
        <p className="text-xs font-medium tracking-wide">
          GET FREE DELIVERY ON ALL ORDERS OF RS 1990 AND ABOVE, WITH DELIVERY WITHIN 3-7 DAYS
        </p>
      </div>
      <Header />
      
      <TrustIndicators />
      
      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl font-playfair text-black uppercase tracking-wider">
              Shopping Bag
            </h1>
          </motion.div>
        </div>
      </div>
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {cartItems.length === 0 ? (
          <div className="text-center py-20">
            <ShoppingBag className="h-16 w-16 text-gray-300 mx-auto mb-6" />
            <h2 className="text-2xl font-playfair text-black mb-4">Your bag is empty</h2>
            <p className="text-gray-600 mb-8">Add items to your bag to checkout</p>
            <Link
              to="/"
              className="inline-block bg-black text-white px-8 py-4 text-sm font-medium tracking-widest uppercase hover:bg-leather-brown transition-all duration-300"
            >
              Shop Now
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="space-y-8">
                {cartItems.map(({ product, quantity }, index) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex gap-6 border-b border-gray-200 pb-8"
                  >
                    <Link to={`/product/${product.id}`} className="w-32 h-32 flex-shrink-0">
                      <ProductImage
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover"
                      />
                    </Link>
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-xl font-playfair text-black mb-2">{product.name}</h3>
                          <p className="text-leather-brown font-semibold mb-4">{product.price}</p>
                        </div>
                        <button onClick={() => handleRemove(product.id)} className="text-gray-400 hover:text-black">
                          <X className="h-5 w-5" />
                        </button>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2 border border-gray-300">
                          <button onClick={() => handleUpdateQuantity(product.id, -1)} className="px-3 py-1 hover:bg-gray-100">
                            <Minus className="h-3 w-3" />
                          </button>
                          <span className="px-3 py-1">{quantity}</span>
                          <button onClick={() => handleUpdateQuantity(product.id, 1)} className="px-3 py-1 hover:bg-gray-100">
                            <Plus className="h-3 w-3" />
                          </button>
                        </div>
                        <button onClick={() => handleMoveToWishlist(product.id)} className="text-gray-600 hover:text-leather-brown text-sm flex items-center gap-1">
                          <Heart className="h-4 w-4" />
                          Move to Wishlist
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <div className="lg:col-span-1">
              <div className="bg-gray-50 p-8">
                <h3 className="text-2xl font-playfair text-black mb-8">Order Summary</h3>
                <div className="space-y-4 mb-8">
                  <div className="flex justify-between">
                    <span className="text-gray-700">Subtotal</span>
                    <span className="font-medium">Rs. {subtotal.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Shipping</span>
                    <span className="font-medium">FREE</span>
                  </div>
                  <div className="border-t border-gray-300 pt-4 flex justify-between text-lg">
                    <span className="font-medium">Total</span>
                    <span className="font-semibold text-leather-brown">Rs. {total.toLocaleString()}</span>
                  </div>
                </div>
                <Link to="/checkout" className="w-full bg-black text-white py-4 text-sm font-medium tracking-widest uppercase hover:bg-leather-brown transition-all duration-300 flex items-center justify-center">
                Checkout
              </Link>
              </div>
            </div>
          </div>
        )}
      </main>
      
      <Footer />
    </div>
  )
}
