import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
  name: 'cart',
  initialState: { items: [], totalQuantity: 0, totalPrice: 0 },
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload
      const existing = state.items.find(p => p.id === item.id)
      if (!existing) {
        state.items.push({ ...item, quantity: 1 })
      } else {
        existing.quantity++
      }
      state.totalQuantity++
      state.totalPrice += item.price
    },
    removeFromCart: (state, action) => {
      const id = action.payload
      const existing = state.items.find(p => p.id === id)
      if (existing) {
        state.totalQuantity -= existing.quantity
        state.totalPrice -= existing.quantity * existing.price
        state.items = state.items.filter(p => p.id !== id)
      }
    },
    increaseQty: (state, action) => {
      const item = state.items.find(p => p.id === action.payload)
      if (item) {
        item.quantity++
        state.totalQuantity++
        state.totalPrice += item.price
      }
    },
    decreaseQty: (state, action) => {
      const item = state.items.find(p => p.id === action.payload)
      if (item && item.quantity > 1) {
        item.quantity--
        state.totalQuantity--
        state.totalPrice -= item.price
      }
    },
  }
})

export const { addToCart, removeFromCart, increaseQty, decreaseQty } = cartSlice.actions
export default cartSlice.reducer

