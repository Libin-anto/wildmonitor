import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/loginpage.css";

function LoginPage() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    const user = username.trim().toLowerCase();
    const pass = password.trim();

    if (user === "admin" && pass === "admin123") {
      navigate("/dashboard"); 
    } else if (user === "staff" && pass === "staff123") {
      navigate("/staff-dashboard"); 
    } else {
      alert("❌ Invalid credentials");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") handleLogin();
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>WildMonitor Login</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          onKeyDown={handleKeyPress}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onKeyDown={handleKeyPress}
        />
        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
}

export default LoginPage;
