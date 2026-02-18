import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [login, setLogin] = useState({
    email: "",
    password: ""
  });

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const storedUser = JSON.parse(localStorage.getItem("registeredUser"));

    if (
      storedUser &&
      storedUser.email === login.email &&
      storedUser.password === login.password
    ) {
      localStorage.setItem("loggedUser", JSON.stringify(storedUser));
      alert("Login Successful");
      navigate("/");
    } else {
      alert("Invalid Credentials");
    }
  };

  return (
    <form className="form" onSubmit={handleLogin}>
      <h2>Login</h2>

      <input
        placeholder="Email"
        value={login.email}
        onChange={e => setLogin({...login, email: e.target.value})}
      />

      <input
        type="password"
        placeholder="Password"
        value={login.password}
        onChange={e => setLogin({...login, password: e.target.value})}
      />

      <button type="submit">Login</button>
    </form>
  );
}

export default Login;
