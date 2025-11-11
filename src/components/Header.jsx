import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function Header() {
  const total = useSelector(state => state.cart.totalQuantity)
  return (
    <header>
      <h2>E-Plant</h2>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/cart">🛒 ({total})</Link>
      </nav>
    </header>
  )
}
