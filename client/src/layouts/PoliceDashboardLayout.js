import React, { useState } from "react";
import Sidebar from "../components/layout/Sidebar";
import { Outlet } from "react-router-dom";

const PoliceDashboardLayout = () => {
  const [collapsed, setCollapsed] = useState(false); // ✅ Define the state

  return (
    <div style={{ display: "flex" }}>
      <Sidebar role="Police" collapsed={collapsed} setCollapsed={setCollapsed} />

      <div
        className="main-content"
        style={{
          marginLeft: collapsed ? "70px" : "250px", // ✅ Adjust content margin
          transition: "margin 0.3s ease",
          padding: "20px",
          width: "100%",
        }}
      >
        <Outlet />
      </div>
    </div>
  );
};

export default PoliceDashboardLayout;