const app = require('../index'); // Import the Express app
const serverless = require('serverless-http'); // Convert Express to serverless

module.exports = serverless(app);
