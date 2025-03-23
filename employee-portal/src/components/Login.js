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
  const navigate = useNavigate(); // Hook for redirection

  // Simulated user data
  const [user, setUser] = useState({
    email: "arvingeguna123@gmail.com",
    password: "password123",
  });

  const handleLogin = () => {
    if (email === user.email && password === user.password) {
      navigate("/dashboard"); // Redirect to Dashboard.js
    } else {
      setError("Invalid email or password!");
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
        <h2 className="login-title">Log In</h2>

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
          <a onClick={handleForgotPassword} className="forgot-password">Forgot Password?</a>
        </div>
        <button className="login-button" onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
};

export default Login;
