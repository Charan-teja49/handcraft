import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <h2>🌿 CraftConnect</h2>
      <div>
        <Link to="/">Home</Link>
        <Link to="/cart">Cart</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/login">Login</Link>
      </div>
    </div>
  );
}

export default Navbar;
