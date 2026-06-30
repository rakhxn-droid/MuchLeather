
import { Users, Truck, Gift } from 'lucide-react'
import { motion } from 'framer-motion'

const TrustIndicators = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.8, delay: 0.3 }}
    className="bg-white border-y border-gray-200"
  >
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-center py-3">
        <div className="flex items-center space-x-8">
          <div className="flex flex-col items-center text-gray-700">
            <Users className="h-6 w-6 mb-1" />
            <span className="text-xs font-medium">30,000+ Loyal Customers</span>
          </div>
          <div className="h-8 w-px bg-gray-300"></div>
          <div className="flex flex-col items-center text-gray-700">
            <Truck className="h-6 w-6 mb-1" />
            <span className="text-xs font-medium">Fast Shipping</span>
          </div>
          <div className="h-8 w-px bg-gray-300"></div>
          <div className="flex flex-col items-center text-gray-700">
            <Gift className="h-6 w-6 mb-1" />
            <span className="text-xs font-medium">Complimentary Gift Packing</span>
          </div>
        </div>
      </div>
    </div>
  </motion.div>
)

export default TrustIndicators
