import React, { useEffect, useState } from 'react';
import {
  LineChart, Line, AreaChart, Area, BarChart, Bar,
  PieChart, Pie, Cell, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer
} from 'recharts';
import { MapContainer, TileLayer, Circle } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const ReportsAnalytics = () => {
  const [data] = useState({
    // 1. Time-Based Crime Trends
    trends: [
      { date: 'Jan', reports: 45, resolved: 30 },
      { date: 'Feb', reports: 60, resolved: 45 },
      { date: 'Mar', reports: 75, resolved: 50 },
      { date: 'Apr', reports: 55, resolved: 40 },
      { date: 'May', reports: 85, resolved: 60 },
    ],
  
    // 2. Crime Category Breakdown
    categories: [
      { category: 'Theft', count: 120 },
      { category: 'Assault', count: 75 },
      { category: 'Fraud', count: 60 },
      { category: 'Vandalism', count: 45 },
      { category: 'Burglary', count: 30 },
    ],
  
    // 3. Status Distribution
    statusDistribution: [
      { status: 'Pending', value: 35 },
      { status: 'Resolved', value: 60 },
      { status: 'Escalated', value: 15 },
    ],
  
    // 4. Geographical Insights
    geoData: [
      { lat: 28.61, lng: 77.23, count: 5 },
      { lat: 28.58, lng: 77.21, count: 3 },
      { lat: 28.55, lng: 77.19, count: 8 },
      { lat: 28.53, lng: 77.25, count: 2 },
    ],
  
    // 5. Demographic Analysis
    demographics: [
      { group: '18-24', male: 45, female: 32 },
      { group: '25-34', male: 60, female: 55 },
      { group: '35-44', male: 35, female: 40 },
      { group: '45+', male: 20, female: 25 },
    ],
  
    // 6. Resolution Metrics
    resolution: [
      { department: 'Patrol', followUp: 12, closed: 45 },
      { department: 'CID', followUp: 8, closed: 32 },
      { department: 'Cyber Crime', followUp: 5, closed: 15 },
      { department: 'Narcotics', followUp: 3, closed: 10 },
    ],
  
    // 7. Hourly/Daily Patterns
    hourly: [
      { hour: '00:00', reports: 5 },
      { hour: '04:00', reports: 3 },
      { hour: '08:00', reports: 15 },
      { hour: '12:00', reports: 25 },
      { hour: '16:00', reports: 40 },
      { hour: '20:00', reports: 55 },
    ],
  
    // 8. Anomaly Detection
    alerts: [
      { message: "150% spike in burglary reports in Zone 5" },
      { message: "Unusual late-night activity pattern detected" },
    ],
  
    // 9. Reporting Channels
    channels: [
      { channel: 'Web', reports: 320, attachments: 150 },
      { channel: 'Mobile', reports: 480, attachments: 280 },
      { channel: 'Phone', reports: 120, attachments: 40 },
    ],
  
    // 10. Case Duration Analysis
    durations: [
      { type: 'Theft', days: 7.2 },
      { type: 'Assault', days: 4.8 },
      { type: 'Fraud', days: 14.5 },
      { type: 'Cyber Crime', days: 21.3 },
    ],
  });
  useEffect(() => {
    // Fetch analytics data here and set it
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-3xl font-semibold mb-4">Reports Analytics Dashboard</h2>

      {/* 1. Time-Based Crime Trends */}
      <section className="mb-10">
        <h3 className="text-xl font-bold mb-2">Crime Trends Over Time</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data.trends}>
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="reports" stroke="#8884d8" />
            <Line type="monotone" dataKey="resolved" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
      </section>

      {/* 2. Crime Category Breakdown */}
      <section className="mb-10">
        <h3 className="text-xl font-bold mb-2">Crime Categories</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data.categories}>
            <XAxis dataKey="category" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="count" fill="#ff7f0e" />
          </BarChart>
        </ResponsiveContainer>
      </section>

      {/* 3. Status Distribution */}
      <section className="mb-10">
        <h3 className="text-xl font-bold mb-2">Status Distribution</h3>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={data.statusDistribution}
              dataKey="value"
              nameKey="status"
              cx="50%"
              cy="50%"
              outerRadius={100}
              label
            >
              {data.statusDistribution?.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={['#8884d8', '#82ca9d', '#ffc658'][index % 3]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </section>

      {/* 4. Geographical Insights */}
      <section className="mb-10">
        <h3 className="text-xl font-bold mb-2">Geographical Crime Map</h3>
        <MapContainer center={[28.61, 77.23]} zoom={11} style={{ height: "400px", width: "100%" }}>
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          {data.geoData?.map((loc, idx) => (
            <Circle
              key={idx}
              center={[loc.lat, loc.lng]}
              radius={loc.count * 10}
              pathOptions={{ color: 'red' }}
            />
          ))}
        </MapContainer>
      </section>

      {/* 5. Demographic Analysis */}
      <section className="mb-10">
        <h3 className="text-xl font-bold mb-2">Victim Demographics</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data.demographics}>
            <XAxis dataKey="group" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="male" fill="#8884d8" />
            <Bar dataKey="female" fill="#ff69b4" />
          </BarChart>
        </ResponsiveContainer>
      </section>

      {/* 6. Resolution Metrics */}
      <section className="mb-10">
        <h3 className="text-xl font-bold mb-2">Resolution by Department</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data.resolution}>
            <XAxis dataKey="department" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="followUp" stackId="a" fill="#ffbb28" />
            <Bar dataKey="closed" stackId="a" fill="#00C49F" />
          </BarChart>
        </ResponsiveContainer>
      </section>

      {/* 7. Hourly/Daily Patterns */}
      <section className="mb-10">
        <h3 className="text-xl font-bold mb-2">Hourly Crime Reports</h3>
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={data.hourly}>
            <XAxis dataKey="hour" />
            <YAxis />
            <Tooltip />
            <Area type="monotone" dataKey="reports" stroke="#8884d8" fill="#8884d8" />
          </AreaChart>
        </ResponsiveContainer>
      </section>

      {/* 8. Anomaly Detection */}
      <section className="mb-10">
        <h3 className="text-xl font-bold mb-2">Anomaly Alerts</h3>
        <ul className="list-disc pl-6 text-red-600">
          {data.alerts?.map((alert, idx) => (
            <li key={idx}>{alert.message}</li>
          ))}
        </ul>
      </section>

      {/* 9. Reporting Channels */}
      <section className="mb-10">
        <h3 className="text-xl font-bold mb-2">Reporting Channels Comparison</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data.channels}>
            <XAxis dataKey="channel" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="reports" fill="#8884d8" />
            <Bar dataKey="attachments" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
      </section>

      {/* 10. Case Duration Analysis */}
      <section className="mb-10">
        <h3 className="text-xl font-bold mb-2">Case Duration Analysis</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data.durations}>
            <XAxis dataKey="type" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="days" fill="#ff4c4c" />
          </BarChart>
        </ResponsiveContainer>
      </section>
    </div>
  );
};

export default ReportsAnalytics;