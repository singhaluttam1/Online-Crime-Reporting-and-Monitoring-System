// src/pages/TrackComplaint.js
import React, { useState } from 'react';
import axios from 'axios';

const TrackComplaint = () => {
  const [firId, setFirId] = useState('');
  const [status, setStatus] = useState(null);

  const handleSearch = async () => {
    try {
      const res = await axios.get(`/api/fir-status/${firId}`);
      setStatus(res.data);
    } catch {
      setStatus({ error: 'Not found or invalid FIR ID' });
    }
  };

  return (
    <div className="container mt-5">
      <h2>Track Complaint</h2>
      <div className="input-group mb-3 mt-4">
        <input
          type="text"
          className="form-control"
          placeholder="Enter FIR ID"
          value={firId}
          onChange={e => setFirId(e.target.value)}
        />
        <button className="btn btn-primary" onClick={handleSearch}>Check Status</button>
      </div>

      {status && (
        <div className="alert alert-info">
          {status.error
            ? status.error
            : `Status: ${status.status} | Last Updated: ${status.updatedAt}`}
        </div>
      )}
    </div>
  );
};

export default TrackComplaint;