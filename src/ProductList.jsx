import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "./redux/CartSlice";
import Navbar from "./components/Navbar";

const plants = {
  Indoor: [
    { id: 1, name: "Snake Plant", price: 200 },
    { id: 2, name: "Peace Lily", price: 300 },
    { id: 3, name: "Aloe Vera", price: 150 },
    { id: 4, name: "Spider Plant", price: 180 },
    { id: 5, name: "Money Plant", price: 250 },
    { id: 6, name: "Rubber Plant", price: 350 }
  ],
  Outdoor: [
    { id: 7, name: "Rose", price: 120 },
    { id: 8, name: "Hibiscus", price: 200 },
    { id: 9, name: "Jasmine", price: 180 },
    { id: 10, name: "Tulsi", price: 90 },
    { id: 11, name: "Bougainvillea", price: 300 },
    { id: 12, name: "Sunflower", price: 100 }
  ],
  Succulents: [
    { id: 13, name: "Cactus", price: 150 },
    { id: 14, name: "Echeveria", price: 200 },
    { id: 15, name: "Haworthia", price: 180 },
    { id: 16, name: "Sedum", price: 170 },
    { id: 17, name: "Crassula", price: 220 },
    { id: 18, name: "Agave", price: 260 }
  ]
};

const ProductList = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);

  const isAdded = id => cartItems.some(i => i.id === id);

  return (
    <>
      <Navbar />
      {Object.entries(plants).map(([category, items]) => (
        <div key={category}>
          <h2>{category}</h2>
          {items.map(p => (
            <div key={p.id}>
              <h4>{p.name}</h4>
              <p>₹{p.price}</p>
              <button
                disabled={isAdded(p.id)}
                onClick={() => dispatch(addToCart(p))}
              >
                {isAdded(p.id) ? "Added" : "Add to Cart"}
              </button>
            </div>
          ))}
        </div>
      ))}
    </>
  );
};

export default ProductList;