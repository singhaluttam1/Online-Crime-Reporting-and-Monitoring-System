// src/pages/SOSButton.js
import React from 'react';

const SOSButton = () => {
  const handleSOS = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        const { latitude, longitude } = position.coords;
        // Replace with your API endpoint
        fetch('/api/sos', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ latitude, longitude }),
        });
        alert('SOS alert sent with your location.');
      });
    } else {
      alert('Geolocation not supported.');
    }
  };

  return (
    <div className="container text-center mt-5">
      <h2>Panic/SOS Button</h2>
      <p>Click below in case of emergency. Your location will be sent to the nearest authorities.</p>
      <button className="btn btn-danger btn-lg mt-3" onClick={handleSOS}>🚨 Send SOS Alert</button>
    </div>
  );
};

export default SOSButton;