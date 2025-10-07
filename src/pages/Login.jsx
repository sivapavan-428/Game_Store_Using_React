import { Link, useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import { FaGoogle, FaFacebookF } from "react-icons/fa";
import "./Login.css";
import { AuthContext } from "../utils/AuthContext";
import { FaEye, FaEyeSlash } from "react-icons/fa";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please enter both email and password.");
      return;
    }

    try {
      const response = await fetch("http://localhost:8081/auth/login", {
        method: "POST",
        headers: { "Content-Type": "Application/json" },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      if (response.ok) {
        const data = await response.json();

        localStorage.setItem("user", JSON.stringify(data));

        alert(`Welcome back, ${data.firstName}!`);
        login();
        navigate("/");
      } else {
        const error = await response.text();
        alert(`Login failed : ${error}`);
      }
    }
    catch (error) {
      console.error("Error during login:", error);
      alert("Something went wrong. PLease try again later.");
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Welcome Back!</h2>
        <p className="login-subtitle">Sign in to continue FEQuest</p>

        <form onSubmit={handleLogin}>
          <input
            className="email"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <div className="password-wrapper">
            <input
              className="passwords"
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required />
            <span
              className="password-icon"
              onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          <div className="login-options">
            <label>
              <input type="checkbox" /> Remember me
            </label>
            <a href="#">Forgot password?</a>
          </div>

          <button type="submit" className="login-btn">Login</button>
        </form>

        <div className="divider">
          <span>OR</span>
        </div>

        <div className="social-login">
          <a href="https://accounts.google.com/" target="_blank" rel="noopener noreferrer">
            <button className="social-btn google">
              <FaGoogle className="icon" /> Sign in with Google
            </button>
          </a>
          <a href="http://facebook.com" target="_blank" rel="noopener noreferrer">
            <button className="social-btn facebook">
              <FaFacebookF className="icon" /> Sign in with Facebook
            </button>
          </a>

        </div>

        <p className="signup-text">
          Don’t have an account? <Link to="/signup" className="signup-link">Sign Up</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
