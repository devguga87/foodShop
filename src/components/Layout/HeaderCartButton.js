import React, { useContext, useEffect , useState} from 'react'
import CartIcon from '../Cart/CartIcon'
import styled from './HeaderCartButton.module.css'
import CartContext from '../../context/cart-context'

const HeaderCartButton = (props) => {
  const [btnIsHighLighted, setBtnIsHighLighted] = useState(false)
  const cartCtx = useContext(CartContext);
  const numberOfCartItems = cartCtx.items.reduce((curNumber, item)=>{
    return curNumber + item.amount
  }, 0);

  const btnClasses = `${styled.button} ${btnIsHighLighted ? styled.bump : ''}`

  useEffect(()=>{
    if(cartCtx.items.length === 0) return
    setBtnIsHighLighted(true)

    const timer = setTimeout(() => {
      setBtnIsHighLighted(false)
    },3000);

    return ()=>{
      clearTimeout(timer)
    }
  },[cartCtx.items])

  return (
    <button className={btnClasses} onClick={props.onClick}>
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