const fs = require('fs');
const path = require('path');

const analyticsLogPath = path.join(__dirname, 'analytics.log'); // Path to your log file

const analyticsMiddleware = (req, res, next) => {
  const ipAddress = req.ip;
  const timestamp = new Date().toISOString();
  const method = req.method;
  const url = req.url;
  const queryParams = JSON.stringify(req.query);

  const logMessage = `[${timestamp}] ${method} ${url} - IP: ${ipAddress}, Query: ${queryParams}\n`;

  fs.appendFile(analyticsLogPath, logMessage, (err) => {
    if (err) {
      console.error('Error writing to analytics log:', err);
    }
  });

  next();
};

module.exports = analyticsMiddleware;
