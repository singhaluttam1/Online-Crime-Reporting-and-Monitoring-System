import React, { useEffect, useState } from 'react';
import axios from 'axios';

const FIRManagement = () => {
  const [firs, setFirs] = useState([]);

  useEffect(() => {
    const fetchFIRs = async () => {
      const res = await axios.get('/api/police/firs');
      setFirs(res.data);
    };
    fetchFIRs();
  }, []);

  const updateStatus = async (id, newStatus) => {
    await axios.put(`/api/police/firs/${id}`, { status: newStatus });
    setFirs((prev) =>
      prev.map((fir) => (fir._id === id ? { ...fir, status: newStatus } : fir))
    );
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">FIR Management</h2>
      <table className="w-full border text-sm">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-2 border">FIR ID</th>
            <th className="p-2 border">Complainant</th>
            <th className="p-2 border">Crime Type</th>
            <th className="p-2 border">Status</th>
            <th className="p-2 border">Action</th>
          </tr>
        </thead>
        <tbody>
          {firs.map((fir) => (
            <tr key={fir._id}>
              <td className="p-2 border">{fir.firId}</td>
              <td className="p-2 border">{fir.complainantName}</td>
              <td className="p-2 border">{fir.crimeType}</td>
              <td className="p-2 border">{fir.status}</td>
              <td className="p-2 border">
                <select
                  value={fir.status}
                  onChange={(e) => updateStatus(fir._id, e.target.value)}
                  className="border rounded p-1"
                >
                  <option value="Pending">Pending</option>
                  <option value="Assigned">Assigned</option>
                  <option value="Resolved">Resolved</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FIRManagement;