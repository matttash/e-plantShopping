import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import Products from './pages/Products'
import CartPage from './pages/CartPage'
import Header from './components/Header'

export default function App() {
  return (
    <BrowserRouter basename="/e-plantShopping">
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </BrowserRouter>
  )
}
