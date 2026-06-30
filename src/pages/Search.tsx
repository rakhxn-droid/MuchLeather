
import { Link, useSearchParams } from 'react-router-dom'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Search, Star } from 'lucide-react'
import Header from '../components/Header'
import TrustIndicators from '../components/TrustIndicators'
import ProductImage from '../components/ProductImage'
import { products } from '../data/products'

const Footer = () => (
  <footer className="bg-black text-white pt-20 pb-10">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="border-t border-gray-800 pt-8">
        <p className="text-gray-500 text-sm text-center">© 2024 HUB. All rights reserved.</p>
      </div>
    </div>
  </footer>
)

export default function SearchPage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [searchQuery, setSearchQuery] = useState(searchParams.get('q') || '')

  const filteredProducts = searchQuery
    ? products.filter(product => product.name.toLowerCase().includes(searchQuery.toLowerCase()))
    : products

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    setSearchParams(searchQuery ? { q: searchQuery } : {})
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
            className="max-w-2xl mx-auto"
          >
            <h1 className="text-5xl font-playfair text-black uppercase tracking-wider text-center mb-8">
              Search
            </h1>
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for products..."
                className="w-full px-6 py-4 text-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-leather-brown focus:border-transparent"
              />
              <button type="submit" className="absolute right-4 top-1/2 transform -translate-y-1/2">
                <Search className="h-6 w-6 text-gray-500" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {searchQuery && (
          <p className="text-gray-600 mb-8">
            {filteredProducts.length} results for "{searchQuery}"
          </p>
        )}
        
        {filteredProducts.length === 0 ? (
          <div className="text-center py-20">
            <Search className="h-16 w-16 text-gray-300 mx-auto mb-6" />
            <h2 className="text-2xl font-playfair text-black mb-4">No products found</h2>
            <p className="text-gray-600 mb-8">Try adjusting your search terms</p>
            <Link
              to="/"
              className="inline-block bg-black text-white px-8 py-4 text-sm font-medium tracking-widest uppercase hover:bg-leather-brown transition-all duration-300"
            >
              Shop Now
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <Link to={`/product/${product.id}`}>
                  <div className="relative overflow-hidden mb-4 bg-gray-50">
                    <div className="aspect-[3/4] overflow-hidden">
                      <ProductImage
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <h3 className="text-base font-playfair text-black mb-2 group-hover:text-leather-brown transition-colors">
                      {product.name}
                    </h3>
                    <div className="flex items-center justify-center gap-1 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-leather-brown text-leather-brown" />
                      ))}
                      <span className="ml-2 text-gray-500 text-xs">({product.reviews})</span>
                    </div>
                    <p className="text-leather-brown font-semibold">{product.price}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        )}
      </main>
      
      <Footer />
    </div>
  )
}
