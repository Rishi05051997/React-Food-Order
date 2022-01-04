import React, {Fragment, useState} from "react"
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header"
import Meals from "./components/Meals/Meals";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showcartHandler = () => {
    setCartIsShown(true)
  }

  const hideCardHandler = () => {
    setCartIsShown(false)
  }
  return (
    <Fragment>
       {
         cartIsShown && < Cart onClose={hideCardHandler} />
       }
      < Header onShowCart={showcartHandler}  onHideCart={hideCardHandler} />
      <main>
        < Meals />
      </main>
     
    </Fragment>
  );
}

export default App;
