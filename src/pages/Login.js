import { useState } from "react";

function Login() {
  const [login, setLogin] = useState({});

  const handleLogin = (e) => {
    e.preventDefault();
    const stored = JSON.parse(localStorage.getItem("user"));

    if (
      stored &&
      stored.email === login.email &&
      stored.password === login.password
    ) {
      alert("Login Successful");
    } else {
      alert("Invalid Credentials");
    }
  };

  return (
    <form className="form" onSubmit={handleLogin}>
      <h2>Login</h2>
      <input placeholder="Email" onChange={e => setLogin({...login, email:e.target.value})} />
      <input type="password" placeholder="Password" onChange={e => setLogin({...login, password:e.target.value})} />
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;
