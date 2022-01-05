import { useContext } from "react";
import classes from "./MealItem.module.css"
import MealItemForm from "./MealItemForm";
import CartContext from "../../Store/cart-context";

const MealItem = props => {
    const crtCtx = useContext(CartContext);
    const price = `$${props.price.toFixed(2)}`;

    const addToCartHandler = amount => {
        crtCtx.addItem({
            id:props.id,
            name:props.name,
            amount:amount,
            price:props.price,
        })
    };
    return(
        <li key={props.id} className={classes.meal}>
            <div>
                <h3>{props.name}</h3>
                <div className={classes.description}>{props.description}</div>
                <div className={classes.price}>{price}</div>
            </div>
            <div>
                < MealItemForm addToCart={addToCartHandler} id={props.id} />
            </div>
        </li>
    )
};

export default MealItem;