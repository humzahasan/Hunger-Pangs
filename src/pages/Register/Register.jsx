import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Navbar } from "../../components";
import { useAuth } from "../../context";

const Register = () => {
  const [firstName, setFirstName] = useState("Humza");
  const [email, setEmail] = useState("foody@gmail.com");
  const [password, setPassword] = useState("123456");

  const { setUser } = useAuth();
  const navigate = useNavigate();

  const signupHandler = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(`/api/auth/signup`, {
        firstName,
        email,
        password,
      });

      if (response.status === 201) {
        localStorage.setItem("user", JSON.stringify(response.data));
        setUser(response.data.createdUser);
        navigate("/");
      }
    } catch (err) {
      toast.error(err.response.data.errors[0]);
    }
  };

  return (
    <>
      <Navbar />
      <main>
        <div className="flex-center-column">
          <h1 className="md-title">Sign Up</h1>
          <form className="auth-form">
            <div className="input-label">
              <label htmlFor="email">Name</label>
              <input
                name="email"
                type="text"
                placeholder="Enter your name"
                className="input-box"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className="input-label">
              <label htmlFor="email">Email</label>
              <input
                name="email"
                type="email"
                placeholder="Enter your email"
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
                placeholder="Enter your password"
                className="input-box input-outline"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="auth-form-additional">
              <div className="input-checkbox">
                <input type="checkbox" id="wraps" />
                <label htmlFor="wraps">I accept the Terms & Conditions</label>
              </div>
            </div>
            <button
              onClick={signupHandler}
              className="btn btn-primary width-100"
            >
              <p> Login</p>
            </button>
          </form>
          <a href="/login">Already a user? Login</a>
        </div>
      </main>
    </>
  );
};

export { Register };
