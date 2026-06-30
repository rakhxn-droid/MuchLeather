import { Link, useParams } from 'react-router-dom'
import { ShoppingBag, Star, ChevronRight, Heart } from 'lucide-react'
import { motion } from 'framer-motion'
import Header from '../components/Header'
import TrustIndicators from '../components/TrustIndicators'
import ProductImage from '../components/ProductImage'
import { getProductById } from '../data/products'
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

export default function Product() {
  const { id } = useParams<{ id: string }>()
  const product = getProductById(id || '') || {
    id: 'default',
    name: "The Heritage Bi-Fold",
    price: "Rs. 6,490",
    reviews: 412,
    image: "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=800&q=80",
    bestseller: true,
    category: "men-wallets"
  }
  
  const { addToCart, addToWishlist, removeFromWishlist, wishlistItems } = useShop()
  const isInWishlist = wishlistItems.includes(product.id)

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    addToCart(product.id)
    alert('Product added to cart!')
  }

  const handleToggleWishlist = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (isInWishlist) {
      removeFromWishlist(product.id)
    } else {
      addToWishlist(product.id)
    }
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
      
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center text-sm space-x-2">
          <Link to="/" className="text-gray-500 hover:text-black transition-colors">Home</Link>
          <ChevronRight className="h-4 w-4 text-gray-400" />
          <span className="text-black font-medium">{product.name}</span>
        </div>
      </nav>
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-square overflow-hidden bg-gray-50">
              <ProductImage
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="flex items-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-leather-brown text-leather-brown" />
              ))}
              <span className="ml-3 text-gray-500 text-sm">({product.reviews} reviews)</span>
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-playfair text-black mb-4">
              {product.name}
            </h1>
            
            <p className="text-3xl font-semibold text-leather-brown mb-8">{product.price}</p>
            
            <p className="text-gray-700 text-lg leading-relaxed mb-10">
              Hand-crafted from full-grain vegetable-tanned leather, this {product.name.toLowerCase()} develops a rich patina over time. Premium quality with attention to every detail, built to last a lifetime.
            </p>
            
            <div className="space-y-4 mb-10">
              <div className="flex items-center gap-3 text-gray-700">
                <div className="w-6 h-6 rounded-full bg-leather-brown"></div>
                <span>Full-Grain Leather</span>
              </div>
              <div className="flex items-center gap-3 text-gray-700">
                <div className="w-6 h-6 rounded-full border-2 border-black flex items-center justify-center text-xs">✓</div>
                <span>Handcrafted in Karachi</span>
              </div>
              <div className="flex items-center gap-3 text-gray-700">
                <div className="w-6 h-6 rounded-full border-2 border-black flex items-center justify-center text-xs">✓</div>
                <span>Lifetime Quality Guarantee</span>
              </div>
            </div>
            
            <div className="flex gap-4 mb-6">
                <button onClick={handleAddToCart} className="flex-1 bg-black text-white py-5 text-lg font-semibold hover:bg-gray-800 transition-all duration-300 flex items-center justify-center gap-2">
                  <ShoppingBag className="h-6 w-6" />
                  Add to Cart
                </button>
                <button onClick={handleToggleWishlist} className="w-16 bg-white border-2 border-gray-200 hover:border-leather-brown transition-colors flex items-center justify-center">
                  <Heart className={`h-6 w-6 transition-colors ${isInWishlist ? 'fill-leather-brown text-leather-brown' : 'text-gray-600'}`} />
                </button>
              </div>
          </motion.div>
        </div>
      </main>
      
      <Footer />
    </div>
  )
}
