import React, { useContext } from 'react'
import CartIcon from '../Cart/CartIcon'
import styled from './HeaderCartButton.module.css'
import CartContext from '../../context/cart-context'

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);
  const numberOfCartItems = cartCtx.items.reduce((curNumber, item)=>{
    return curNumber + item.amount
  }, 0);

  return (
    <button className={styled.button} onClick={props.onClick}>
      <span className={styled.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={styled.badge}>
        {numberOfCartItems}
      </span>
    </button>
  )
}

export default HeaderCartButton