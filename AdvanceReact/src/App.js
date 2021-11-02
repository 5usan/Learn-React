import { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import Notification from "./components/UI/Notification";
import { fetchCartData, sentCartData } from "./store/cart-actions";

let isInitial = true;

function App() {
  const cartIsShown = useSelector((state) => state.ui.cartIsShown);
  const cart = useSelector((state) => state.cart);
  const notification = useSelector((state) => state.ui.notification);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);

  useEffect(() => {
    // const sentCartData = async () => {
    //   try {
    //     dispatch(
    //       uiActions.showNotification({
    //         status: "pending",
    //         title: "Sending...",
    //         message: "Sending Cart Data To The Server!!!",
    //       })
    //     );
    //     const response = await fetch(
    //       "https://redux-with-backend-default-rtdb.firebaseio.com/cart.json",
    //       {
    //         // method: "POST", //Add the http request in previous http request
    //         method: "PUT", //Overwrite the previous http request
    //         body: JSON.stringify(cart),
    //       }
    //     );

    //     if (!response.ok) {
    //       throw new Error("Sending cart data failed.");
    //     }

    //     dispatch(
    //       uiActions.showNotification({
    //         status: "success",
    //         title: "Send...",
    //         message: "Send Cart Data To The Server Successfully!!!",
    //       })
    //     );
    //   } catch (error) {
    //     dispatch(
    //       uiActions.showNotification({
    //         status: "error",
    //         title: "Error",
    //         message: "An ERROR Occured!!!",
    //       })
    //     );
    //   }
    // };
    if (isInitial) {
      isInitial = false;
      return;
    }

    if (cart.changed) {
      dispatch(sentCartData(cart));
    }
  }, [cart, dispatch]);
  return (
    <Fragment>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {cartIsShown && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
