import { useDispatch, useSelector } from "react-redux";
import { increaseQty, decreaseQty, removeItem } from "./redux/CartSlice";
import Navbar from "./components/Navbar";
import { Link } from "react-router-dom";

const CartItem = () => {
  const dispatch = useDispatch();
  const items = useSelector(state => state.cart.items);

  const total = items.reduce(
    (sum, i) => sum + i.price * i.quantity, 0
  );

  return (
    <>
      <Navbar />
      <h2>Shopping Cart</h2>

      {items.map(i => (
        <div key={i.id}>
          <h4>{i.name}</h4>
          <p>₹{i.price} × {i.quantity} = ₹{i.price * i.quantity}</p>
          <button onClick={() => dispatch(increaseQty(i.id))}>+</button>
          <button onClick={() => dispatch(decreaseQty(i.id))}>-</button>
          <button onClick={() => dispatch(removeItem(i.id))}>Delete</button>
        </div>
      ))}

      <h3>Total: ₹{total}</h3>

      <button>Checkout (Coming Soon)</button>
      <br />
      <Link to="/plants">Continue Shopping</Link>
    </>
  );
};

export default CartItem;