import React, {useState} from "react"
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header"
import Meals from "./components/Meals/Meals";
import CartProvider from "./components/Store/CartProvider";


function App() {
  const [cartIsShown, setCartIsShown] = useState(false);
  

  const showcartHandler = () => {
    setCartIsShown(true)
  }

  const hideCardHandler = () => {
    setCartIsShown(false)
  }
  return (
    <CartProvider>
       {
         cartIsShown && < Cart onClose={hideCardHandler} />
       }
      < Header onShowCart={showcartHandler}  onHideCart={hideCardHandler} />
      <main>
        < Meals />
      </main>
     
    </CartProvider>
  );
}

export default App;
