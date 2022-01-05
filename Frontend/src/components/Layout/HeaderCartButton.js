import React, { useContext } from 'react'
import CardIcon from "./../Cart/CartIcon"
import classes from "./../Layout/HeaderCartButton.module.css";
import CartContext from "./../Store/cart-context";

export default function HeaderCartButton(props) {
    const cartCtx = useContext(CartContext);
    //// reduce() -->>> it is a method it just allow array of data into single value
    const numberOfCartItems = cartCtx.items.reduce((currentNumber, item) => {
        return currentNumber + item.amount;
    }, 0);
    return (
        <button onClick ={props.onClick} className={classes.button}>
            <span className={classes.icon}>
                < CardIcon />
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>
                {
                    numberOfCartItems  
                }
            </span>
        </button>
    )
}
