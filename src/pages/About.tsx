import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Header from '../components/Header'
import TrustIndicators from '../components/TrustIndicators'

const Footer = () => (
  <footer className="bg-black text-white pt-20 pb-10">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="border-t border-gray-800 pt-8">
        <p className="text-gray-500 text-sm text-center">© 2024 HUB. All rights reserved.</p>
      </div>
    </div>
  </footer>
)

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-black text-white text-center py-2">
        <p className="text-xs font-medium tracking-wide">
          GET FREE DELIVERY ON ALL ORDERS OF RS 1990 AND ABOVE, WITH DELIVERY WITHIN 3-7 DAYS
        </p>
      </div>
      <Header />
      
      <TrustIndicators />
      
      <section className="relative">
        <div className="relative h-[60vh] overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=2000&auto=format&fit=crop&q=60"
            alt="HUB workshop"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-center"
            >
              <h1 className="text-6xl md:text-8xl font-allura text-white mb-4">
                Our Story
              </h1>
              <h2 className="text-3xl md:text-4xl font-playfair text-white font-light uppercase tracking-widest">
                Since 2001
              </h2>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <p className="text-leather-brown font-medium tracking-widest uppercase text-sm mb-4">
              For the Love of Leather
            </p>
            <h2 className="text-4xl md:text-5xl font-playfair text-black mb-10">
              Four Generations of Craftsmanship
            </h2>
            <div className="text-gray-700 text-lg leading-relaxed space-y-6 text-left">
              <p>
                HUB was born from a simple idea: make leather goods that last. In 2001, in a small workshop in Karachi, 
                we started with just a handful of tools and a passion for quality.
              </p>
              <p>
                Today, every piece still carries that same spirit. We don't mass-produce. We craft. Each wallet, bag, 
                and accessory is hand-finished by a single artisan from start to finish.
              </p>
              <p>
                Our leather comes from the finest tanneries, and we work only with full-grain hides that develop 
                a beautiful patina over time, telling the story of their owner.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0 }}
              className="text-center"
            >
              <div className="text-5xl font-playfair font-bold text-leather-brown mb-4">2001</div>
              <p className="text-gray-700">Founded in Karachi</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center"
            >
              <div className="text-5xl font-playfair font-bold text-leather-brown mb-4">30,000+</div>
              <p className="text-gray-700">Happy Customers</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <div className="text-5xl font-playfair font-bold text-leather-brown mb-4">4th</div>
              <p className="text-gray-700">Generation Artisans</p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-leather-brown font-medium tracking-widest uppercase text-sm mb-4">
              Visit Us
            </p>
            <h2 className="text-4xl md:text-5xl font-playfair text-black mb-6">
              Come See Our Workshop
            </h2>
            <p className="text-gray-700 text-lg mb-10">
              D-49, Block 4, Clifton, Karachi, Pakistan
            </p>
            <Link
              to="/collections/men-wallets"
              className="inline-block border-2 border-black text-black px-12 py-4 text-sm font-medium tracking-widest uppercase hover:bg-black hover:text-white transition-all duration-300"
            >
              Shop Our Collection
            </Link>
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </div>
  )
}
