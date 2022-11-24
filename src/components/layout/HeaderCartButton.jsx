import React, { useContext, useEffect, useState } from 'react'
import classes from './HeaderCartButton.module.css'

import CartContext from '../../store/cart-context'

function HeaderCartButton(props) {
  const [buttonAnimate, setButtonAnimate ] = useState(false)
  const cartCtx = useContext(CartContext)

  const numOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount
  }, 0)

  const { items } = cartCtx

  const buttonClasses = `${classes.button} ${ buttonAnimate ? classes.bump : ''}`

  useEffect(()=>{
    if (items.length > 0) {
      return
    }
    setButtonAnimate(true)

    const timer = setTimeout(()=> {
      setButtonAnimate(false)
    }, 300)

    return ()=>{
      clearTimeout(timer)
    }

  }, [items])

  return (
    <button className={buttonClasses} onClick={props.onClick}>
        <span>Your Cart</span>
        <span className={classes.badge}>{numOfCartItems}</span>
    </button>
  )
}

export default HeaderCartButton