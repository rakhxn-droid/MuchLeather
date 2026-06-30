

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

export default function ShippingReturns() {
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
              Shipping & Returns
            </h1>
          </motion.div>
        </div>
      </div>
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-playfair text-black mb-6">Shipping</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                We offer free shipping on all orders over Rs 1,990. Orders below this amount have a flat shipping fee of Rs 199.
              </p>
              <h3 className="text-xl font-playfair text-black mt-8 mb-3">Delivery Times</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Karachi: 2-3 business days</li>
                <li>Major cities (Lahore, Islamabad): 3-5 business days</li>
                <li>Other areas: 5-7 business days</li>
              </ul>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-3xl font-playfair text-black mb-6">Returns & Exchanges</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                We want you to love your purchase. If you're not completely satisfied, you can return or exchange your item within 14 days of delivery.
              </p>
              <h3 className="text-xl font-playfair text-black mt-8 mb-3">Return Conditions</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Item must be unused and in original packaging</li>
                <li>All tags must be attached</li>
                <li>Return shipping costs are the responsibility of the customer</li>
                <li>Refunds will be processed within 7-10 business days of receiving the returned item</li>
              </ul>
              <p className="mt-6">
                For return requests, please contact us at returns@hub.com.pk with your order number.
              </p>
            </div>
          </motion.div>
        </div>
      </main>
      
      <Footer />
    </div>
  )
}

