// controllers/policeController.js
exports.getAssignedCases = (req, res) => {
  res.json({ message: 'List of assigned cases' });
};

exports.updateCaseStatus = (req, res) => {
  res.json({ message: `Case ${req.params.id} status updated` });
};

exports.getNotifications = (req, res) => {
  res.json({ message: 'List of notifications' });
};