import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Bar, Doughnut, Line, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const PoliceDashboard = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (!userData) {
      navigate("/login");
    } else {
      setUser(JSON.parse(userData));
    }
  }, [navigate]);

  const handleReview = () => alert("Redirecting to review new reports...");
  const handleDispatch = () => alert("Redirecting to assign patrol...");
  const handleAlert = () => alert("Redirecting to issue alert...");

  const crimeData = {
    labels: ["Theft", "Assault", "Vandalism"],
    datasets: [{
      data: [10, 6, 8],
      backgroundColor: ["#3B82F6", "#EF4444", "#10B981"],
      borderWidth: 0,
    }]
  };

  const resolvedCasesData = {
    labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
    datasets: [{
      label: "Resolved Cases",
      data: [3, 6, 9, 5],
      backgroundColor: "#6366F1",
      borderRadius: 8,
    }]
  };

  const patrolTrendData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [{
      label: "Patrol Hours",
      data: [5, 6, 7, 6, 5, 4, 6],
      fill: true,
      backgroundColor: "rgba(34,197,94,0.2)",
      borderColor: "#22C55E"
    }]
  };

  const alertTypesData = {
    labels: ["Wanted", "Missing", "General Warning"],
    datasets: [{
      data: [5, 3, 7],
      backgroundColor: ["#F59E0B", "#10B981", "#3B82F6"]
    }]
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <header className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Police Dashboard</h1>
          <p className="text-sm text-gray-500 mt-1">
            {new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>
        <div className="flex items-center gap-4">
          <div className="text-right">
            <p className="font-medium">{user?.name || "Officer"}</p>
            <p className="text-sm text-gray-500">{user?.badgeNumber || "Badge #XXXX"}</p>
          </div>
          <div className="h-10 w-10 rounded-full bg-blue-500 flex items-center justify-center text-white">
            {user?.name?.charAt(0) || "P"}
          </div>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 cursor-pointer" onClick={handleReview}>
          <div className="flex items-center justify-between mb-4">
            <span className="text-2xl">📋</span>
            <span className="px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">Review (4)</span>
          </div>
          <h3 className="text-lg font-semibold text-gray-800">New Reports</h3>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 cursor-pointer" onClick={handleDispatch}>
          <div className="flex items-center justify-between mb-4">
            <span className="text-2xl">🚨</span>
            <span className="px-3 py-1 rounded-full text-sm font-medium bg-red-100 text-red-800">Assign Patrol</span>
          </div>
          <h3 className="text-lg font-semibold text-gray-800">Dispatch Unit</h3>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 cursor-pointer" onClick={handleAlert}>
          <div className="flex items-center justify-between mb-4">
            <span className="text-2xl">🚔</span>
            <span className="px-3 py-1 rounded-full text-sm font-medium bg-amber-100 text-amber-800">Issue Alert</span>
          </div>
          <h3 className="text-lg font-semibold text-gray-800">BOLO Alerts</h3>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="overflow-x-auto">
            {/* Active Cases Table */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-800">Active Cases</h3>
                <button
                  className="text-blue-600 hover:underline text-sm font-medium"
                  onClick={() => navigate("/cases")} // make sure /cases route exists
                >
                  View All
                </button>
              </div>
              <table className="w-full text-sm text-left text-gray-600">
                <thead className="text-xs text-gray-500 uppercase bg-gray-50">
                  <tr>
                    <th scope="col" className="px-4 py-3">Case ID</th>
                    <th scope="col" className="px-4 py-3">Type</th>
                    <th scope="col" className="px-4 py-3">Location</th>
                    <th scope="col" className="px-4 py-3">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { id: "C-101", type: "Theft", location: "Sector 21", status: "Under Investigation" },
                    { id: "C-102", type: "Assault", location: "Downtown", status: "Pending Evidence" },
                    { id: "C-103", type: "Vandalism", location: "Park Avenue", status: "Open" }
                  ].map((caseItem, index) => (
                    <tr key={index} className="bg-white border-b hover:bg-gray-50">
                      <td className="px-4 py-3 font-medium text-gray-800">{caseItem.id}</td>
                      <td className="px-4 py-3">{caseItem.type}</td>
                      <td className="px-4 py-3">{caseItem.location}</td>
                      <td className="px-4 py-3">
                        <span className="inline-block px-2 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-800">
                          {caseItem.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>


        <div className="space-y-6">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-lg font-semibold mb-4">Crime Distribution</h3>
            <div className="h-64">
              <Doughnut data={crimeData} options={{ maintainAspectRatio: false, plugins: { legend: { position: 'bottom', labels: { padding: 20 } } } }} />
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-lg font-semibold mb-4">Case Resolution Progress</h3>
            <div className="h-64">
              <Bar data={resolvedCasesData} options={{ maintainAspectRatio: false, scales: { y: { beginAtZero: true, ticks: { stepSize: 2 } }, x: { grid: { display: false } } }, plugins: { legend: { display: false } } }} />
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-lg font-semibold mb-4">Patrol Trends</h3>
            <div className="h-64">
              <Line data={patrolTrendData} options={{ maintainAspectRatio: false, plugins: { legend: { position: "top" } }, scales: { y: { beginAtZero: true } } }} />
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-lg font-semibold mb-4">Alert Types</h3>
            <div className="h-64">
              <Pie data={alertTypesData} options={{ maintainAspectRatio: false, plugins: { legend: { position: 'right' } } }} />
            </div>
          </div>
        </div>
      </div>

      {/* Additional Sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 className="text-lg font-semibold mb-4">Evidence Management</h3>
          <div className="space-y-4">
            <button className="w-full py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              Upload New Evidence
            </button>
            <div className="space-y-2">
              {['Forensic Report #45', 'CCTV Footage.zip', 'Witness Statement.pdf'].map((file, i) => (
                <div key={i} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <span className="text-sm">{file}</span>
                  <button className="text-gray-400 hover:text-gray-600">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 className="text-lg font-semibold mb-4">Team Status</h3>
          <div className="space-y-4">
            {[
              { name: "Officer Mehta", role: "Patrol", status: "On Duty", badge: "👮" },
              { name: "Detective Khan", role: "CID", status: "On Leave", badge: "🕵️" },
              { name: "Sgt. Rodriguez", role: "Supervisor", status: "Available", badge: "👨✈️" },
            ].map((member, i) => (
              <div key={i} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <span className="text-xl">{member.badge}</span>
                  <div>
                    <p className="font-medium">{member.name}</p>
                    <p className="text-sm text-gray-500">{member.role}</p>
                  </div>
                </div>
                <span className={`text-sm px-2 py-1 rounded-full ${member.status === "On Duty" ? "bg-green-100 text-green-800" :
                    member.status === "On Leave" ? "bg-red-100 text-red-800" :
                      "bg-blue-100 text-blue-800"
                  }`}>
                  {member.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
};

export default PoliceDashboard;

