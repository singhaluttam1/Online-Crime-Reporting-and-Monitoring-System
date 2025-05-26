// sentimentAnalyzer.js
const natural = require('natural');
const analyzer = new natural.SentimentAnalyzer('English', natural.PorterStemmer, 'afinn');
const analyzeSentiment = (text) => {
  const tokenized = text.split(' ');
  const score = analyzer.getSentiment(tokenized);
  return score;
};
module.exports = analyzeSentiment;


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
