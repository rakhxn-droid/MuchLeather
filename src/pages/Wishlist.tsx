
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Heart, Star, ShoppingBag, X } from 'lucide-react'
import Header from '../components/Header'
import TrustIndicators from '../components/TrustIndicators'
import ProductImage from '../components/ProductImage'
import { products } from '../data/products'
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

export default function Wishlist() {
  const { wishlistItems, removeFromWishlist, addToCart } = useShop()
  
  const wishlistProducts = products.filter(p => wishlistItems.includes(p.id))

  const handleAddToCart = (productId: string) => {
    addToCart(productId)
    alert('Product added to cart!')
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
              My Wishlist
            </h1>
          </motion.div>
        </div>
      </div>
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {wishlistProducts.length === 0 ? (
          <div className="text-center py-20">
            <Heart className="h-16 w-16 text-gray-300 mx-auto mb-6" />
            <h2 className="text-2xl font-playfair text-black mb-4">Your wishlist is empty</h2>
            <p className="text-gray-600 mb-8">Add items to your wishlist to save them for later</p>
            <Link
              to="/"
              className="inline-block bg-black text-white px-8 py-4 text-sm font-medium tracking-widest uppercase hover:bg-leather-brown transition-all duration-300"
            >
              Shop Now
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {wishlistProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden mb-6 bg-gray-50">
                  <Link to={`/product/${product.id}`}>
                    <div className="aspect-square overflow-hidden">
                      <ProductImage
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                      />
                    </div>
                  </Link>
                  <button 
                    onClick={() => removeFromWishlist(product.id)} 
                    className="absolute top-3 right-3 bg-white p-2 shadow-sm hover:bg-gray-100 transition-colors"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
                
                <div className="text-center">
                  <Link to={`/product/${product.id}`}>
                    <h3 className="text-xl font-playfair text-black mb-2 group-hover:text-leather-brown transition-colors">
                      {product.name}
                    </h3>
                  </Link>
                  <div className="flex items-center justify-center gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-leather-brown text-leather-brown" />
                    ))}
                    <span className="ml-2 text-gray-500 text-xs">({product.reviews})</span>
                  </div>
                  <p className="text-xl font-semibold text-leather-brown mb-4">{product.price}</p>
                  <button 
                    onClick={() => handleAddToCart(product.id)} 
                    className="w-full bg-black text-white px-6 py-3 text-xs font-medium tracking-wider uppercase hover:bg-leather-brown transition-all duration-300 flex items-center justify-center gap-2 mx-auto"
                  >
                    <ShoppingBag className="h-4 w-4" />
                    Add to Bag
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </main>
      
      <Footer />
    </div>
  )
}
