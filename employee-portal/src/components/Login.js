import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import for redirection
import "./Login.css";
import logo from "./../assets/logo.png"; // Import School Logo
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Import eye icons

const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isAdminLogin, setIsAdminLogin] = useState(false); // State to toggle between employee and admin login
  const navigate = useNavigate(); // Hook for redirection

  const handleLogin = async () => {
    try {
      const endpoint = isAdminLogin
        ? "http://localhost:5000/api/admin/login"
        : "http://localhost:5000/api/login"; // Different endpoint for admin login

      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        navigate(isAdminLogin ? "/admin-dashboard" : "/dashboard"); // Redirect based on login type
      } else {
        setError(data.message || "Invalid email or password!");
      }
    } catch (err) {
      setError("Error connecting to server");
    }
  };

  const handleForgotPassword = () => {
    navigate("/forgot-password"); // Redirect to ForgotPassword.js
  };

  return (
    <div className="login-page">
      {/* Top Blue Header */}
      <div className="header">
        <img src={logo} alt="School Logo" className="school-logo" />
        <h1 className="school-name">PHILIPPINE SCHOOL OF BUSINESS ADMINISTRATION</h1>
      </div>

      {/* Centered Login Form */}
      <div className="login-container">
        <img
          src="https://cdn-icons-png.flaticon.com/512/1077/1077114.png"
          alt="User Icon"
          className="user-icon"
        />
        <h2 className="login-title">{isAdminLogin ? "Admin Log In" : "Employee Log In"}</h2>

        {error && <p className="error-message">{error}</p>} {/* Display error message */}

        <div className="input-container">
          <label>Email Address</label>
          <input
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        {/* Password Input with Eye Icon */}
        <div className="input-container password-group">
          <label>Password</label>
          <input
            type={passwordVisible ? "text" : "password"}
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span
            className="eye-icon"
            onClick={() => setPasswordVisible(!passwordVisible)}
          >
            {passwordVisible ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>

        <div className="options">
          <div className="remember-me">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Keep me logged in</label>
          </div>
          <button onClick={handleForgotPassword} className="forgot-password">
            Forgot Password?
          </button>
        </div>

        <button className="login-button" onClick={handleLogin}>
          {isAdminLogin ? "Admin Login" : "Employee Login"}
        </button>

        {/* Toggle between Employee and Admin Login */}
        {!isAdminLogin ? (
          <button
            className="toggle-login-button"
            onClick={() => setIsAdminLogin(true)}
          >
            Admin Login
          </button>
        ) : (
          <button
            className="toggle-login-button"
            onClick={() => setIsAdminLogin(false)}
          >
            Back to Employee Login
          </button>
        )}
      </div>
    </div>
  );
};

export default Login;