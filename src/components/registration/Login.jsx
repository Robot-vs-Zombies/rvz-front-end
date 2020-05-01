import React, { useState } from "react";
import axios from "axios";
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
    axios
      .post("https://agile-stream-99199.herokuapp.com/api/adv/login/", user)
      .then((res) => {
        console.log(res);
        localStorage.setItem("token", res.data.key);
        localStorage.setItem("username", user.username);
        props.history.push("/dashboard");
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  return (
    <div>
      <NavBar />
      <div>
        <form className="login-container" onSubmit={handleSubmit}>
          <div className="input-field">
            <label className="input-label" htmlFor="username">
              Username
            </label>
            <input
              onChange={handleChange}
              id="username"
              type="text"
              name="username"
              value={user.username}
            />
          </div>
          <div className="input-field">
            <label className="input-label" htmlFor="password">
              Password
            </label>
            <input
              onChange={handleChange}
              id="password"
              type="password"
              name="password"
              value={user.password}
            />
          </div>
          <button className="login-btn" type="submit">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
