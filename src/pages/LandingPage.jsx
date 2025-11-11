import { Link } from 'react-router-dom'
import './LandingPage.css'

export default function LandingPage() {
  return (
    <div className="landing">
      <h1>E-Plant Shopping</h1>
      <p>
        Welcome to E-Plant — your one-stop online shop for beautiful, healthy houseplants.
        Explore our wide variety of plants and bring nature into your home!
      </p>
      <Link to="/products" className="btn">Get Started</Link>
    </div>
  )
}
