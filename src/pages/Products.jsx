import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../redux/cartSlice'

const products = [
  { id: 1, name: 'Snake Plant', price: 10, category: 'Indoor', img: 'https://i.imgur.com/a7ZP0uD.jpg' },
  { id: 2, name: 'Aloe Vera', price: 8, category: 'Succulent', img: 'https://i.imgur.com/UPM9vOa.jpg' },
  { id: 3, name: 'Peace Lily', price: 12, category: 'Flowering', img: 'https://i.imgur.com/pj0yZCX.jpg' },
  { id: 4, name: 'Spider Plant', price: 9, category: 'Indoor', img: 'https://i.imgur.com/GFVZcUg.jpg' },
  { id: 5, name: 'Jade Plant', price: 11, category: 'Succulent', img: 'https://i.imgur.com/h4ULxSf.jpg' },
  { id: 6, name: 'Orchid', price: 15, category: 'Flowering', img: 'https://i.imgur.com/X0zIv7z.jpg' }
]

export default function Products() {
  const dispatch = useDispatch()
  const cartItems = useSelector(state => state.cart.items)

  return (
    <div className="products">
      <h2>Our Plants</h2>
      {['Indoor', 'Succulent', 'Flowering'].map(cat => (
        <div key={cat}>
          <h3>{cat}</h3>
          <div className="grid">
            {products.filter(p => p.category === cat).map(p => {
              const inCart = cartItems.find(item => item.id === p.id)
              return (
                <div className="product" key={p.id}>
                  <img src={p.img} alt={p.name} />
                  <h4>{p.name}</h4>
                  <p>${p.price}</p>
                  <button disabled={!!inCart} onClick={() => dispatch(addToCart(p))}>
                    {inCart ? 'Added' : 'Add to Cart'}
                  </button>
                </div>
              )
            })}
          </div>
        </div>
      ))}
    </div>
  )
}
