import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Bar, Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement, Tooltip, Legend);

const LiveStats = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get('/api/police/stats').then((res) => setData(res.data));
  }, []);

  if (!data) return <p>Loading live stats...</p>;

  const barData = {
    labels: data.topCrimeTypes.map((c) => c.type),
    datasets: [
      {
        label: 'Crime Count',
        data: data.topCrimeTypes.map((c) => c.count),
        backgroundColor: '#2563eb',
      },
    ],
  };

  const doughnutData = {
    labels: ['Pending', 'Resolved', 'Assigned'],
    datasets: [
      {
        label: 'FIR Status Distribution',
        data: [data.pending, data.resolved, data.assigned],
        backgroundColor: ['#facc15', '#22c55e', '#3b82f6'],
      },
    ],
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Live Crime Statistics</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white p-4 shadow rounded">
          <h4 className="mb-2 font-semibold">Top Crime Categories</h4>
          <Bar data={barData} />
        </div>
        <div className="bg-white p-4 shadow rounded">
          <h4 className="mb-2 font-semibold">FIR Status Overview</h4>
          <Doughnut data={doughnutData} />
        </div>
      </div>
    </div>
  );
};

export default LiveStats;