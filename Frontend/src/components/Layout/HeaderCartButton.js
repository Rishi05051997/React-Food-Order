import React, { useContext, useEffect, useState } from 'react'
import CardIcon from "./../Cart/CartIcon"
import classes from "./../Layout/HeaderCartButton.module.css";
import CartContext from "./../Store/cart-context";

export default function HeaderCartButton(props) {
    const [btnIsHighlighted, setBtnIsHighlighted] = useState(false)
    const cartCtx = useContext(CartContext);
    //// reduce() -->>> it is a method it just allow array of data into single value
    const { items } = cartCtx;
    const numberOfCartItems = items.reduce((currentNumber, item) => {
        return currentNumber + item.amount;
    }, 0);
    
    const btnClasses = `${classes.button} ${btnIsHighlighted ? classes.bump : ''}`;

    useEffect(() => {
        if(items === 0){
            return;
        }
        setBtnIsHighlighted(true);
        const timer =  setTimeout(() => {
            setBtnIsHighlighted(false)
        }, 300);

        return () => {
            clearTimeout(timer)
        };
    }, [items])

    return (
        <button className={btnClasses} onClick ={props.onClick} >
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
