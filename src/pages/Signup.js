import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    role: "User"
  });

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!user.name || !user.email || !user.password) {
      alert("All fields are required");
      return;
    }

    localStorage.setItem("registeredUser", JSON.stringify(user));
    alert("Registration Successful");
    navigate("/login");
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2>Signup</h2>

      <input
        placeholder="Name"
        value={user.name}
        onChange={e => setUser({...user, name: e.target.value})}
      />

      <input
        placeholder="Email"
        value={user.email}
        onChange={e => setUser({...user, email: e.target.value})}
      />

      <input
        type="password"
        placeholder="Password"
        value={user.password}
        onChange={e => setUser({...user, password: e.target.value})}
      />

      <select
        value={user.role}
        onChange={e => setUser({...user, role: e.target.value})}
      >
        <option>User</option>
        <option>Admin</option>
      </select>

      <button type="submit">Register</button>
    </form>
  );
}

export default Signup;
