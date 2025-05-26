// heatmapGenerator.js
const Crime = require('../models/Crime');
const mongoose = require('mongoose');
const generateHeatmapData = async () => {
  try {
    const crimes = await Crime.find({}, 'location type');
    const heatmap = crimes.map(c => ({
      lat: c.location.coordinates[1],
      lng: c.location.coordinates[0],
      weight: 1 // You can vary this based on crime severity
    }));
    return heatmap;
  } catch (error) {
    throw new Error('Error generating heatmap data');
  }
};
module.exports = generateHeatmapData;
