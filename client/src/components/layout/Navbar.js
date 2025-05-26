import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { Navbar, Nav, Container, Button, NavDropdown } from "react-bootstrap";

const NavigationBar = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();       // Clear localStorage/token
    navigate("/login");
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand as={Link} to="/">Online Crime Reporting</Navbar.Brand>
        <Navbar.Toggle aria-controls="main-navbar" />
        <Navbar.Collapse id="main-navbar">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>

            {/* Show only to public users */}
            {user?.role === "Public" && (
              <>
                <Nav.Link as={Link} to="/report">Report Crime</Nav.Link>
                <Nav.Link as={Link} to="/track">Track Complaint</Nav.Link>
                <Nav.Link as={Link} to="/sos">SOS</Nav.Link>
              </>
            )}

            {/* Show only to police */}
            {user?.role === "Police" && (
              <>
                <Nav.Link as={Link} to="/dashboard/police">Police Dashboard</Nav.Link>
                <Nav.Link as={Link} to="/fir">FIR Management</Nav.Link>
              </>
            )}

            {/* Show only to admin */}
            {user?.role === "Admin" && (
              <>
                <Nav.Link as={Link} to="/admin">Admin Panel</Nav.Link>
                <Nav.Link as={Link} to="/logs">System Logs</Nav.Link>
              </>
            )}
          </Nav>

          <Nav>
            {!user ? (
              <>
                <Nav.Link as={Link} to="/login">Login</Nav.Link>
                <Nav.Link as={Link} to="/register">Register</Nav.Link>
              </>
            ) : (
              <NavDropdown title={user.name || "Account"} align="end">
                <NavDropdown.Item onClick={handleLogout}>Logout</NavDropdown.Item>
              </NavDropdown>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;