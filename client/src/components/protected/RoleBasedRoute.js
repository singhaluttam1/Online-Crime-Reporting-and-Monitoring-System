// src/components/protected/RoleBasedRoute.js
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';

const RoleBasedRoute = ({ allowedRoles = [] }) => {
  const token = localStorage.getItem('token');

  if (!token) return <Navigate to="/login" replace />;

  try {
    const decoded = jwtDecode(token);
    const userRole = decoded.role;

    return allowedRoles.includes(userRole) ? (
      <Outlet />
    ) : (
      <Navigate to="/unauthorized" replace />
    );
  } catch (error) {
    return <Navigate to="/login" replace />;
  }
};

export default RoleBasedRoute;