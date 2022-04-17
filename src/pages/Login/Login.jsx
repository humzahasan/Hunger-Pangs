import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Navbar } from "../../components";
import { useAuth } from "../../context";

const Login = () => {
  const [email, setEmail] = useState("foody@gmail.com");
  const [password, setPassword] = useState("ilovefood");

  const { setUser, setToken } = useAuth();
  const navigate = useNavigate();

  const loginHandler = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(`/api/auth/login`, {
        email,
        password,
      });

      if (response.status === 200 && response.data.encodedToken) {
        setToken(response.data);
        setUser(response.data.foundUser);
        navigate("/");
      }
    } catch (error) {
      toast.warning("Something went wrong. Please try again!");
    }
  };
  return (
    <>
      <Navbar />
      <main>
        <div className="flex-center-column">
          <h1 className="md-title">Sign In</h1>
          <form className="auth-form">
            <div className="input-label">
              <label htmlFor="email">Email</label>
              <input
                name="email"
                type="email"
                placeholder="Enter your cheesy email"
                className="input-box"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="input-label">
              <label htmlFor="password">Password</label>
              <input
                name="password"
                type="password"
                placeholder="Enter your mixed password"
                className="input-box input-outline"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="auth-form-additional">
              <div className="input-checkbox">
                <input type="checkbox" id="wraps" />
                <label htmlFor="wraps">Remeber Me</label>
              </div>
              <Link to="#">Forgot your Password?</Link>
            </div>
            <button
              className="btn btn-primary width-100"
              onClick={loginHandler}
            >
              <p> Login</p>
            </button>
          </form>
          <Link to="/register">Create a new Account</Link>
        </div>
      </main>
    </>
  );
};

export { Login };
