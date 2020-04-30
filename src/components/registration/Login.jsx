import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axiosWithAuth from "../../utils/axiosWithAuth";
import NavBar from "../NavBar";
export default function Login(props) {
  const [user, setUsers] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setUsers({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axiosWithAuth()
      .post("login/", user)
      .then((res) => {
        console.log(res);
        localStorage.setItem("token", res.data.key);
        localStorage.setItem("username", user.username);
        props.history.push("/dashboard");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <NavBar />
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">
          <input
            onChange={handleChange}
            id="username"
            type="text"
            name="username"
            value={user.username}
          />
        </label>
        <label htmlFor="password">
          <input
            onChange={handleChange}
            id="password"
            type="password"
            name="password"
            value={user.password}
          />
        </label>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
