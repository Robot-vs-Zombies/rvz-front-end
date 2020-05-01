import React, { useState } from "react";
import axios from "axios";
import NavBar from "../NavBar";
import Logo from "../images/rvz1.png";

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
    <div className="main-register-cont">
      <NavBar />
      <img className="logo-img" src={Logo} alt="main-logo" />
      <h1>Robots vs Zombies</h1>
      <form className="register-form" onSubmit={handleSubmit}>
        <div className="input-field">
          <label htmlFor="username">Username</label>
          <input
            onChange={handleChange}
            id="username"
            type="text"
            name="username"
          />
        </div>
        <div className="input-field">
          <label htmlFor="password1">Password</label>
          <input
            onChange={handleChange}
            id="password1"
            type="password"
            name="password1"
          />
        </div>
        <div className="input-field">
          <label htmlFor="password2">Confirm Password</label>
          <input
            onChange={handleChange}
            id="password2"
            type="password"
            name="password2"
          />
        </div>
        <button className="register-btn">Register</button>
      </form>
      {error ? <p className="error-message">registration failed!</p> : null}
    </div>
  );
}
