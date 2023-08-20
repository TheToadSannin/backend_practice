import React from "react";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();

  const [credentials, setcredentials] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setcredentials({ ...credentials, [name]: value });
  };
  const handleAdminSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/createAdmin", {
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
    if (json.success) {
      console.log("user registered successfully");
      navigate("/login");
    }
    if (!json.success) {
      console.log("error registering in please try again");
    }
  };

  return (
    <div>
      <h1>signup</h1>
      <form>
        <input
          type="text"
          value={credentials.email}
          placeholder="email"
          name="email"
          onChange={handleChange}
        />
        <input
          type="text"
          value={credentials.password}
          placeholder="password"
          name="password"
          onChange={handleChange}
        />
        <button onClick={handleAdminSubmit}>submit</button>
      </form>
    </div>
  );
};

export default Signup;
