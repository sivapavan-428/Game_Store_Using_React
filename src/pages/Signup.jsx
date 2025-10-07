import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Signup.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";

function SignUp() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agree, setAgree] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;

    if (!firstName || !lastName || !email || !password || !confirmPassword) {
      alert("Please fill all fields.");
      return;
    }


    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    // if (!passwordRegex.test(password)) {
    //   alert("Password must be at least 6 characters and include letters and numbers.");
    //   return;
    // }

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    if (!agree) {
      alert("You must agree to the Terms & Conditions.");
      return;
    }

    try {
      const response = await fetch("http://localhost:8081/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          password,
        }),
      });
      if (response.ok) {
        const message = await response.text();
        alert(message);
        navigate("/login");
      } else {
        const error = await response.text();
        alert(`signup failed: ${error}`);
      }
    }
    catch (error) {
      console.error("Erroe during signup:", error);
      alert("Something went wrong. Please try again later.")
    }
  };

  return (
    <div className="signup">
      <h2>Create an Account</h2>
      <p>
        Already have an account? <Link to="/login" className="login-link">Login</Link>
      </p>

      <form onSubmit={handleSignUp}>
        <div className="fullName">
          <input
            type="text"
            id="fname"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
          <input
            type="text"
            id="lname"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>

        <input
          className="email"
          type="email"
          id="email"
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
            required/>
          <span
            className="password-icon"
            onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>

        <div className="password-wrapper">
          <input
            type={showConfirmPassword ? "text" : "password"}
            id="cpassword"
            className="passwords"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required/>
          <span
            className="password-icon"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
            {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>

        <label className="terms">
          <input
            type="checkbox"
            checked={agree}
            onChange={(e) => setAgree(e.target.checked)}
          />
          I agree to the <a href="#">Terms & Conditions</a>
        </label>

        <button type="submit">Create Account</button>
      </form>

      <p className="or-text">or register with</p>
      <div className="accounts">
        <button style={{ background: "#adacab" }} className="google">
          <a href="https://accounts.google.com/" target="_blank" rel="noopener noreferrer">Google</a>
        </button>
        <button className="apple">
          <a href="http://facebook.com" target="_blank" rel="noopener noreferrer">Apple</a>
        </button>
      </div>
    </div>
  );
}

export default SignUp;
