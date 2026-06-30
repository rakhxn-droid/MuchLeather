

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

export default function LoyaltyProgram() {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-black text-white text-center py-2">
        <p className="text-xs font-medium tracking-wide">
          GET FREE DELIVERY ON ALL ORDERS OF RS 1990 AND ABOVE, WITH DELIVERY WITHIN 3-7 DAYS
        </p>
      </div>
      <Header />
      
      <TrustIndicators />
      
      <div className="bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl font-playfair uppercase tracking-wider mb-4">
              Loyalty Program
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Earn rewards every time you shop with us
            </p>
          </motion.div>
        </div>
      </div>
      
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {[
            { level: "Bronze", points: "0-499", benefits: ["5% discount on purchases", "Early access to sales"] },
            { level: "Silver", points: "500-999", benefits: ["10% discount on purchases", "Early access to sales", "Free gift with orders over Rs 5,000"] },
            { level: "Gold", points: "1000+", benefits: ["15% discount on purchases", "Free shipping on all orders", "Early access to sales", "Priority customer support", "Exclusive products"] }
          ].map((tier, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`p-8 ${index === 2 ? 'bg-leather-brown text-white border-2 border-leather-brown' : 'bg-gray-50 border-2 border-gray-200'}`}
            >
              <h3 className="text-2xl font-playfair mb-3">{tier.level}</h3>
              <p className="text-sm mb-6 opacity-80">{tier.points} points</p>
              <ul className="space-y-3">
                {tier.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="text-lg">✓</span>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-gray-50 p-10 text-center"
        >
          <h2 className="text-3xl font-playfair text-black mb-4">How to Earn Points</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div>
              <div className="text-4xl font-bold text-leather-brown mb-2">1 pt</div>
              <p className="text-gray-700">Per Rs 100 spent</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-leather-brown mb-2">50 pts</div>
              <p className="text-gray-700">For creating an account</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-leather-brown mb-2">100 pts</div>
              <p className="text-gray-700">For referring a friend</p>
            </div>
          </div>
        </motion.div>
      </main>
      
      <Footer />
    </div>
  )
}

