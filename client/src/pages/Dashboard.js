// src/pages/Dashboard.js
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const userData = localStorage.getItem("user");
    if (!token || !userData) {
      navigate("/login");
    } else {
      setUser(JSON.parse(userData));
    }
  }, [navigate]);

  return (
    <div className="dashboard-container">
      <h2>Welcome to your Dashboard</h2>
      {user && (
        <div>
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Role:</strong> {user.role}</p>
        </div>
      )}
    </div>
  );
};

export default Dashboard;