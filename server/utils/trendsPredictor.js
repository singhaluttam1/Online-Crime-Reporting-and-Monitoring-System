
// trendsPredictor.js
const Crime = require('../models/Crime');
const predictTrends = async () => {
  const now = new Date();
  const sixMonthsAgo = new Date();
  sixMonthsAgo.setMonth(now.getMonth() - 6);

  const crimes = await Crime.aggregate([
    { $match: { date: { $gte: sixMonthsAgo } } },
    { $group: {
      _id: { month: { $month: '$date' }, type: '$type' },
      count: { $sum: 1 },
    } },
    { $sort: { '_id.month': 1 } }
  ]);

  return crimes;
};
module.exports = predictTrends;