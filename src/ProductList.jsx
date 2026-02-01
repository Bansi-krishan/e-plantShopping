import { useDispatch, useSelector } from "react-redux";
import { addItem } from "./redux/CartSlice";
import Navbar from "./components/Navbar";

const plants = [
  // Indoor Plants
  {
    id: 1,
    name: "Snake Plant",
    price: 200,
    image: "https://via.placeholder.com/150",
    category: "Indoor"
  },
  {
    id: 2,
    name: "Peace Lily",
    price: 300,
    image: "https://via.placeholder.com/150",
    category: "Indoor"
  },
  {
    id: 3,
    name: "Spider Plant",
    price: 180,
    image: "https://via.placeholder.com/150",
    category: "Indoor"
  },
  {
    id: 4,
    name: "Money Plant",
    price: 250,
    image: "https://via.placeholder.com/150",
    category: "Indoor"
  },
  {
    id: 5,
    name: "Rubber Plant",
    price: 350,
    image: "https://via.placeholder.com/150",
    category: "Indoor"
  },
  {
    id: 6,
    name: "Aloe Vera",
    price: 150,
    image: "https://via.placeholder.com/150",
    category: "Indoor"
  },

  // Outdoor Plants
  {
    id: 7,
    name: "Rose",
    price: 120,
    image: "https://via.placeholder.com/150",
    category: "Outdoor"
  },
  {
    id: 8,
    name: "Hibiscus",
    price: 200,
    image: "https://via.placeholder.com/150",
    category: "Outdoor"
  },
  {
    id: 9,
    name: "Jasmine",
    price: 180,
    image: "https://via.placeholder.com/150",
    category: "Outdoor"
  },
  {
    id: 10,
    name: "Tulsi",
    price: 90,
    image: "https://via.placeholder.com/150",
    category: "Outdoor"
  },
  {
    id: 11,
    name: "Bougainvillea",
    price: 300,
    image: "https://via.placeholder.com/150",
    category: "Outdoor"
  },
  {
    id: 12,
    name: "Sunflower",
    price: 100,
    image: "https://via.placeholder.com/150",
    category: "Outdoor"
  },

  // Succulents
  {
    id: 13,
    name: "Cactus",
    price: 150,
    image: "https://via.placeholder.com/150",
    category: "Succulent"
  },
  {
    id: 14,
    name: "Echeveria",
    price: 220,
    image: "https://via.placeholder.com/150",
    category: "Succulent"
  },
  {
    id: 15,
    name: "Haworthia",
    price: 180,
    image: "https://via.placeholder.com/150",
    category: "Succulent"
  },
  {
    id: 16,
    name: "Sedum",
    price: 170,
    image: "https://via.placeholder.com/150",
    category: "Succulent"
  },
  {
    id: 17,
    name: "Crassula",
    price: 240,
    image: "https://via.placeholder.com/150",
    category: "Succulent"
  },
  {
    id: 18,
    name: "Agave",
    price: 260,
    image: "https://via.placeholder.com/150",
    category: "Succulent"
  }
];

const ProductList = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart);

  const isInCart = id => cartItems.some(item => item.id === id);

  const categories = ["Indoor", "Outdoor", "Succulent"];

  return (
    <div>
      <Navbar />

      <h2>Our Plants</h2>

      {categories.map(category => (
        <div key={category}>
          <h3>{category} Plants</h3>

          <div>
            {plants
              .filter(plant => plant.category === category)
              .map(plant => (
                <div key={plant.id}>
                  <img src={plant.image} alt={plant.name} />
                  <h4>{plant.name}</h4>
                  <p>Price: ${plant.price}</p>

                  <button
                    onClick={() => dispatch(addItem(plant))}
                    disabled={isInCart(plant.id)}
                  >
                    {isInCart(plant.id) ? "Added" : "Add to Cart"}
                  </button>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;