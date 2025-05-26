import React, { useState } from 'react';
import axios from 'axios';

const CriminalSearch = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    try {
      const res = await axios.get(`/api/police/criminals?search=${query}`);
      setResults(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Criminal Database Search</h2>
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={query}
          placeholder="Enter name, ID or crime type"
          onChange={(e) => setQuery(e.target.value)}
          className="p-2 border border-gray-300 rounded w-full md:w-80"
        />
        <button onClick={handleSearch} className="bg-blue-600 text-white px-4 py-2 rounded">
          Search
        </button>
      </div>

      <ul className="space-y-2">
        {results.map((criminal) => (
          <li key={criminal._id} className="p-3 border border-gray-200 rounded shadow-sm">
            <strong>{criminal.name}</strong> — {criminal.records.length} Records
            <br />
            Associated Crimes: {criminal.associatedCrimes.join(', ')}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CriminalSearch;