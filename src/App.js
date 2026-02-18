import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/layout/Navbar";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Contact from "./pages/Contact";
import ProtectedRoute from "./routes/ProtectedRoute";
import "./styles.css";

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const exist = cart.find(item => item.id === product.id);

    if (exist) {
      setCart(cart.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const updateQuantity = (id, change) => {
    setCart(
      cart
        .map(item =>
          item.id === id
            ? { ...item, quantity: item.quantity + change }
            : item
        )
        .filter(item => item.quantity > 0)
    );
  };

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home addToCart={addToCart} />} />

        <Route
          path="/cart"
          element={
            <ProtectedRoute>
              <Cart cart={cart} updateQuantity={updateQuantity} />
            </ProtectedRoute>
          }
        />

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
