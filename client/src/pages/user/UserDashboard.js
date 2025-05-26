// src/pages/user/UserDashboard.js
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const UserDashboard = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [reports, setReports] = useState([]);
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const userData = localStorage.getItem("user");

    if (!token || !userData) {
      navigate("/login");
    } else {
      setUser(JSON.parse(userData));
    }

    // Dummy reports
    setReports([
      { id: "RPT1234", date: "2024-05-10", status: "Pending" },
      { id: "RPT5678", date: "2024-04-21", status: "Under Review" },
    ]);

    // Dummy notifications
    setNotifications([
      { id: 1, message: "Case #RPT5678 is now under investigation", read: false },
      { id: 2, message: "Please upload more evidence for Case #RPT1234", read: false },
    ]);
  }, [navigate]);

  const chartData = {
    labels: ["Theft", "Fraud", "Vandalism", "Assault"],
    datasets: [
      {
        label: "Your Reports",
        data: [4, 2, 1, 3],
        backgroundColor: "#007bff",
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: { position: 'top' },
      title: { display: true, text: 'Crime Type Statistics' },
    },
  };

  return (
    <div className="container mt-4">
      <h2>Welcome {user?.name} 👋</h2>
      <p>You have {reports.length} report(s). {notifications.filter(n => !n.read).length} unread notification(s).</p>

      <div className="row mb-4">
        <div className="col">
          <button className="btn btn-primary me-2" onClick={() => navigate("/report-crime")}>
            File New Report
          </button>
          <button className="btn btn-danger" onClick={() => navigate("/sos")}>
            Emergency Contact
          </button>
        </div>
      </div>

      <h4>Recent Reports</h4>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Reference #</th>
            <th>Date</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {reports.map((r) => (
            <tr key={r.id}>
              <td>{r.id}</td>
              <td>{r.date}</td>
              <td>{r.status}</td>
              <td>
                <button className="btn btn-sm btn-outline-primary me-2">View</button>
                {r.status === "Pending" && <button className="btn btn-sm btn-outline-warning">Edit</button>}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h4>Notifications</h4>
      <ul className="list-group mb-4">
        {notifications.map((n) => (
          <li key={n.id} className={`list-group-item ${!n.read ? "fw-bold" : ""}`}>
            {n.message}
          </li>
        ))}
      </ul>

      <h4>Statistics</h4>
      <div style={{ maxWidth: 600 }}>
        <Bar data={chartData} options={chartOptions} />
      </div>

      <h4 className="mt-4">Emergency Resources</h4>
      <ul>
        <li><strong>Police:</strong> 100</li>
        <li><strong>Ambulance:</strong> 102</li>
        <li><strong>Domestic Violence Helpline:</strong> 181</li>
      </ul>

      <h4 className="mt-4">Help & Support</h4>
      <ul>
        <li><a href="/faq">FAQs</a></li>
        <li><button className="btn btn-link p-0" disabled>Live Chat (coming soon)</button></li>
<li><button className="btn btn-link p-0" disabled>How to Use Tutorial</button></li>
      </ul>

    </div>
  );
};

export default UserDashboard;