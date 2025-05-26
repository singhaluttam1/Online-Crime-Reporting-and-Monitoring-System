import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';

const SystemLogs = () => {
  const [logs] = useState([
    {
      id: 1,
      timestamp: '2024-03-15 14:30:22',
      eventType: 'Authentication',
      user: 'user@example.com',
      ip: '192.168.1.1',
      description: 'Failed login attempt (invalid password)',
      status: 'Failed',
      severity: 'Medium'
    },
    {
      id: 2,
      timestamp: '2024-03-15 14:35:01',
      eventType: 'Data Modification',
      user: 'admin@system.com',
      ip: '10.0.0.1',
      description: 'Deleted report #4567',
      status: 'Success',
      severity: 'Info'
    },
    // Add more logs here
  ]);

  const eventFrequency = [
    { event: 'Authentication', count: 45 },
    { event: 'Data Modification', count: 23 },
    { event: 'System Error', count: 12 },
  ];

  const handleExportCSV = () => {
    const fileName = prompt("Enter file name for export (without extension):", "system_logs");
    if (!fileName) return;

    const headers = ['Timestamp', 'Event Type', 'User', 'IP Address', 'Description', 'Status'];
    const rows = logs.map(log => [
      log.timestamp, log.eventType, log.user, log.ip, log.description, log.status
    ]);

    const csvContent = [headers, ...rows].map(e => e.join(',')).join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });

    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.setAttribute('download', `${fileName}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-6">📜 System Logs</h2>

      {/* Filters */}
      <div className="flex gap-4 mb-6">
        <select className="p-2 border rounded shadow-sm">
          <option>All Event Types</option>
          <option>Authentication</option>
          <option>Data Modification</option>
        </select>
        <input type="date" className="p-2 border rounded shadow-sm" />
      </div>

      {/* Bar Chart */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white p-4 rounded-xl shadow">
          <h3 className="font-semibold text-lg mb-3">📊 Event Frequency</h3>
          <BarChart width={500} height={200} data={eventFrequency}>
            <XAxis dataKey="event" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="count" fill="#3B82F6" />
          </BarChart>
        </div>
      </div>

      {/* Logs Table */}
      <div className="bg-white rounded-xl shadow overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead className="bg-gray-100 text-gray-700 uppercase text-xs tracking-wider">
            <tr>
              <th className="p-3 text-left">Timestamp</th>
              <th className="p-3 text-left">Event Type</th>
              <th className="p-3 text-left">User</th>
              <th className="p-3 text-left">IP Address</th>
              <th className="p-3 text-left">Description</th>
              <th className="p-3 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {logs.map(log => (
              <tr
                key={log.id}
                className={`border-t hover:bg-gray-50 transition ${
                  log.severity === 'Critical' ? 'bg-red-50' : ''
                }`}
              >
                <td className="p-3">{log.timestamp}</td>
                <td className="p-3">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    log.eventType === 'Authentication' ? 'bg-blue-100 text-blue-700' :
                    log.eventType === 'Data Modification' ? 'bg-green-100 text-green-700' :
                    'bg-gray-100 text-gray-700'
                  }`}>
                    {log.eventType}
                  </span>
                </td>
                <td className="p-3">{log.user}</td>
                <td className="p-3">{log.ip}</td>
                <td className="p-3">{log.description}</td>
                <td className="p-3">
                  <span className={`font-semibold ${
                    log.status === 'Failed' ? 'text-red-600' :
                    log.status === 'Success' ? 'text-green-600' :
                    'text-gray-600'
                  }`}>
                    {log.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer: Export & Pagination */}
      <div className="mt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
        <button 
          onClick={handleExportCSV}
          className="bg-blue-500 text-black px-4 py-2 rounded shadow hover:bg-blue-600 transition items-center"
        >
          Export CSV
        </button>
        <div className="flex gap-2">
          <button className="px-3 py-1 rounded bg-blue-100 text-blue-700 font-semibold">1</button>
          <button className="px-3 py-1 rounded hover:bg-gray-100 transition">2</button>
        </div>
      </div>
    </div>
  );
};

export default SystemLogs;