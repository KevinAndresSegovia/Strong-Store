import React from 'react'
import carrito from '../assets/carrito.svg'

const CartWidget = () => {
  return (
      <div>
      <img src={carrito} className="carrito" alt="carrito" />
      <p>0</p>
      </div>
  )
}

export default CartWidget