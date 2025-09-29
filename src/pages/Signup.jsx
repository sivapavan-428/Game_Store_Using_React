// src/pages/Signup.jsx
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Signup.css";

function SignUp() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();

    if (!firstName || !lastName || !email || !password) {
      alert("Please fill all fields.");
      return;
    }

    // Temporary alert, can integrate with backend later
    alert(`Account created for ${firstName} ${lastName}`);
    navigate("/login"); // redirect to login after signup
  };

  return (
    <div className="signup">
      <h2>Create an account</h2>
      <p>
        Already have an account? <Link to="/login"> Login</Link>
      </p>

      <form onSubmit={handleSignUp}>
        <div className="fullName">
          <input
            type="text"
            placeholder="First name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Last name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <p>
          <input type="checkbox" /> I agree to the{" "}
          <a href="#">Terms & Conditions</a>
        </p>

        <button type="submit">Create account</button>
      </form>

      <p>or register with</p>
      <div className="accounts">
        <button>
          <a href="#">Google</a>
        </button>
        <button>
          <a href="#">Apple</a>
        </button>
      </div>
    </div>
  );
}

export default SignUp;
