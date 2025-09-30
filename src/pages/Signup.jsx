import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Signup.css";

function SignUp() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agree, setAgree] = useState(false);

  const navigate = useNavigate();

  const handleSignUp = (e) => {
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

    alert(`Account created for ${firstName} ${lastName}`);
    navigate("/login");
  };

  return (
    <div className="signup">
      <h2>Create an Account</h2>
      <p>
        Already have an account? <Link to="/login">Login</Link>
      </p>

      <form onSubmit={handleSignUp}>
        <div className="fullName">
          <input
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>

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
        <input
          type="password"
          className="passwords"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />

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
        <button style={{background:"#adacab"}} className="google">
          <a href="#" >Google</a>
        </button>
        <button className="apple">
          <a href="#">Apple</a>
        </button>
      </div>
    </div>
  );
}

export default SignUp;
