import React from "react";
import { useState } from "react";

const Login = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({
      ...credentials,
      [name]: value,
    });
  };

  const handleAdminLogin = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/loginAdmin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
      }),
    });

    const json = await response.json();
    if (!json.success) {
      console.log("error loggin in please try again");
    }
    if (json.success) {
      console.log("login successful");
    }
  };

  return (
    <div>
      <h1>login</h1>
      <form>
        <input
          type="text"
          placeholder="email"
          name="email"
          value={credentials.email}
          onChange={handleChange}
        />
        <input
          value={credentials.password}
          type="text"
          name="password"
          placeholder="password"
          onChange={handleChange}
        />
        <button onClick={handleAdminLogin}>submit</button>
      </form>
    </div>
  );
};

export default Login;
