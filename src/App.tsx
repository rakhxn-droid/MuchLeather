
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Product from './pages/Product'
import Collection from './pages/Collection'
import About from './pages/About'
import Contact from './pages/Contact'
import ShippingReturns from './pages/ShippingReturns'
import FAQ from './pages/FAQ'
import LoyaltyProgram from './pages/LoyaltyProgram'
import Gifting from './pages/Gifting'
import NewArrivals from './pages/NewArrivals'
import Wishlist from './pages/Wishlist'
import Cart from './pages/Cart'
import Account from './pages/Account'
import SearchPage from './pages/Search'
import Checkout from './pages/Checkout'
import './index.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/collections/:collection" element={<Collection />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/shipping-returns" element={<ShippingReturns />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/loyalty-program" element={<LoyaltyProgram />} />
        <Route path="/gifting" element={<Gifting />} />
        <Route path="/new-arrivals" element={<NewArrivals />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/account" element={<Account />} />
        <Route path="/search" element={<SearchPage />} />
      </Routes>
    </Router>
  )
}

export default App
