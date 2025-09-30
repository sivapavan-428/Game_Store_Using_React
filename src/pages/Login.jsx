import { Link, useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import { FaGoogle, FaFacebookF } from "react-icons/fa";
import "./Login.css";
import { AuthContext } from "../utils/AuthContext"; // 👈 import context

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(AuthContext); // 👈 use login from context
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please enter both email and password.");
      return;
    }

    // ✅ call global login() so Toptool updates
    login();

    alert(`Logged in with email: ${email}`);
    navigate("/"); // redirect to Home after login
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Welcome Back!</h2>
        <p className="login-subtitle">Sign in to continue to FEQuest</p>

        <form onSubmit={handleLogin}>
          <input
            className="email"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            className="passwords"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

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
          <button className="social-btn google">
            <FaGoogle className="icon" /> Sign in with Google
          </button>
          <button className="social-btn facebook">
            <FaFacebookF className="icon" /> Sign in with Facebook
          </button>
        </div>

        <p className="signup-text">
          Don’t have an account? <Link to="/signup">Sign Up</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
