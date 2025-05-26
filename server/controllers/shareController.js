// server/controllers/shareController.js

exports.getAllSharedReports = (req, res) => {
    res.status(200).json({ message: 'Fetched all shared reports' });
  };
  
  exports.shareReport = (req, res) => {
    const { reportId, recipientEmail } = req.body;
    // You can add logic here to actually share a report
    res.status(200).json({ message: `Report ${reportId} shared with ${recipientEmail}` });
  };