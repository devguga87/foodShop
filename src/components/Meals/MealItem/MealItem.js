import React, {useContext} from 'react';
import CartContext from '../../../context/cart-context';

import styled from './MealItem.module.css'
import MealItemForm from './MealItemForm';

const MealItem = (props) =>{
  const cartCtx = useContext(CartContext)

  const price = `$${props.price.toFixed(2)}`

  const addToCartHandler = amount => {
    cartCtx.addItem({
      id:props.id,
      name:props.name,
      amount:amount,
      price:props.price
    })
  }

  return (
    <li className={styled.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={styled.description}>{props.description}</div>
        <div className={styled.price}>{price}</div>
      </div>
      <div>
        <MealItemForm  onAddToCart={addToCartHandler} />
      </div>
    </li>
  )
}

export default MealItem
