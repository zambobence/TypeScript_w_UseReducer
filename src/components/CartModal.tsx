import React from 'react'

type Props = {
    closeCart: () => void
}

const CartModal = ({closeCart}: Props) => {
  return (
    <div>
    CartModal
    <button onClick={closeCart}>Close Cart</button>
    </div>
  )
}

export default CartModal