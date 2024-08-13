import { useDispatch, useSelector } from "react-redux";
import classes from "./CartButton.module.css";
import { toggleVisible } from "../../store/visibilitySlice";

const CartButton = (props) => {
  const count = useSelector(state => state.counter.totalQuantity)
  const dispatch = useDispatch();

  const visibleHandler = () => {
    dispatch(toggleVisible());
  };
  return (
    <button className={classes.button} onClick={visibleHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{count}</span>
    </button>
  );
};

export default CartButton;
