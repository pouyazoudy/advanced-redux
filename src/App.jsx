// App.js
import { useDispatch, useSelector } from "react-redux";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import Notification from "./components/UI/Notification";
import { useEffect } from "react";
import { fetchCartData, sendCartData } from "./store/cart-action";

let isInitial = true;

function App() {
  const visible = useSelector((state) => state.visible.cartIsVisible);
  const cart = useSelector((state) => state.counter);
  const notification = useSelector((state) => state.visible.notification);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);

  return (
    <>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {visible && <Cart />}
        <Products />
      </Layout>
    </>
  );
}

export default App;
