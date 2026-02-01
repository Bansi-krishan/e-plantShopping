import { useDispatch, useSelector } from "react-redux";
import { removeItem, updateQuantity } from "./redux/CartSlice";
import Navbar from "./components/Navbar";

const CartItem = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart);

  const getItemTotal = item => item.price * item.quantity;

  const totalAmount = cartItems.reduce(
    (sum, item) => sum + getItemTotal(item),
    0
  );

  const increaseQty = item => {
    dispatch(
      updateQuantity({
        id: item.id,
        quantity: item.quantity + 1
      })
    );
  };

  const decreaseQty = item => {
    if (item.quantity === 1) {
      dispatch(removeItem(item.id));
    } else {
      dispatch(
        updateQuantity({
          id: item.id,
          quantity: item.quantity - 1
        })
      );
    }
  };

  return (
    <div>
      <Navbar />

      <h2>Shopping Cart</h2>

      {cartItems.map(item => (
        <div key={item.id}>
          <img src={item.image} alt={item.name} width="100" />
          <h4>{item.name}</h4>
          <p>Unit Price: ${item.price}</p>
          <p>Total: ${getItemTotal(item)}</p>

          <button onClick={() => increaseQty(item)}>+</button>
          <button onClick={() => decreaseQty(item)}>-</button>

          <button
            className="delete-btn"
            onClick={() => dispatch(removeItem(item.id))}
          >
            Delete
          </button>
        </div>
      ))}

      <h3>Total Cart Amount: ${totalAmount}</h3>

      <button>Checkout (Coming Soon)</button>
      <br />
      <button onClick={() => window.history.back()}>
        Continue Shopping
      </button>
    </div>
  );
};

export default CartItem;