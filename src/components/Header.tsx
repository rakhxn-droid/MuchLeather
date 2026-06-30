
import { Link, useLocation } from 'react-router-dom'
import { Search, User, ShoppingBag, Heart } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useRef, useEffect } from 'react'
import { useShop } from '../context/ShopContext'

const Header = () => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const hoverTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const location = useLocation()
  const { cartItems } = useShop()
  
  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0)

  // Close dropdown when route changes
  useEffect(() => {
    setOpenDropdown(null)
  }, [location])

  const openDropdownHandler = (name: string) => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current)
    }
    setOpenDropdown(name)
  }

  const closeDropdownHandler = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setOpenDropdown(null)
    }, 50)
  }

  const closeDropdownOnClick = () => {
    setOpenDropdown(null)
  }

  const dropdownItems = {
    men: [
      { name: "Wallets", path: "/collections/men-wallets" },
      { name: "Bags", path: "/collections/men-bags" },
      { name: "Belts", path: "/collections/accessories" },
      { name: "Travel Accessories", path: "/collections/travel" }
    ],
    women: [
      { name: "Wallets", path: "/collections/women-wallets" },
      { name: "Handbags", path: "/collections/women-handbags" },
      { name: "Clutches", path: "/collections/women-clutches" },
      { name: "Accessories", path: "/collections/accessories" }
    ],
    information: [
      { name: "About Us", path: "/about" },
      { name: "Contact", path: "/contact" },
      { name: "Shipping & Returns", path: "/shipping-returns" },
      { name: "FAQ", path: "/faq" }
    ]
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="sticky top-0 z-50 bg-white shadow-sm"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col">
          <div className="flex items-center justify-between h-16 pt-2">
            <div className="w-10"></div>
            
            <Link to="/" className="text-3xl font-playfair font-bold text-black tracking-tight">
              HUB
            </Link>
            
            <div className="flex items-center space-x-6">
              <Link to="/search" className="hover:text-leather-brown transition-colors">
                <Search className="h-5 w-5 text-black" />
              </Link>
              <Link to="/wishlist" className="hover:text-leather-brown transition-colors">
                <Heart className="h-5 w-5 text-black" />
              </Link>
              <Link to="/account" className="hover:text-leather-brown transition-colors">
                <User className="h-5 w-5 text-black" />
              </Link>
              <Link to="/cart" className="hover:text-leather-brown transition-colors relative">
                <ShoppingBag className="h-5 w-5 text-black" />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-leather-brown text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-medium">{cartCount}</span>
                )}
              </Link>
            </div>
          </div>
          
          <nav className="flex items-center justify-center space-x-10 pb-4">
            <Link to="/new-arrivals" className="text-sm font-medium tracking-wider uppercase text-black hover:text-leather-brown transition-colors pb-4">
              New Arrivals
            </Link>
            
            {/* Men Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => openDropdownHandler('men')}
              onMouseLeave={closeDropdownHandler}
            >
              <button className="text-sm font-medium tracking-wider uppercase text-black hover:text-leather-brown transition-colors flex items-center gap-1 pb-4">
                Men
                <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              <AnimatePresence>
                {openDropdown === 'men' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.15, ease: "easeOut" }}
                    className="absolute top-full left-0 w-56 bg-white shadow-lg border border-gray-100 z-50"
                  >
                    <div className="py-2">
                      {dropdownItems.men.map((item, index) => (
                        <Link
                          key={index}
                          to={item.path}
                          onClick={closeDropdownOnClick}
                          className="block px-4 py-3 text-sm text-gray-700 hover:bg-soft-cream hover:text-leather-brown transition-colors"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            
            {/* Women Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => openDropdownHandler('women')}
              onMouseLeave={closeDropdownHandler}
            >
              <button className="text-sm font-medium tracking-wider uppercase text-black hover:text-leather-brown transition-colors flex items-center gap-1 pb-4">
                Women
                <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              <AnimatePresence>
                {openDropdown === 'women' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.15, ease: "easeOut" }}
                    className="absolute top-full left-0 w-56 bg-white shadow-lg border border-gray-100 z-50"
                  >
                    <div className="py-2">
                      {dropdownItems.women.map((item, index) => (
                        <Link
                          key={index}
                          to={item.path}
                          onClick={closeDropdownOnClick}
                          className="block px-4 py-3 text-sm text-gray-700 hover:bg-soft-cream hover:text-leather-brown transition-colors"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            
            <Link to="/gifting" className="text-sm font-medium tracking-wider uppercase text-black hover:text-leather-brown transition-colors pb-4">
              Gifting
            </Link>
            
            <Link to="/loyalty-program" className="text-sm font-medium tracking-wider uppercase text-black hover:text-leather-brown transition-colors pb-4">
              Loyalty Program
            </Link>
            
            {/* Information Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => openDropdownHandler('information')}
              onMouseLeave={closeDropdownHandler}
            >
              <button className="text-sm font-medium tracking-wider uppercase text-black hover:text-leather-brown transition-colors flex items-center gap-1 pb-4">
                Information
                <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              <AnimatePresence>
                {openDropdown === 'information' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.15, ease: "easeOut" }}
                    className="absolute top-full right-0 w-56 bg-white shadow-lg border border-gray-100 z-50"
                  >
                    <div className="py-2">
                      {dropdownItems.information.map((item, index) => (
                        <Link
                          key={index}
                          to={item.path}
                          onClick={closeDropdownOnClick}
                          className="block px-4 py-3 text-sm text-gray-700 hover:bg-soft-cream hover:text-leather-brown transition-colors"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </nav>
        </div>
      </div>
    </motion.header>
  )
}

export default Header
