import React, {useState} from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import CartProvider from "./store/CartProvider";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false)

  const showCartHander = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <CartProvider>
     {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHander} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
