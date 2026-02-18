import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Cart({ cart, updateQuantity }) {
  const navigate = useNavigate();
  const loggedUser = JSON.parse(localStorage.getItem("loggedUser"));

  useEffect(() => {
    if (!loggedUser) {
      alert("Please login first");
      navigate("/login");
    }
  }, [loggedUser, navigate]);

  return (
    <div className="container">
      <h2>Your Cart</h2>

      {cart.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        cart.map(item => (
          <div key={item.id}>
            <h4>{item.name}</h4>
            <p>₹{item.price}</p>

            <button onClick={() => updateQuantity(item.id, -1)}>-</button>
            <span> {item.quantity} </span>
            <button onClick={() => updateQuantity(item.id, 1)}>+</button>
          </div>
        ))
      )}
    </div>
  );
}

export default Cart;
