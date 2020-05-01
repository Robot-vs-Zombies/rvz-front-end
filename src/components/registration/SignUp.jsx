import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import NavBar from "../NavBar";

export default function SignUp(props) {
  const [newUser, setNewUser] = useState({
    username: "",
    password1: "",
    password2: "",
  });

  const handleChange = (e) => {
    e.preventDefault();
    setNewUser({
      ...newUser,
      [e.target.name]: e.target.value,
    });
  };
  const [error, setError] = useState(false);
  const handleSubmit = (e) => {
    console.log("new user info", newUser);
    e.preventDefault();
    axios
      .post(
        "https://agile-stream-99199.herokuapp.com/api/adv/registration/",
        newUser
      )
      .then((res) => {
        localStorage.setItem("token", res.data.key);
        localStorage.setItem("username", newUser.username);
        console.log("register info:", res.data);
        props.history.push("/login");
      })
      .catch((err) => {
        setError(true);
        console.log(err.response);
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
          />
        </label>
        <label htmlFor="password1">
          <input
            onChange={handleChange}
            id="password1"
            type="password"
            name="password1"
          />
        </label>
        <label htmlFor="password2">
          <input
            onChange={handleChange}
            id="password2"
            type="password"
            name="password2"
          />
        </label>
        <button>Register</button>
      </form>
      {error ? <p className="error-message">registration failed!</p> : null}
    </div>
  );
}
