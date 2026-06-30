import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useState, useRef } from 'react';
import Header from '../components/Header';
import TrustIndicators from '../components/TrustIndicators';
import ProductImage from '../components/ProductImage';
import { useShop } from '../context/ShopContext';

const Footer = () => (
  <footer className="bg-black text-white pt-20 pb-10">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="border-t border-gray-800 pt-8">
        <p className="text-gray-500 text-sm text-center">© 2024 HUB. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default function Checkout() {
  const { cartItems } = useShop();
  const [formData, setFormData] = useState({
    email: '',
    lastName: '',
    address: '',
    city: '',
    phone: '',
  });
  const [errors, setErrors] = useState<Record<string, boolean>>({});
  
  // Refs for each required field
  const emailRef = useRef<HTMLInputElement>(null);
  const lastNameRef = useRef<HTMLInputElement>(null);
  const addressRef = useRef<HTMLInputElement>(null);
  const cityRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);

  const subtotal = cartItems.reduce((sum, item) => {
    const priceNum = parseInt(item.product.price.replace(/\D/g, ''));
    return sum + (priceNum * item.quantity);
  }, 0);

  const shipping = 0;
  const total = subtotal + shipping;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: false }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, boolean> = {};
    if (!formData.email.trim()) newErrors.email = true;
    if (!formData.lastName.trim()) newErrors.lastName = true;
    if (!formData.address.trim()) newErrors.address = true;
    if (!formData.city.trim()) newErrors.city = true;
    if (!formData.phone.trim()) newErrors.phone = true;
    
    setErrors(newErrors);
    
    // Scroll to first error field
    if (Object.keys(newErrors).length > 0) {
      const firstErrorKey = Object.keys(newErrors)[0];
      const refs: Record<string, React.RefObject<HTMLInputElement>> = {
        email: emailRef,
        lastName: lastNameRef,
        address: addressRef,
        city: cityRef,
        phone: phoneRef,
      };
      refs[firstErrorKey].current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      refs[firstErrorKey].current?.focus();
    }
    
    return Object.keys(newErrors).length === 0;
  };

  const handlePayNow = () => {
    if (validateForm()) {
      window.open('https://ipg2.apps.net.pk/', '_blank');
    }
  };

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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-playfair text-black uppercase tracking-wide">
              Checkout
            </h1>
          </motion.div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Checkout Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="lg:col-span-2"
          >
            <div className="bg-white border border-gray-200 p-8">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-playfair text-black">Contact</h2>
                <p className="text-sm text-gray-600">
                  Already have an account? <Link to="/account" className="text-leather-brown hover:underline">Sign in</Link>
                </p>
              </div>

              <div className="mb-8">
                <input
                  ref={emailRef}
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className={`w-full px-4 py-3 border focus:outline-none focus:ring-2 focus:ring-leather-brown focus:border-transparent mb-2 ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                />
                {errors.email && <p className="text-red-500 text-sm mb-4">Enter an email</p>}
              </div>

              <h2 className="text-2xl font-playfair text-black mb-6">Delivery</h2>

              <div className="mb-8 space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <select className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-leather-brown focus:border-transparent">
                    <option>Pakistan</option>
                  </select>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="First name (optional)"
                    className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-leather-brown focus:border-transparent"
                  />
                  <input
                    ref={lastNameRef}
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Last name"
                    className={`w-full px-4 py-3 border focus:outline-none focus:ring-2 focus:ring-leather-brown focus:border-transparent ${errors.lastName ? 'border-red-500' : 'border-gray-300'}`}
                  />
                </div>
                <input
                  ref={addressRef}
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Address"
                  className={`w-full px-4 py-3 border focus:outline-none focus:ring-2 focus:ring-leather-brown focus:border-transparent ${errors.address ? 'border-red-500' : 'border-gray-300'}`}
                />
                {errors.address && <p className="text-red-500 text-sm">Address is required</p>}
                <input
                  type="text"
                  placeholder="Apartment, suite, etc. (optional)"
                  className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-leather-brown focus:border-transparent"
                />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    ref={cityRef}
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    placeholder="City"
                    className={`w-full px-4 py-3 border focus:outline-none focus:ring-2 focus:ring-leather-brown focus:border-transparent ${errors.city ? 'border-red-500' : 'border-gray-300'}`}
                  />
                  {errors.city && <p className="text-red-500 text-sm">City is required</p>}
                  <input
                    type="text"
                    placeholder="Postal code (optional)"
                    className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-leather-brown focus:border-transparent"
                  />
                </div>
                <input
                  ref={phoneRef}
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone"
                  className={`w-full px-4 py-3 border focus:outline-none focus:ring-2 focus:ring-leather-brown focus:border-transparent ${errors.phone ? 'border-red-500' : 'border-gray-300'}`}
                />
                {errors.phone && <p className="text-red-500 text-sm">Enter a phone number</p>}
                <div className="flex items-center gap-2 mt-4">
                  <input type="checkbox" id="save-info" className="h-4 w-4 text-leather-brown" />
                  <label htmlFor="save-info" className="text-sm text-gray-600">Save this information for next time</label>
                </div>
              </div>

              <h2 className="text-2xl font-playfair text-black mb-6">Shipping method</h2>
              <div className="mb-8 bg-soft-cream p-4 border border-leather-brown rounded">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <input type="radio" id="free-shipping" name="shipping" defaultChecked className="h-4 w-4 text-leather-brown" />
                    <label htmlFor="free-shipping" className="text-sm font-medium text-black uppercase tracking-wide">Free shipping</label>
                  </div>
                  <span className="font-semibold text-leather-brown">FREE</span>
                </div>
              </div>

              <h2 className="text-2xl font-playfair text-black mb-6">Payment</h2>
              <div className="mb-6">
                <p className="text-xs text-gray-500 mb-4">All transactions are secure and encrypted.</p>
                <div className="bg-gray-50 p-4 border border-gray-200 rounded mb-4">
                  <div className="flex items-center gap-2 mb-4">
                    <input type="radio" id="payfast" name="payment" defaultChecked className="h-4 w-4 text-leather-brown" />
                    <label htmlFor="payfast" className="text-sm font-medium text-black">PAYFAST/PAY via Debit/Credit Wallet/Bank Account</label>
                  </div>
                  <img
                    src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&auto=format&fit=crop&q=60"
                    alt="Payment methods"
                    className="h-12 object-contain"
                  />
                  <p className="text-xs text-gray-500 mt-2">
                    You'll be redirected to PAYFAST via Debit/Credit Wallet/Bank Account to complete your purchase.
                  </p>
                </div>
                <div className="mb-4 flex items-center gap-2">
                  <input type="radio" id="cod" name="payment" className="h-4 w-4 text-leather-brown" />
                  <label htmlFor="cod" className="text-sm font-medium text-black">Cash on Delivery (COD)</label>
                </div>
                <div className="flex items-center gap-2">
                  <input type="radio" id="bank-deposit" name="payment" className="h-4 w-4 text-leather-brown" />
                  <label htmlFor="bank-deposit" className="text-sm font-medium text-black">Bank Deposit</label>
                </div>
              </div>

              <h2 className="text-2xl font-playfair text-black mb-6">Billing address</h2>
              <div className="mb-8">
                <div className="bg-soft-cream p-4 border border-leather-brown rounded mb-4">
                  <div className="flex items-center gap-2">
                    <input type="radio" id="same-shipping" name="billing" defaultChecked className="h-4 w-4 text-leather-brown" />
                    <label htmlFor="same-shipping" className="text-sm font-medium text-black">Same as shipping address</label>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <input type="radio" id="different-billing" name="billing" className="h-4 w-4 text-leather-brown" />
                  <label htmlFor="different-billing" className="text-sm font-medium text-black">Use a different billing address</label>
                </div>
              </div>

              <div className="flex items-center justify-between mt-8">
                <Link to="/cart" className="text-leather-brown hover:underline text-sm">← Back to cart</Link>
                <button
                  onClick={handlePayNow}
                  className="bg-black text-white px-12 py-4 text-sm font-medium tracking-widest uppercase hover:bg-leather-brown transition-all duration-300"
                >
                  Pay now
                </button>
              </div>
            </div>
          </motion.div>

          {/* Order Summary */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-1"
          >
            <div className="bg-gray-50 p-8">
              <h3 className="text-2xl font-playfair text-black mb-8">Order Summary</h3>

              <div className="space-y-6 mb-8">
                {cartItems.map(({ product, quantity }) => (
                  <div key={product.id} className="flex gap-4">
                    <div className="w-20 h-20 relative bg-gray-200 rounded">
                      <ProductImage
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover rounded"
                      />
                      <span className="absolute -top-2 -right-2 bg-leather-brown text-white text-xs w-6 h-6 rounded-full flex items-center justify-center font-medium">
                        {quantity}
                      </span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between">
                        <div>
                          <h4 className="text-base font-playfair text-black">{product.name}</h4>
                        </div>
                        <p className="font-semibold text-leather-brown">{product.price}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mb-6">
                <div className="flex items-center gap-2 mb-2">
                  <input
                    type="text"
                    placeholder="Discount code"
                    className="flex-1 px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-leather-brown focus:border-transparent"
                  />
                  <button className="bg-black text-white px-4 py-3 text-sm font-medium uppercase hover:bg-leather-brown transition-colors">
                    Apply
                  </button>
                </div>
              </div>

              <div className="border-t border-gray-300 pt-4 space-y-4 mb-6">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-semibold">Rs. {subtotal.toLocaleString()}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span className="font-semibold">FREE</span>
                </div>
              </div>

              <div className="border-t border-gray-300 pt-4 flex items-center justify-between">
                <span className="text-lg font-semibold text-black">Total</span>
                <div>
                  <p className="text-xs text-gray-500">Including Rs. {(subtotal * 0.18).toLocaleString()} in taxes</p>
                  <span className="text-xl font-semibold text-leather-brown">Rs. {total.toLocaleString()}</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
