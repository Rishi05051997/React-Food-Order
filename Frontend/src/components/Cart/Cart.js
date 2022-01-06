import { useContext } from "react";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import cartcontext from "./../Store/cart-context";
import CartItem from "./CartItem";
const Cart = props => {
    const crtCtx = useContext(cartcontext)
    const totalAmount = `$${crtCtx.totalAmount.toFixed(2)}`;

    const hasItems = crtCtx.items.length > 0;

    const cartItemRemoved = (id) => {
        crtCtx.removeItem(id);
    };

    const cartAddHandler = item => {
        crtCtx.addItem({...item, amount:1});
    };

    const cartItems = <ul className={classes["cart-items"]}>
        {
            crtCtx.items.map(item =>(
                < CartItem  
                    key={item.id} 
                    name={item.name} 
                    amount={item.amount} 
                    price={item.price} 
                    onRemove={cartItemRemoved.bind(null, item.id)}
                    onAdd={cartAddHandler.bind(null, item)}
                />
            ))
        }
    </ul>
    return(
        <Modal onClose={props.onClose}>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>
            <div className={classes.actions}>
                <button className={classes["button--alt"]} onClick={props.onClose}>Close</button>
                {
                    hasItems && <button className={classes.button}>Order</button>
                }
            </div>
        </Modal>
    )
};

export default Cart;