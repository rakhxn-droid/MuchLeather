import { Link, useParams } from 'react-router-dom'
import { ShoppingBag, Heart, Star } from 'lucide-react'
import { motion } from 'framer-motion'
import Header from '../components/Header'
import TrustIndicators from '../components/TrustIndicators'
import ProductImage from '../components/ProductImage'
import { getProductsByCategory, categoryNames } from '../data/products'
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

export default function Collection() {
  const { collection } = useParams<{ collection: string }>()
  const categoryProducts = getProductsByCategory(collection || '')
  const { addToCart, addToWishlist, removeFromWishlist, wishlistItems } = useShop()

  const handleAddToCart = (e: React.MouseEvent, productId: string) => {
    e.preventDefault()
    e.stopPropagation()
    addToCart(productId)
    alert('Product added to cart!')
  }

  const handleToggleWishlist = (e: React.MouseEvent, productId: string) => {
    e.preventDefault()
    e.stopPropagation()
    if (wishlistItems.includes(productId)) {
      removeFromWishlist(productId)
    } else {
      addToWishlist(productId)
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
      
      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl font-playfair text-black uppercase tracking-wider">
              {categoryNames[collection || ''] || collection}
            </h1>
          </motion.div>
        </div>
      </div>
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {categoryProducts.map((product, index) => (
            <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden mb-4">
                  <div className="aspect-[3/4] overflow-hidden bg-gray-50 relative">
                    <Link to={`/product/${product.id}`}>
                      <ProductImage
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    </Link>
                    {product.bestseller && (
                      <div className="absolute top-4 left-4">
                        <span className="bg-black text-white text-xs font-medium px-3 py-1">BESTSELLER</span>
                      </div>
                    )}
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <button 
                        onClick={(e) => handleToggleWishlist(e, product.id)}
                        className="bg-white p-2 hover:bg-leather-brown hover:text-white transition-colors"
                      >
                        <Heart 
                          className={`h-5 w-5 transition-colors ${
                            wishlistItems.includes(product.id) ? 'fill-leather-brown text-leather-brown' : ''
                          }`}
                        />
                      </button>
                    </div>
                  </div>
                </div>
                
                <div className="text-center">
                  <Link to={`/product/${product.id}`}>
                    <h3 className="text-lg font-playfair text-black mb-2 group-hover:text-leather-brown transition-colors">
                      {product.name}
                    </h3>
                    <div className="flex items-center justify-center gap-1 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-leather-brown text-leather-brown" />
                      ))}
                      <span className="ml-2 text-gray-500 text-xs">({product.reviews})</span>
                    </div>
                    <p className="text-leather-brown font-semibold mb-4">{product.price}</p>
                  </Link>
                  
                  <button 
                    onClick={(e) => handleAddToCart(e, product.id)}
                    className="w-full bg-black text-white py-3 text-sm font-medium hover:bg-gray-800 transition-colors flex items-center justify-center gap-2"
                  >
                    <ShoppingBag className="h-4 w-4" />
                    Add to Cart
                  </button>
                </div>
              </motion.div>
          ))}
        </div>
      </main>
      
      <Footer />
    </div>
  )
}
