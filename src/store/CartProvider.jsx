import React, { useReducer } from "react";

import CartContext from "./cart-context";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;

      const existingCartItemIndex = state.items.findIndex(
        (item) => item.id === action.item.id
      );
      const existingCartItem = state.items[existingCartItemIndex];
      let updatedItems;
  
      if (existingCartItem) {
        const updatedItem = {
          ...existingCartItem,
          amount: existingCartItem.amount + action.item.amount,
        };
        updatedItems = [...state.items];
        updatedItems[existingCartItemIndex] = updatedItem;
      } else {
        updatedItems = state.items.concat(action.item);
      }

    

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  if(action.type === 'REMOVE'){
    const existingCartItemIndex = state.items.findIndex(
        (item) => item.id === action.id
    )
    const existingItem = state.items[existingCartItemIndex]
    const updatedTotalAmount = state.totalAmount - existingItem.price
    let updatedItems
    if(existingItem.amount === 1) {
        updatedItems = state.items.filter(item => item.id !== action.id)
    } else {
        const updatedItem = { ...existingItem, amount: existingItem.amount - 1 }
        updatedItems = [ ...state.items]
        updatedItems[existingCartItemIndex] = updatedItem

    }

    return{
        items:updatedItems,
        totalAmount: updatedTotalAmount
    }
  }
  return defaultCartState;
};

function CartProvider(props) {
  const [cartState, dispatchCardAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemToCartHadler = (item) => {
    dispatchCardAction({ type: "ADD", item: item });
  };

  const removeItemFromCartHadler = (id) => {
    dispatchCardAction({ type: "REMOVE", id: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHadler,
    removeItem: removeItemFromCartHadler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
}

export default CartProvider;
