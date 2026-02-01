import { useState } from "react";
import ProductList from "./ProductList";
import "./App.css";

function App() {
  const [showProductList, setShowProductList] = useState(false);

  return (
    <>
      {!showProductList ? (
        <div className="landing">
          <h1>Paradise Nursery</h1>
          <button onClick={() => setShowProductList(true)}>
            Get Started
          </button>
        </div>
      ) : (
        <ProductList />
      )}
    </>
  );
}

export default App;