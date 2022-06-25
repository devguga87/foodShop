import React from 'react';

import mealsImg from '../../assets/meals.jpg';
import styled from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';

const Header = (props) => {
  return (
    <>
     <header className={styled.header}>
      <h1>ReactMeals</h1>
      <HeaderCartButton />
     </header>
     <div className={styled['main-image']}>
      <img src={mealsImg} alt='A table full of delicious food' />
     </div>
    </>
  )
}

export default Header