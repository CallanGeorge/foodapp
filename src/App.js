import React from "react";
import Header from "./components/layout/Header";
import Meals from "./components/meals/Meals";
import Cart from "./components/cart/Cart";
import CartProvider from "./store/CartProvider";

import { useState } from "react";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false)

  const showCardHandler = () =>{
    setCartIsShown(true)
  }

  const hideCartHandler = () =>{
    setCartIsShown(false)
  }



  return (
    <CartProvider>
      { cartIsShown && <Cart onClose={hideCartHandler}/>}
      <Header onShowCart={showCardHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
