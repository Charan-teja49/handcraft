import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const loggedUser = JSON.parse(localStorage.getItem("loggedUser"));

  const handleLogout = () => {
    localStorage.removeItem("loggedUser");
    navigate("/login");
  };

  return (
    <div className="navbar">
      <h2>🌿 CraftConnect</h2>

      <div>
        <Link to="/">Home</Link>
        <Link to="/cart">Cart</Link>
        <Link to="/contact">Contact</Link>

        {loggedUser ? (
          <>
            <span style={{ marginLeft: "10px" }}>
              👋 {loggedUser.name}
            </span>
            <button onClick={handleLogout} style={{ marginLeft: "10px" }}>
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link>
          </>
        )}
      </div>
    </div>
  );
}

export default Navbar;
