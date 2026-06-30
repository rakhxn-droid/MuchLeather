

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

const faqs = [
  {
    question: "What is full-grain leather?",
    answer: "Full-grain leather is the highest quality leather available. It comes from the top layer of the hide and includes all of the natural grain. This type of leather develops a beautiful patina over time and ages gracefully."
  },
  {
    question: "How do I care for my HUB products?",
    answer: "We recommend using a high-quality leather conditioner every 6-12 months. Avoid exposure to direct sunlight for extended periods and keep away from water. If your product gets wet, let it air dry naturally."
  },
  {
    question: "Do you offer custom engraving?",
    answer: "Yes! We offer custom engraving on many of our products. Please look for the custom engraving option on individual product pages or contact us for special requests."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards, debit cards, bank transfers, and cash on delivery for orders within Pakistan."
  },
  {
    question: "Can I track my order?",
    answer: "Absolutely! Once your order ships, you'll receive an email with a tracking number and link to track your package."
  },
  {
    question: "Do you ship internationally?",
    answer: "Currently, we only ship within Pakistan. For international inquiries, please contact us and we'll try to assist you."
  }
]

export default function FAQ() {
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
              FAQ
            </h1>
          </motion.div>
        </div>
      </div>
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gray-50 p-8"
            >
              <h3 className="text-xl font-playfair text-black mb-4">{faq.question}</h3>
              <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
            </motion.div>
          ))}
        </div>
      </main>
      
      <Footer />
    </div>
  )
}

