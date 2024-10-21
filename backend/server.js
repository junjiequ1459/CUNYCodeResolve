const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

// Simple API endpoint for testing
app.get('/api/hello', (req, res) => {
  res.send({ message: 'Hello from Express!' });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
