function Cart({ cart, updateQuantity }) {
  return (
    <div className="container">
      <h2>Your Cart</h2>

      {cart.length === 0 ? <p>No items in cart</p> : 
        cart.map(item => (
          <div key={item.id}>
            <h4>{item.name}</h4>
            <p>₹{item.price}</p>
            <button onClick={() => updateQuantity(item.id, -1)}>-</button>
            <span> {item.quantity} </span>
            <button onClick={() => updateQuantity(item.id, 1)}>+</button>
          </div>
        ))
      }
    </div>
  );
}

export default Cart;
