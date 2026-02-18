import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("user", JSON.stringify(user));
    navigate("/login");
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2>Signup</h2>
      <input placeholder="Name" onChange={e => setUser({...user, name:e.target.value})} />
      <input placeholder="Email" onChange={e => setUser({...user, email:e.target.value})} />
      <input type="password" placeholder="Password" onChange={e => setUser({...user, password:e.target.value})} />
      <select onChange={e => setUser({...user, role:e.target.value})}>
        <option>User</option>
        <option>Admin</option>
      </select>
      <button type="submit">Register</button>
    </form>
  );
}

export default Signup;
