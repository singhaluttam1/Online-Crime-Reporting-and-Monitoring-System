// src/pages/ReportCrime.js
import React, { useState } from 'react';
import axios from 'axios';

const ReportCrime = () => {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    location: '',
    type: '',
    description: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await axios.post('/api/report-crime', formData);
      setSubmitted(true);
    } catch (err) {
      alert('Error submitting report');
    }
  };

  return (
    <div className="container mt-5">
      <h2>Report a Crime</h2>
      {submitted ? (
        <div className="alert alert-success">Crime reported successfully!</div>
      ) : (
        <form onSubmit={handleSubmit}>
          <input className="form-control mb-2" name="name" placeholder="Your Name" onChange={handleChange} required />
          <input className="form-control mb-2" name="contact" placeholder="Contact Info" onChange={handleChange} required />
          <input className="form-control mb-2" name="location" placeholder="Crime Location" onChange={handleChange} required />
          <select className="form-select mb-2" name="type" onChange={handleChange} required>
            <option value="">Select Crime Type</option>
            <option value="theft">Theft</option>
            <option value="assault">Assault</option>
            <option value="cybercrime">Cybercrime</option>
          </select>
          <textarea className="form-control mb-3" name="description" placeholder="Describe the incident" rows="4" onChange={handleChange} required />
          <button className="btn btn-primary" type="submit">Submit Report</button>
        </form>
      )}
    </div>
  );
};

export default ReportCrime;