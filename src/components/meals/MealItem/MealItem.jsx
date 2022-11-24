import classes from "./MealItem.module.css";
import React from "react";

import { useContext } from "react";

import MealitemForm from "./MealitemForm";
import CartContext from "../../../store/cart-context";

function MealItem(props) {
    const cartCtx = useContext(CartContext)
    const price = `$${props.price.toFixed(2)}`

    const addItemToCartHadler = amount => {
    cartCtx.addItem({
        id: props.id,
        name: props.name,
        amount: amount,
        price: props.price

    })
    }

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealitemForm onAddToCart={addItemToCartHadler} id={props.id}/>
      </div>
    </li>
  );
}

export default MealItem;
