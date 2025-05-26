// src/pages/auth/Register.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: ""
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value.trim() });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/auth/register", form);
      alert("✅ Registration successful! Please login.");
      navigate("/login");
    } catch (err) {
      alert(err.response?.data?.message || "❌ Registration failed");
    }
  };

  return (
    <div className="auth-container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={form.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            name="password"
            placeholder="Create a password"
            value={form.password}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Role:</label>
          <select
            name="role"
            value={form.role}
            onChange={handleChange}
            required
          >
            <option value="">-- Select Role --</option>
            <option value="user">User</option>
            <option value="admin">Admin</option>
            <option value="police">Police</option>
          </select>
        </div>

        <button type="submit">Register</button>
      </form>

      <p>
        Already have an account?{" "}
        <a href="/login">
          Login
        </a>
      </p>
    </div>
  );
};

export default Register;