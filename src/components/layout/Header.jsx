import classes from  "./Header.module.css";
import mealsImage from '../../assets/meals.jpg'
import HeaderCartButton from "./HeaderCartButton";

import React, { Fragment } from "react";

function Header(props) {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>React Meals</h1>
        <HeaderCartButton onClick={props.onShowCart}>Cart</HeaderCartButton>
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImage} alt='table of food'/>
      </div>
    </Fragment>
  );
}

export default Header;
