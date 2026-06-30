
import { Link } from 'react-router-dom'
import { Heart, Star, Instagram, Facebook, Twitter, ShoppingBag } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import Header from '../components/Header'
import TrustIndicators from '../components/TrustIndicators'
import ProductImage from '../components/ProductImage'
import { useShop } from '../context/ShopContext'

const heroImages = [
  "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=2000&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1627123424574-724758594e93?w=2000&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=2000&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1547949003-9792a18a2601?w=2000&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=2000&auto=format&fit=crop&q=60"
];

const getProductImage = (product: any) => {
  if (product.images && product.images.length > 0) {
    const mainImage = product.images.find((img: any) => img.is_main);
    return mainImage?.image || product.images[0].image;
  }
  return "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=800&h=800&fit=crop";
};

const formatPrice = (price: string | number) => {
  return `Rs ${Number(price).toLocaleString()}`;
};

const Home = () => {
  const { products, loading, error, addToCart, addToWishlist, removeFromWishlist, wishlistItems } = useShop();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000); // Increased to 5 seconds for slower change

    return () => clearInterval(interval);
  }, []);

  const handleAddToCart = (e: React.MouseEvent, productId: number) => {
    e.preventDefault()
    e.stopPropagation()
    addToCart(productId)
    alert('Product added to cart!')
  }

  const handleToggleWishlist = (e: React.MouseEvent, productId: number) => {
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
      {/* Top Announcement Bar */}
      <motion.div
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="bg-black text-white text-center py-2 overflow-hidden"
      >
        <div className="whitespace-nowrap animate-marquee">
          <span className="text-xs font-medium tracking-wide inline-block">
            GET FREE DELIVERY ON ALL ORDERS OF RS 1990 AND ABOVE • WITH DELIVERY WITHIN 3-7 DAYS • 
          </span>
          <span className="text-xs font-medium tracking-wide inline-block ml-10">
            GET FREE DELIVERY ON ALL ORDERS OF RS 1990 AND ABOVE • WITH DELIVERY WITHIN 3-7 DAYS • 
          </span>
        </div>
      </motion.div>

      <Header />
      
      <TrustIndicators />

      {/* Hero Section */}
      <section className="relative w-full h-[85vh] overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/25 to-black/10 z-20"></div>
          <AnimatePresence mode='wait'>
            <motion.img
              key={currentIndex}
              src={heroImages[currentIndex]}
              alt={`Hero ${currentIndex + 1}`}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 2, ease: "easeInOut" }}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </AnimatePresence>
        </div>

        <div className="relative z-20 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
              className="max-w-2xl"
            >
              <h1 className="text-6xl md:text-8xl font-allura text-white mb-2 leading-tight">
                Tactile Luxury
              </h1>
              <h2 className="text-3xl md:text-5xl font-cormorant font-light text-white uppercase tracking-[0.3em] mb-8">
                Thoughtful Design
              </h2>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/collections/men-wallets"
                  className="bg-white text-black px-8 py-4 text-sm font-medium tracking-widest uppercase hover:bg-transparent hover:text-white border-2 border-white transition-all duration-300"
                >
                  Shop Men
                </Link>
                <Link
                  to="/collections/women-handbags"
                  className="bg-transparent text-white px-8 py-4 text-sm font-medium tracking-widest uppercase border-2 border-white hover:bg-white hover:text-black transition-all duration-300"
                >
                  Shop Women
                </Link>
                <Link
                  to="/collections/travel"
                  className="hidden md:inline-block bg-transparent text-white px-8 py-4 text-sm font-medium tracking-widest uppercase border-2 border-white hover:bg-white hover:text-black transition-all duration-300"
                >
                  Explore Collection
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="bg-white py-12 relative">
        {/* New Arrivals Badge */}
        <div className="fixed right-0 top-1/2 transform -translate-y-1/2 z-40">
          <motion.div
            initial={{ x: 20 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="bg-black text-white py-3 px-2"
          >
            <span className="text-xs font-medium tracking-widest uppercase" style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}>
              NEW ARRIVALS
            </span>
          </motion.div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Men's Wallets */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="relative h-[300px] overflow-hidden group cursor-pointer rounded-sm shadow-sm"
            >
              <div className="absolute inset-0">
                <img
                  src="https://images.unsplash.com/photo-1627123424574-724758594e93?w=800&auto=format&fit=crop&q=60"
                  alt="Men's Wallets"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                />
              </div>
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/70 transition-all duration-300"></div>
              <div className="absolute inset-0 flex flex-col justify-center items-center p-8 text-center">
                <h3 className="text-white text-2xl font-playfair font-medium mb-4">
                  Men's Wallets
                </h3>
                <Link
                  to="/collections/men-wallets"
                  className="inline-block"
                >
                  <span className="text-white text-sm font-medium tracking-widest uppercase border border-white px-6 py-2 hover:bg-white hover:text-black transition-all duration-300">
                    Shop Now
                  </span>
                </Link>
              </div>
            </motion.div>

            {/* Women's Wallets */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="relative h-[300px] overflow-hidden group cursor-pointer rounded-sm shadow-sm"
            >
              <div className="absolute inset-0">
                <img
                  src="https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&auto=format&fit=crop&q=60"
                  alt="Women's Wallets"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                />
              </div>
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/70 transition-all duration-300"></div>
              <div className="absolute inset-0 flex flex-col justify-center items-center p-8 text-center">
                <h3 className="text-white text-2xl font-playfair font-medium mb-4">
                  Women's Wallets
                </h3>
                <Link
                  to="/collections/women-wallets"
                  className="inline-block"
                >
                  <span className="text-white text-sm font-medium tracking-widest uppercase border border-white px-6 py-2 hover:bg-white hover:text-black transition-all duration-300">
                    Shop Now
                  </span>
                </Link>
              </div>
            </motion.div>

            {/* Men's Bags */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative h-[300px] overflow-hidden group cursor-pointer rounded-sm shadow-sm"
            >
              <div className="absolute inset-0">
                <img
                  src="https://images.unsplash.com/photo-1547949003-9792a18a2601?w=800&auto=format&fit=crop&q=60"
                  alt="Men's Bags"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                />
              </div>
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/70 transition-all duration-300"></div>
              <div className="absolute inset-0 flex flex-col justify-center items-center p-8 text-center">
                <h3 className="text-white text-2xl font-playfair font-medium mb-4">
                  Men's Bags
                </h3>
                <Link
                  to="/collections/men-bags"
                  className="inline-block"
                >
                  <span className="text-white text-sm font-medium tracking-widest uppercase border border-white px-6 py-2 hover:bg-white hover:text-black transition-all duration-300">
                    Shop Now
                  </span>
                </Link>
              </div>
            </motion.div>

            {/* Women's Bags */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.25 }}
              className="relative h-[300px] overflow-hidden group cursor-pointer rounded-sm shadow-sm"
            >
              <div className="absolute inset-0">
                <img
                  src="https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800&auto=format&fit=crop&q=60"
                  alt="Women's Bags"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                />
              </div>
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/70 transition-all duration-300"></div>
              <div className="absolute inset-0 flex flex-col justify-center items-center p-8 text-center">
                <h3 className="text-white text-2xl font-playfair font-medium mb-4">
                  Women's Bags
                </h3>
                <Link
                  to="/collections/women-handbags"
                  className="inline-block"
                >
                  <span className="text-white text-sm font-medium tracking-widest uppercase border border-white px-6 py-2 hover:bg-white hover:text-black transition-all duration-300">
                    Shop Now
                  </span>
                </Link>
              </div>
            </motion.div>

            {/* Travel Accessories */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative h-[300px] overflow-hidden group cursor-pointer rounded-sm shadow-sm"
            >
              <div className="absolute inset-0">
                <img
                  src="https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&auto=format&fit=crop&q=60"
                  alt="Travel Accessories"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                />
              </div>
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/70 transition-all duration-300"></div>
              <div className="absolute inset-0 flex flex-col justify-center items-center p-8 text-center">
                <h3 className="text-white text-2xl font-playfair font-medium mb-4">
                  Travel Essentials
                </h3>
                <Link
                  to="/collections/travel"
                  className="inline-block"
                >
                  <span className="text-white text-sm font-medium tracking-widest uppercase border border-white px-6 py-2 hover:bg-white hover:text-black transition-all duration-300">
                    Shop Now
                  </span>
                </Link>
              </div>
            </motion.div>

            {/* Belts */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="relative h-[300px] overflow-hidden group cursor-pointer rounded-sm shadow-sm"
            >
              <div className="absolute inset-0">
                <img
                  src="https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=800&auto=format&fit=crop&q=60"
                  alt="Belts"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                />
              </div>
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/70 transition-all duration-300"></div>
              <div className="absolute inset-0 flex flex-col justify-center items-center p-8 text-center">
                <h3 className="text-white text-2xl font-playfair font-medium mb-4">
                  Premium Belts
                </h3>
                <Link
                  to="/collections/accessories"
                  className="inline-block"
                >
                  <span className="text-white text-sm font-medium tracking-widest uppercase border border-white px-6 py-2 hover:bg-white hover:text-black transition-all duration-300">
                    Shop Now
                  </span>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* New Arrivals Section */}
      <section className="py-20 bg-soft-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <p className="text-leather-brown font-medium tracking-widest uppercase text-sm mb-2">
              Latest Collection
            </p>
            <h2 className="text-4xl md:text-5xl font-playfair text-black mb-4">
              New Arrivals
            </h2>
            <div className="w-20 h-0.5 bg-leather-brown mx-auto"></div>
          </motion.div>

          {loading && (
            <div className="text-center py-20">
              <p className="text-gray-600">Loading products...</p>
            </div>
          )}
          
          {error && (
            <div className="text-center py-20">
              <p className="text-red-600">{error}</p>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.slice(0, 4).map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden mb-4 bg-white">
                  <Link to={`/product/${product.slug}`}>
                    <div className="aspect-[3/4] overflow-hidden relative">
                      <ProductImage
                        src={getProductImage(product)}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      {product.is_featured && (
                        <div className="absolute top-4 left-4">
                          <span className="bg-black text-white text-xs font-medium px-3 py-1">FEATURED</span>
                        </div>
                      )}
                    </div>
                  </Link>
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
                  <div className="absolute bottom-0 left-0 right-0 bg-black/90 py-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-full group-hover:translate-y-0">
                    <div className="flex justify-center gap-4 px-4">
                      <Link 
                        to={`/product/${product.slug}`}
                        className="text-white text-xs font-medium tracking-wider uppercase flex items-center gap-2 hover:text-leather-brown transition-colors"
                      >
                        Quick View
                      </Link>
                      <button 
                        onClick={(e) => handleAddToCart(e, product.id)}
                        className="text-white text-xs font-medium tracking-wider uppercase flex items-center gap-2 hover:text-leather-brown transition-colors"
                      >
                        <ShoppingBag className="h-4 w-4" />
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
                
                <div className="text-center">
                  <Link to={`/product/${product.slug}`}>
                    <h3 className="text-base font-playfair text-black mb-2 group-hover:text-leather-brown transition-colors">
                      {product.name}
                    </h3>
                    <div className="flex items-center justify-center gap-1 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-leather-brown text-leather-brown" />
                      ))}
                    </div>
                    <p className="text-leather-brown font-semibold mb-4">{formatPrice(product.price)}</p>
                  </Link>
                  <button 
                    onClick={(e) => handleAddToCart(e, product.id)}
                    className="w-full bg-black text-white py-3 text-xs font-medium tracking-widest uppercase hover:bg-leather-brown transition-all duration-300"
                  >
                    Add to Cart
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center mt-12"
          >
            <Link
              to="/collections/men-wallets"
              className="inline-block border-2 border-black text-black px-12 py-4 text-sm font-medium tracking-widest uppercase hover:bg-black hover:text-white transition-all duration-300"
            >
              View All New Arrivals
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Best Sellers Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <p className="text-leather-brown font-medium tracking-widest uppercase text-sm mb-2">
              Editor's Picks
            </p>
            <h2 className="text-4xl md:text-5xl font-playfair text-black mb-4">
              Best Sellers
            </h2>
            <div className="w-20 h-0.5 bg-leather-brown mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {products.slice(0, 3).map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="group cursor-pointer"
              >
                <Link to={`/product/${product.slug}`}>
                  <div className="relative overflow-hidden mb-6 bg-soft-cream">
                    <div className="aspect-square overflow-hidden">
                      <ProductImage
                        src={getProductImage(product)}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                      />
                    </div>
                  </div>
                </Link>
                  
                  <div className="text-center">
                    <Link to={`/product/${product.slug}`}>
                      <h3 className="text-xl font-playfair text-black mb-2 group-hover:text-leather-brown transition-colors">
                        {product.name}
                      </h3>
                      <p className="text-xl font-semibold text-leather-brown mb-4">{formatPrice(product.price)}</p>
                    </Link>
                    <button 
                      onClick={(e) => handleAddToCart(e, product.id)}
                      className="bg-black text-white px-8 py-3 text-xs font-medium tracking-widest uppercase hover:bg-leather-brown transition-all duration-300"
                    >
                      Add to Cart
                    </button>
                  </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Handcrafted Excellence Section */}
      <section className="py-24 bg-black text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1000&auto=format&fit=crop&q=60"
                  alt="Handcrafted Excellence"
                  className="w-full aspect-[4/5] object-cover"
                />
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <p className="text-leather-brown font-medium tracking-widest uppercase text-sm mb-4">
                Our Craftsmanship
              </p>
              <h2 className="text-4xl md:text-5xl font-playfair mb-8">
                Handcrafted Excellence
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                Every piece in our collection is hand-finished by skilled artisans using traditional techniques passed down through generations. We believe in the beauty of imperfection and the character that comes with handcrafted quality.
              </p>
              <p className="text-gray-400 text-lg leading-relaxed mb-10">
                From the selection of premium full-grain leather to the final stitch, each step is performed with meticulous attention to detail, ensuring that your HUB product will age beautifully and last a lifetime.
              </p>
              <Link
                to="/about"
                className="inline-block border-2 border-leather-brown text-leather-brown px-10 py-4 text-sm font-medium tracking-widest uppercase hover:bg-leather-brown hover:text-white transition-all duration-300"
              >
                Our Story
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Made To Last Section */}
      <section className="py-24 bg-soft-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-2 lg:order-1"
            >
              <p className="text-leather-brown font-medium tracking-widest uppercase text-sm mb-4">
                Quality Promise
              </p>
              <h2 className="text-4xl md:text-5xl font-playfair text-black mb-8">
                Made To Last
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-8">
                We don't believe in fast fashion. Our products are designed to be your lifelong companions, developing a unique patina and character with every use.
              </p>
              <div className="space-y-6 mb-10">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-leather-brown rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-playfair text-black mb-1">Genuine Full-Grain Leather</h4>
                    <p className="text-gray-600">Sourced from the finest tanneries</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-leather-brown rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-playfair text-black mb-1">Handcrafted in Karachi</h4>
                    <p className="text-gray-600">Made with pride in Pakistan</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-leather-brown rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-playfair text-black mb-1">Lifetime Warranty</h4>
                    <p className="text-gray-600">Built to last generations</p>
                  </div>
                </div>
              </div>
              <Link
                to="/collections/men-wallets"
                className="inline-block bg-black text-white px-10 py-4 text-sm font-medium tracking-widest uppercase hover:bg-leather-brown transition-all duration-300"
              >
                Shop The Collection
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="order-1 lg:order-2"
            >
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=1000&auto=format&fit=crop&q=60"
                  alt="Made To Last"
                  className="w-full aspect-[4/5] object-cover shadow-luxury"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Customer Reviews Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <p className="text-leather-brown font-medium tracking-widest uppercase text-sm mb-2">
              Testimonials
            </p>
            <h2 className="text-4xl md:text-5xl font-playfair text-black mb-4">
              What Our Customers Say
            </h2>
            <div className="w-20 h-0.5 bg-leather-brown mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Khan",
                location: "Karachi",
                review: "Absolutely love my HUB wallet! The quality is exceptional and it's aged beautifully over the past year. Will definitely be buying more products.",
                rating: 5,
                image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&auto=format&fit=crop&q=60"
              },
              {
                name: "Ahmed Hassan",
                location: "Lahore",
                review: "The craftsmanship is remarkable. You can really feel the attention to detail in every stitch. Best leather products I've ever owned.",
                rating: 5,
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop&q=60"
              },
              {
                name: "Fatima Ali",
                location: "Islamabad",
                review: "I bought a handbag as a gift and it was such a hit! The packaging was beautiful and the quality exceeded my expectations. Highly recommend!",
                rating: 5,
                image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&auto=format&fit=crop&q=60"
              }
            ].map((review, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="bg-soft-cream p-8"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-leather-brown text-leather-brown" />
                  ))}
                </div>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  "{review.review}"
                </p>
                <div className="flex items-center gap-4">
                  <img
                    src={review.image}
                    alt={review.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-playfair text-black">{review.name}</p>
                    <p className="text-gray-500 text-sm">{review.location}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram Gallery */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <p className="text-leather-brown font-medium tracking-widest uppercase text-sm mb-2">
              Follow Us
            </p>
            <h2 className="text-4xl md:text-5xl font-playfair text-white mb-4">
              @HUB_OFFICIAL
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2">
            {[
              "https://images.unsplash.com/photo-1627123424574-724758594e93?w=400&auto=format&fit=crop&q=60",
              "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400&auto=format&fit=crop&q=60",
              "https://images.unsplash.com/photo-1547949003-9792a18a2601?w=400&auto=format&fit=crop&q=60",
              "https://images.unsplash.com/photo-1601592996763-f05c4c2c2e69?w=400&auto=format&fit=crop&q=60",
              "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=400&auto=format&fit=crop&q=60",
              "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&auto=format&fit=crop&q=60"
            ].map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                className="aspect-square overflow-hidden group cursor-pointer"
              >
                <img
                  src={image}
                  alt={`Instagram ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Instagram className="h-8 w-8 text-white" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-warm-beige">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-leather-brown font-medium tracking-widest uppercase text-sm mb-4">
              Stay Connected
            </p>
            <h2 className="text-4xl md:text-5xl font-playfair text-black mb-6">
              Join The HUB Family
            </h2>
            <p className="text-gray-700 text-lg mb-10 max-w-2xl mx-auto">
              Subscribe to receive updates on new arrivals, special offers, and exclusive promotions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-6 py-4 bg-white border-none text-gray-700 focus:outline-none focus:ring-2 focus:ring-leather-brown"
              />
              <button className="bg-black text-white px-8 py-4 text-sm font-medium tracking-widest uppercase hover:bg-leather-brown transition-all duration-300">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div>
              <h3 className="text-3xl font-playfair font-bold mb-6">HUB</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                For the love of leather. Crafting heirloom quality leather goods in Pakistan since 2001.
              </p>
              <div className="flex gap-4">
                <a href="#" className="text-gray-400 hover:text-leather-brown transition-colors">
                  <Facebook className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-leather-brown transition-colors">
                  <Instagram className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-leather-brown transition-colors">
                  <Twitter className="h-6 w-6" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-medium tracking-widest uppercase mb-6">Shop</h4>
              <ul className="space-y-3">
                <li><Link to="/new-arrivals" className="text-gray-400 text-sm hover:text-leather-brown transition-colors">New Arrivals</Link></li>
                <li><Link to="/collections/men-wallets" className="text-gray-400 text-sm hover:text-leather-brown transition-colors">Men's Wallets</Link></li>
                <li><Link to="/collections/men-bags" className="text-gray-400 text-sm hover:text-leather-brown transition-colors">Men's Bags</Link></li>
                <li><Link to="/collections/women-wallets" className="text-gray-400 text-sm hover:text-leather-brown transition-colors">Women's Wallets</Link></li>
                <li><Link to="/collections/women-handbags" className="text-gray-400 text-sm hover:text-leather-brown transition-colors">Women's Handbags</Link></li>
                <li><Link to="/collections/travel" className="text-gray-400 text-sm hover:text-leather-brown transition-colors">Travel Accessories</Link></li>
                <li><Link to="/collections/accessories" className="text-gray-400 text-sm hover:text-leather-brown transition-colors">Belts</Link></li>
                <li><Link to="/gifting" className="text-gray-400 text-sm hover:text-leather-brown transition-colors">Gifting</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-medium tracking-widest uppercase mb-6">My Account</h4>
              <ul className="space-y-3">
                <li><Link to="/account" className="text-gray-400 text-sm hover:text-leather-brown transition-colors">My Account</Link></li>
                <li><Link to="/wishlist" className="text-gray-400 text-sm hover:text-leather-brown transition-colors">Wishlist</Link></li>
                <li><Link to="/cart" className="text-gray-400 text-sm hover:text-leather-brown transition-colors">Shopping Bag</Link></li>
                <li><Link to="/search" className="text-gray-400 text-sm hover:text-leather-brown transition-colors">Search</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-medium tracking-widest uppercase mb-6">Information</h4>
              <ul className="space-y-3">
                <li><Link to="/about" className="text-gray-400 text-sm hover:text-leather-brown transition-colors">About Us</Link></li>
                <li><Link to="/shipping-returns" className="text-gray-400 text-sm hover:text-leather-brown transition-colors">Shipping & Returns</Link></li>
                <li><Link to="/faq" className="text-gray-400 text-sm hover:text-leather-brown transition-colors">FAQ</Link></li>
                <li><Link to="/contact" className="text-gray-400 text-sm hover:text-leather-brown transition-colors">Contact Us</Link></li>
                <li><Link to="/loyalty-program" className="text-gray-400 text-sm hover:text-leather-brown transition-colors">Loyalty Program</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-medium tracking-widest uppercase mb-6">Contact</h4>
              <ul className="space-y-3 text-gray-400 text-sm">
                <li>info@hub.com.pk</li>
                <li>+92 21 1234 5678</li>
                <li>123 Main Street, Karachi, Pakistan</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <p className="text-gray-500 text-sm text-center">
              © 2024 HUB. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Home
