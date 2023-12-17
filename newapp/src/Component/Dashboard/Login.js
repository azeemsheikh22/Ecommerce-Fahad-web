import React from "react";


import "./Login.css";

const Login = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const handlelogin = async () => {
    console.warn("email,password", email, password);
    let result = await fetch("http://localhost:5000/login", {
      method: "Post",
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-type": "application/json",
      },
    });
    result = await result.json();
    console.warn(result);
    if(result.name){

    }else{
      alert("please enter connect details")
    }
  };
  return (
    <div>
      <div className="login-container">
        <h2>Login Form</h2>
        <form className="login-form">
          <div className="form-group">
            <label for="username">Username:</label>
            <input
              type="text"
              name="username"
              required
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
          <div className="form-group">
            <label for="password">Password:</label>
            <input
              type="password"
              name="password"
              required
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>
          <div className="form-group">
            <button onClick={handlelogin} type="button">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
