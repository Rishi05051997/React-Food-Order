import { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
    items: [],
    totalAmount: 0,
};

const cartReducer = (state, action) => {
    if(action.type === "ADD"){
        let updatedItems = state.items.concat(action.item);
        const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;

        const existingCartItemIndex = state.items.findIndex(
            (item) => item.id === action.item.id
        );

        const existingCartItem = state.items[existingCartItemIndex];

        
        // let updatedItems;

        if(existingCartItem){
            let updatedItem = {
                ...existingCartItem,
                amount:existingCartItem.amount + action.item.amount
            };
            updatedItems = [...state.items];
            updatedItems[existingCartItemIndex] = updatedItem;

        } else {
            
            updatedItems = state.items.concat(action.item);
        }
        return {
            items : updatedItems,
            totalAmount: updatedTotalAmount
        };
    }
    if(action.type === "REMOVE"){
        const updatedItemsAfterRemove = state.items.pop(action.id);
        return {
            items: updatedItemsAfterRemove,
        }
    }
    return defaultCartState;
};


const CartProvider = (props) => {
    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);
    const addItemToCardHandler = (item) => { 
        dispatchCartAction({type: 'ADD', item: item})
     };

    const removeItemFromCartHandler = (id) => { 
        dispatchCartAction({type: 'REMOVE', id: id})
    };
    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCardHandler,
        removeItem: removeItemFromCartHandler
    }
    return (
        < CartContext.Provider value={cartContext}>
            {
                props.children
            }
        </CartContext.Provider>
    )
};

export default CartProvider;