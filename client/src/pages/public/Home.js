// src/pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
// import './Home.css'; // optional custom styles

const Home = () => {
  return (
    <div className="container mt-5 text-center">
      <h1>Welcome to the Online Crime Reporting System</h1>
      <p className="lead">Your safety, our priority. Report crimes securely and track FIR status online.</p>

      <div className="d-grid gap-3 col-6 mx-auto mt-4">
        <Link to="/report-crime" className="btn btn-danger">Report a Crime</Link>
        <Link to="/track-complaint" className="btn btn-warning">Track Complaint</Link>
        <Link to="/faq" className="btn btn-info">FAQs</Link>
      </div>
    </div>
  );
};

export default Home;