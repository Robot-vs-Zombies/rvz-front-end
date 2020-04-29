import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

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
    axios
      .post("https://lambda-mud-test.herokuapp.com/api/login/", user)
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
  );
}
