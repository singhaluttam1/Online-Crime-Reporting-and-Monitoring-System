// controllers/notificationController.js
exports.getAllNotifications = (req, res) => {
    res.status(200).json({ message: 'All notifications fetched successfully.' });
  };
  
  exports.sendNotification = (req, res) => {
    res.status(200).json({ message: 'Notification sent successfully.' });
  };