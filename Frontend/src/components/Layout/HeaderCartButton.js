import React from 'react'
import CardIcon from "./../Cart/CartIcon"
import classes from "./../Layout/HeaderCartButton.module.css"

export default function HeaderCartButton(props) {
    return (
        <button onClick ={props.onClick} className={classes.button}>
            <span className={classes.icon}>
                < CardIcon />
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>
                3
            </span>
        </button>
    )
}
