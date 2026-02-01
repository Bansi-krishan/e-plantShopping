import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const count = useSelector(
    state => state.cart.items.reduce((sum, i) => sum + i.quantity, 0)
  );

  return (
    <nav>
      <Link to="/">Home</Link> |{" "}
      <Link to="/plants">Plants</Link> |{" "}
      <Link to="/cart">Cart ({count})</Link>
    </nav>
  );
};

export default Navbar;