import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FaBars,
  FaHome,
  FaRegFileAlt,
  FaUserShield,
  FaChartBar,
  FaSignOutAlt,
} from "react-icons/fa";
import "./Sidebar.css";

const Sidebar = ({ role }) => {
  const [collapsed, setCollapsed] = useState(false);

  // Auto-collapse on mobile screen
  useEffect(() => {
    const handleResize = () => {
      setCollapsed(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // initial check

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  return (
    <div className={`sidebar ${collapsed ? "collapsed" : ""}`}>
      <div className="sidebar-header d-flex justify-content-between align-items-center p-3">
        {!collapsed && <h5 className="text-white m-0">Dashboard</h5>}
        <FaBars className="text-white toggle-btn" onClick={toggleSidebar} />
      </div>

      <ul className="nav flex-column text-white">
        <li className="nav-item">
          <Link to="/" className="nav-link text-white" title={collapsed ? "Home" : ""}>
            <FaHome className="me-2" />
            {!collapsed && "Home"}
          </Link>
        </li>

        {role === "Police" && (
          <>
            <li className="nav-item">
              <Link to="/dashboard/police" className="nav-link text-white" title={collapsed ? "Police Dashboard" : ""}>
                <FaUserShield className="me-2" />
                {!collapsed && "Police Dashboard"}
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/fir" className="nav-link text-white" title={collapsed ? "FIR Management" : ""}>
                <FaRegFileAlt className="me-2" />
                {!collapsed && "FIR Management"}
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/heatmap" className="nav-link text-white" title={collapsed ? "Crime Heatmap" : ""}>
                <FaChartBar className="me-2" />
                {!collapsed && "Crime Heatmap"}
              </Link>
            </li>
          </>
        )}

        {/* Add more role-based links here */}
      </ul>

      <div className="p-3 logout-section">
        <button
          onClick={handleLogout}
          className="btn btn-danger w-100 d-flex align-items-center justify-content-center"
          title={collapsed ? "Logout" : ""}
        >
          <FaSignOutAlt className="me-2" />
          {!collapsed && "Logout"}
        </button>
      </div>
    </div>
  );
};

export default Sidebar;