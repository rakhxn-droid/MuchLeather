
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Star, ShoppingBag } from 'lucide-react'
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

const GiftCategory = ({ title, description, image, path }: any) => (
  <Link to={path}>
    <motion.div
      whileHover={{ y: -5 }}
      className="group cursor-pointer"
    >
      <div className="relative h-80 overflow-hidden mb-6">
        <ProductImage
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-all duration-300" />
        <div className="absolute inset-0 flex items-end p-8">
          <div>
            <h3 className="text-2xl font-playfair text-white mb-2">{title}</h3>
            <p className="text-gray-200">{description}</p>
          </div>
        </div>
      </div>
    </motion.div>
  </Link>
)

export default function Gifting() {
  const featuredGifts = products.filter(p => p.bestseller).slice(0, 6)
  const { addToCart } = useShop()

  const handleAddToCart = (e: React.MouseEvent, productId: string) => {
    e.preventDefault()
    e.stopPropagation()
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
      
      {/* Hero Section */}
      <section className="relative h-[600px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?w=2000&auto=format&fit=crop&q=60"
            alt="Gifting"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative h-full flex items-center justify-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-playfair text-white uppercase tracking-wider mb-6">
              Gifts for Every Occasion
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto mb-8">
              Find the perfect hand-crafted leather gift that will last a lifetime. Free gift wrapping on all orders.
            </p>
          </motion.div>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Gift Categories */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <p className="text-leather-brown font-medium tracking-widest uppercase text-sm mb-2">
              Shop by Category
            </p>
            <h2 className="text-4xl font-playfair text-black mb-4">Perfect Gifts</h2>
            <div className="w-20 h-0.5 bg-leather-brown mx-auto" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <GiftCategory
              title="For Him"
              description="Wallets, bags & belts"
              image="https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=800&auto=format&fit=crop&q=60"
              path="/collections/men-wallets"
            />
            <GiftCategory
              title="For Her"
              description="Handbags, clutches & wallets"
              image="https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&auto=format&fit=crop&q=60"
              path="/collections/women-handbags"
            />
            <GiftCategory
              title="Travel Gifts"
              description="Passport holders & dopp kits"
              image="https://images.unsplash.com/photo-1503226576246-e25093a892a7?w=800&auto=format&fit=crop&q=60"
              path="/collections/travel"
            />
          </div>
        </section>

        {/* Featured Gifts */}
        <section>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <p className="text-leather-brown font-medium tracking-widest uppercase text-sm mb-2">
              Best Sellers
            </p>
            <h2 className="text-4xl font-playfair text-black mb-4">Featured Gift Ideas</h2>
            <div className="w-20 h-0.5 bg-leather-brown mx-auto" />
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {featuredGifts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <Link to={`/product/${product.id}`}>
                  <div className="relative overflow-hidden mb-6 bg-gray-50">
                    <div className="aspect-square overflow-hidden">
                      <ProductImage
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <h3 className="text-lg font-playfair text-black mb-2 group-hover:text-leather-brown transition-colors">
                      {product.name}
                    </h3>
                    <div className="flex items-center justify-center gap-1 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-leather-brown text-leather-brown" />
                      ))}
                      <span className="ml-2 text-gray-500 text-xs">({product.reviews})</span>
                    </div>
                    <p className="text-xl font-semibold text-leather-brown mb-4">{product.price}</p>
                  </div>
                </Link>
                <button 
                  onClick={(e) => handleAddToCart(e, product.id)}
                  className="w-full bg-black text-white py-3 text-sm font-medium tracking-widest uppercase hover:bg-leather-brown transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <ShoppingBag className="h-4 w-4" />
                  Add to Cart
                </button>
              </motion.div>
            ))}
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  )
}
