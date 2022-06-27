import React from 'react';
import styled from './Cart.module.css'

const Cart = (props) => {
  const cartItems = <ul className={styled['cart-items']}>{
    [{id: 'c1', name: 'Sushi', amount:2, price: 12.99}]
      .map(item => <li>{item.name}</li>)
  }</ul>

  return (
    <div>
      {cartItems}
      <div className={styled.total}>
        <span>Total Amount</span>
        <span>35.62</span>
      </div>
      <div className={styled.actions}>
        <button className={styled['button--alt']}>Close</button>
        <button className={styled.button} >Order</button>
      </div>
    </div>
  )
}

export default Cart